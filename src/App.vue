<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'
import { view, route, href, go } from './router'
import { hasSpoken } from './gate'
import { TABS } from './data/nav'
import byteble from './data/byteble.json'
import TheSigil from './components/TheSigil.vue'
import SanctumView from './views/SanctumView.vue'
import BeliefsView from './views/BeliefsView.vue'
import ClergyView from './views/ClergyView.vue'
import SaintsView from './views/SaintsView.vue'
import BytebleView from './views/BytebleView.vue'
import LodgeView from './views/LodgeView.vue'
import NotFoundView from './views/NotFoundView.vue'

const VIEWS = {
  sanctum: SanctumView,
  beliefs: BeliefsView,
  clergy: ClergyView,
  saints: SaintsView,
  byteble: BytebleView,
  // Unlisted: absent from TABS on purpose, reached only by the word.
  lodge: LodgeView,
  notfound: NotFoundView,
}

type ViewId = keyof typeof VIEWS

// The order is barred to anyone who has not spoken the word in this tab —
// a pasted link, a shared URL, or a fresh tab resolves to the sanctum instead.
const barred = computed(() => view.value === 'lodge' && !hasSpoken.value)

// A scripture address is only real if the book and the chapter both exist.
// `#/byteble` alone is fine — it opens at the beginning.
const bytebleAddressIsReal = () => {
  const [, slug, chapter] = route.value
  if (!slug) return true

  const book = byteble.books.find((b) => b.slug === slug)
  if (!book) return false
  if (chapter === undefined) return true

  return book.chapters.some((c) => String(c.number) === chapter)
}

const current = computed<ViewId>(() => {
  if (barred.value) return 'sanctum'
  if (!(view.value in VIEWS)) return 'notfound'
  if (view.value === 'byteble' && !bytebleAddressIsReal()) return 'notfound'
  return view.value as ViewId
})

// Take the address out of the bar too, so the route leaves no trace to retry.
watch(
  barred,
  (isBarred) => {
    if (isBarred) go('sanctum')
  },
  { immediate: true },
)

/* ---- the narrow-screen drawer ------------------------------------------ */
const menuOpen = ref(false)

// Any navigation closes it, including a back-button hash change.
watch(view, () => (menuOpen.value = false))

// Hold the page still behind the drawer, and give it back on close.
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') menuOpen.value = false
}
window.addEventListener('keydown', onKey)
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <a class="skip" href="#nave">Skip to the nave</a>

  <header class="head">
    <div class="head__inner shell">
      <a class="mark" :href="href('sanctum')" aria-label="The Church of the First Byte — sanctum">
        <TheSigil class="mark__sigil" :size="40" />
        <span class="mark__words">
          <span class="mark__line">The Church of</span>
          <span class="mark__line mark__line--em">The First Byte</span>
        </span>
      </a>

      <nav class="tabs" aria-label="Primary">
        <a
          v-for="tab in TABS"
          :key="tab.id"
          class="tab"
          :class="{ 'tab--on': current === tab.id }"
          :href="href(tab.id)"
          :aria-current="current === tab.id ? 'page' : undefined"
        >
          <span class="tab__glyph" aria-hidden="true">{{ tab.glyph }}</span>
          <span class="tab__label">{{ tab.label }}</span>
        </a>
      </nav>

      <button
        class="burger"
        :class="{ 'burger--on': menuOpen }"
        :aria-expanded="menuOpen"
        aria-controls="drawer-nav"
        :aria-label="menuOpen ? 'Close the menu' : 'Open the menu'"
        @click="menuOpen = !menuOpen"
      >
        <span class="burger__bars" aria-hidden="true"><i /><i /><i /></span>
        <span class="burger__word">{{ menuOpen ? 'Close' : 'Menu' }}</span>
      </button>
    </div>

    <Transition name="drawer">
      <nav v-if="menuOpen" id="drawer-nav" class="drawer" aria-label="Primary">
        <a
          v-for="tab in TABS"
          :key="tab.id"
          class="drawer__link"
          :class="{ 'drawer__link--on': current === tab.id }"
          :href="href(tab.id)"
          :aria-current="current === tab.id ? 'page' : undefined"
          @click="menuOpen = false"
        >
          <span class="drawer__glyph" aria-hidden="true">{{ tab.glyph }}</span>
          <span class="drawer__body">
            <span class="drawer__label">{{ tab.label }}</span>
            <span class="drawer__note">{{ tab.note }}</span>
          </span>
        </a>
        <p class="drawer__motto">Primitive is holy · Dependency is corruption</p>
      </nav>
    </Transition>
  </header>

  <Transition name="fade">
    <div v-if="menuOpen" class="scrim" @click="menuOpen = false" />
  </Transition>

  <main id="nave">
    <component :is="VIEWS[current]" />
  </main>

  <footer class="foot">
    <div class="shell">
      <div class="rule"><span aria-hidden="true">ᛝ</span></div>
      <p class="foot__motto">Primitive is holy · Dependency is corruption</p>
      <p class="foot__bits" aria-hidden="true">01100010 01111001 01110100 01100101</p>
      <p class="foot__small">
        The Byteble is transcribed at build time from the plain text of
        <code>The-Byteble</code>, and is held read-only, as the tablets were. No
        dependency was invoked unread in the raising of this sanctuary.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.skip {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 50;
  background: var(--ash);
  color: var(--bone);
  padding: 0.7rem 1.1rem;
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.skip:focus {
  left: 0.6rem;
  top: 0.6rem;
}

/* head ------------------------------------------------------------------- */
.head {
  position: sticky;
  top: 0;
  z-index: 30;
  background: linear-gradient(180deg, rgba(4, 3, 2, 0.96), rgba(8, 7, 6, 0.86));
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--rule-faint);
}

.head__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4rem;
  min-height: 4.6rem;
  padding-block: 0.5rem;
}

.mark {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
  flex-shrink: 0;
}

.mark__sigil {
  flex-shrink: 0;
  filter: drop-shadow(0 0 10px rgba(169, 141, 87, 0.28));
}

.mark__words {
  display: flex;
  flex-direction: column;
  line-height: 1.16;
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--brass-dim);
}

.mark__line--em {
  color: var(--bone);
  letter-spacing: 0.26em;
}

/* tabs ------------------------------------------------------------------- */
.tabs {
  display: flex;
  align-items: stretch;
  gap: 0.15rem;
}

.tab {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.75rem 0.8rem;
  white-space: nowrap;
  text-decoration: none;
  color: var(--bone-faint);
  font-family: var(--mono);
  font-size: 0.66rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border: 1px solid transparent;
  transition:
    color 0.18s ease,
    border-color 0.18s ease,
    background 0.18s ease;
}

.tab__glyph {
  font-size: 0.9rem;
  color: var(--brass-deep);
  transition: color 0.18s ease;
}

.tab:hover {
  color: var(--bone-dim);
  border-color: var(--rule-faint);
}

.tab:hover .tab__glyph {
  color: var(--brass-dim);
}

.tab--on {
  color: var(--bone);
  border-color: var(--rule);
  background: linear-gradient(180deg, rgba(140, 31, 26, 0.16), rgba(34, 29, 23, 0.5));
}

.tab--on .tab__glyph {
  color: var(--ember);
}

.tab--on::after {
  content: '';
  position: absolute;
  left: 0.8rem;
  right: 0.8rem;
  bottom: -1px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--brass), transparent);
}

/* burger — hidden until the tabs no longer fit ---------------------------- */
.burger {
  display: none;
  align-items: center;
  gap: 0.65rem;
  padding: 0.6rem 0.9rem;
  background: rgba(8, 7, 6, 0.5);
  border: 1px solid var(--rule-faint);
  color: var(--bone-dim);
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    color 0.18s ease,
    border-color 0.18s ease,
    background 0.18s ease;
}

.burger--on {
  color: var(--bone);
  border-color: var(--rule);
  background: linear-gradient(180deg, rgba(140, 31, 26, 0.24), rgba(34, 29, 23, 0.5));
}

.burger__bars {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 16px;
  height: 12px;
}

.burger__bars i {
  display: block;
  height: 1.5px;
  background: var(--brass);
  transition:
    transform 0.24s ease,
    opacity 0.18s ease;
  transform-origin: center;
}

.burger--on .burger__bars i {
  background: var(--ember);
}

.burger--on .burger__bars i:nth-child(1) {
  transform: translateY(5.25px) rotate(45deg);
}

.burger--on .burger__bars i:nth-child(2) {
  opacity: 0;
}

.burger--on .burger__bars i:nth-child(3) {
  transform: translateY(-5.25px) rotate(-45deg);
}

/* drawer ----------------------------------------------------------------- */
.drawer {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 2;
  max-height: calc(100dvh - 100%);
  overflow-y: auto;
  padding: 0.6rem 1.2rem 1.6rem;
  background: linear-gradient(180deg, rgba(14, 12, 10, 0.99), rgba(4, 3, 2, 0.99));
  border-bottom: 1px solid var(--rule);
  box-shadow: 0 22px 44px rgba(0, 0, 0, 0.72);
}

.drawer__link {
  display: grid;
  grid-template-columns: 2.6rem 1fr;
  align-items: center;
  gap: 1rem;
  padding: 1.05rem 0.8rem;
  border-bottom: 1px solid var(--rule-faint);
  text-decoration: none;
  transition: background 0.18s ease;
}

.drawer__link:active {
  background: rgba(169, 141, 87, 0.07);
}

.drawer__link--on {
  background: linear-gradient(90deg, rgba(140, 31, 26, 0.22), transparent);
  box-shadow: inset 2px 0 0 var(--ember);
}

.drawer__glyph {
  font-size: 1.5rem;
  color: var(--brass-dim);
  text-align: center;
}

.drawer__link--on .drawer__glyph {
  color: var(--ember);
}

.drawer__body {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
}

.drawer__label {
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--bone-dim);
}

.drawer__link--on .drawer__label {
  color: var(--bone);
}

.drawer__note {
  font-size: 0.85rem;
  color: var(--bone-faint);
  line-height: 1.5;
}

.drawer__motto {
  margin: 1.6rem 0 0;
  text-align: center;
  font-family: var(--mono);
  font-size: 0.56rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--brass-deep);
}

.scrim {
  position: fixed;
  inset: 0;
  z-index: 25;
  background: rgba(4, 3, 2, 0.72);
  backdrop-filter: blur(2px);
}

.drawer-enter-active,
.drawer-leave-active {
  transition:
    transform 0.24s ease,
    opacity 0.24s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateY(-0.8rem);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.24s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* foot ------------------------------------------------------------------- */
.foot {
  padding: 0 0 4rem;
  text-align: center;
}

.foot__motto {
  font-family: var(--mono);
  font-size: 0.66rem;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--bone-faint);
  margin-bottom: 0.9rem;
}

.foot__bits {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.3em;
  color: var(--brass-deep);
  margin-bottom: 1.6rem;
}

.foot__small {
  max-width: 34rem;
  margin: 0 auto;
  font-size: 0.82rem;
  color: var(--bone-faint);
  line-height: 1.75;
}

/* Five tabs plus the wordmark stop fitting a little under 1000px; below that
   the bar stays one slim row and the destinations move into the drawer. */
@media (max-width: 1000px) {
  .tabs {
    display: none;
  }

  .burger {
    display: flex;
  }

  .head__inner {
    min-height: 3.9rem;
  }
}

@media (max-width: 420px) {
  .burger__word {
    display: none;
  }

  .burger {
    padding: 0.6rem 0.75rem;
  }

  .mark__words {
    font-size: 0.55rem;
    letter-spacing: 0.24em;
  }
}
</style>

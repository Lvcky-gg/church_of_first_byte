<script setup lang="ts">
import { computed } from 'vue'
import { view, href } from './router'
import seal from './assets/church.png'
import SanctumView from './views/SanctumView.vue'
import BeliefsView from './views/BeliefsView.vue'
import SaintsView from './views/SaintsView.vue'
import BytebleView from './views/BytebleView.vue'

const TABS = [
  { id: 'sanctum', label: 'Sanctum', glyph: 'ᛞ' },
  { id: 'beliefs', label: 'Core Beliefs', glyph: 'ᚦ' },
  { id: 'saints', label: 'Saints', glyph: 'ᛗ' },
  { id: 'byteble', label: 'The Byteble', glyph: 'ᛒ' },
] as const

const VIEWS = {
  sanctum: SanctumView,
  beliefs: BeliefsView,
  saints: SaintsView,
  byteble: BytebleView,
}

type ViewId = keyof typeof VIEWS

const current = computed<ViewId>(() =>
  view.value in VIEWS ? (view.value as ViewId) : 'sanctum',
)
</script>

<template>
  <a class="skip" href="#nave">Skip to the nave</a>

  <header class="head">
    <div class="head__inner shell">
      <a class="mark" :href="href('sanctum')" aria-label="The Church of the First Byte — sanctum">
        <img class="mark__seal" :src="seal" alt="" width="52" height="52" />
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
    </div>
  </header>

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
  z-index: 20;
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

.mark__seal {
  width: 52px;
  height: 52px;
  object-fit: contain;
  filter: drop-shadow(0 0 12px rgba(169, 141, 87, 0.22));
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
  gap: 0.25rem;
  overflow-x: auto;
  scrollbar-width: none;
  margin-right: -1.6rem;
  padding-right: 1.6rem;
}

.tabs::-webkit-scrollbar {
  display: none;
}

.tab {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0.95rem;
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
  left: 0.95rem;
  right: 0.95rem;
  bottom: -1px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--brass), transparent);
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

@media (max-width: 860px) {
  .head__inner {
    flex-direction: column;
    align-items: stretch;
    gap: 0.2rem;
    padding-block: 0.7rem;
  }

  .tabs {
    margin-inline: -1.6rem;
    padding-inline: 1.6rem;
  }

  .mark__seal {
    width: 42px;
    height: 42px;
  }
}
</style>

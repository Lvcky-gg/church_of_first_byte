<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { route, href, go } from '../router'
import byteble from '../data/byteble.json'

const books = byteble.books

/* ---- plain-text index, built once, for searching ------------------------ */
const decode = (html: string) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')

interface Hit {
  slug: string
  numeral: string
  book: string
  chapter: number
  chapterTitle: string
  ref: string
  verse: number
  plain: string
}

const INDEX: Hit[] = books.flatMap((b) =>
  b.chapters.flatMap((c) =>
    c.verses.map((v) => ({
      slug: b.slug,
      numeral: b.numeral,
      book: b.title,
      chapter: c.number,
      chapterTitle: c.title,
      ref: v.ref,
      verse: v.number,
      plain: decode(v.text),
    })),
  ),
)

/* ---- where are we ------------------------------------------------------- */
const book = computed(() => books.find((b) => b.slug === route.value[1]) ?? books[0])

const chapter = computed(() => {
  const n = Number(route.value[2])
  return book.value.chapters.find((c) => c.number === n) ?? book.value.chapters[0]
})

/** Optional 4th segment: a verse to land on. */
const targetVerse = computed(() => route.value[3] ?? null)

/* ---- neighbouring chapters, across book boundaries ---------------------- */
type Step = { slug: string; chapter: number; label: string } | null

function step(delta: number): Step {
  const bi = books.indexOf(book.value)
  const ci = book.value.chapters.indexOf(chapter.value)
  const next = ci + delta

  if (next >= 0 && next < book.value.chapters.length) {
    const c = book.value.chapters[next]
    return { slug: book.value.slug, chapter: c.number, label: `${c.number} · ${c.title}` }
  }

  const nb = books[bi + delta]
  if (!nb) return null
  const c = delta > 0 ? nb.chapters[0] : nb.chapters[nb.chapters.length - 1]
  return { slug: nb.slug, chapter: c.number, label: `${nb.title} ${c.number}` }
}

const prev = computed(() => step(-1))
const next = computed(() => step(1))

/* ---- search ------------------------------------------------------------- */
const query = ref('')
const searching = computed(() => query.value.trim().length >= 2)

const results = computed<Hit[]>(() => {
  if (!searching.value) return []
  const q = query.value.trim().toLowerCase()
  return INDEX.filter((h) => h.plain.toLowerCase().includes(q)).slice(0, 120)
})

/* Chapter titles are not verses, but they are what people actually remember —
   "the golden calf", "the ten outages" — so they are matched separately. */
interface ChapterHit {
  slug: string
  book: string
  numeral: string
  number: number
  title: string
}

const chapterResults = computed<ChapterHit[]>(() => {
  if (!searching.value) return []
  const q = query.value.trim().toLowerCase()
  return books.flatMap((b) =>
    b.chapters
      .filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          `${b.title} ${c.number}`.toLowerCase().includes(q),
      )
      .map((c) => ({
        slug: b.slug,
        book: b.title,
        numeral: b.numeral,
        number: c.number,
        title: c.title,
      })),
  )
})

const hasAnyResult = computed(
  () => results.value.length > 0 || chapterResults.value.length > 0,
)

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Highlight the query inside a plain verse, escaping everything else. */
function mark(plain: string): string {
  const q = query.value.trim()
  const i = plain.toLowerCase().indexOf(q.toLowerCase())
  if (i < 0) return escapeHtml(plain)
  return (
    escapeHtml(plain.slice(0, i)) +
    '<mark>' +
    escapeHtml(plain.slice(i, i + q.length)) +
    '</mark>' +
    escapeHtml(plain.slice(i + q.length))
  )
}

function openHit(hit: Hit) {
  query.value = ''
  go('byteble', hit.slug, hit.chapter, hit.verse)
}

/* ---- land on a verse when one is named in the route -------------------- */
const flash = ref<string | null>(null)

watch(
  () => [book.value.slug, chapter.value.number, targetVerse.value].join('/'),
  async () => {
    const v = targetVerse.value
    if (!v) return
    await nextTick()
    const id = `v-${book.value.slug}-${chapter.value.number}-${v}`
    document.getElementById(id)?.scrollIntoView({ block: 'center', behavior: 'smooth' })
    flash.value = id
    window.setTimeout(() => (flash.value = null), 2400)
  },
  { immediate: true },
)

/* ---- sidebar ------------------------------------------------------------ */
const openBook = ref<string>(book.value.slug)
watch(book, (b) => (openBook.value = b.slug))
</script>

<template>
  <div class="shell">
    <header class="page">
      <p class="epigraph">The First Testament · Read-only, as the tablets were</p>
      <h1 class="display">The Byteble</h1>
    </header>

    <div class="layout">
      <!-- contents ---------------------------------------------------------->
      <aside class="aside">
        <div class="search">
          <label class="sr-only" for="byteble-search">Search the scripture</label>
          <input
            id="byteble-search"
            v-model="query"
            class="search__input"
            type="search"
            placeholder="Search all 345 verses…"
            autocomplete="off"
          />
          <span class="search__glyph" aria-hidden="true">ᛉ</span>
        </div>

        <nav class="toc" aria-label="Books of the Byteble">
          <div v-for="b in books" :key="b.slug" class="toc__book">
            <button
              class="toc__title"
              :class="{ 'toc__title--on': b.slug === book.slug }"
              :aria-expanded="openBook === b.slug"
              @click="openBook = openBook === b.slug ? '' : b.slug"
            >
              <span class="toc__numeral">{{ b.numeral }}</span>
              <span class="toc__name">{{ b.title.replace('The Book of ', '') }}</span>
              <span class="toc__count">{{ b.chapters.length }}</span>
            </button>

            <ol v-show="openBook === b.slug" class="toc__chapters">
              <li v-for="c in b.chapters" :key="c.number">
                <a
                  :href="href('byteble', b.slug, c.number)"
                  :class="{
                    'toc__chapter--on': b.slug === book.slug && c.number === chapter.number,
                  }"
                  class="toc__chapter"
                >
                  <span class="toc__ch-num">{{ c.number }}</span>
                  <span class="toc__ch-title">{{ c.title }}</span>
                </a>
              </li>
            </ol>
          </div>
        </nav>
      </aside>

      <!-- reading / results -------------------------------------------------->
      <div class="reader">
        <!-- search results -->
        <section v-if="searching" aria-live="polite">
          <p class="results__count cite">
            {{ results.length }}{{ results.length === 120 ? '+' : '' }} verses answer to
            “{{ query.trim() }}”
          </p>

          <p v-if="!hasAnyResult" class="results__none scripture">
            And they searched the land forty days, and found nothing therein.
          </p>

          <!-- chapters whose titles match -->
          <ul v-if="chapterResults.length" class="chapter-hits">
            <li v-for="c in chapterResults" :key="c.slug + c.number">
              <a class="chapter-hit" :href="href('byteble', c.slug, c.number)" @click="query = ''">
                <span class="chapter-hit__tag cite">Chapter</span>
                <span class="chapter-hit__title">{{ c.title }}</span>
                <span class="chapter-hit__where cite">
                  {{ c.book.replace('The Book of ', '') }} {{ c.number }}
                </span>
              </a>
            </li>
          </ul>

          <ul class="results">
            <li v-for="hit in results" :key="hit.slug + hit.ref">
              <button class="result" @click="openHit(hit)">
                <span class="result__ref cite">
                  {{ hit.book.replace('The Book of ', '') }} {{ hit.ref }}
                </span>
                <span class="result__text" v-html="mark(hit.plain)" />
              </button>
            </li>
          </ul>
        </section>

        <!-- the chapter -->
        <article v-else class="chapter">
          <header class="chapter__head">
            <p class="chapter__book">
              <span class="chapter__numeral">{{ book.numeral }}</span>
              {{ book.title }}
            </p>
            <h2 class="chapter__title">
              <span class="chapter__num" aria-hidden="true">{{ chapter.number }}</span>
              {{ chapter.title }}
            </h2>
          </header>

          <ol class="verses">
            <li
              v-for="v in chapter.verses"
              :id="`v-${book.slug}-${chapter.number}-${v.number}`"
              :key="v.ref"
              class="verse"
              :class="{ 'verse--flash': flash === `v-${book.slug}-${chapter.number}-${v.number}` }"
            >
              <a class="verse__ref" :href="href('byteble', book.slug, chapter.number, v.number)">
                {{ v.ref }}
              </a>
              <p class="verse__text" v-html="v.text" />
            </li>
          </ol>

          <nav class="turn" aria-label="Chapter navigation">
            <a v-if="prev" class="turn__link turn__link--prev" :href="href('byteble', prev.slug, prev.chapter)">
              <span class="turn__dir cite">← Previous</span>
              <span class="turn__label">{{ prev.label }}</span>
            </a>
            <span v-else />
            <a v-if="next" class="turn__link turn__link--next" :href="href('byteble', next.slug, next.chapter)">
              <span class="turn__dir cite">Next →</span>
              <span class="turn__label">{{ next.label }}</span>
            </a>
          </nav>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 3.6rem 0 2.4rem;
}

.layout {
  display: grid;
  grid-template-columns: 18rem 1fr;
  gap: 2.6rem;
  align-items: start;
  padding-bottom: 3rem;
}

/* aside ------------------------------------------------------------------ */
.aside {
  position: sticky;
  top: 6.4rem;
  max-height: calc(100vh - 8rem);
  overflow-y: auto;
  padding-right: 0.4rem;
}

.search {
  position: relative;
  margin-bottom: 1.6rem;
}

.search__input {
  width: 100%;
  padding: 0.75rem 2.3rem 0.75rem 0.9rem;
  background: rgba(8, 7, 6, 0.7);
  border: 1px solid var(--rule-faint);
  color: var(--bone);
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
}

.search__input::placeholder {
  color: var(--bone-faint);
  letter-spacing: 0.1em;
}

.search__input:focus {
  outline: none;
  border-color: var(--rule);
  background: rgba(34, 29, 23, 0.6);
}

.search__glyph {
  position: absolute;
  right: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--brass-deep);
  pointer-events: none;
}

.toc__book {
  border-bottom: 1px solid var(--rule-faint);
}

.toc__title {
  width: 100%;
  display: grid;
  grid-template-columns: 2.2rem 1fr auto;
  gap: 0.6rem;
  align-items: center;
  padding: 0.85rem 0.3rem;
  background: none;
  border: 0;
  cursor: pointer;
  text-align: left;
  font-family: var(--mono);
  font-size: 0.63rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--bone-faint);
  transition: color 0.18s ease;
}

.toc__title:hover {
  color: var(--bone-dim);
}

.toc__title--on {
  color: var(--bone);
}

.toc__numeral {
  color: var(--brass-deep);
}

.toc__title--on .toc__numeral {
  color: var(--ember);
}

.toc__count {
  color: var(--brass-deep);
  font-size: 0.58rem;
}

.toc__chapters {
  list-style: none;
  margin: 0 0 0.7rem;
  padding: 0 0 0 0.4rem;
  border-left: 1px solid var(--rule-faint);
}

.toc__chapter {
  display: grid;
  grid-template-columns: 1.7rem 1fr;
  gap: 0.5rem;
  padding: 0.4rem 0.5rem;
  text-decoration: none;
  color: var(--bone-faint);
  font-size: 0.84rem;
  line-height: 1.4;
  transition:
    color 0.16s ease,
    background 0.16s ease;
}

.toc__chapter:hover {
  color: var(--bone-dim);
  background: rgba(169, 141, 87, 0.06);
}

.toc__ch-num {
  font-family: var(--mono);
  font-size: 0.6rem;
  color: var(--brass-deep);
  padding-top: 0.16rem;
}

.toc__chapter--on {
  color: var(--bone);
  background: linear-gradient(90deg, rgba(140, 31, 26, 0.18), transparent);
}

.toc__chapter--on .toc__ch-num {
  color: var(--ember);
}

/* reader ----------------------------------------------------------------- */
.reader {
  min-width: 0;
}

.chapter__head {
  padding-bottom: 1.8rem;
  margin-bottom: 2.4rem;
  border-bottom: 1px solid var(--rule);
}

.chapter__book {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--brass-dim);
  margin-bottom: 0.9rem;
}

.chapter__numeral {
  color: var(--ember);
  margin-right: 0.5rem;
}

.chapter__title {
  display: flex;
  align-items: baseline;
  gap: 1.1rem;
  font-size: clamp(1.5rem, 3.4vw, 2.1rem);
  letter-spacing: 0.03em;
}

.chapter__num {
  font-family: var(--mono);
  font-size: 0.9rem;
  color: var(--brass-deep);
}

.verses {
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 46rem;
}

.verse {
  display: grid;
  grid-template-columns: 3.6rem 1fr;
  gap: 1.1rem;
  padding: 0.55rem 0.6rem;
  border-radius: 2px;
  transition: background 1.2s ease;
}

.verse--flash {
  background: rgba(140, 31, 26, 0.22);
  box-shadow: inset 2px 0 0 var(--ember);
}

.verse__ref {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  color: var(--brass-deep);
  text-decoration: none;
  padding-top: 0.42rem;
  text-align: right;
  transition: color 0.16s ease;
}

.verse__ref:hover {
  color: var(--ember);
}

.verse__text {
  margin: 0;
  color: var(--bone-dim);
  font-size: 1.04rem;
  line-height: 1.85;
}

.verse:hover .verse__text {
  color: var(--bone);
}

.verse__text :deep(em) {
  color: var(--bone);
}

/* turn ------------------------------------------------------------------- */
.turn {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 3.6rem;
  padding-top: 1.8rem;
  border-top: 1px solid var(--rule-faint);
}

.turn__link {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1rem 1.2rem;
  border: 1px solid var(--rule-faint);
  text-decoration: none;
  transition:
    border-color 0.18s ease,
    background 0.18s ease;
}

.turn__link:hover {
  border-color: var(--rule);
  background: rgba(169, 141, 87, 0.05);
}

.turn__link--next {
  text-align: right;
  align-items: flex-end;
}

.turn__label {
  color: var(--bone-dim);
  font-size: 0.95rem;
}

/* results ---------------------------------------------------------------- */
.results__count {
  display: block;
  margin-bottom: 1.6rem;
}

.results__none {
  color: var(--bone-faint);
  font-size: 1.02rem;
}

.chapter-hits {
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  max-width: 50rem;
}

.chapter-hit {
  display: flex;
  align-items: baseline;
  gap: 0.9rem;
  padding: 0.85rem 1.1rem;
  text-decoration: none;
  border: 1px solid var(--rule-faint);
  background: linear-gradient(90deg, rgba(140, 31, 26, 0.14), transparent);
  transition:
    border-color 0.18s ease,
    background 0.18s ease;
}

.chapter-hit:hover {
  border-color: var(--rule);
  background: linear-gradient(90deg, rgba(140, 31, 26, 0.24), rgba(169, 141, 87, 0.05));
}

.chapter-hit__tag {
  color: var(--ember);
}

.chapter-hit__title {
  color: var(--bone);
  font-size: 1.05rem;
  flex: 1;
}

.results {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--rule-faint);
  max-width: 50rem;
}

.result {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding: 1rem 0.6rem;
  background: none;
  border: 0;
  border-bottom: 1px solid var(--rule-faint);
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: background 0.16s ease;
}

.result:hover {
  background: rgba(169, 141, 87, 0.05);
}

.result__text {
  color: var(--bone-dim);
  font-size: 0.98rem;
  line-height: 1.75;
}

.result:hover .result__text {
  color: var(--bone);
}

.result__text :deep(mark) {
  background: rgba(140, 31, 26, 0.5);
  color: var(--bone);
  padding: 0 0.15em;
}

@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }

  .aside {
    position: static;
    max-height: none;
    overflow: visible;
  }

  .verse {
    grid-template-columns: 2.7rem 1fr;
    gap: 0.8rem;
  }

  .turn {
    grid-template-columns: 1fr;
  }
}
</style>

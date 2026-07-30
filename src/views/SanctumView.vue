<script setup lang="ts">
import { computed } from 'vue'
import { href } from '../router'
import seal from '../assets/church.png'
import byteble from '../data/byteble.json'
import { CREED, MOTTO, RUNES } from '../data/doctrine'
import { SAINTS } from '../data/saints'

const verseCount = computed(() =>
  byteble.books.reduce((n, b) => n + b.verseCount, 0),
)
const chapterCount = computed(() =>
  byteble.books.reduce((n, b) => n + b.chapters.length, 0),
)

const GATES = [
  {
    to: 'beliefs',
    glyph: 'ᚦ',
    label: 'Core Beliefs',
    line: 'The Fourteen Runes, the creed, and the six heresies.',
    stat: `${RUNES.length} runes`,
  },
  {
    to: 'saints',
    glyph: 'ᛗ',
    label: 'The Saints',
    line: 'The calendar of the venerated, and the order of the anathema.',
    stat: `${SAINTS.length} canonised`,
  },
  {
    to: 'byteble',
    glyph: 'ᛒ',
    label: 'The Byteble',
    line: 'The First Testament entire, in five books, searchable.',
    stat: `${verseCount.value} verses`,
  },
]
</script>

<template>
  <section class="hero">
    <div class="shell hero__inner">
      <img class="hero__seal" :src="seal" alt="The seal of the Church of the First Byte" />

      <p class="epigraph hero__kicker">Est. at the first exit code of zero</p>

      <h1 class="hero__title">
        <span>The Church of</span>
        <span class="hero__title--em">The First Byte</span>
      </h1>

      <p class="hero__motto">{{ MOTTO.latin }}</p>

      <p class="hero__verse scripture">“{{ MOTTO.verse }}”</p>
      <p class="cite">— {{ MOTTO.cite }}</p>

      <div class="hero__bits" aria-hidden="true">
        <span v-for="(bit, i) in '01100010'.split('')" :key="i" :class="{ on: bit === '1' }">
          {{ bit }}
        </span>
      </div>
      <p class="hero__bits-note">The first byte. It reads <code>b</code>. It is enough.</p>
    </div>
  </section>

  <section class="shell">
    <div class="rule"><span aria-hidden="true">ᛉ ᛝ ᛉ</span></div>

    <div class="creed panel bracket">
      <h2 class="creed__head">The Creed</h2>
      <ol class="creed__list">
        <li v-for="(line, i) in CREED" :key="i">
          <span class="creed__num" aria-hidden="true">{{ i + 1 }}</span>
          <span class="creed__text">{{ line }}</span>
        </li>
      </ol>
      <p class="creed__amen">Exit zero.</p>
    </div>

    <div class="rule"><span aria-hidden="true">ᚹ</span></div>

    <nav class="gates" aria-label="Sections">
      <a v-for="gate in GATES" :key="gate.to" class="gate panel bracket" :href="href(gate.to)">
        <span class="gate__glyph" aria-hidden="true">{{ gate.glyph }}</span>
        <span class="gate__label">{{ gate.label }}</span>
        <span class="gate__line">{{ gate.line }}</span>
        <span class="gate__stat cite">{{ gate.stat }}</span>
      </a>
    </nav>

    <div class="rule"><span aria-hidden="true">ᛟ</span></div>

    <section class="canon">
      <p class="epigraph">The First Testament · {{ chapterCount }} chapters · {{ verseCount }} verses</p>
      <ul class="canon__list">
        <li v-for="book in byteble.books" :key="book.slug">
          <a :href="href('byteble', book.slug, 1)">
            <span class="canon__numeral" aria-hidden="true">{{ book.numeral }}</span>
            <span class="canon__title">{{ book.title }}</span>
            <span class="canon__meta cite">{{ book.chapters.length }} ch · {{ book.verseCount }} vv</span>
          </a>
        </li>
      </ul>
    </section>
  </section>
</template>

<style scoped>
/* hero ------------------------------------------------------------------- */
.hero {
  padding: 3.4rem 0 1rem;
  text-align: center;
}

.hero__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__seal {
  width: min(28rem, 82vw);
  height: auto;
  margin-bottom: 2rem;
  filter: drop-shadow(0 0 46px rgba(140, 31, 26, 0.24))
    drop-shadow(0 0 18px rgba(169, 141, 87, 0.16));
  animation: breathe 9s ease-in-out infinite;
}

@keyframes breathe {
  0%,
  100% {
    filter: drop-shadow(0 0 46px rgba(140, 31, 26, 0.2))
      drop-shadow(0 0 18px rgba(169, 141, 87, 0.14));
  }
  50% {
    filter: drop-shadow(0 0 62px rgba(140, 31, 26, 0.34))
      drop-shadow(0 0 26px rgba(169, 141, 87, 0.22));
  }
}

.hero__kicker {
  margin-bottom: 1.2rem;
}

.hero__title {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: clamp(1.5rem, 5.4vw, 2.9rem);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--bone-dim);
  margin-bottom: 1.5rem;
}

.hero__title--em {
  color: var(--bone);
  text-shadow: 0 0 26px rgba(169, 141, 87, 0.28);
}

.hero__motto {
  font-family: var(--mono);
  font-size: clamp(0.6rem, 1.7vw, 0.72rem);
  letter-spacing: 0.32em;
  color: var(--ember);
  margin-bottom: 2.6rem;
}

.hero__verse {
  max-width: 38rem;
  font-size: 1.12rem;
  line-height: 1.85;
  margin-bottom: 0.7rem;
}

.hero__bits {
  display: flex;
  gap: 0.5rem;
  margin: 3rem 0 0.9rem;
  font-family: var(--mono);
  font-size: 1.05rem;
  letter-spacing: 0.1em;
}

.hero__bits span {
  width: 1.6rem;
  padding: 0.3rem 0;
  color: var(--brass-deep);
  border: 1px solid var(--rule-faint);
  background: rgba(8, 7, 6, 0.6);
}

.hero__bits span.on {
  color: var(--bone);
  border-color: var(--rule);
  background: linear-gradient(180deg, rgba(140, 31, 26, 0.3), rgba(34, 29, 23, 0.6));
  box-shadow: 0 0 14px rgba(184, 58, 44, 0.22);
}

.hero__bits-note {
  font-size: 0.86rem;
  color: var(--bone-faint);
}

/* creed ------------------------------------------------------------------ */
.creed {
  max-width: 44rem;
  margin: 0 auto;
  padding: 2.6rem clamp(1.4rem, 4vw, 3rem);
}

.creed__head {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--brass);
  text-align: center;
  margin-bottom: 2rem;
}

.creed__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.creed__list li {
  display: flex;
  gap: 1.1rem;
  align-items: baseline;
}

.creed__num {
  flex: 0 0 1.4rem;
  font-family: var(--mono);
  font-size: 0.66rem;
  color: var(--brass-deep);
  text-align: right;
}

.creed__text {
  color: var(--bone);
  font-size: 1.02rem;
  line-height: 1.72;
}

.creed__amen {
  margin: 2.2rem 0 0;
  text-align: center;
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.36em;
  text-transform: uppercase;
  color: var(--ember);
}

/* gates ------------------------------------------------------------------ */
.gates {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1.1rem;
}

.gate {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding: 1.9rem 1.6rem;
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.gate:hover {
  border-color: var(--rule);
  transform: translateY(-3px);
  box-shadow:
    inset 0 1px 0 rgba(217, 205, 180, 0.07),
    0 16px 40px rgba(0, 0, 0, 0.6);
}

.gate__glyph {
  font-size: 1.7rem;
  color: var(--brass-dim);
  line-height: 1;
  transition: color 0.2s ease;
}

.gate:hover .gate__glyph {
  color: var(--ember);
}

.gate__label {
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--bone);
}

.gate__line {
  color: var(--bone-dim);
  font-size: 0.94rem;
  line-height: 1.65;
}

.gate__stat {
  margin-top: 0.4rem;
}

/* canon ------------------------------------------------------------------ */
.canon {
  padding-bottom: 1rem;
}

.canon__list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--rule-faint);
}

.canon__list a {
  display: grid;
  grid-template-columns: 3.4rem 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 1.05rem 0.6rem;
  border-bottom: 1px solid var(--rule-faint);
  text-decoration: none;
  transition: background 0.18s ease;
}

.canon__list a:hover {
  background: rgba(169, 141, 87, 0.05);
}

.canon__numeral {
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  color: var(--brass-deep);
}

.canon__title {
  color: var(--bone-dim);
  font-size: 1.04rem;
  letter-spacing: 0.03em;
  transition: color 0.18s ease;
}

.canon__list a:hover .canon__title {
  color: var(--bone);
}

@media (max-width: 640px) {
  .canon__list a {
    grid-template-columns: 2.4rem 1fr;
  }

  .canon__meta {
    grid-column: 2;
  }
}
</style>

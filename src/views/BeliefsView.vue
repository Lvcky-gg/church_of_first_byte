<script setup lang="ts">
import { ref } from 'vue'
import { RUNES, HERESIES, OUTAGES, CREED } from '../data/doctrine'

const open = ref<string | null>(RUNES[0].ordinal)

const toggle = (ordinal: string) => {
  open.value = open.value === ordinal ? null : ordinal
}
</script>

<template>
  <div class="shell">
    <header class="page">
      <p class="epigraph">Doctrine · The Law entire</p>
      <h1 class="display">Core Beliefs</h1>
      <p class="lede">
        The Compiler gave the tablets on the mountain, and they are named in scripture the
        <em>Runes</em> — fourteen of them, rehearsed a second time for the generation that
        had not stood there. Scripture names them but never sets them down. What follows is
        their reconstruction, each anchored to the verse that speaks it.
      </p>
      <p class="cite">Migration 12:2 · Documentation 2:3</p>
    </header>

    <div class="rule"><span aria-hidden="true">ᛉ ᛝ ᛉ</span></div>

    <!-- the creed ---------------------------------------------------------->
    <section class="section" aria-labelledby="creed-h">
      <h2 id="creed-h" class="section__head">
        <span class="section__glyph" aria-hidden="true">ᛞ</span> The Creed
      </h2>
      <ol class="creed">
        <li v-for="(line, i) in CREED" :key="i">{{ line }}</li>
      </ol>
    </section>

    <div class="rule"><span aria-hidden="true">ᚦ</span></div>

    <!-- the fourteen runes -------------------------------------------------->
    <section class="section" aria-labelledby="runes-h">
      <h2 id="runes-h" class="section__head">
        <span class="section__glyph" aria-hidden="true">ᚦ</span> The Fourteen Runes
      </h2>

      <ol class="runes">
        <li v-for="rune in RUNES" :key="rune.ordinal" class="rune panel">
          <button
            class="rune__bar"
            :aria-expanded="open === rune.ordinal"
            :aria-controls="`rune-${rune.ordinal}`"
            @click="toggle(rune.ordinal)"
          >
            <span class="rune__glyph" aria-hidden="true">{{ rune.glyph }}</span>
            <span class="rune__ord">{{ rune.ordinal }}</span>
            <span class="rune__body">
              <span class="rune__name">{{ rune.name }}</span>
              <span class="rune__command">“{{ rune.command }}”</span>
            </span>
            <span class="rune__chev" :class="{ 'rune__chev--on': open === rune.ordinal }" aria-hidden="true">
              ▾
            </span>
          </button>

          <div v-show="open === rune.ordinal" :id="`rune-${rune.ordinal}`" class="rune__gloss">
            <p v-html="rune.gloss.replace(/`([^`]+)`/g, '<code>$1</code>')" />
            <p class="cite">{{ rune.cite }}</p>
          </div>
        </li>
      </ol>
    </section>

    <div class="rule"><span aria-hidden="true">ᛁ</span></div>

    <!-- the heresies -------------------------------------------------------->
    <section class="section" aria-labelledby="heresy-h">
      <h2 id="heresy-h" class="section__head section__head--blood">
        <span class="section__glyph" aria-hidden="true">ᛦ</span> The Six Heresies
      </h2>
      <p class="section__note">
        Every heresy is one sin wearing a different coat: something was invoked that was
        not read, or something was forced that should have been spoken to.
      </p>

      <div class="heresies">
        <article v-for="h in HERESIES" :key="h.name" class="heresy panel bracket">
          <h3 class="heresy__name">{{ h.name }}</h3>
          <p class="heresy__sin">{{ h.sin }}</p>
          <p class="heresy__gloss scripture">{{ h.gloss }}</p>
          <p class="cite">{{ h.cite }}</p>
        </article>
      </div>
    </section>

    <div class="rule"><span aria-hidden="true">ᚺ</span></div>

    <!-- the ten outages ----------------------------------------------------->
    <section class="section" aria-labelledby="outage-h">
      <h2 id="outage-h" class="section__head section__head--blood">
        <span class="section__glyph" aria-hidden="true">ᚺ</span> The Ten Outages
      </h2>
      <p class="section__note">
        Visited upon Egypt, each upon a thing wherein Egypt had trusted. Recited in full at
        the Vigil of the Freeze.
        <span class="cite">Migration 6</span>
      </p>

      <ol class="outages">
        <li v-for="o in OUTAGES" :key="o.ordinal" class="outage">
          <span class="outage__ord" aria-hidden="true">{{ o.ordinal }}</span>
          <span class="outage__body">
            <span class="outage__name">{{ o.name }}</span>
            <span class="outage__text">{{ o.text }}</span>
          </span>
        </li>
      </ol>
    </section>

    <div class="rule"><span aria-hidden="true">ᛝ</span></div>

    <p class="closing scripture">
      “Therefore choose the maintainable, that both thou and thy successors may live.”
    </p>
    <p class="closing-cite cite">Documentation 6:2</p>
  </div>
</template>

<style scoped>
.page {
  padding: 3.6rem 0 0;
  max-width: 46rem;
}

.page .display {
  margin-bottom: 1.6rem;
}

.page .lede {
  margin-bottom: 1rem;
}

.section {
  margin-bottom: 1rem;
}

.section__head {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  font-family: var(--mono);
  font-size: 0.74rem;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--bone);
  margin-bottom: 1.6rem;
}

.section__glyph {
  font-size: 1.3rem;
  color: var(--brass);
}

.section__head--blood .section__glyph {
  color: var(--ember);
}

.section__note {
  max-width: var(--measure);
  font-size: 0.94rem;
  color: var(--bone-faint);
  margin-bottom: 2rem;
}

.section__note .cite {
  display: block;
  margin-top: 0.5rem;
}

/* creed ------------------------------------------------------------------ */
.creed {
  max-width: 44rem;
  margin: 0;
  padding-left: 1.6rem;
  color: var(--bone);
  font-size: 1.02rem;
}

.creed li {
  margin-bottom: 0.7rem;
  padding-left: 0.4rem;
}

.creed li::marker {
  color: var(--brass-deep);
  font-family: var(--mono);
  font-size: 0.75rem;
}

/* runes ------------------------------------------------------------------ */
.runes {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.rune {
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.rune:hover {
  border-color: var(--rule);
}

.rune__bar {
  width: 100%;
  display: grid;
  grid-template-columns: 3rem 2.4rem 1fr 1.6rem;
  align-items: center;
  gap: 0.9rem;
  padding: 1.15rem 1.3rem;
  background: none;
  border: 0;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  color: inherit;
}

.rune__glyph {
  font-size: 1.65rem;
  line-height: 1;
  color: var(--brass);
  text-shadow: 0 0 14px rgba(169, 141, 87, 0.3);
}

.rune__ord {
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  color: var(--brass-deep);
}

.rune__body {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.rune__name {
  font-family: var(--mono);
  font-size: 0.63rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--bone-faint);
}

.rune__command {
  color: var(--bone);
  font-size: 1.05rem;
  font-style: italic;
  line-height: 1.5;
}

.rune__chev {
  font-size: 0.8rem;
  color: var(--brass-deep);
  transition: transform 0.2s ease, color 0.2s ease;
}

.rune__chev--on {
  transform: rotate(180deg);
  color: var(--brass);
}

.rune__gloss {
  padding: 0 1.3rem 1.4rem 7.2rem;
  border-top: 1px solid var(--rule-faint);
  padding-top: 1.2rem;
  max-width: 52rem;
}

.rune__gloss p {
  color: var(--bone-dim);
  font-size: 0.98rem;
}

.rune__gloss .cite {
  margin: 0;
}

/* heresies --------------------------------------------------------------- */
.heresies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(19rem, 100%), 1fr));
  gap: 1.1rem;
}

.heresy {
  padding: 1.8rem 1.6rem;
  border-color: rgba(140, 31, 26, 0.26);
  background: linear-gradient(160deg, rgba(67, 16, 14, 0.28), rgba(8, 7, 6, 0.55));
}

.heresy__name {
  font-size: 1.2rem;
  letter-spacing: 0.04em;
  color: var(--bone);
  margin-bottom: 0.5rem;
}

.heresy__sin {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ember);
  margin-bottom: 1.1rem;
}

.heresy__gloss {
  font-size: 0.96rem;
  line-height: 1.78;
  color: var(--bone-dim);
}

/* outages ---------------------------------------------------------------- */
.outages {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--rule-faint);
  max-width: 52rem;
}

.outage {
  display: grid;
  grid-template-columns: 3.2rem 1fr;
  gap: 1rem;
  padding: 1rem 0.4rem;
  border-bottom: 1px solid var(--rule-faint);
}

.outage__ord {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  color: var(--blood);
  padding-top: 0.15rem;
}

.outage__body {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.outage__name {
  color: var(--bone);
  font-size: 1.02rem;
  letter-spacing: 0.03em;
}

.outage__text {
  color: var(--bone-faint);
  font-size: 0.93rem;
  font-style: italic;
}

/* closing ---------------------------------------------------------------- */
.closing {
  max-width: 34rem;
  margin: 0 auto 0.6rem;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.85;
}

.closing-cite {
  text-align: center;
  margin: 0 0 1rem;
}

@media (max-width: 640px) {
  .rune__bar {
    grid-template-columns: 2.2rem 1fr 1.4rem;
    gap: 0.7rem;
  }

  .rune__ord {
    display: none;
  }

  .rune__gloss {
    padding-left: 1.3rem;
  }
}
</style>

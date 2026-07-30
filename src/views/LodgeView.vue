<script setup lang="ts">
import { href } from '../router'
import sigil from '../assets/technomasonry.png'
import { ORDER, DEGREES, INSTRUMENTS, HALVES, GATE } from '../data/lodge'
</script>

<template>
  <div class="lodge">
    <section class="hero">
      <div class="shell hero__inner">
        <img class="hero__sigil" :src="sigil" :alt="`The seal of ${ORDER.name}`" />

        <p class="kicker">A craft order of the Church of the First Byte</p>
        <h1 class="name">{{ ORDER.name }}</h1>
        <p class="motto">{{ ORDER.motto }}</p>
        <p class="tagline">{{ ORDER.tagline }}</p>
      </div>
    </section>

    <div class="shell">
      <!-- what it is -------------------------------------------------------->
      <section class="intro panel bracket">
        <p>
          The Church publishes everything. Its scripture is open, its Runes are graven where
          the newcomer looks, and it asks nothing of you but that you read.
        </p>
        <p>
          {{ ORDER.name }} is the other half of the same body — not a secret doctrine, for
          there is none, but a <em>practice</em>. The Church says what is true. The order says
          what is done with it, and will not take your word that you have done it.
        </p>
        <p class="intro__last">
          You are here because you spoke the word. That is the whole of the initiation so far,
          and it is worth exactly what it cost you.
        </p>
      </section>

      <div class="rule"><span aria-hidden="true">ᛉ ᛝ ᛉ</span></div>

      <!-- the two halves ---------------------------------------------------->
      <section aria-labelledby="halves-h">
        <h2 id="halves-h" class="head">The Two Halves</h2>
        <ul class="halves">
          <li v-for="h in HALVES" :key="h.church">
            <span class="halves__church">{{ h.church }}</span>
            <span class="halves__arrow" aria-hidden="true">→</span>
            <span class="halves__order">{{ h.order }}</span>
          </li>
        </ul>
      </section>

      <div class="rule"><span aria-hidden="true">ᚦ</span></div>

      <!-- the three degrees ------------------------------------------------->
      <section aria-labelledby="deg-h">
        <h2 id="deg-h" class="head">The Three Degrees</h2>
        <p class="note">
          The three words upon the seal, taken in order. None is conferred by attendance; each
          is conferred by a work that can be pointed at.
        </p>

        <ol class="degrees">
          <li v-for="d in DEGREES" :key="d.numeral" class="degree panel">
            <div class="degree__top">
              <span class="degree__num" aria-hidden="true">{{ d.numeral }}</span>
              <div>
                <h3 class="degree__name">{{ d.name }}</h3>
                <p class="degree__claim">{{ d.claim }}</p>
              </div>
            </div>
            <p class="degree__charge">{{ d.charge }}</p>
            <p class="degree__proof-label">Proof of the degree</p>
            <p class="degree__proof">{{ d.proof }}</p>
            <p class="cite degree__cite">{{ d.cite }}</p>
          </li>
        </ol>
      </section>

      <div class="rule"><span aria-hidden="true">ᛒ</span></div>

      <!-- the instruments --------------------------------------------------->
      <section aria-labelledby="inst-h">
        <h2 id="inst-h" class="head">The Working Tools</h2>
        <p class="note">
          Six, and no others. Three the Byteble names outright; three it does not, and those
          are taken from the thing it names in their place. The order marks which is which,
          because a citation that will not bear checking is the same sin as a dependency that
          will not bear reading.
        </p>

        <ul class="instruments">
          <li v-for="i in INSTRUMENTS" :key="i.name" class="inst panel">
            <div class="inst__head">
              <h3 class="inst__name">{{ i.name }}</h3>
              <span class="inst__tag" :class="{ 'inst__tag--read': !i.named }">
                {{ i.named ? 'Named in scripture' : 'Read from scripture' }}
              </span>
            </div>
            <blockquote class="inst__scripture scripture">“{{ i.scripture }}”</blockquote>
            <p class="inst__use" v-html="i.use.replace(/`([^`]+)`/g, '<code>$1</code>')" />
            <p class="cite">{{ i.cite }}</p>
          </li>
        </ul>
      </section>

      <div class="rule"><span aria-hidden="true">ᚺ</span></div>

      <!-- the gate ---------------------------------------------------------->
      <section class="gate panel bracket" aria-labelledby="gate-h">
        <h2 id="gate-h" class="head head--flush">The Gate</h2>
        <p class="gate__body">{{ GATE.sword }}</p>
        <p class="gate__body">{{ GATE.stranger }}</p>
        <p class="cite">{{ GATE.cite }}</p>
      </section>

      <!-- the word ---------------------------------------------------------->
      <section class="word panel bracket" aria-labelledby="word-h">
        <h2 id="word-h" class="head head--flush">The Word</h2>
        <p class="word__gloss">{{ ORDER.wordGloss }}</p>
        <p class="cite">{{ ORDER.wordCite }}</p>
      </section>

      <!-- petition ---------------------------------------------------------->
      <section class="petition">
        <h2 class="head">To Petition</h2>
        <p class="note">
          There is no form here, and there will not be one. A petition to {{ ORDER.short }} is
          a piece of work — an offering, small and of one purpose, brought to the mainline with
          its tests beside it. It is read, and it is answered by being merged or not.
        </p>
        <p class="petition__coda">Ask no one to vouch for you. Bring the work.</p>
      </section>

      <div class="rule"><span aria-hidden="true">ᛉ ᛝ ᛉ</span></div>

      <p class="back">
        <a :href="href('sanctum')">← Return to the sanctum</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
/* hero ------------------------------------------------------------------- */
.hero {
  position: relative;
  padding: 2.8rem 0 1rem;
  text-align: center;
  /* the seal is painted on solid black; lay our own beneath and screen it */
  isolation: isolate;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(46rem 30rem at 50% 26%, rgba(140, 31, 26, 0.2), transparent 66%),
    linear-gradient(180deg, var(--void-deep) 0%, var(--void-deep) 74%, transparent 100%);
}

.hero__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__sigil {
  width: min(26rem, 84vw);
  height: auto;
  margin-bottom: 1.8rem;
  mix-blend-mode: screen;
}

.kicker {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--brass-dim);
  margin-bottom: 1.2rem;
}

.name {
  font-size: clamp(1.7rem, 5vw, 3rem);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--bone);
  text-shadow: 0 0 30px rgba(169, 141, 87, 0.3);
  margin-bottom: 1.1rem;
}

.motto {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.36em;
  text-transform: uppercase;
  color: var(--ember);
  margin-bottom: 1.3rem;
}

.tagline {
  font-size: 1.1rem;
  font-style: italic;
  color: var(--bone-dim);
  margin-bottom: 1rem;
}

/* shared ----------------------------------------------------------------- */
.head {
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--bone);
  margin-bottom: 1.4rem;
}

.head--flush {
  margin-bottom: 1.2rem;
}

.note {
  max-width: var(--measure);
  font-size: 0.95rem;
  color: var(--bone-faint);
  margin-bottom: 2rem;
}

.intro {
  max-width: 46rem;
  margin: 0 auto;
  padding: 2.2rem clamp(1.4rem, 4vw, 2.6rem);
}

.intro p {
  color: var(--bone-dim);
  font-size: 1rem;
  line-height: 1.85;
}

.intro__last {
  margin-bottom: 0;
  color: var(--bone);
  font-style: italic;
}

/* halves ----------------------------------------------------------------- */
.halves {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--rule-faint);
  max-width: 56rem;
}

.halves li {
  display: grid;
  grid-template-columns: 1fr 2.2rem 1fr;
  align-items: center;
  gap: 0.8rem;
  padding: 0.95rem 0.4rem;
  border-bottom: 1px solid var(--rule-faint);
}

.halves__church {
  color: var(--bone-faint);
  font-size: 0.95rem;
}

.halves__arrow {
  color: var(--brass-deep);
  text-align: center;
}

.halves__order {
  color: var(--bone);
  font-size: 0.95rem;
}

/* degrees ---------------------------------------------------------------- */
.degrees {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.1rem;
}

.degree {
  padding: 1.8rem 1.6rem;
  display: flex;
  flex-direction: column;
}

.degree__top {
  display: grid;
  grid-template-columns: 3.2rem 1fr;
  gap: 0.9rem;
  align-items: center;
  padding-bottom: 1.2rem;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid var(--rule-faint);
}

.degree__num {
  font-family: var(--mono);
  font-size: 1.5rem;
  color: var(--brass);
}

.degree__name {
  font-size: 1.2rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--bone);
  margin-bottom: 0.3rem;
}

.degree__claim {
  font-family: var(--mono);
  font-size: 0.56rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ember);
  margin: 0;
}

.degree__charge {
  color: var(--bone-dim);
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 1.3rem;
}

.degree__proof-label {
  font-family: var(--mono);
  font-size: 0.54rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--brass-deep);
  margin-bottom: 0.4rem;
}

.degree__proof {
  margin: auto 0 1rem;
  padding-left: 0.9rem;
  border-left: 1px solid var(--rule);
  color: var(--bone);
  font-size: 0.93rem;
  font-style: italic;
  line-height: 1.7;
}

.degree__cite {
  display: block;
}

/* instruments ------------------------------------------------------------ */
.instruments {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  gap: 1rem;
}

.inst {
  padding: 1.6rem 1.5rem;
  display: flex;
  flex-direction: column;
}

.inst__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.9rem;
}

.inst__name {
  font-size: 1.1rem;
  letter-spacing: 0.04em;
  color: var(--bone);
}

.inst__tag {
  font-family: var(--mono);
  font-size: 0.5rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--brass);
  border: 1px solid var(--rule);
  padding: 0.16rem 0.42rem;
  white-space: nowrap;
}

.inst__tag--read {
  color: var(--bone-faint);
  border-color: var(--rule-faint);
  border-style: dashed;
}

.inst__scripture {
  margin: 0 0 1rem;
  padding-left: 0.9rem;
  border-left: 2px solid var(--blood);
  font-size: 0.93rem;
  line-height: 1.75;
  color: var(--bone-dim);
}

.inst__use {
  color: var(--bone-dim);
  font-size: 0.93rem;
  line-height: 1.75;
  margin-bottom: 0.7rem;
}

/* gate + word ------------------------------------------------------------ */
.gate,
.word {
  padding: 2rem clamp(1.4rem, 4vw, 2.4rem);
  margin-bottom: 1.1rem;
}

.gate {
  border-color: rgba(140, 31, 26, 0.28);
  background: linear-gradient(160deg, rgba(67, 16, 14, 0.26), rgba(8, 7, 6, 0.55));
}

.gate__body,
.word__gloss {
  max-width: 48rem;
  color: var(--bone-dim);
  font-size: 0.98rem;
  line-height: 1.85;
}

.word {
  margin-bottom: 3.4rem;
}

.word__gloss {
  font-style: italic;
  color: var(--bone);
}

/* petition --------------------------------------------------------------- */
.petition__coda {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--ember);
  margin: 0;
}

.back {
  text-align: center;
  margin-bottom: 1rem;
}

.back a {
  font-family: var(--mono);
  font-size: 0.64rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--brass-dim);
  text-decoration: none;
}

.back a:hover {
  color: var(--bone);
}

@media (max-width: 640px) {
  .halves li {
    grid-template-columns: 1fr;
    gap: 0.2rem;
  }

  .halves__arrow {
    display: none;
  }
}
</style>

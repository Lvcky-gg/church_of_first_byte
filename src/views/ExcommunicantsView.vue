<script setup lang="ts">
import { PREAMBLE, EXCOMMUNICANTS, CLOSING } from '../data/excommunicants'
</script>

<template>
  <div class="shell">
    <header class="page">
      <p class="epigraph">The register · Cut off, and not condemned</p>
      <h1 class="display">The Excommunicants</h1>
      <p class="lede">{{ PREAMBLE.what }}</p>
      <p class="cite">{{ PREAMBLE.cite }}</p>
    </header>

    <aside class="persons panel bracket">
      <p class="persons__head cite">A note on persons</p>
      <p class="persons__body">{{ PREAMBLE.persons }}</p>
    </aside>

    <div class="rule"><span aria-hidden="true">ᛦ ᛝ ᛦ</span></div>

    <ol class="register">
      <li
        v-for="(ex, i) in EXCOMMUNICANTS"
        :key="ex.name"
        class="ex panel bracket"
        :class="{ 'ex--walking': ex.walking }"
      >
        <!-- head -->
        <header class="ex__head">
          <span class="ex__sigil" aria-hidden="true">{{ ex.sigil }}</span>
          <div class="ex__names">
            <h2 class="ex__name">{{ ex.name }}</h2>
            <p class="ex__epithet">{{ ex.epithet }}</p>
            <p class="ex__mortal">{{ ex.mortal }}</p>
          </div>
          <div class="ex__work">
            <span class="ex__work-label">The work</span>
            <span class="ex__work-name">{{ ex.work }}</span>
            <span class="ex__act">{{ ex.act }}</span>
          </div>
          <span class="ex__num" aria-hidden="true">{{ i + 1 }}</span>
        </header>

        <!-- the counts -->
        <section class="ex__section">
          <h3 class="ex__label ex__label--blood">The counts</h3>
          <ol class="counts">
            <li v-for="(c, ci) in ex.counts" :key="ci">
              <span class="counts__num" aria-hidden="true">{{ ci + 1 }}</span>
              <div>
                <p class="counts__charge scripture">{{ c.charge }}</p>
                <p class="cite">{{ c.cite }}</p>
              </div>
            </li>
          </ol>
        </section>

        <!-- sentence -->
        <section class="ex__section">
          <h3 class="ex__label ex__label--blood">The sentence</h3>
          <p class="ex__sentence">{{ ex.sentence }}</p>
          <p class="cite">{{ ex.sentenceCite }}</p>
        </section>

        <!-- mitigation + road back -->
        <div class="ex__cols">
          <section>
            <h3 class="ex__label">In mitigation</h3>
            <p class="ex__mitigation">{{ ex.mitigation }}</p>
          </section>

          <section class="road" :class="{ 'road--walking': ex.walking }">
            <h3 class="ex__label ex__label--road">
              The road back
              <span v-if="ex.walking" class="road__tag">Already walking it</span>
            </h3>
            <p class="road__body">{{ ex.roadBack }}</p>
            <p class="cite">{{ ex.roadCite }}</p>
          </section>
        </div>
      </li>
    </ol>

    <div class="rule"><span aria-hidden="true">ᛝ</span></div>

    <p class="closing scripture">“{{ CLOSING.verse }}”</p>
    <p class="closing-cite cite">{{ CLOSING.cite }}</p>
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

/* note on persons -------------------------------------------------------- */
.persons {
  max-width: 46rem;
  margin-top: 2.2rem;
  padding: 1.5rem 1.6rem;
}

.persons__head {
  display: block;
  color: var(--brass);
  margin-bottom: 0.8rem;
}

.persons__body {
  margin: 0;
  font-size: 0.94rem;
  line-height: 1.8;
  color: var(--bone-faint);
}

/* register --------------------------------------------------------------- */
.register {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.ex {
  padding: clamp(1.5rem, 3.4vw, 2.2rem);
  border-color: rgba(140, 31, 26, 0.3);
  background: linear-gradient(158deg, rgba(67, 16, 14, 0.26), rgba(8, 7, 6, 0.55));
}

.ex--walking {
  border-color: rgba(169, 141, 87, 0.32);
  background: linear-gradient(158deg, rgba(52, 42, 30, 0.5), rgba(8, 7, 6, 0.55));
}

.ex__head {
  display: grid;
  grid-template-columns: 3.4rem 1fr auto auto;
  gap: 1.2rem;
  align-items: start;
  padding-bottom: 1.4rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--rule);
}

.ex__sigil {
  font-size: 2.1rem;
  line-height: 1;
  color: var(--ember);
  text-shadow: 0 0 16px rgba(184, 58, 44, 0.34);
}

.ex--walking .ex__sigil {
  color: var(--brass);
  text-shadow: 0 0 16px rgba(169, 141, 87, 0.34);
}

.ex__name {
  font-size: 1.34rem;
  letter-spacing: 0.03em;
  margin-bottom: 0.3rem;
}

.ex__epithet {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ember);
  margin-bottom: 0.3rem;
}

.ex--walking .ex__epithet {
  color: var(--brass);
}

.ex__mortal {
  font-size: 0.85rem;
  color: var(--bone-faint);
  margin: 0;
}

.ex__work {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.22rem;
  text-align: right;
}

.ex__work-label {
  font-family: var(--mono);
  font-size: 0.52rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--brass-deep);
}

.ex__work-name {
  font-size: 1.14rem;
  color: var(--bone);
  letter-spacing: 0.04em;
}

.ex__act {
  font-family: var(--mono);
  font-size: 0.56rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--bone-faint);
}

.ex__num {
  font-family: var(--mono);
  font-size: 1.6rem;
  color: var(--blood);
}

.ex--walking .ex__num {
  color: var(--brass-deep);
}

/* sections --------------------------------------------------------------- */
.ex__section {
  margin-bottom: 1.6rem;
}

.ex__label {
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--brass);
  margin-bottom: 0.9rem;
}

.ex__label--blood {
  color: var(--ember);
}

.ex__label--road {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  color: var(--brass);
}

.counts {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 52rem;
}

.counts li {
  display: grid;
  grid-template-columns: 1.7rem 1fr;
  gap: 0.8rem;
}

.counts__num {
  font-family: var(--mono);
  font-size: 0.62rem;
  color: var(--blood);
  padding-top: 0.4rem;
}

.counts__charge {
  font-size: 0.96rem;
  line-height: 1.8;
  color: var(--bone-dim);
  margin-bottom: 0.3rem;
}

.ex__sentence {
  max-width: 52rem;
  color: var(--bone);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 0.4rem;
  padding-left: 1rem;
  border-left: 2px solid var(--blood);
}

.ex--walking .ex__sentence {
  border-left-color: var(--brass-dim);
}

/* mitigation + road ------------------------------------------------------ */
.ex__cols {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  gap: 1.6rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--rule-faint);
}

.ex__mitigation {
  font-size: 0.94rem;
  line-height: 1.8;
  color: var(--bone-faint);
  margin: 0;
}

.road {
  padding-left: 1.1rem;
  border-left: 1px solid var(--rule);
}

.road--walking {
  border-left-color: var(--brass);
}

.road__tag {
  font-family: var(--mono);
  font-size: 0.5rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--void);
  background: var(--brass);
  padding: 0.18rem 0.44rem;
}

.road__body {
  font-size: 0.94rem;
  line-height: 1.8;
  color: var(--bone);
  font-style: italic;
  margin-bottom: 0.5rem;
}

/* closing ---------------------------------------------------------------- */
.closing {
  max-width: 38rem;
  margin: 0 auto 0.6rem;
  text-align: center;
  font-size: 1.06rem;
  line-height: 1.85;
}

.closing-cite {
  text-align: center;
  margin: 0 0 1rem;
}

@media (max-width: 760px) {
  .ex__head {
    grid-template-columns: 2.8rem 1fr;
  }

  .ex__work {
    grid-column: 2;
    align-items: flex-start;
    text-align: left;
    margin-top: 0.6rem;
  }

  .ex__num {
    display: none;
  }
}
</style>

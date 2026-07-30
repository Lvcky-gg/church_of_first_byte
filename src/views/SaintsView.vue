<script setup lang="ts">
import { ref, computed } from 'vue'
import { SAINTS, ANATHEMA } from '../data/saints'

const filter = ref<'all' | 'martyrs'>('all')

const shown = computed(() =>
  filter.value === 'martyrs' ? SAINTS.filter((s) => s.martyr) : SAINTS,
)
</script>

<template>
  <div class="shell">
    <header class="page">
      <p class="epigraph">Hagiography · The calendar</p>
      <h1 class="display">The Saints</h1>
      <p class="lede">
        Fourteen venerated, one for each Rune. They were mortal engineers and mathematicians
        and are named here as they were named in life. The Church canonises the work, keeps
        the feast on a true date, and pronounces anathema only upon practices — never upon
        persons.
      </p>
    </header>

    <div class="filters" role="group" aria-label="Filter the calendar">
      <button
        class="filter"
        :class="{ 'filter--on': filter === 'all' }"
        @click="filter = 'all'"
      >
        All {{ SAINTS.length }}
      </button>
      <button
        class="filter"
        :class="{ 'filter--on': filter === 'martyrs' }"
        @click="filter = 'martyrs'"
      >
        Martyrs only
      </button>
    </div>

    <div class="rule"><span aria-hidden="true">ᛉ ᛝ ᛉ</span></div>

    <ul class="saints">
      <li v-for="saint in shown" :key="saint.name" class="saint panel bracket" :class="{ 'saint--martyr': saint.martyr }">
        <div class="saint__head">
          <span class="saint__sigil" aria-hidden="true">{{ saint.sigil }}</span>
          <div class="saint__names">
            <h2 class="saint__name">{{ saint.name }}</h2>
            <p class="saint__epithet">{{ saint.epithet }}</p>
            <p class="saint__mortal">{{ saint.mortal }}</p>
          </div>
          <div class="saint__feast">
            <span class="saint__feast-label">Feast</span>
            <span class="saint__feast-date">{{ saint.feast }}</span>
            <span v-if="saint.martyr" class="saint__martyr">Martyr</span>
          </div>
        </div>

        <p class="saint__life">{{ saint.life }}</p>

        <dl class="saint__facts">
          <div>
            <dt>Patron of</dt>
            <dd>{{ saint.patronOf }}</dd>
          </div>
          <div>
            <dt>Relic</dt>
            <dd>{{ saint.relic }}</dd>
          </div>
          <div>
            <dt>Kept on</dt>
            <dd>{{ saint.feastNote }}</dd>
          </div>
        </dl>

        <blockquote class="saint__verse">
          <p class="scripture">“{{ saint.cited }}”</p>
          <footer class="cite">{{ saint.cite }}</footer>
        </blockquote>
      </li>
    </ul>

    <div class="rule"><span aria-hidden="true">ᛦ</span></div>

    <!-- the anathema --------------------------------------------------------->
    <section class="section" aria-labelledby="anathema-h">
      <h2 id="anathema-h" class="section__head">
        <span class="section__glyph" aria-hidden="true">ᛦ</span> The Order of the Unread Byte
      </h2>
      <p class="section__note">
        Pronounced upon practices and artefacts, and upon no living soul. Read aloud at the
        Day of Atonement, once in the cycle.
        <span class="cite">Convention 7:1</span>
      </p>

      <ul class="anathema">
        <li v-for="a in ANATHEMA" :key="a.name">
          <div class="anathema__head">
            <span class="anathema__mark" aria-hidden="true">✝</span>
            <code class="anathema__name">{{ a.name }}</code>
            <span class="anathema__verdict">{{ a.verdict }}</span>
          </div>
          <p class="anathema__gloss scripture">{{ a.gloss }}</p>
          <p class="cite">{{ a.cite }}</p>
        </li>
      </ul>
    </section>

    <div class="rule"><span aria-hidden="true">ᛝ</span></div>

    <p class="closing scripture">
      “And there arose not a maintainer since like unto Moses, who knew the system face to
      face, and had built it from the primitive with his own hand.”
    </p>
    <p class="closing-cite cite">Documentation 9:5</p>
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

/* filters ---------------------------------------------------------------- */
.filters {
  display: flex;
  gap: 0.5rem;
  margin-top: 2rem;
}

.filter {
  padding: 0.6rem 1.1rem;
  background: rgba(8, 7, 6, 0.6);
  border: 1px solid var(--rule-faint);
  color: var(--bone-faint);
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

.filter:hover {
  color: var(--bone-dim);
  border-color: var(--rule);
}

.filter--on {
  color: var(--bone);
  border-color: var(--rule);
  background: linear-gradient(180deg, rgba(140, 31, 26, 0.2), rgba(34, 29, 23, 0.5));
}

/* saints ----------------------------------------------------------------- */
.saints {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  gap: 1.1rem;
}

.saint {
  display: flex;
  flex-direction: column;
  padding: 1.9rem 1.7rem;
  transition: border-color 0.2s ease;
}

.saint:hover {
  border-color: var(--rule);
}

.saint--martyr {
  border-color: rgba(140, 31, 26, 0.3);
  background: linear-gradient(160deg, rgba(67, 16, 14, 0.24), rgba(8, 7, 6, 0.55));
}

.saint__head {
  display: grid;
  grid-template-columns: 3.2rem 1fr auto;
  gap: 1rem;
  align-items: start;
  padding-bottom: 1.3rem;
  margin-bottom: 1.3rem;
  border-bottom: 1px solid var(--rule-faint);
}

.saint__sigil {
  font-size: 2.1rem;
  line-height: 1;
  color: var(--brass);
  text-shadow: 0 0 16px rgba(169, 141, 87, 0.34);
}

.saint--martyr .saint__sigil {
  color: var(--ember);
  text-shadow: 0 0 16px rgba(184, 58, 44, 0.36);
}

.saint__names {
  min-width: 0;
}

.saint__name {
  font-size: 1.24rem;
  letter-spacing: 0.03em;
  margin-bottom: 0.35rem;
}

.saint__epithet {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--brass);
  margin-bottom: 0.35rem;
}

.saint__mortal {
  font-size: 0.86rem;
  color: var(--bone-faint);
  margin: 0;
}

.saint__feast {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  text-align: right;
}

.saint__feast-label {
  font-family: var(--mono);
  font-size: 0.54rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--brass-deep);
}

.saint__feast-date {
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  color: var(--bone);
  white-space: nowrap;
}

.saint__martyr {
  font-family: var(--mono);
  font-size: 0.54rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ember);
  border: 1px solid rgba(184, 58, 44, 0.4);
  padding: 0.15rem 0.4rem;
  margin-top: 0.2rem;
}

.saint__life {
  font-size: 0.97rem;
  line-height: 1.8;
  color: var(--bone-dim);
  margin-bottom: 1.5rem;
}

.saint__facts {
  margin: 0 0 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.saint__facts > div {
  display: grid;
  grid-template-columns: 5.6rem 1fr;
  gap: 0.9rem;
  align-items: baseline;
}

.saint__facts dt {
  font-family: var(--mono);
  font-size: 0.56rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--brass-deep);
}

.saint__facts dd {
  margin: 0;
  font-size: 0.9rem;
  color: var(--bone-dim);
  line-height: 1.6;
}

.saint__verse {
  margin: auto 0 0;
  padding: 1.1rem 0 0 1.1rem;
  border-top: 1px solid var(--rule-faint);
  border-left: 1px solid var(--rule);
}

.saint__verse p {
  font-size: 0.95rem;
  line-height: 1.75;
  margin-bottom: 0.6rem;
}

/* anathema --------------------------------------------------------------- */
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

.anathema {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--rule-faint);
  max-width: 56rem;
}

.anathema li {
  padding: 1.4rem 0.4rem;
  border-bottom: 1px solid var(--rule-faint);
}

.anathema__head {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 0.7rem;
}

.anathema__mark {
  color: var(--blood);
  font-size: 0.95rem;
}

.anathema__name {
  color: var(--bone);
  font-size: 0.92rem;
  border-color: rgba(140, 31, 26, 0.3);
  background: rgba(140, 31, 26, 0.1);
}

.anathema__verdict {
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ember);
}

.anathema__gloss {
  font-size: 0.96rem;
  line-height: 1.78;
  color: var(--bone-dim);
  margin-bottom: 0.5rem;
  max-width: var(--measure);
}

/* closing ---------------------------------------------------------------- */
.closing {
  max-width: 36rem;
  margin: 0 auto 0.6rem;
  text-align: center;
  font-size: 1.06rem;
  line-height: 1.85;
}

.closing-cite {
  text-align: center;
  margin: 0 0 1rem;
}

@media (max-width: 560px) {
  .saint__head {
    grid-template-columns: 2.6rem 1fr;
  }

  .saint__feast {
    grid-column: 2;
    align-items: flex-start;
    text-align: left;
    margin-top: 0.5rem;
  }

  .saint__facts > div {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }
}
</style>

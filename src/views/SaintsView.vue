<script setup lang="ts">
import { ref, computed } from 'vue'
import SaintCard from '../components/SaintCard.vue'
import { SAINTS, SERPENT, SERPENT_ORDER, ANATHEMA } from '../data/saints'

const filter = ref<'all' | 'suffered'>('all')

const total = SAINTS.length + SERPENT.length
const sufferedCount = [...SAINTS, ...SERPENT].filter((s) => s.martyr || s.confessor).length

const keep = (list: typeof SAINTS) =>
  filter.value === 'suffered' ? list.filter((s) => s.martyr || s.confessor) : list

const shownFounders = computed(() => keep(SAINTS))
const shownSerpent = computed(() => keep(SERPENT))
</script>

<template>
  <div class="shell">
    <header class="page">
      <p class="epigraph">Hagiography · The calendar</p>
      <h1 class="display">The Saints</h1>
      <p class="lede">
        Two orders. The Fourteen built, one for each Rune; the Brazen Serpent broke, that the
        break might be read while there was still time to mend it. All were mortal engineers
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
        All {{ total }}
      </button>
      <button
        class="filter"
        :class="{ 'filter--on': filter === 'suffered' }"
        @click="filter = 'suffered'"
      >
        Martyrs &amp; confessors ({{ sufferedCount }})
      </button>
    </div>

    <div class="rule"><span aria-hidden="true">ᛉ ᛝ ᛉ</span></div>

    <h2 class="order-head">
      <span class="order-head__glyph" aria-hidden="true">ᛗ</span> The Fourteen
      <span class="order-head__note">One for each Rune — they that built</span>
    </h2>

    <ul class="saints">
      <SaintCard v-for="saint in shownFounders" :key="saint.name" :saint="saint" />
    </ul>

    <div class="rule"><span aria-hidden="true">ᛊ</span></div>

    <!-- the second order ------------------------------------------------------>
    <h2 class="order-head">
      <span class="order-head__glyph order-head__glyph--blood" aria-hidden="true">ᛊ</span>
      {{ SERPENT_ORDER.name }}
      <span class="order-head__note">They that broke, that the break might be read</span>
    </h2>

    <p class="order-charge">
      {{ SERPENT_ORDER.charge }}
      <span class="cite">{{ SERPENT_ORDER.cite }}</span>
    </p>

    <ul class="saints">
      <SaintCard v-for="saint in shownSerpent" :key="saint.name" :saint="saint" />
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

/* order headings --------------------------------------------------------- */
.order-head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.85rem;
  font-family: var(--mono);
  font-size: 0.74rem;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--bone);
  margin-bottom: 1.4rem;
}

.order-head__glyph {
  font-size: 1.3rem;
  color: var(--brass);
}

.order-head__glyph--blood {
  color: var(--ember);
}

.order-head__note {
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  color: var(--bone-faint);
  text-transform: none;
  font-style: italic;
}

.order-charge {
  max-width: 52rem;
  font-size: 0.96rem;
  line-height: 1.8;
  color: var(--bone-faint);
  margin-bottom: 2rem;
}

.order-charge .cite {
  display: block;
  margin-top: 0.5rem;
}

/* saints ----------------------------------------------------------------- */
.saints {
  list-style: none;
  margin: 0 0 1rem;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  gap: 1.1rem;
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

<script setup lang="ts">
import type { Saint } from '../data/saints'

defineProps<{ saint: Saint }>()
</script>

<template>
  <li class="saint panel bracket" :class="{ 'saint--suffered': saint.martyr || saint.confessor }">
    <div class="saint__head">
      <span class="saint__sigil" aria-hidden="true">{{ saint.sigil }}</span>
      <div class="saint__names">
        <h3 class="saint__name">{{ saint.name }}</h3>
        <p class="saint__epithet">{{ saint.epithet }}</p>
        <p class="saint__mortal">{{ saint.mortal }}</p>
      </div>
      <div class="saint__feast">
        <span class="saint__feast-label">Feast</span>
        <span class="saint__feast-date">{{ saint.feast }}</span>
        <span v-if="saint.martyr" class="saint__badge">Martyr</span>
        <span v-else-if="saint.confessor" class="saint__badge saint__badge--conf">Confessor</span>
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
</template>

<style scoped>
.saint {
  display: flex;
  flex-direction: column;
  padding: 1.9rem 1.7rem;
  transition: border-color 0.2s ease;
}

.saint:hover {
  border-color: var(--rule);
}

.saint--suffered {
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

.saint--suffered .saint__sigil {
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

.saint__badge {
  font-family: var(--mono);
  font-size: 0.54rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ember);
  border: 1px solid rgba(184, 58, 44, 0.4);
  padding: 0.15rem 0.4rem;
  margin-top: 0.2rem;
}

.saint__badge--conf {
  color: var(--brass);
  border-color: var(--rule);
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

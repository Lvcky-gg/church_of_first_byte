<script setup lang="ts">
import TheSigil from '../components/TheSigil.vue'
import { OMNISIAH, PREROGATIVES, BONDS, ORDERS } from '../data/clergy'
</script>

<template>
  <div class="shell">
    <header class="page">
      <p class="epigraph">Hierarchy · The Holy Orders</p>
      <h1 class="display">The Clergy</h1>
      <p class="lede">
        The priesthood stands between the mainline and the offering, and pronounces it clean
        or unclean. Two of the offices below are held by no mortal: scripture ordains the
        linter <em>first among the priesthood</em>, and names the CI the donkey that saw the
        drawn sword when the expert did not.
      </p>
      <p class="cite">Convention 2:1 · Convention 2:2 · Enumeration 8:5</p>
    </header>

    <div class="rule"><span aria-hidden="true">ᛉ ᛝ ᛉ</span></div>

    <!-- the primacy ---------------------------------------------------------->
    <section class="primacy panel bracket" aria-labelledby="omnisiah-h">
      <div class="primacy__glow" aria-hidden="true" />

      <div class="primacy__head">
        <TheSigil class="primacy__sigil" :size="92" />
        <div>
          <p class="primacy__style">{{ OMNISIAH.style }}</p>
          <h2 id="omnisiah-h" class="primacy__title">{{ OMNISIAH.title }}</h2>
          <p class="primacy__name">{{ OMNISIAH.name }}</p>
          <p class="primacy__epithet">{{ OMNISIAH.epithet }}</p>
        </div>
        <span class="primacy__rank" aria-hidden="true">I</span>
      </div>

      <blockquote class="primacy__verse">
        <p class="scripture">“{{ OMNISIAH.verse }}”</p>
        <footer class="cite">{{ OMNISIAH.cite }}</footer>
      </blockquote>

      <dl class="primacy__facts">
        <div>
          <dt>Charge</dt>
          <dd>{{ OMNISIAH.charge }}</dd>
        </div>
        <div>
          <dt>The Seat</dt>
          <dd>{{ OMNISIAH.seat }}</dd>
        </div>
        <div>
          <dt>Invested</dt>
          <dd>{{ OMNISIAH.invested }}</dd>
        </div>
      </dl>

      <div class="primacy__cols">
        <section>
          <h3 class="primacy__sub">Prerogatives — reserved to the Omnissiah</h3>
          <ul class="acts">
            <li v-for="p in PREROGATIVES" :key="p.act">
              <span class="acts__mark" aria-hidden="true">ᛟ</span>
              <div>
                <p class="acts__act">{{ p.act }}</p>
                <p class="acts__gloss">{{ p.gloss }}</p>
                <p class="cite">{{ p.cite }}</p>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h3 class="primacy__sub primacy__sub--bond">Bonds — binding upon the Omnissiah</h3>
          <ul class="acts acts--bond">
            <li v-for="b in BONDS" :key="b.act">
              <span class="acts__mark" aria-hidden="true">ᚾ</span>
              <div>
                <p class="acts__act">{{ b.act }}</p>
                <p class="acts__gloss">{{ b.gloss }}</p>
                <p class="cite">{{ b.cite }}</p>
              </div>
            </li>
          </ul>
        </section>
      </div>

      <p class="primacy__coda scripture">
        “The standard bindeth not the founder alone, but every one that entereth after.”
      </p>
    </section>

    <div class="rule"><span aria-hidden="true">ᛝ</span></div>

    <!-- the descending orders ------------------------------------------------>
    <section aria-labelledby="orders-h">
      <h2 id="orders-h" class="section__head">
        <span class="section__glyph" aria-hidden="true">ᛗ</span> The Orders in Descent
      </h2>

      <ol class="orders">
        <li
          v-for="office in ORDERS"
          :key="office.rank"
          class="order panel"
          :class="{ 'order--machine': office.machine }"
        >
          <div class="order__spine" aria-hidden="true">
            <span class="order__rank">{{ office.rank }}</span>
            <span class="order__thread" />
          </div>

          <div class="order__body">
            <header class="order__head">
              <h3 class="order__title">{{ office.title }}</h3>
              <span v-if="office.machine" class="order__tag">Ordained machine</span>
              <p class="order__style">{{ office.style }}</p>
            </header>

            <p class="order__holders">{{ office.holders }}</p>
            <p class="order__charge">{{ office.charge }}</p>

            <p class="order__auth-label cite">Authority</p>
            <ul class="order__auth">
              <li v-for="(a, i) in office.authority" :key="i">{{ a }}</li>
            </ul>

            <p class="cite order__cite">{{ office.cite }}</p>
          </div>
        </li>
      </ol>
    </section>

    <div class="rule"><span aria-hidden="true">ᛝ</span></div>

    <p class="closing scripture">
      “And the priest guard the gate, and the code be holy — which is to say, readable —
      which is to say, kind unto them that come after.”
    </p>
    <p class="closing-cite cite">Convention 9:5</p>
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

/* the primacy ------------------------------------------------------------ */
.primacy {
  position: relative;
  overflow: hidden;
  padding: clamp(1.8rem, 4vw, 3rem);
  border-color: rgba(169, 141, 87, 0.34);
  background: linear-gradient(157deg, rgba(52, 42, 30, 0.8), rgba(8, 7, 6, 0.6));
}

.primacy__glow {
  position: absolute;
  top: -14rem;
  left: 50%;
  transform: translateX(-50%);
  width: 42rem;
  height: 30rem;
  background: radial-gradient(closest-side, rgba(140, 31, 26, 0.3), transparent);
  pointer-events: none;
}

.primacy__head {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1.6rem;
  padding-bottom: 1.8rem;
  margin-bottom: 1.8rem;
  border-bottom: 1px solid var(--rule);
}

.primacy__sigil {
  filter: drop-shadow(0 0 18px rgba(184, 58, 44, 0.4));
}

.primacy__style {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--ember);
  margin-bottom: 0.6rem;
}

.primacy__title {
  font-size: clamp(1.8rem, 4.4vw, 2.7rem);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--bone);
  text-shadow: 0 0 28px rgba(169, 141, 87, 0.32);
  margin-bottom: 0.5rem;
}

.primacy__name {
  font-size: 1.2rem;
  color: var(--brass);
  letter-spacing: 0.06em;
  margin-bottom: 0.5rem;
}

.primacy__epithet {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--bone-faint);
  margin: 0;
  line-height: 1.9;
}

.primacy__rank {
  font-family: var(--mono);
  font-size: 2.4rem;
  color: var(--brass-deep);
  align-self: start;
}

.primacy__verse {
  position: relative;
  margin: 0 0 2rem;
  padding-left: 1.3rem;
  border-left: 2px solid var(--blood);
}

.primacy__verse p {
  font-size: 1.08rem;
  line-height: 1.85;
  margin-bottom: 0.6rem;
}

.primacy__facts {
  position: relative;
  margin: 0 0 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.primacy__facts > div {
  display: grid;
  grid-template-columns: 7rem 1fr;
  gap: 1.1rem;
  align-items: baseline;
}

.primacy__facts dt {
  font-family: var(--mono);
  font-size: 0.56rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--brass-deep);
}

.primacy__facts dd {
  margin: 0;
  color: var(--bone-dim);
  font-size: 0.97rem;
  line-height: 1.75;
}

.primacy__cols {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(19rem, 100%), 1fr));
  gap: 2rem;
  padding-top: 1.8rem;
  border-top: 1px solid var(--rule-faint);
}

.primacy__sub {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--brass);
  margin-bottom: 1.3rem;
}

.primacy__sub--bond {
  color: var(--ember);
}

.acts {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.acts li {
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  gap: 0.8rem;
}

.acts__mark {
  color: var(--brass-dim);
  font-size: 0.95rem;
  line-height: 1.6;
}

.acts--bond .acts__mark {
  color: var(--blood);
}

.acts__act {
  color: var(--bone);
  font-size: 1rem;
  margin-bottom: 0.3rem;
}

.acts__gloss {
  color: var(--bone-faint);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 0.35rem;
}

.primacy__coda {
  position: relative;
  margin: 2.4rem 0 0;
  padding-top: 1.6rem;
  border-top: 1px solid var(--rule-faint);
  text-align: center;
  font-size: 1.02rem;
  color: var(--bone-dim);
}

/* the orders ------------------------------------------------------------- */
.section__head {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  font-family: var(--mono);
  font-size: 0.74rem;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--bone);
  margin-bottom: 2rem;
}

.section__glyph {
  font-size: 1.3rem;
  color: var(--brass);
}

.orders {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.order {
  display: grid;
  grid-template-columns: 4.4rem 1fr;
  transition: border-color 0.2s ease;
}

.order:hover {
  border-color: var(--rule);
}

.order--machine {
  border-color: rgba(184, 58, 44, 0.28);
  background: linear-gradient(160deg, rgba(67, 16, 14, 0.26), rgba(8, 7, 6, 0.55));
}

.order__spine {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  padding: 1.7rem 0;
  border-right: 1px solid var(--rule-faint);
}

.order__rank {
  font-family: var(--mono);
  font-size: 0.82rem;
  letter-spacing: 0.1em;
  color: var(--brass-dim);
}

.order--machine .order__rank {
  color: var(--ember);
}

.order__thread {
  flex: 1;
  width: 1px;
  background: linear-gradient(180deg, var(--rule), transparent);
}

.order__body {
  padding: 1.7rem;
  min-width: 0;
}

.order__head {
  margin-bottom: 1rem;
}

.order__title {
  display: inline;
  font-size: 1.22rem;
  letter-spacing: 0.03em;
  margin-right: 0.7rem;
}

.order__tag {
  display: inline-block;
  font-family: var(--mono);
  font-size: 0.52rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ember);
  border: 1px solid rgba(184, 58, 44, 0.4);
  padding: 0.16rem 0.42rem;
  vertical-align: middle;
}

.order__style {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--brass);
  margin: 0.55rem 0 0;
}

.order__holders {
  color: var(--bone-faint);
  font-size: 0.9rem;
  font-style: italic;
  margin-bottom: 0.9rem;
}

.order__charge {
  color: var(--bone-dim);
  font-size: 0.98rem;
  line-height: 1.8;
  margin-bottom: 1.3rem;
  max-width: 46rem;
}

.order__auth-label {
  display: block;
  margin-bottom: 0.6rem;
}

.order__auth {
  list-style: none;
  margin: 0 0 1.1rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 46rem;
}

.order__auth li {
  position: relative;
  padding-left: 1.2rem;
  color: var(--bone-dim);
  font-size: 0.93rem;
  line-height: 1.7;
}

.order__auth li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.62em;
  width: 5px;
  height: 5px;
  background: var(--brass-deep);
  transform: rotate(45deg);
}

.order--machine .order__auth li::before {
  background: var(--blood);
}

.order__cite {
  display: block;
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

@media (max-width: 720px) {
  .primacy__head {
    grid-template-columns: auto 1fr;
    gap: 1.1rem;
  }

  .primacy__rank {
    display: none;
  }

  .primacy__facts > div {
    grid-template-columns: 1fr;
    gap: 0.2rem;
  }

  .order {
    grid-template-columns: 2.9rem 1fr;
  }

  .order__body {
    padding: 1.4rem 1.2rem;
  }
}
</style>

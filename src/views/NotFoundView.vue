<script setup lang="ts">
import { computed } from 'vue'
import { route, href } from '../router'
import { TABS } from '../data/nav'

// Echo back what was actually asked for, so the visitor can see their typo.
const attempted = computed(() =>
  route.value.length ? '/' + route.value.join('/') : '/',
)
</script>

<template>
  <div class="shell nf">
    <p class="epigraph">Segmentation fault</p>

    <h1 class="code" aria-label="404, not found">
      <span>4</span><span class="code__o">0</span><span>4</span>
    </h1>

    <h2 class="title">The Land of Nod</h2>

    <p class="lede">
      There is nothing at this address. It was never built, or it was archived, or the link
      that brought you was written from memory — which is the one dependency no one ever
      reads twice.
    </p>

    <p class="attempted">
      <span class="attempted__label cite">Requested</span>
      <code>{{ attempted }}</code>
    </p>

    <blockquote class="verse">
      <p class="scripture">
        “And Cain went out from the presence of the mainline, and dwelt in the land of Nod,
        which is dead code, on the east of <code>/dev/null</code>.”
      </p>
      <footer class="cite">Compilation 4:12</footer>
    </blockquote>

    <div class="rule"><span aria-hidden="true">ᛉ ᛝ ᛉ</span></div>

    <nav class="ways" aria-label="Ways back">
      <p class="ways__head cite">The ways back</p>
      <ul>
        <li v-for="tab in TABS" :key="tab.id">
          <a :href="href(tab.id)">
            <span class="ways__glyph" aria-hidden="true">{{ tab.glyph }}</span>
            <span class="ways__body">
              <span class="ways__label">{{ tab.label }}</span>
              <span class="ways__note">{{ tab.note }}</span>
            </span>
          </a>
        </li>
      </ul>
    </nav>

    <p class="coda scripture">
      “And it divided the segments… and the trespass thereof it named <em>the fault</em>.”
    </p>
    <p class="coda-cite cite">Compilation 1:4</p>
  </div>
</template>

<style scoped>
.nf {
  padding: 4.4rem 0 1rem;
  max-width: 46rem;
}

.code {
  display: flex;
  gap: 0.6rem;
  font-family: var(--mono);
  font-size: clamp(3.4rem, 13vw, 6.4rem);
  line-height: 1;
  letter-spacing: 0.04em;
  color: var(--stone);
  margin-bottom: 1.6rem;
}

.code span {
  text-shadow: 0 0 34px rgba(140, 31, 26, 0.22);
}

.code__o {
  color: var(--blood);
  animation: flicker 5.5s ease-in-out infinite;
}

@keyframes flicker {
  0%,
  92%,
  100% {
    opacity: 1;
  }
  94% {
    opacity: 0.35;
  }
  96% {
    opacity: 0.9;
  }
}

.title {
  font-size: clamp(1.6rem, 4.4vw, 2.4rem);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--bone);
  margin-bottom: 1.4rem;
}

.lede {
  margin-bottom: 2rem;
}

.attempted {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  padding: 0.9rem 1.1rem;
  border: 1px solid var(--rule-faint);
  background: rgba(8, 7, 6, 0.6);
  margin-bottom: 2.4rem;
}

.attempted__label {
  color: var(--brass-deep);
}

.attempted code {
  color: var(--ember);
  border-color: rgba(140, 31, 26, 0.3);
  background: rgba(140, 31, 26, 0.1);
  word-break: break-all;
}

.verse {
  margin: 0;
  padding-left: 1.2rem;
  border-left: 2px solid var(--blood);
}

.verse p {
  font-size: 1.06rem;
  line-height: 1.85;
  margin-bottom: 0.6rem;
}

/* ways back -------------------------------------------------------------- */
.ways__head {
  display: block;
  margin-bottom: 1rem;
}

.ways ul {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--rule-faint);
}

.ways a {
  display: grid;
  grid-template-columns: 2.4rem 1fr;
  align-items: center;
  gap: 1rem;
  padding: 0.95rem 0.5rem;
  border-bottom: 1px solid var(--rule-faint);
  text-decoration: none;
  transition: background 0.18s ease;
}

.ways a:hover {
  background: rgba(169, 141, 87, 0.05);
}

.ways__glyph {
  font-size: 1.3rem;
  color: var(--brass-deep);
  text-align: center;
  transition: color 0.18s ease;
}

.ways a:hover .ways__glyph {
  color: var(--ember);
}

.ways__body {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.ways__label {
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--bone-dim);
}

.ways a:hover .ways__label {
  color: var(--bone);
}

.ways__note {
  font-size: 0.86rem;
  color: var(--bone-faint);
}

/* coda ------------------------------------------------------------------- */
.coda {
  margin: 3.2rem 0 0.5rem;
  text-align: center;
  font-size: 1rem;
  color: var(--bone-faint);
}

.coda-cite {
  text-align: center;
  margin: 0 0 1rem;
}
</style>

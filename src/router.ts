// A hash router of some forty lines. We do not pull a dependency for this:
// the Second Rune obliges us to read to the last byte, and this way there is
// not much to read.
import { computed, ref } from 'vue'

const read = () => {
  const raw = window.location.hash.replace(/^#\/?/, '')
  return raw.split('/').filter(Boolean).map(decodeURIComponent)
}

const segments = ref<string[]>(read())

window.addEventListener('hashchange', () => {
  const next = read()
  const changedView = next[0] !== segments.value[0]
  segments.value = next
  if (changedView) window.scrollTo({ top: 0, behavior: 'auto' })
})

/** Path segments of the current route, e.g. ['byteble', 'migration', '6']. */
export const route = computed(() => segments.value)

/** First segment — the view. Defaults to the sanctum. */
export const view = computed(() => segments.value[0] || 'sanctum')

/** Build a hash href from segments. */
export const href = (...parts: (string | number)[]) =>
  '#/' + parts.map((p) => encodeURIComponent(String(p))).join('/')

/** Navigate imperatively. */
export const go = (...parts: (string | number)[]) => {
  window.location.hash = href(...parts)
}

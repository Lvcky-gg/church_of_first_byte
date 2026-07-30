import { onMounted, onUnmounted } from 'vue'

/**
 * Listens for a word typed on the keyboard and calls back when it lands.
 *
 * Mounted inside a view, so it only listens while that view is on screen —
 * the word is heard in the sanctum and nowhere else.
 */
export function useSecretWord(
  word: string,
  onHeard: () => void,
  options: { idleMs?: number } = {},
) {
  const target = word.toLowerCase()
  const idleMs = options.idleMs ?? 2000

  let buffer = ''
  let idle: number | undefined

  // Never swallow keys meant for a field, or for the browser itself.
  const isEditable = (node: EventTarget | null) => {
    const el = node as HTMLElement | null
    if (!el || !el.tagName) return false
    const tag = el.tagName
    return (
      tag === 'INPUT' ||
      tag === 'TEXTAREA' ||
      tag === 'SELECT' ||
      el.isContentEditable === true
    )
  }

  const onKeydown = (e: KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return
    if (isEditable(e.target)) return
    if (e.key.length !== 1) return

    // Keep only as much tail as the word needs, so the buffer cannot grow.
    buffer = (buffer + e.key.toLowerCase()).slice(-target.length)

    window.clearTimeout(idle)
    idle = window.setTimeout(() => (buffer = ''), idleMs)

    if (buffer === target) {
      buffer = ''
      window.clearTimeout(idle)
      onHeard()
    }
  }

  onMounted(() => window.addEventListener('keydown', onKeydown))
  onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown)
    window.clearTimeout(idle)
  })
}

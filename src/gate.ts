import { ref } from 'vue'

// The inner order is not reachable by address. The word must be spoken in the
// sanctum first; only then does the route open, and only for this tab. A
// pasted link, a fresh tab, or a shared URL admits no one.
//
// "And the way of retreat was closed up." — Migration 8:5

const KEY = 'cofb.word.spoken'

// sessionStorage throws in some privacy modes; the order simply stays shut.
const readStore = () => {
  try {
    return window.sessionStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
}

export const hasSpoken = ref(readStore())

export function speakTheWord() {
  try {
    window.sessionStorage.setItem(KEY, '1')
  } catch {
    /* held in memory for this page only */
  }
  hasSpoken.value = true
}

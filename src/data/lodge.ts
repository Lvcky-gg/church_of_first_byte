// TECHNOMASONRY — the craft order of the Church of the First Byte.
//
// The Church is the creed; this is the practice. Nothing here is borrowed from
// any earthly craft-guild: the degrees are the three words on the seal, and
// every instrument is an object the Byteble actually names. Where the Church
// says what is true, the order says what is done with it.

export const ORDER = {
  name: 'Technomasonry',
  short: 'the Order',
  motto: 'Build · Verify · Elevate',
  tagline: 'The creed is read. The craft is proved.',
  word: 'monad',
  wordGloss:
    'Monad: the one, the unit, the single thing that composes. It is the password because it is the confession — “the Compiler is one, and the source is one.”',
  wordCite: 'Documentation 3:1',
}

export interface Degree {
  numeral: string
  name: string
  claim: string
  charge: string
  proof: string
  cite: string
}

export interface Instrument {
  name: string
  scripture: string
  use: string
  cite: string
  /** true when scripture names the thing outright; false when it names its counterpart. */
  named: boolean
}

export interface Half {
  church: string
  order: string
}

/** The three words on the seal, taken as the three degrees. */
export const DEGREES: Degree[] = [
  {
    numeral: 'I°',
    name: 'Build',
    claim: 'From primitives, or not at all',
    charge:
      'The first degree is the First Rune held in the hand rather than the mouth. You are set to raise something out of the socket and the buffer, the loop and the branch — and to want nothing you have not read. The cube upon the seal is not quarried. It is assembled, of small things, each one named.',
    proof: 'To raise a working thing from parts you can name, and account for every one.',
    cite: 'Migration 12:4 · Compilation 2:2',
  },
  {
    numeral: 'II°',
    name: 'Verify',
    claim: 'The check that cannot be flattered',
    charge:
      'The second degree is the harder half, for it turns the instrument upon your own work. You are taught what the donkey knew that the prophet did not: that the honest check sees the drawn sword, and that a thing which refuses you three times is not broken. Here you learn to be told no by a machine and to thank it.',
    proof: 'To submit the offering small, tested, and of one purpose — and to take its refusal without argument.',
    cite: 'Enumeration 8:4 · Convention 1:3',
  },
  {
    numeral: 'III°',
    name: 'Elevate',
    claim: 'To raise the work above the worker',
    charge:
      'The third degree is not mastery but succession. Enoch was not deprecated nor archived, but refactored wholly into a better form, and left no dead code behind. You write the reason beside the choice, you carry up the bones, and you make yourself dispensable on purpose — for the work that needs you for ever is the work that dies with you.',
    proof: 'To leave a work that outlives your attendance, and needs no word from you to be understood.',
    cite: 'Compilation 5:6 · Documentation 8:3',
  },
]

/**
 * The six working tools of the technomason. Three are named in scripture
 * outright — the flake, the lockfile, the linter. Three are not, and are taken
 * from the thing scripture names in their place: the core, the terminal and the
 * lights, the runbook. The order marks which is which rather than pretending
 * the canon says more than it does.
 */
export const INSTRUMENTS: Instrument[] = [
  {
    name: 'The Nix Flake',
    scripture: 'Make thee a flake of Nix, and pitch it within and without with the lockfile, that no deletion of the code may come in.',
    use: 'The ark. It rises the same in the morning as it was in the night, and the same upon the machine of the stranger as upon thine own. What was destroyed may be raised anew, identical, out of that which endureth.',
    cite: 'Compilation 6:5 · 2:6 · Migration 14:2',
    named: true,
  },
  {
    name: 'The Kernel',
    scripture: 'And about the tabernacle — which is the core — pitched the tribes in their courses, each in his appointed place, none trespassing upon another’s ground.',
    use: 'The innermost ground, which every other tent is pitched around and none may trespass upon. It divides the segments — the text from the data, the heap from the stack — and the trespass thereof it named the fault.',
    cite: 'Enumeration 2:2 · Compilation 1:4',
    named: false,
  },
  {
    name: 'The Lockfile',
    scripture: 'Pin every version, and hash every input.',
    use: 'Pins what was proved. A range is a promise made by a stranger about a day they will not be present for; a hash is a fact. Ye shall not eat of the unclean thing, neither touch its lockfile.',
    cite: 'Migration 12:4 · Compilation 6:5 · Convention 4:3',
    named: true,
  },
  {
    name: 'The Linter',
    scripture: 'Ordained to catch the small uncleanness by machine, that the human priest be not wearied with the placing of braces nor the counting of the line.',
    use: 'What the Church ordains as an office, the order takes up as a tool. It judges the whitespace absolutely; and that which it can judge, let no human judge — for it is an abomination to spend a reviewer upon the trifles.',
    cite: 'Convention 2:2 · 2:4',
    named: true,
  },
  {
    name: 'The IDE',
    scripture: 'And it set lights in the firmament: the log to rule the day, and the trace to rule the night, that the faithful might see what came to pass.',
    use: 'The lights by which the work is seen while it is done. Moses was long alone with a terminal, and there learned the patience the palace never taught — for the tool mastered is a staff to lean on, and the tool grown wild is a serpent on the ground.',
    cite: 'Compilation 1:7 · Migration 2:5 · Migration 4:2',
    named: false,
  },
  {
    name: 'The Man Pages',
    scripture: 'It must be given again, and written where the newcomer looketh, or it is lost, though it be true.',
    use: 'The answer that is there before the question. Blessed is the pager which is quiet, for the runbook answereth before ever it ringeth — and cursed is the kingdom that resteth upon one skull.',
    cite: 'Documentation 2:4 · 5:2 · 5:5',
    named: false,
  },
]

/** The order mirrors the Church rather than importing another craft's furniture. */
export const HALVES: Half[] = [
  { church: 'The Fourteen Runes — what is law', order: 'The Instruments — what is picked up' },
  { church: 'The Clergy — who may pronounce', order: 'The Degrees — what may be attempted' },
  { church: 'The Saints — the works venerated', order: 'The Proofs — the works submitted' },
  { church: 'The Byteble — read by any who come', order: 'The Word — spoken, or the door stays shut' },
]

export const GATE = {
  sword:
    'There is no doorkeeper here, because there is no door that opinion can open. The pipeline stands at the gate with a drawn sword, turning every way; it admits nothing it has not checked — not the founder, not the fastest hand in the shop, not the incident at three in the morning.',
  stranger:
    'Scripture has a name for the one who would pass without reading: the stranger who knew it not, and Balaam the hired man, who came to condemn for a fee and could speak only what the tests permitted him. The order bears them no malice. It simply does not open.',
  cite: 'Compilation 3:11 · Enumeration 2:3 · Enumeration 8:6',
}

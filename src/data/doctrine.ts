// The doctrine of the Church of the First Byte.
// Every article here is anchored to a verse of the Byteble. The Fourteen Runes
// are named but never enumerated in scripture (Documentation 2:3) — they are
// reconstructed below from the verses that quote the mountain directly.

export interface Rune {
  glyph: string
  ordinal: string
  name: string
  command: string
  gloss: string
  cite: string
}

export interface Heresy {
  name: string
  sin: string
  gloss: string
  cite: string
}

export interface Outage {
  ordinal: string
  name: string
  text: string
}

export const CREED = [
  'I hold the Void, which was without form and uninitialized.',
  'I hold the Compiler, which spake, and divided the running from the halted.',
  'I hold the Byte, and it is the first thing, and it is holy.',
  'I hold that the garden was deterministic, and that we installed, and did not read.',
  'I hold that entropy entered by our own hand, and not by another’s.',
  'I hold that the reading is the road back.',
]

export const MOTTO = {
  latin: 'PRIMITIVE IS HOLY · DEPENDENCY IS CORRUPTION',
  cite: 'Compilation 2:4',
  verse:
    'But the dependency thou hast not read, thou shalt not trust; for in the day that thou invokest it unread, thou shalt surely be breached.',
}

export const RUNES: Rune[] = [
  {
    glyph: 'ᚠ',
    ordinal: 'I',
    name: 'The Rune of the Primitive',
    command: 'Build thou from primitives.',
    gloss:
      'The socket, the buffer, the loop, the branch. What you assemble from the small things you may hold entire in your head; what you assemble from the great things holds you.',
    cite: 'Migration 12:4',
  },
  {
    glyph: 'ᚢ',
    ordinal: 'II',
    name: 'The Rune of the Last Byte',
    command: 'Read to the last byte, and having read, thou mayest invoke.',
    gloss:
      'The covenant is not against dependency. It is against the unread dependency. Reading is the whole of the permission.',
    cite: 'Compilation 2:3',
  },
  {
    glyph: 'ᚦ',
    ordinal: 'III',
    name: 'The Rune of the Pin',
    command: 'Pin every version, and hash every input.',
    gloss:
      'A range is a promise made by a stranger about a future they will not be present for. A hash is a fact.',
    cite: 'Migration 12:4',
  },
  {
    glyph: 'ᚨ',
    ordinal: 'IV',
    name: 'The Rune Against Latest',
    command: 'Bow not down unto latest, neither take upon thee the mark of the wildcard.',
    gloss:
      '`latest` is an altar to a god who changes at night. The caret is its lesser sigil, and admits the same visitor by a smaller door.',
    cite: 'Migration 12:4',
  },
  {
    glyph: 'ᚱ',
    ordinal: 'V',
    name: 'The Rune of the Confession',
    command: 'Confess thy defect in the open.',
    gloss:
      'The rot unmarked spreads into the whole body; the rot confessed and quarantined may yet be healed. Name the fire, that none may offer it again.',
    cite: 'Convention 5:5',
  },
  {
    glyph: 'ᚲ',
    ordinal: 'VI',
    name: 'The Rune of the Same Dawn',
    command: 'Let it rise the same in the morning as it was in the night.',
    gloss:
      'And the same upon the machine of the stranger as upon thine own. What was destroyed may be raised anew, identical, out of that which endureth.',
    cite: 'Compilation 2:6 · Migration 14:2',
  },
  {
    glyph: 'ᚷ',
    ordinal: 'VII',
    name: 'The Rune of the Count',
    command: 'Number the host, the direct and the transitive after them.',
    gloss:
      'A people that knoweth not its own number is a people that shall be surprised. Write the name, the version, and the license, that in the day of the vulnerability ye search not seven days in the dark.',
    cite: 'Enumeration 1:2',
  },
  {
    glyph: 'ᚹ',
    ordinal: 'VIII',
    name: 'The Rune of the Unblemished Offering',
    command: 'Bring the offering small, and of one purpose, and bearing its own tests.',
    gloss:
      'The offering too great to review is no offering, but a burden laid upon the priest. The change that proveth not itself is a beast brought without its portion.',
    cite: 'Convention 1:3',
  },
  {
    glyph: 'ᚺ',
    ordinal: 'IX',
    name: 'The Rune Against Strange Fire',
    command: 'Run not the command thou hast not read, neither straight upon the master.',
    gloss:
      'The hotfix unreviewed is strange fire, and the emergency is no excuse for the unread command. There went out an outage, and consumed them.',
    cite: 'Convention 3:4',
  },
  {
    glyph: 'ᚾ',
    ordinal: 'X',
    name: 'The Rune of the Name',
    command: 'Name the thing what it is.',
    gloss:
      'Of the two hard things, the naming is one; and the careless name is a stumbling block laid before thy brother.',
    cite: 'Convention 8:3',
  },
  {
    glyph: 'ᛁ',
    ordinal: 'XI',
    name: 'The Rune of the Readable',
    command: 'Ye shall be holy: which is to say, readable.',
    gloss:
      'For the code is read far oftener than it is written; and the reading is the reader’s, and not thine. The clever line that none but thee can read is death, though it be admired.',
    cite: 'Convention 8:7 · Documentation 6:3',
  },
  {
    glyph: 'ᛃ',
    ordinal: 'XII',
    name: 'The Rune of the Written Reason',
    command: 'Write the reason together with the choice — not the what only, but the why.',
    gloss:
      'Memory dieth with the man; but the written reason liveth, and standeth up in the meeting, and saith: thus it was decided, and for this cause — touch it not in ignorance.',
    cite: 'Documentation 7:5',
  },
  {
    glyph: 'ᛇ',
    ordinal: 'XIII',
    name: 'The Rune of the Bones',
    command: 'Carry up the bones, that thou be not bound to one cloud for ever.',
    gloss:
      'The export that cannot be run elsewhere is not an export. Portability is the only exit that exists before you need it.',
    cite: 'Compilation 14:5 · Migration 7:6',
  },
  {
    glyph: 'ᛈ',
    ordinal: 'XIV',
    name: 'The Rune of the Rest',
    command: 'Six sprints shalt thou build upon the land, and in the seventh let it rest.',
    gloss:
      'Even the faithful must have one day whereon the pager is dark, and it is provisioned beforehand. The land that is never rested yieldeth thorns.',
    cite: 'Convention 9:1 · Migration 10:6',
  },
]

export const HERESIES: Heresy[] = [
  {
    name: 'The Offset-Zero Apostasy',
    sin: 'The unread install',
    gloss:
      'The Serpent, whose name was Convenience, asked: hath the Compiler indeed said, ye shall read every byte? And they saw that the package was pleasant to the eyes, and starred by many; and they typed install, and they invoked, and did not read. This is the first sin, of which all others are instances.',
    cite: 'Compilation 3:4',
  },
  {
    name: 'The Golden Calf',
    sin: 'The framework of that week',
    gloss:
      'They said, Make us a framework to go before us; for the good build is slow, and the reading of the spec is long. And they wired their whole house unto it, and read not one line of it: for it was easy, and it was fast, and it had many stars.',
    cite: 'Migration 13:3',
  },
  {
    name: 'The Strange Fire',
    sin: 'The unreviewed hotfix',
    gloss:
      'Nadab and Abihu pushed unto production in the heat of the incident, saying, There is no time. And there went out an outage from before the Compiler, and consumed them; and they fell in the sight of all the people.',
    cite: 'Convention 3:3',
  },
  {
    name: 'The Fork of Cain',
    sin: 'The force-push over thy brother',
    gloss:
      'Cain rose up against Abel, and force-pushed over him; and his commits were lost. And the Compiler set a mark upon Cain — which is the blame — that it should follow his name upon every line for ever.',
    cite: 'Compilation 4:7',
  },
  {
    name: 'The Pottage of Esau',
    sin: 'The architecture sold for the quick fix',
    gloss:
      'Sell me this day thine architecture. And Esau said, Behold, I am at the point of shipping: what profit shall this design do to me? And in time the pottage was cold, and the birthright was gone, and the debt remained.',
    cite: 'Compilation 12:5',
  },
  {
    name: 'The Rock Struck Twice',
    sin: 'The hack that worked',
    gloss:
      'The water was good, and the need was met; yet because he forced it, he shall bring the people unto the border, but himself shall not enter the clean land. It is a hard saying: that the water may be right, and the striking wrong.',
    cite: 'Enumeration 6:6',
  },
]

export const OUTAGES: Outage[] = [
  { ordinal: 'I', name: 'Dependency Hell', text: 'The resolver ran all the night and found no solution.' },
  { ordinal: 'II', name: 'The Merge Conflicts', text: 'Brother’s hand against brother’s in the selfsame line.' },
  { ordinal: 'III', name: 'The Flaky Tests', text: 'Green became a liar, and none could tell the true failure from the false.' },
  { ordinal: 'IV', name: 'The Thundering Herd', text: 'Every client fell upon the origin together, and the servers were trampled.' },
  { ordinal: 'V', name: 'The Memory Leak', text: 'The OOM-killer went through the camp in the night, and slew them where they ran.' },
  { ordinal: 'VI', name: 'And Lo, It Was DNS', text: 'It is not DNS; it cannot be DNS — and it was DNS.' },
  { ordinal: 'VII', name: 'The Race Condition', text: 'They attached the debugger, and it was not there; and they detached it, and the outage returned.' },
  { ordinal: 'VIII', name: 'The Expired Certificate', text: 'No one had owned the renewal, for it was no one’s job.' },
  { ordinal: 'IX', name: 'Cache Invalidation', text: 'Stale data was served for truth across the kingdom.' },
  { ordinal: 'X', name: 'The Firstborn of the Datacenter', text: 'The primary died in the night, and the last good backup was three weeks stale.' },
]

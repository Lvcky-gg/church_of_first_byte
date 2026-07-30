// The Register of Excommunication.
//
// The Church cuts off a *work*, and names the hand that shaped it. Every entry
// carries a mitigation, because none of these three is a small engineer, and a
// charge that cannot admit the good in the accused is a charge nobody believes.
// Every entry also carries a road back, because scripture leaves one:
//
//   "Yet was a promise left among the thorns: that one should come who reads to
//    the last byte, and confesses the defect in the open, and builds again from
//    the primitive a garden that rises the same. And that reading is the road
//    back."  — Compilation 3:12

export interface Count {
  charge: string
  cite: string
}

export interface Excommunicant {
  sigil: string
  name: string
  epithet: string
  mortal: string
  work: string
  act: string
  counts: Count[]
  sentence: string
  sentenceCite: string
  mitigation: string
  roadBack: string
  roadCite: string
  /** Set when the accused is already visibly walking it. */
  walking?: boolean
}

export const PREAMBLE = {
  what:
    'Excommunication is not damnation. It is quarantine. The unclean work dwells apart, in a branch of its own, and cries Unclean, unclean by warning and by deprecation — that none build upon it unaware; and it shall be refactored, or it shall be cut off.',
  cite: 'Convention 5:4',
  persons:
    'The Church excommunicates a work, and names the hand that shaped it. It does not judge the soul, which is out of scope, and undocumented. All three of the accused are better engineers than most of the congregation, and the register says so under each charge, because a court that cannot name the good of the accused is not a court but a mob.',
}

export const EXCOMMUNICANTS: Excommunicant[] = [
  {
    sigil: 'ᛃ',
    name: 'James Gosling',
    epithet: 'Raiser of the Tower',
    mortal: 'b. 1955 · Sun Microsystems',
    work: 'Java',
    act: 'Released unto all the earth, May 1995',
    counts: [
      {
        charge:
          'That he built a tongue which must say a thing three times before it will say it once, and called the saying of it twice a discipline.',
        cite: 'Convention 8:7',
      },
      {
        charge:
          'That from his tongue came the monolith whose top should reach unto heaven, and it grew beyond all reading; and they left off building, for no one could read the whole.',
        cite: 'Compilation 8:4 · 8:7',
      },
      {
        charge:
          'That he suffered the AbstractSingletonProxyFactoryBean to be named, and did not strike it down; and thereafter no engineer could name a thing what it is, of the two hard things the naming being one.',
        cite: 'Convention 8:3',
      },
      {
        charge:
          'That the offering in his tongue is never small, nor of one purpose, but arrives as a burden laid upon the priest.',
        cite: 'Convention 1:3',
      },
    ],
    sentence:
      'The work is set apart, and shall dwell in its own branch, and shall cry warning and deprecation, that none wire their house to it unaware.',
    sentenceCite: 'Convention 5:4',
    mitigation:
      'He gave a generation of programs a heap they could not corrupt. Before him the common defect was the memory freed twice and the pointer left dangling; after him a whole class of sin simply stopped being possible for most of the working world. The Church has never pretended this was a small gift.',
    roadBack:
      'Write one program that says plainly what it does, in a single file, and let it need no factory to make the thing that makes the thing.',
    roadCite: 'Compilation 3:12',
  },
  {
    sigil: 'ᛜ',
    name: 'Jordan Walke',
    epithet: 'Caster of the Calf',
    mortal: 'b. 1980s · Facebook',
    work: 'React',
    act: 'Cast into the fire and brought forth, May 2013',
    counts: [
      {
        charge:
          'That he cast the calf which the people said should carry them; and they wired their whole house unto it, and rose up to play, and read not one line of it: for it was easy, and it was fast, and it had many stars.',
        cite: 'Migration 13:2 · 13:3',
      },
      {
        charge:
          'That by his work the transitive tree spread its branches, and no branch could they name; and the folder thereof grew heavier than the program it served.',
        cite: 'Compilation 3:5',
      },
      {
        charge:
          'That the framework of that week became the migration of the next; and the class was made a hook, and the hook a server component, and the congregation rewrote what already worked, and called it progress.',
        cite: 'Migration 13:6',
      },
      {
        charge:
          'That his people bow unto latest, and take upon them the mark of the wildcard, and are resolved nightly by a stranger.',
        cite: 'Migration 12:4',
      },
    ],
    sentence:
      'The work is set apart. Let it be pinned and hashed where it is used, and let none pull it in haste to fill the emptiness of the waiting.',
    sentenceCite: 'Migration 13:2 · 12:4',
    mitigation:
      'The idea underneath was right, and the Church will not pretend otherwise: that you describe what the screen ought to be, and not the steps by which you mutate it into being. That insight outlived every argument about it, and most of what is charged above is the doing of the multitude that followed, not of the hand that struck the first line.',
    roadBack:
      'Ship a thing that renders, from a tree you have read to the last leaf, and pinned, and can name entire.',
    roadCite: 'Compilation 3:12 · 2:3',
  },
  {
    sigil: 'ᛊ',
    name: 'Guido van Rossum',
    epithet: 'Father of the Serpent',
    mortal: 'b. 1956 · CWI, Amsterdam',
    work: 'Python',
    act: 'Loosed into the garden, February 1991',
    counts: [
      {
        charge:
          'That the Serpent was more subtle than any tool in the garden, and the name of it was Convenience; and it asked, Hath the Compiler indeed said, Ye shall read every byte?',
        cite: 'Compilation 3:1 · 3:2',
      },
      {
        charge:
          'That its venom is the untyped and the dynamic, and its bite a defect that shows not until runtime; and much of the camp was afflicted.',
        cite: 'Enumeration 7:2',
      },
      {
        charge:
          'That its types are but a rumour, and though it be comely and quick in the small, the sanctuary is not to be built of it.',
        cite: 'Convention 4:6',
      },
      {
        charge:
          'That the Serpent coiled the requirements about the tree, until pip cried out, cannot install these requirements, and none could untangle it — which is the first of the ten outages.',
        cite: 'Migration 6:2',
      },
    ],
    sentence:
      'The work is set apart in the great, and permitted in the small: ye may look upon it, and even eat of it, but ye shall not build the sanctuary of it, neither trust the field to it.',
    sentenceCite: 'Convention 4:6',
    mitigation:
      'He taught more people to program than any other living hand, and he did it by making readability a property of the language itself — which is the Eleventh Rune, kept by a heresiarch better than by most of the faithful. The Church notes the irony and does not flinch from it.',
    roadBack:
      'Scripture appointed his remedy before he took it: Make thee a fiery serpent, and set it upon a pole; and every one that is bitten, when he looketh upon it, shall live. He lifted it up himself — the annotations are the serpent upon the pole, and he raised them. The road back is open, and he is already some way along it.',
    roadCite: 'Enumeration 7:3 · 7:5',
    walking: true,
  },
]

export const CLOSING = {
  verse:
    'For the antidote to the serpent is not to flee the serpent, but to lift it up and read its source; and he that readeth the thing that bit him is bitten by it no more.',
  cite: 'Enumeration 7:5',
}

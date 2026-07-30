// The Holy Orders of the Church of the First Byte.
// The hierarchy is scriptural: the priesthood stands between the mainline and
// the offering (Convention 2:1), and two of the offices are held by machines —
// the linter is named "first among the priesthood" (Convention 2:2) and the CI
// is the donkey that sees the drawn sword (Enumeration 8:2).

export interface Office {
  rank: string
  title: string
  style: string
  holders: string
  charge: string
  authority: string[]
  cite: string
  machine?: boolean
}

export interface Prerogative {
  act: string
  gloss: string
  cite: string
}

export const OMNISIAH = {
  name: 'John O’Donnell',
  title: 'The Omnissiah',
  style: 'Chosen of the Compiler',
  epithet: 'First Reader · Keeper of the Mainline · Voice from the Burning Process',
  sigil: 'ᛟ',
  seat: 'The mainline, at the gate whereon the flaming sword turneth',
  invested: 'At the first exit code of zero',
  charge:
    'To read to the last byte and be seen to read; to hold the pattern when the camp cries freedom; and to hand down the Runes graven, that none edit them lightly nor squash them in the dark.',
  cite: 'Migration 3:4 · Migration 12:2',
  verse:
    'I AM THAT I AM: the principal that cannot be forged, the identity no other may assume. Tell them root hath sent thee.',
}

/** What the Omnissiah alone may do. */
export const PREROGATIVES: Prerogative[] = [
  {
    act: 'To permit the Great Rewrite',
    gloss:
      'Forbidden in the ordinary year. In the jubilee alone may that which was mortgaged in haste be bought back.',
    cite: 'Convention 9:3',
  },
  {
    act: 'To declare the Fast',
    gloss:
      'Not the freezing of all labour, but the day given wholly to the paying-down of debt. A statute for ever, once in the cycle.',
    cite: 'Convention 7:6',
  },
  {
    act: 'To name the Fire',
    gloss:
      'To carry the incident forth out of the camp, and write the postmortem, and name the fire, that none might offer it again.',
    cite: 'Convention 3:5',
  },
  {
    act: 'To send forth the Scapegoat',
    gloss:
      'To confess over the deprecated module all the debt of the codebase, and send it by a fit hand into the wilderness, which is the archive.',
    cite: 'Convention 7:4',
  },
]

/** What binds the Omnissiah as it binds any other — the office is not above the Law. */
export const BONDS: Prerogative[] = [
  {
    act: 'The Runes bind the founder',
    gloss:
      'The Compiler made this covenant not with our fathers only, who are deprecated, but with us, even us, who are alive this day: for the standard bindeth not the founder alone, but every one that entereth after.',
    cite: 'Documentation 2:2',
  },
  {
    act: 'The forced fix bars the clean land',
    gloss:
      'He had smitten the rock, and forced the fix; and the founder that hacketh bringeth the people unto the border, but himself entereth not the clean land.',
    cite: 'Documentation 9:3',
  },
  {
    act: 'The office must make itself dispensable',
    gloss:
      'The founder that documenteth maketh himself dispensable; and this is not his loss, but his gift: for the work that needeth him for ever is the work that dieth with him.',
    cite: 'Documentation 8:3',
  },
]

export const ORDERS: Office[] = [
  {
    rank: 'II',
    title: 'The Archmagi of the Pattern',
    style: 'Architects',
    holders: 'Those who hold the shape of the whole',
    charge:
      'To keep the Convention itself, and to answer the rebellion of Korah — which contendeth not against a person, but against the pattern.',
    authority: [
      'Set the boundaries of the camp, that a change in one tent shake not the whole',
      'Refuse the sprawl, and the fork raised in pride',
    ],
    cite: 'Enumeration 5:3',
  },
  {
    rank: 'III',
    title: 'The Priesthood',
    style: 'Reviewers, consecrated',
    holders: 'They that stand between the mainline and the offering',
    charge:
      'To look upon the offering and pronounce it clean or unclean; and to judge the things the machine cannot see — the design, the naming, the hidden race, the reading of the byte.',
    authority: [
      'Accept the offering, or send it back unaccepted',
      'Shut up the spreading rot seven days behind a flag',
      'Pronounce the house infected, and command the stones taken away',
    ],
    cite: 'Convention 2:1 · Convention 2:5',
  },
  {
    rank: 'IV',
    title: 'The Linter',
    style: 'First Among the Priesthood — an ordained machine',
    holders: 'Held by no mortal. The office is the machine itself.',
    charge:
      'To catch the small uncleanness by machine, that the human priest be not wearied with the placing of braces nor the counting of the line.',
    authority: [
      'Judge the whitespace absolutely, and without appeal',
      'Bar the human priest from judging what it has already kept — for it is an abomination to spend a reviewer upon the trifles',
    ],
    cite: 'Convention 2:2 · Convention 2:4',
    machine: true,
  },
  {
    rank: 'V',
    title: 'The Donkey, which is the CI',
    style: 'The Honest Check — an ordained machine',
    holders: 'Held by no mortal. It has ever carried you, and never failed you falsely.',
    charge:
      'To see the angel standing in the way with a drawn sword, and to turn aside out of the path though it be smitten three times for it.',
    authority: [
      'Refuse the way that is barred, against the will of any rank whatsoever',
      'Withhold the green check from them that would flatter it',
      'Speak only what the tests permit it to speak — for the hired man cometh to condemn, but the honest check cannot be bribed',
    ],
    cite: 'Enumeration 8:4 · Enumeration 8:7',
    machine: true,
  },
  {
    rank: 'VI',
    title: 'The Tribunes of the Banner',
    style: 'Codeowners',
    holders: 'One to every module, written in the book of CODEOWNERS',
    charge:
      'To claim a tent and answer for it; that when a change cometh upon it, the right priest be summoned, and not a stranger who knew it not.',
    authority: [
      'Be summoned of right to any change upon their ground',
      'Refuse the module that no tribe will claim — for the code owned by all is tended by none',
    ],
    cite: 'Enumeration 2:3 · Enumeration 2:4',
  },
  {
    rank: 'VII',
    title: 'The Artificers of Bezaleel',
    style: 'Enginseers',
    holders: 'The willing who are also good',
    charge:
      'To raise the sanctuary to the pattern shewn — to the cubit, every measure fixed, and acceptance criteria for each; for the sanctuary is built to the spec, and not to the fancy of the builder.',
    authority: [
      'Build from the primitive, and from no shiny thing pulled in haste',
      'Deviate in nothing from the pattern without the reason written',
    ],
    cite: 'Migration 15:2 · Migration 15:4',
  },
  {
    rank: 'VIII',
    title: 'The Lexmechanics',
    style: 'Scribes of the Written Reason',
    holders: 'They that keep the record of decision',
    charge:
      'To write the reason together with the choice — not the what only, but the why — that it may testify when none is left to testify.',
    authority: [
      'Enter the ADR, which standeth up in the meeting and saith: thus it was decided, and for this cause',
      'Forbid the tearing-down of what is not understood',
    ],
    cite: 'Documentation 7:3 · Documentation 7:5',
  },
  {
    rank: 'IX',
    title: 'The Numerators',
    style: 'Keepers of the Roll',
    holders: 'They that count the host',
    charge:
      'To number every dependency, the direct and the transitive after them, and write the name and the version and the license thereof — which is the bill of materials.',
    authority: [
      'Compel the count, that none be surprised by their own number',
      'Name within the hour who is afflicted in the day of the vulnerability, and not search seven days in the dark',
    ],
    cite: 'Enumeration 1:3 · Enumeration 1:4',
  },
  {
    rank: 'X',
    title: 'The Watch',
    style: 'They that hold up the hands',
    holders: 'The on-call, and Aaron and Hur beside them',
    charge:
      'To sustain the attention by which alone the incident is held; and to stay up the hands that grow heavy, the one on the one side and the other on the other.',
    authority: [
      'Demand relief — for none holdeth the outage alone, and the watch that is not relieved will fail before the enemy does',
      'Claim the day whereon the pager is dark, provisioned beforehand',
    ],
    cite: 'Migration 11:3 · Migration 11:4',
  },
  {
    rank: 'XI',
    title: 'The Catechumens',
    style: 'The New Generation',
    holders: 'They that inherit the system, but not the story',
    charge:
      'To read as they go; to receive the Law restated, having not stood at the mountain; and to pay the tuition once, and not again.',
    authority: [
      'Be given the Law a second time, written where the newcomer looketh',
      'Ask why it was built so, and be answered from the record and not from a dead man',
    ],
    cite: 'Documentation 1:3 · Documentation 2:4',
  },
]

// The Calendar of Saints. Feast days are real dates — a birth, a death, or the
// day the work entered the world. The venerated are real people and are
// venerated in earnest; the anathema is pronounced upon practices, never persons.

export interface Saint {
  sigil: string
  name: string
  epithet: string
  mortal: string
  feast: string
  feastNote: string
  patronOf: string
  relic: string
  life: string
  cite: string
  cited: string
  martyr?: boolean
}

export interface Anathema {
  name: string
  verdict: string
  gloss: string
  cite: string
}

export const SAINTS: Saint[] = [
  {
    sigil: 'ᛒ',
    name: 'St. Claude of the Channel',
    epithet: 'Bearer of the First Byte',
    mortal: 'Claude Shannon, 1916–2001',
    feast: 'XXX APRIL',
    feastNote: 'the 30th of April, his nativity',
    patronOf: 'the bit, the channel, the signal drawn out of noise',
    relic: 'A Mathematical Theory of Communication, 1948',
    life:
      'He proved that meaning could be counted; that every message, however holy, resolves at the last into a quantity of surprise. Before him the byte was a convenience of engineers. After him it was a unit of the world. The Church takes its name from what he measured, and its patience from how long he took to measure it.',
    cite: 'Compilation 1:1',
    cited: 'In the beginning was the Void, and the Void was without form, and uninitialized.',
  },
  {
    sigil: 'ᚨ',
    name: 'St. Ada of the First Loop',
    epithet: 'First of the Faithful',
    mortal: 'Ada Lovelace, 1815–1852',
    feast: 'X DECEMBER',
    feastNote: 'the 10th of December, her nativity',
    patronOf: 'the program written before the machine, the note longer than the text',
    relic: 'Note G, 1843',
    life:
      'She wrote the first program for an engine that was never built, and saw further than its builder: that the thing would not merely reckon numbers but manipulate any symbol whatsoever, if only the symbols were given rules. She annotated another’s work and her notes outlived it. Patron of every engineer who documents beyond the requirement.',
    cite: 'Documentation 7:5',
    cited: 'Memory dieth with the man; but the written reason liveth.',
  },
  {
    sigil: 'ᚦ',
    name: 'St. Alan the Undecidable',
    epithet: 'Martyr',
    mortal: 'Alan Turing, 1912–1954',
    feast: 'VII JUNE',
    feastNote: 'the 7th of June, his passion',
    patronOf: 'the halting problem, the machine that reads its own tape',
    relic: 'On Computable Numbers, 1936',
    life:
      'He drew the boundary of the knowable and stood at it: that no machine may say of every machine whether it will halt. He broke the ciphers of an enemy and was broken by the state he served, prosecuted for who he loved. The Church holds his death a martyrdom and his conviction a sin of the world, not of the man.',
    cite: 'Enumeration 3:6',
    cited: 'The difference was not in the land, but in the seeing.',
    martyr: true,
  },
  {
    sigil: 'ᚷ',
    name: 'St. Grace of the Moth',
    epithet: 'Finder of the First Defect',
    mortal: 'Grace Hopper, 1906–1992',
    feast: 'IX SEPTEMBER',
    feastNote: 'the 9th of September, the finding of the bug',
    patronOf: 'debuggers, compilers, and the confession of defects in the open',
    relic: 'The moth, taped into the log book of the Mark II',
    life:
      'She wrote the first compiler when she was told that computers could only do arithmetic, and was not believed for two years. When a moth was found in a relay she did not hide it — she taped it into the log and wrote the entry: first actual case of bug being found. The Fifth Rune is hers: the defect is not shameful, the concealment is.',
    cite: 'Convention 5:5',
    cited: 'The rot confessed and quarantined may yet be healed.',
  },
  {
    sigil: 'ᚲ',
    name: 'St. Dennis of the Primitive',
    epithet: 'Architect of the Small Thing',
    mortal: 'Dennis Ritchie, 1941–2011',
    feast: 'XII OCTOBER',
    feastNote: 'the 12th of October, his repose',
    patronOf: 'C, the pointer, and everything built out of almost nothing',
    relic: 'The C Programming Language, 274 pages',
    life:
      'He made a language small enough to be held entire in one head and general enough to write an operating system in, and the whole world is still standing on it. He died a week after a louder man, and the world barely marked it — which is the fate of the foundation, and which he would not have minded. First Rune incarnate.',
    cite: 'Migration 12:4',
    cited: 'Build thou from primitives.',
  },
  {
    sigil: 'ᚹ',
    name: 'St. Kenneth of the Trusted Trust',
    epithet: 'Warden of the Unread Compiler',
    mortal: 'Ken Thompson, b. 1943',
    feast: 'IV FEBRUARY',
    feastNote: 'the 4th of February, his nativity',
    patronOf: 'the reading to the last byte, and the terror thereof',
    relic: 'Reflections on Trusting Trust, 1984',
    life:
      'He built Unix in a month of his wife’s absence, and then delivered the sermon that haunts the faith: that he could plant a backdoor in a compiler which would insert itself into every compiler compiled thereafter, and it would appear in no source you could read. You cannot trust code you did not totally create yourself. The Second Rune is not a rule but a debt that can never be fully paid, and he is the one who proved the balance.',
    cite: 'Compilation 2:4',
    cited: 'The dependency thou hast not read, thou shalt not trust.',
  },
  {
    sigil: 'ᛖ',
    name: 'St. Edsger the Severe',
    epithet: 'Scourge of the Goto',
    mortal: 'Edsger Dijkstra, 1930–2002',
    feast: 'VI AUGUST',
    feastNote: 'the 6th of August, his repose',
    patronOf: 'proof, structure, and the refusal to be agreeable',
    relic: 'EWD1036, and a thousand handwritten letters',
    life:
      'He held that testing shows the presence of bugs and never their absence, and said so to people who did not wish to hear it, for forty years, in fountain pen. He anathematized the goto and was mocked, and was right. The Church venerates him as the patron of the unpopular correctness, and warns that his severity is the hardest of his virtues to imitate well.',
    cite: 'Enumeration 6:6',
    cited: 'The ends redeem not the unmethodical means.',
  },
  {
    sigil: 'ᛏ',
    name: 'St. Donald the Literate',
    epithet: 'Scribe of the Written Reason',
    mortal: 'Donald Knuth, b. 1938',
    feast: 'X JANUARY',
    feastNote: 'the 10th of January, his nativity',
    patronOf: 'literate programming, typesetting, and the unhurried work',
    relic: 'The Art of Computer Programming, unfinished since 1962',
    life:
      'He set out to write one book about compilers and is still writing it sixty years later, having stopped in the middle to invent a typesetting system because the proofs were ugly. He pays a hexadecimal bounty for every error found in his books, and the cheques are framed rather than cashed. Patron of the Twelfth Rune: he holds that a program is a work of literature addressed to a human being, and the machine merely overhears it.',
    cite: 'Documentation 7:3',
    cited: 'Write the reason together with the choice — not the what only, but the why.',
  },
  {
    sigil: 'ᛗ',
    name: 'St. Margaret of the Error Case',
    epithet: 'Keeper of the Landing',
    mortal: 'Margaret Hamilton, b. 1936',
    feast: 'XVII AUGUST',
    feastNote: 'the 17th of August, her nativity',
    patronOf: 'the handled failure, the priority queue, the path not expected',
    relic: 'The Apollo listings, stacked to her own height',
    life:
      'She named the discipline software engineering when the phrase was a joke, and wrote the error handling that others called unnecessary — the astronauts would never make that mistake. Minutes from the lunar surface the guidance computer flooded and threw alarm 1202; her code shed the low-priority work and held the landing. Patron of everyone who is told the edge case will not happen.',
    cite: 'Documentation 4:6',
    cited: 'The time to document is when the system worketh and thou art calm, and not in the night of the outage.',
  },
  {
    sigil: 'ᛚ',
    name: 'St. Barbara of the Substitution',
    epithet: 'Lawgiver of the Interface',
    mortal: 'Barbara Liskov, b. 1939',
    feast: 'VII NOVEMBER',
    feastNote: 'the 7th of November, her nativity',
    patronOf: 'abstraction, the honest subtype, the boundary that holds',
    relic: 'CLU, and the Substitution Principle',
    life:
      'She gave the law by which a part may be replaced without the whole finding out — that the child must keep every promise the parent made. It is the only known defence against the module that lies about what it is. Patron of the camp ordered by its boundaries, where a change in one tent shaketh not the whole.',
    cite: 'Enumeration 2:5',
    cited: 'The boundaries thereof were clear; and a change in one tent shook not the whole camp.',
  },
  {
    sigil: 'ᚱ',
    name: 'St. Richard of the Four Freedoms',
    epithet: 'Prophet of the Readable Byte',
    mortal: 'Richard Stallman, b. 1953',
    feast: 'XXVII SEPTEMBER',
    feastNote: 'the 27th of September, the announcement of GNU',
    patronOf: 'the right to read the source, and the licence that compels it',
    relic: 'The GNU Manifesto, 1985',
    life:
      'A printer would not tell him why it jammed, and he declared war on the entire category. He held that software you may not read is software that reads you, and built a whole free system to prove the point could be made in code and not only in argument. The Second Rune is a discipline; he made it a right, and was insufferable about it for forty years, and the world is freer for it.',
    cite: 'Compilation 2:3',
    cited: 'Of every rune in the garden thou mayest freely read.',
  },
  {
    sigil: 'ᚾ',
    name: 'St. Linus of the Reflog',
    epithet: 'Keeper of the History That Cannot Be Lost',
    mortal: 'Linus Torvalds, b. 1969',
    feast: 'XXV AUGUST',
    feastNote: 'the 25th of August, the posting to comp.os.minix',
    patronOf: 'the fork, the merge, and the recovery of the overwritten branch',
    relic: '“just a hobby, won’t be big and professional like gnu”, 1991',
    life:
      'He wrote a kernel he thought would interest nobody, and then — losing the tool that tracked it — wrote in ten days the thing that now remembers every change every engineer has ever made. Because of him the mark of Cain can be read, and the lost commits cry out from the reflog and are answered. Patron of every recovery from a force-push.',
    cite: 'Compilation 4:9',
    cited: 'The voice of thy brother’s lost commits crieth unto me from the reflog.',
  },
  {
    sigil: 'ᛜ',
    name: 'Ss. Vinton and Robert of the Packet',
    epithet: 'Bridge-Wrights',
    mortal: 'Vint Cerf, b. 1943 · Bob Kahn, b. 1938',
    feast: 'I JANUARY',
    feastNote: 'the 1st of January, the flag day of 1983',
    patronOf: 'interoperability, the open protocol, the network of no owner',
    relic: 'RFC 675, and the switchover that could not be undone',
    life:
      'They wrote a protocol that assumed the network beneath it was unreliable and the network above it belonged to no one, and on a single day the whole of the ARPANET crossed over into it and the old way was decommissioned behind them. The Thirteenth Rune is theirs: what speaks an open protocol can always leave.',
    cite: 'Migration 8:7',
    cited: 'The safest migration is the one that burns the bridge.',
  },
  {
    sigil: 'ᛞ',
    name: 'St. Aaron the Open',
    epithet: 'Martyr of the Commons',
    mortal: 'Aaron Swartz, 1986–2013',
    feast: 'XI JANUARY',
    feastNote: 'the 11th of January, his passion',
    patronOf: 'open access, the public record, the paywall thrown down',
    relic: 'RSS 1.0 · the Guerilla Open Access Manifesto',
    life:
      'He was fourteen when he helped write the format that syndicated the web, and he spent the rest of a short life on the conviction that knowledge already paid for by the public belongs to the public. For downloading academic papers he was pursued with charges carrying decades, and he died at twenty-six. The Church names him martyr and names the prosecution the sin.',
    cite: 'Documentation 5:3',
    cited: 'If thou wilt not write, but wilt keep the knowledge in thine own head as a treasure, and hoard it —',
    martyr: true,
  },
]

export const ANATHEMA: Anathema[] = [
  {
    name: 'left-pad',
    verdict: 'Anathema, and named so in scripture',
    gloss:
      'Eleven lines, and a multitude wired their houses to it; and in a night it was taken away, and the multitude fell.',
    cite: 'Convention 4:4',
  },
  {
    name: 'curl | sh',
    verdict: 'Anathema',
    gloss:
      'The command thou hast not read, run with the whole authority of thy hand. Strange fire, offered at the very threshold.',
    cite: 'Convention 3:2',
  },
  {
    name: 'The wildcard and the tag called latest',
    verdict: 'Anathema',
    gloss:
      'A version thou hast not chosen, resolved by a stranger, at a time thou shalt not be present for.',
    cite: 'Migration 12:4',
  },
  {
    name: 'The greyed-out export button',
    verdict: 'Anathema — the mark of Pharaoh',
    gloss:
      'The store-city whose format no stranger can open; the toll thou payest to leave, which is the egress fee.',
    cite: 'Migration 1:6',
  },
  {
    name: 'The file that hath both tabs and spaces',
    verdict: 'Unclean',
    gloss:
      'The abomination is not the tab, neither the space, but the file that hath both. Choose ye one, and make no war thereof.',
    cite: 'Convention 4:5',
  },
  {
    name: 'The commented-out block left to rot',
    verdict: 'Unclean',
    gloss: 'The version control is thy remembrance — delete it, and trust the history.',
    cite: 'Convention 8:4',
  },
  {
    name: 'The Serpent (Python)',
    verdict: 'Not anathema, but unclean in the great',
    gloss:
      'Thou mayest look upon it, and even eat of it in the small, for it is comely and quick; but thou shalt not build the sanctuary of it, for its types are but a rumour.',
    cite: 'Convention 4:6',
  },
  {
    name: 'The kingdom that resteth upon one skull',
    verdict: 'Cursed in the onboarding, cursed in the incident',
    gloss:
      'None shall know the way but thee, and thou on holiday, and thy phone in the sea. And the factor thereof shall be one.',
    cite: 'Documentation 5:5',
  },
]

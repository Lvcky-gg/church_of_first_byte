// The listed destinations. Shared by the header, the drawer, and the
// not-found page, so the ways back can never drift from the ways in.
//
// The order is deliberately absent: it is unlisted, and reached only by the word.

export interface Tab {
  id: string
  label: string
  glyph: string
  note: string
}

export const TABS: Tab[] = [
  { id: 'sanctum', label: 'Sanctum', glyph: 'ᛞ', note: 'The seal, the creed, the canon' },
  { id: 'beliefs', label: 'Core Beliefs', glyph: 'ᚦ', note: 'The Fourteen Runes and the heresies' },
  { id: 'clergy', label: 'Clergy', glyph: 'ᛟ', note: 'The Omnissiah and the holy orders' },
  { id: 'saints', label: 'Saints', glyph: 'ᛗ', note: 'The calendar and the anathema' },
  { id: 'excommunicants', label: 'Excommunicants', glyph: 'ᛦ', note: 'The register, and the road back' },
  { id: 'byteble', label: 'The Byteble', glyph: 'ᛒ', note: 'All five books, searchable' },
]

// Transcribes the plain-text Byteble into src/data/byteble.json.
// Run via `npm run byteble` (wired into predev / prebuild).
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const source = resolve(root, 'The-Byteble')
const out = resolve(root, 'src/data/byteble.json')

// file on disk -> canonical book identity
const CANON = [
  { file: 'compilation', numeral: 'I', title: 'The Book of Compilation', slug: 'compilation' },
  { file: 'migration', numeral: 'II', title: 'The Book of Migration', slug: 'migration' },
  { file: 'code-standards', numeral: 'III', title: 'The Book of Convention', slug: 'convention' },
  { file: 'enumeration', numeral: 'IV', title: 'The Book of Enumeration', slug: 'enumeration' },
  { file: 'documentation', numeral: 'V', title: 'The Book of Documentation', slug: 'documentation' },
]

const CHAPTER = /^(?:#{1,6}\s*)?Chapter\s+(\d+)\s*[—–-]\s*(.+?)\s*$/
const BOOK_LINE = /^Book\s+[IVXLC]+\s*[—–-]/
const VERSE = /^(\d+):(\d+)\s+(.*)$/

// The scripture contains literal conflict markers (Migration 6:3), so escape
// before the *emphasis* pass turns anything into markup.
const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const markup = (s) =>
  escapeHtml(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')

function parseBook(meta) {
  const path = resolve(source, meta.file)
  if (!existsSync(path)) throw new Error(`missing book: ${path}`)
  const lines = readFileSync(path, 'utf8').split('\n')

  const chapters = []
  let chapter = null

  for (const raw of lines) {
    const line = raw.trim()
    if (!line || BOOK_LINE.test(line)) continue

    const heading = line.match(CHAPTER)
    if (heading) {
      chapter = { number: Number(heading[1]), title: heading[2], verses: [] }
      chapters.push(chapter)
      continue
    }

    const verse = line.match(VERSE)
    if (verse && chapter) {
      chapter.verses.push({
        chapter: Number(verse[1]),
        number: Number(verse[2]),
        ref: `${verse[1]}:${verse[2]}`,
        text: markup(verse[3]),
      })
    } else if (verse) {
      throw new Error(`${meta.file}: verse ${verse[1]}:${verse[2]} before any chapter`)
    }
  }

  if (!chapters.length) throw new Error(`${meta.file}: no chapters parsed`)
  const verses = chapters.reduce((n, c) => n + c.verses.length, 0)
  return { ...meta, chapters, verseCount: verses }
}

const books = CANON.map(parseBook)

mkdirSync(dirname(out), { recursive: true })
writeFileSync(out, JSON.stringify({ books }, null, 2) + '\n')

for (const b of books) {
  console.log(`  ${b.numeral.padEnd(3)} ${b.title.padEnd(28)} ${b.chapters.length} ch  ${b.verseCount} vv`)
}
console.log(`transcribed -> ${out.replace(root + '/', '')}`)

/*
 * family.ts — inlined family catalog (formerly @chirag127/astro-data).
 *
 * De-dep 2026-07-12: the published @chirag127/astro-data package was a stub;
 * this is the canonical family metadata used by Footer, Sidebar, JsonLd, and
 * the /sites + /privacy pages. Community-packages-only: no in-house dep.
 */

export interface FamilySite {
  slug: string
  name: string
  url: string
  /** Section bucket: hub | reading | tools | creative | finance | personal | content */
  category: 'hub' | 'reading' | 'tools' | 'creative' | 'finance' | 'personal' | 'content'
  emoji: string
  tagline: string
}

export interface FamilyPackage {
  slug: string
  npm: string
  category: 'astro' | 'ui' | 'util'
  version?: string
  tagline?: string
}

export const FAMILY = {
  brand: 'Oriz',
  rootOrigin: 'https://oriz.in',
  legalUpdated: '2026-07-12',
  operator: {
    name: 'Chirag Singhal',
    email: 'chirag@oriz.in',
    githubHandle: 'chirag127',
    address: 'Ghaziabad, Uttar Pradesh, India',
  },
  jurisdiction: {
    city: 'Ghaziabad',
    state: 'Uttar Pradesh',
    country: 'India',
  },
} as const

export const FAMILY_SITES: FamilySite[] = [
  {
    slug: 'home',
    name: 'Oriz',
    url: 'https://oriz.in',
    category: 'hub',
    emoji: '◆',
    tagline: 'The family hub — every site, API, and package in one place.',
  },
  {
    slug: 'blog',
    name: 'Blog',
    url: 'https://blog.oriz.in',
    category: 'content',
    emoji: '▦',
    tagline: "Engineer's notebook — dispatches on engineering, finance, books.",
  },
  {
    slug: 'me',
    name: 'CS',
    url: 'https://me.oriz.in',
    category: 'personal',
    emoji: '●',
    tagline: 'Personal portfolio — hero, now, uses, CV, contact.',
  },
  {
    slug: 'lore',
    name: 'Lore',
    url: 'https://lore.oriz.in',
    category: 'reading',
    emoji: '▤',
    tagline: 'Lore — long-form reading and structured book summaries.',
  },
  {
    slug: 'ncert',
    name: 'NCERT',
    url: 'https://ncert.oriz.in',
    category: 'reading',
    emoji: '▣',
    tagline: 'NCERT study notes — browse, search, and download by class and subject.',
  },
  {
    slug: 'cards',
    name: 'Cards',
    url: 'https://cards.oriz.in',
    category: 'finance',
    emoji: '◇',
    tagline: 'Credit & debit card database — compare rewards, fees, benefits.',
  },
  {
    slug: 'finance',
    name: 'Finance',
    url: 'https://finance.oriz.in',
    category: 'finance',
    emoji: '◈',
    tagline: 'India finance calculators — SIP, EMI, tax, retirement.',
  },
  {
    slug: 'links',
    name: 'Links',
    url: 'https://links.oriz.in',
    category: 'content',
    emoji: '▧',
    tagline: 'Curated dev links — tools, references, reading.',
  },
  {
    slug: 'status',
    name: 'Status',
    url: 'https://status.oriz.in',
    category: 'tools',
    emoji: '▨',
    tagline: 'Services status board — live uptime across the fleet.',
  },
  {
    slug: 'knowledge',
    name: 'Knowledge',
    url: 'https://knowledge.oriz.in',
    category: 'content',
    emoji: '▩',
    tagline: 'Knowledge base — the second brain, searchable.',
  },
  {
    slug: 'portfolio-lab',
    name: 'Portfolio Lab',
    url: 'https://portfolio-lab.oriz.in',
    category: 'finance',
    emoji: '◉',
    tagline: 'Max-Sharpe portfolio studio — build and optimize allocations.',
  },
  {
    slug: 'envpact',
    name: 'EnvPact',
    url: 'https://envpact.oriz.in',
    category: 'tools',
    emoji: '◐',
    tagline: 'Sustainability dashboard — environmental impact metrics.',
  },
  {
    slug: 'ipo',
    name: 'IPO',
    url: 'https://ipo.oriz.in',
    category: 'finance',
    emoji: '◑',
    tagline: 'IPO grey-market-premium terminal — live GMP tracking.',
  },
  {
    slug: 'mmi',
    name: 'MMI',
    url: 'https://mmi.oriz.in',
    category: 'finance',
    emoji: '◒',
    tagline: 'Tickertape Market Mood Index — fear & greed gauge.',
  },
  {
    slug: 'nifty',
    name: 'Nifty Signal',
    url: 'https://nifty.oriz.in',
    category: 'finance',
    emoji: '◓',
    tagline: 'Nifty buy-timing signal — data-driven entry timing.',
  },
  {
    slug: 'account',
    name: 'Account',
    url: 'https://account.oriz.in',
    category: 'hub',
    emoji: '◆',
    tagline: 'Central sign-in — one account across the oriz.in fleet.',
  },

  // ── Client-only tools (2026-08-07) ──────────────────────────────────
  {
    slug: 'pdf',
    name: 'PDF',
    url: 'https://pdf.oriz.in',
    category: 'tools',
    emoji: '▤',
    tagline: 'PDF toolkit — merge, split, rotate, reorder, extract, images→PDF.',
  },
  {
    slug: 'img',
    name: 'Image',
    url: 'https://img.oriz.in',
    category: 'tools',
    emoji: '▦',
    tagline: 'Image toolkit — resize, crop, compress, convert, EXIF strip.',
  },
  {
    slug: 'dev',
    name: 'Dev',
    url: 'https://dev.oriz.in',
    category: 'tools',
    emoji: '▧',
    tagline: 'Developer multitool — JSON, base64, JWT, UUID, cron, hash, diff, regex.',
  },
  {
    slug: 'text',
    name: 'Text',
    url: 'https://text.oriz.in',
    category: 'tools',
    emoji: '▨',
    tagline: 'Text toolkit — case, count, dedupe, sort, slugify, find-replace.',
  },
  {
    slug: 'convert',
    name: 'Convert',
    url: 'https://convert.oriz.in',
    category: 'tools',
    emoji: '◐',
    tagline: 'Universal converter — CSV/JSON/YAML/XML, units, bases, colors.',
  },
  {
    slug: 'qr',
    name: 'QR',
    url: 'https://qr.oriz.in',
    category: 'tools',
    emoji: '▩',
    tagline: 'QR studio — generate (url/wifi/vcard/UPI), customize, scan.',
  },
  {
    slug: 'color',
    name: 'Color',
    url: 'https://color.oriz.in',
    category: 'tools',
    emoji: '◉',
    tagline: 'Color studio — picker, palettes, gradients, WCAG contrast.',
  },
  {
    slug: 'md',
    name: 'Markdown',
    url: 'https://md.oriz.in',
    category: 'tools',
    emoji: '▥',
    tagline: 'Markdown studio — live editor + preview, GFM, export HTML/PDF.',
  },
  {
    slug: 'diagram',
    name: 'Diagram',
    url: 'https://diagram.oriz.in',
    category: 'tools',
    emoji: '◈',
    tagline: 'Diagram-as-code — Mermaid live editor, export SVG/PNG, templates.',
  },
  {
    slug: 'resume',
    name: 'Resume',
    url: 'https://resume.oriz.in',
    category: 'tools',
    emoji: '◇',
    tagline: 'Resume builder — form → ATS-clean templates, print→PDF, JSON.',
  },
  {
    slug: 'invoice',
    name: 'Invoice',
    url: 'https://invoice.oriz.in',
    category: 'tools',
    emoji: '◆',
    tagline: 'Invoice generator — line items, tax, currency, INR/GST, print→PDF.',
  },
  {
    slug: 'tts',
    name: 'TTS',
    url: 'https://tts.oriz.in',
    category: 'tools',
    emoji: '◑',
    tagline: 'Text-to-speech — voice/rate/pitch controls, highlight-as-spoken.',
  },
  {
    slug: 'json',
    name: 'JSON',
    url: 'https://json.oriz.in',
    category: 'tools',
    emoji: '◒',
    tagline: 'JSON power tool — format, tree view, JSONPath, JSON↔CSV, diff.',
  },
  {
    slug: 'hash',
    name: 'Hash',
    url: 'https://hash.oriz.in',
    category: 'tools',
    emoji: '◓',
    tagline: 'Crypto/hash toolkit — SHA, HMAC, base64/hex, random, passwords.',
  },
  {
    slug: 'case',
    name: 'Case',
    url: 'https://case.oriz.in',
    category: 'tools',
    emoji: '◧',
    tagline: 'Case converter — camel/snake/kebab/Pascal/CONSTANT/Title/Sentence.',
  },
  {
    slug: 'name',
    name: 'Name',
    url: 'https://name.oriz.in',
    category: 'tools',
    emoji: '◨',
    tagline: 'Name generator — brands, products, usernames, repos; vibe controls.',
  },

  // ── Creative + AI (2026-08-07) ──────────────────────────────────────
  {
    slug: 'chat',
    name: 'Chat',
    url: 'https://chat.oriz.in',
    category: 'creative',
    emoji: '◕',
    tagline: 'Free AI chat — multi-turn, model picker, markdown, history, export.',
  },
  {
    slug: 'muse',
    name: 'Muse',
    url: 'https://muse.oriz.in',
    category: 'creative',
    emoji: '✶',
    tagline: 'AI writing studio — story/poem/lyrics/blog, rewrite, continue.',
  },
  {
    slug: 'persona',
    name: 'Persona',
    url: 'https://persona.oriz.in',
    category: 'creative',
    emoji: '✦',
    tagline: 'AI character chat — build personas, roleplay, save, share via URL.',
  },
  {
    slug: 'quiz',
    name: 'Quiz',
    url: 'https://quiz.oriz.in',
    category: 'creative',
    emoji: '✸',
    tagline: 'AI quiz + flashcards — notes/topic → MCQ or spaced-rep, score, export.',
  },
  {
    slug: 'brand',
    name: 'Brand Kit',
    url: 'https://brand.oriz.in',
    category: 'creative',
    emoji: '✹',
    tagline: 'AI brand-kit — palette + fonts + tagline + logo idea, export tokens.',
  },
  {
    slug: 'play',
    name: 'Story Dice',
    url: 'https://play.oriz.in',
    category: 'creative',
    emoji: '✷',
    tagline: 'Creative play — story dice, prompt roller, would-you-rather, AI-expand.',
  },
]

export const FAMILY_PACKAGES: FamilyPackage[] = [
  {
    slug: 'astro-analytics',
    npm: '@chirag127/astro-analytics',
    category: 'astro',
    tagline: 'Drop-in privacy-first analytics for Astro sites.',
  },
  {
    slug: 'astro-seo',
    npm: '@chirag127/astro-seo',
    category: 'astro',
    tagline: 'SEO + JSON-LD helpers for Astro sites.',
  },
]

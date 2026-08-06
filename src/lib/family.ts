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
  /** Section bucket: hub | reading | tools | finance | personal | content */
  category: 'hub' | 'reading' | 'tools' | 'finance' | 'personal' | 'content'
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

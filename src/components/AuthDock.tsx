/*
 * AuthDock.tsx — Clerk island for the oriz front door (PUBLIC-FIRST).
 *
 * Public content is never gated. This island only adds a PERSONAL layer:
 *   - signed out  → a quiet "Sign in" control (SSO across *.oriz.in)
 *   - signed in   → account button + "My routes": pin sister sites, stored in
 *                   Firestore keyed by Clerk user id.
 *
 * Publishable key read from import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY —
 * NEVER hardcoded. When absent, renders nothing (public site still works).
 */
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/clerk-react'
import { useEffect, useState } from 'react'
import { readPins, writePins } from '~/lib/firebase'

const PK = import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY as string | undefined

interface Site {
  slug: string
  name: string
  url: string
}

function Pins({ sites }: { sites: Site[] }) {
  const { user } = useUser()
  const [pins, setPins] = useState<string[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!user) return
    readPins(user.id)
      .then(setPins)
      .finally(() => setReady(true))
  }, [user])

  function toggle(slug: string) {
    if (!user) return
    const next = pins.includes(slug) ? pins.filter((s) => s !== slug) : [...pins, slug]
    setPins(next)
    void writePins(user.id, next)
  }

  const pinned = sites.filter((s) => pins.includes(s.slug))

  return (
    <div data-dock-pins>
      <p data-dock-note>{ready ? 'Star the routes you use most — synced to your account.' : 'Loading your routes…'}</p>
      {pinned.length > 0 && (
        <ul data-dock-pinned>
          {pinned.map((s) => (
            <li key={s.slug}>
              <a href={s.url}>{s.name}</a>
            </li>
          ))}
        </ul>
      )}
      <details data-dock-editor>
        <summary>Edit my routes</summary>
        <ul>
          {sites.map((s) => (
            <li key={s.slug}>
              <label>
                <input
                  type="checkbox"
                  checked={pins.includes(s.slug)}
                  onChange={() => toggle(s.slug)}
                />
                {s.name}
              </label>
            </li>
          ))}
        </ul>
      </details>
    </div>
  )
}

export default function AuthDock({ sites = [] }: { sites?: Site[] }) {
  if (!PK) return null
  return (
    <ClerkProvider publishableKey={PK} afterSignOutUrl="/">
      <div data-dock>
        <SignedOut>
          <SignInButton mode="modal">
            <button type="button" data-dock-signin>
              Sign in
            </button>
          </SignInButton>
          <span data-dock-hint>optional — pin your favourite routes</span>
        </SignedOut>
        <SignedIn>
          <div data-dock-account>
            <UserButton afterSignOutUrl="/" />
            <span data-dock-label>Your exchange</span>
          </div>
          <Pins sites={sites} />
        </SignedIn>
      </div>
    </ClerkProvider>
  )
}

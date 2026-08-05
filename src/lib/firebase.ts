/*
 * firebase.ts — Firestore-only client for the oriz family (Clerk owns auth).
 *
 * Public browser config read from import.meta.env.PUBLIC_FIREBASE_* — NEVER
 * hardcoded. User data is keyed by Clerk user id. Returns null when config is
 * absent so public pages render fine without any Firebase project wired.
 */
import { type FirebaseApp, getApps, initializeApp } from 'firebase/app'
import { doc, type Firestore, getDoc, getFirestore, setDoc } from 'firebase/firestore'

const env = import.meta.env

function config() {
  const apiKey = env.PUBLIC_FIREBASE_API_KEY
  const authDomain = env.PUBLIC_FIREBASE_AUTH_DOMAIN
  const projectId = env.PUBLIC_FIREBASE_PROJECT_ID
  const appId = env.PUBLIC_FIREBASE_APP_ID
  if (!apiKey || !authDomain || !projectId || !appId) return null
  return {
    apiKey,
    authDomain,
    projectId,
    storageBucket: env.PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId,
  }
}

let db: Firestore | null | undefined

function firestore(): Firestore | null {
  if (db !== undefined) return db
  const cfg = config()
  if (!cfg) return (db = null)
  const app: FirebaseApp = getApps()[0] ?? initializeApp(cfg)
  return (db = getFirestore(app))
}

/** Pinned sister-site slugs for a Clerk user. Empty when Firebase unconfigured. */
export async function readPins(uid: string): Promise<string[]> {
  const store = firestore()
  if (!store) return []
  const snap = await getDoc(doc(store, 'homePins', uid))
  const data = snap.data() as { pins?: string[] } | undefined
  return data?.pins ?? []
}

/** Persist a user's pinned sister-site slugs, keyed by Clerk user id. */
export async function writePins(uid: string, pins: string[]): Promise<void> {
  const store = firestore()
  if (!store) return
  await setDoc(doc(store, 'homePins', uid), { pins, updatedAt: Date.now() })
}

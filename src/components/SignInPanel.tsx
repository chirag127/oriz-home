/*
 * SignInPanel.tsx — dedicated /sign-in island for oriz.in front door.
 *
 * Single ClerkProvider per page: the Header's AuthDock is suppressed on
 * /sign-in (showAuth=false) so only THIS provider mounts. Hash routing keeps
 * the flow on one static route. Themed to the night-exchange identity via the
 * appearance variables. Renders nothing when the key is absent (public site
 * still works).
 */
import { ClerkProvider, SignIn } from '@clerk/clerk-react'

const PK = import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY as string | undefined

export default function SignInPanel() {
  if (!PK) {
    return (
      <p data-signin-missing>
        Sign-in is not configured on this build.
      </p>
    )
  }
  return (
    <ClerkProvider publishableKey={PK} afterSignOutUrl="/">
      <SignIn
        routing="hash"
        appearance={{
          variables: {
            colorPrimary: '#5CE1E6',
            colorBackground: '#10162B',
            colorText: '#EEF1FB',
            colorTextSecondary: '#9AA3C4',
            colorInputBackground: '#182140',
            colorInputText: '#EEF1FB',
            borderRadius: '10px',
          },
        }}
      />
    </ClerkProvider>
  )
}

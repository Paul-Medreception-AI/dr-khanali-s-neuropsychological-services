import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Patient Form | Dr. Khanali, PsyD',
  robots: { index: false, follow: false },
}

// A2P opt-in form, GHL form ID iEkBL2Jxv7ONeCCr0BAw (supplied 2026-08-18 after
// onboarding completed). Always noindex: this page exists so a TCR / carrier
// reviewer can see the consent checkbox in situ, not to rank. It is deliberately
// absent from sitemap.ts and from the footer for the same reason.
//
// Embedded by hand rather than by rebuilding through the Website Builder tab —
// a rebuild regenerates every page from the architect brief and would discard
// the 2026-08-17 corrections (practice location, credentials, dead links).
export default function PatientFormSmsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12" style={{ height: '1060px' }}>
        <iframe
          src="https://api.medreception.ai/widget/form/iEkBL2Jxv7ONeCCr0BAw"
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
          id="inline-iEkBL2Jxv7ONeCCr0BAw"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Form A2P New"
          data-height="998"
          data-layout-iframe-id="inline-iEkBL2Jxv7ONeCCr0BAw"
          data-form-id="iEkBL2Jxv7ONeCCr0BAw"
          title="Form A2P New"
        />
      </div>
      <Script src="https://api.medreception.ai/js/form_embed.js" strategy="afterInteractive" />
    </main>
  )
}

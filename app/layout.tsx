import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'
import { OFFICES, formatOffice, PHONE_DISPLAY, PHONE_TEL, FAX_DISPLAY, EMAIL_ADMIN, HOURS } from '@/lib/practice'
import { SERVICES } from '@/lib/data/services'
import { CONDITIONS } from '@/lib/data/conditions'
import { NavDropdown } from '@/components/nav/NavDropdown'
import { MobileNav } from '@/components/nav/MobileNav'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })


const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drkhanalineuropsychologicalservicesllc.com'),
  // 60 chars. The previous value was 100 and was truncated on every page that
  // inherited it, which was 6 of them.
  title: "Neuropsychological Evaluations & Therapy | Dr. Khanali",
  description: "Dr. Khanali's practice offers bilingual clinical psychology services including ADHD assessments, disability evaluations, and pre-bariatric surgery evaluations. We provide culturally sensitive care with expertise in serving diverse communities across multiple states.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/favicon.png'
  },
  openGraph: {
    images: ['/og-image.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] bg-[var(--color-cream)] text-[var(--color-ink)]">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="/" className="font-cormorant text-lg xl:text-xl font-semibold text-[var(--color-primary)] leading-tight max-w-[55%] lg:max-w-none">
              Dr. Khanali's Neuropsychological Services
            </a>
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <NavDropdown
                label="Services"
                href="/services"
                items={SERVICES.map((s) => ({ href: `/services/${s.slug}`, label: s.title }))}
              />
              <NavDropdown
                label="Conditions"
                href="/conditions"
                columns={2}
                items={CONDITIONS.map((c) => ({ href: `/conditions/${c.slug}`, label: c.title }))}
              />
              <a href="/insurance" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Insurance</a>
              <a href="/about" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">About</a>
              <a href="/team" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Team</a>
              <a href="/contact" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Contact</a>
              <a href="/contact" className="ml-2 xl:ml-6 whitespace-nowrap bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors">Schedule an Evaluation</a>
            </nav>

            <MobileNav />
          </div>
        </header>
        
        <main>{children}</main>
        
        <footer className="bg-[var(--color-ink)] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <div className="font-cormorant text-xl font-semibold text-white mb-4">
                  Dr. Khanali's Neuropsychological Services
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Providing expert neuropsychological evaluations and therapy with cultural sensitivity and clinical excellence.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                <div className="flex flex-col gap-2">
                  <a href="/services" className="text-sm text-gray-300 hover:text-white transition-colors">Services</a>
                  <a href="/conditions" className="text-sm text-gray-300 hover:text-white transition-colors">Conditions</a>
                  <a href="/insurance" className="text-sm text-gray-300 hover:text-white transition-colors">Insurance</a>
                  <a href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About</a>
                  <a href="/team" className="text-sm text-gray-300 hover:text-white transition-colors">Team</a>
                  <a href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">Contact Information</h3>
                <div className="flex flex-col gap-2 text-sm text-gray-300">
                  {OFFICES.map(o => (
                    <a
                      key={o.slug}
                      href={`/locations/${o.slug}`}
                      className="hover:text-white transition-colors"
                    >
                      {formatOffice(o)}
                    </a>
                  ))}
                  <p className="mt-2">
                    Tel: <a href={`tel:${PHONE_TEL}`} className="hover:text-white transition-colors">{PHONE_DISPLAY}</a>
                    <span className="text-gray-500"> · </span>
                    Fax: {FAX_DISPLAY}
                  </p>
                  <p className="break-all">
                    <a href={`mailto:${EMAIL_ADMIN}`} className="hover:text-white transition-colors">{EMAIL_ADMIN}</a>
                  </p>
                  <div className="mt-2">
                    {HOURS.map(h => (
                      <p key={h.days}>{h.days}: {h.hours}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} Dr. Khanali's Neuropsychological Services
                </p>
                <div className="flex gap-4 text-sm text-gray-400">
                  <a href="/privacy-sms" className="hover:text-white transition-colors">Privacy Policy</a>
                  <span>|</span>
                  <a href="/terms-sms" className="hover:text-white transition-colors">Terms of Service</a>
                  <span>|</span>
                  <a href="/terms-sms#sms-terms" className="hover:text-white transition-colors">SMS Terms</a>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
                This website does not collect protected health information. All clinical intake is handled through a secure patient portal.
              </p>
            </div>
          </div>
        </footer>
        {/* MedReception AI patient-access widget. Renders only once the backend
            config for client-id 'dr-khanali-s-neuropsychological-services' is
            deployed in lambdaWidget.js; silent otherwise. */}
        <Script
          src="https://widget.medreception.ai/embed.js"
          data-client-id="dr-khanali-s-neuropsychological-services"
          strategy="afterInteractive"
        />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}
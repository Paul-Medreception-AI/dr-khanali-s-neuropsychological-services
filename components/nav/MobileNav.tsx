import Link from 'next/link'
import { SERVICES } from '@/lib/data/services'
import { CONDITIONS } from '@/lib/data/conditions'

/**
 * Mobile navigation.
 *
 * Below lg the header carried NO navigation at all — just the wordmark — so a
 * phone visitor could reach nothing but the homepage. Built on <details> rather
 * than React state for the same reason as NavDropdown: the header lives in the
 * root layout, and a stateful menu would force the entire layout client-side.
 * <summary> is natively focusable and toggles on Enter/Space, so keyboard and
 * screen-reader behaviour come for free.
 */
function Section({ label, href, items }: { label: string; href: string; items: { href: string; label: string }[] }) {
  return (
    <details className="group/sec border-b border-[var(--color-border)]">
      <summary className="flex items-center justify-between py-4 cursor-pointer list-none text-base font-medium text-[var(--color-ink)]">
        {label}
        <svg className="w-4 h-4 opacity-60 transition-transform group-open/sec:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="pb-3">
        <Link href={href} className="block py-2 pl-3 text-sm font-semibold text-[var(--color-primary)]">
          All {label.toLowerCase()} →
        </Link>
        <ul>
          {items.map((i) => (
            <li key={i.href}>
              <Link href={i.href} className="block py-2 pl-3 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)]">
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </details>
  )
}

export function MobileNav() {
  return (
    <details className="lg:hidden group/menu">
      <summary
        className="list-none cursor-pointer p-2 -mr-2 text-[var(--color-primary)]"
        aria-label="Open menu"
      >
        <svg className="w-7 h-7 group-open/menu:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg className="w-7 h-7 hidden group-open/menu:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </summary>

      {/* ABSOLUTE, not fixed. The header sets backdrop-filter, which makes it the
          containing block for fixed descendants — so `fixed top-20 bottom-0`
          resolved against the header's own 80px box and the panel rendered 1px
          tall. Positioning against the header explicitly is predictable, and
          100dvh keeps it right when mobile browser chrome shows and hides. */}
      <div className="absolute left-0 right-0 top-full z-40 h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain bg-white border-t border-[var(--color-border)]">
        <nav className="px-6 pb-10">
          <Section label="Services" href="/services"
            items={SERVICES.map((s) => ({ href: `/services/${s.slug}`, label: s.title }))} />
          <Section label="Conditions" href="/conditions"
            items={CONDITIONS.map((c) => ({ href: `/conditions/${c.slug}`, label: c.title }))} />
          {[
            { href: '/insurance', label: 'Insurance' },
            { href: '/about', label: 'About' },
            { href: '/team', label: 'Team' },
            { href: '/contact', label: 'Contact' },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="block py-4 border-b border-[var(--color-border)] text-base font-medium text-[var(--color-ink)]">
              {l.label}
            </Link>
          ))}
          <Link href="/contact"
            className="mt-6 block rounded-xl bg-[var(--color-accent)] px-6 py-4 text-center font-semibold text-white">
            Schedule an Evaluation
          </Link>
        </nav>
      </div>
    </details>
  )
}

import Link from 'next/link'

export type NavItem = { href: string; label: string }

/**
 * Hover/focus dropdown built with CSS only — no 'use client', no JS.
 *
 * The header lives in the root layout, which is a server component, so a
 * state-driven menu would force the whole layout client-side. `group` +
 * `group-hover` covers pointer users and `focus-within` covers keyboard users,
 * so the menu is reachable by Tab without shipping a byte of JS.
 *
 * The trigger is itself a real link to the hub, so the top-level destination is
 * never swallowed by the menu.
 */
export function NavDropdown({
  label,
  href,
  items,
  columns = 1,
}: {
  label: string
  href: string
  items: NavItem[]
  columns?: 1 | 2
}) {
  return (
    <div className="relative group">
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors py-2"
        aria-haspopup="true"
      >
        {label}
        <svg
          className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {/* invisible bridge so the menu survives the gap under the trigger */}
      <div className="absolute left-0 top-full h-3 w-full" aria-hidden="true" />

      <div
        className={[
          'absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50',
          columns === 2 ? 'w-[38rem]' : 'w-72',
          'rounded-2xl border border-[var(--color-border)] bg-white shadow-xl',
          'p-3 max-h-[70vh] overflow-y-auto',
          'invisible opacity-0 translate-y-1 pointer-events-none',
          'transition-all duration-150',
          'group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto',
          'group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto',
        ].join(' ')}
      >
        <ul className={columns === 2 ? 'grid grid-cols-2 gap-x-2' : ''}>
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-[var(--color-ink)] hover:bg-[var(--color-cream)] hover:text-[var(--color-primary)] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-2 border-t border-[var(--color-border)] pt-2">
          <Link
            href={href}
            className="block rounded-lg px-3 py-2 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-cream)] transition-colors"
          >
            View all {label.toLowerCase()} →
          </Link>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="font-cormorant text-9xl font-bold text-[var(--color-primary)] opacity-20">
          404
        </div>
        <h1 className="font-cormorant text-4xl font-semibold text-[var(--color-ink)] mt-4">
          Page Not Found
        </h1>
        <p className="text-[var(--color-muted)] mt-2 text-lg">
          The page you're looking for doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link 
            href="/" 
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-3 rounded-md font-medium hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            Go Home
          </Link>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-accent)] px-8 py-3 rounded-md font-medium border-2 border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
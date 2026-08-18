import Link from 'next/link'

export const metadata = {
  title: 'Patient Reviews',
  description: 'Read patient feedback and share your experience with Dr. Khanali\'s bilingual neuropsychological services in Fredericksburg, VA.',
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">
            Patient Reviews
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your feedback helps us provide exceptional neuropsychological care to our community.
          </p>
        </div>
      </section>

      {/* Invite Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
            We'd Love Your Feedback
          </h2>
          <p className="text-lg text-[var(--color-muted)] mb-8 leading-relaxed">
            If you've received services from Dr. Khanali's practice, we invite you to share your experience. Your honest feedback helps us continuously improve our care and assists others in making informed decisions about their neuropsychological and mental health needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg transition-colors font-medium"
          >
            Contact Us
          </Link>
          {/* TODO(optimize): drop in real Google/Healthgrades reviews here once available */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a comprehensive neuropsychological evaluation with our experienced, bilingual team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] px-8 py-4 rounded-lg transition-colors font-semibold"
            >
              Schedule an Evaluation
            </Link>
            <Link
              href="/services"
              className="inline-block bg-[var(--color-dark)] hover:bg-[var(--color-ink)] text-white px-8 py-4 rounded-lg transition-colors font-semibold"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
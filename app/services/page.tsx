import Link from 'next/link'
import { SERVICES } from '@/lib/data/services'
import Image from 'next/image'

export default function ServicesPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <Image src="/images/pages/hub-services.jpg" alt="" aria-hidden="true" fill priority sizes="100vw" className="object-cover" />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="hero-panel inline-block text-center px-8 py-10 sm:px-14 sm:py-12">
            <div className="text-white/75 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span>Services</span>
            </div>
            <h1 className="font-cormorant text-6xl font-light">Our Services</h1>
            <p className="text-xl text-white/80 max-w-xl mx-auto mt-4">
              Expert neuropsychological evaluations and therapy tailored to your unique needs
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-ink)] mb-4">
            Comprehensive Care for Every Need
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Providing evidence-based assessments and therapy in English and Farsi to serve diverse communities across Fredericksburg, VA and beyond
          </p>

          {/* Generated from lib/data/services.ts. The autobuild hardcoded six cards
              whose "Learn More" was a <span>, not a link — the hub linked to nothing
              and was missing two of the eight services. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              >
                {s.heroImage && (
                  <div className="relative h-52 w-full bg-[var(--color-light)]">
                    <Image
                      src={s.heroImage.src}
                      alt={s.heroImage.alt}
                      fill
                      sizes="(min-width: 1024px) 24rem, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-8">
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)]">
                    {s.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3 flex-1">
                    {s.description}
                  </p>
                  <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-ink)] mb-4">
            How It Works
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Our streamlined process ensures you receive comprehensive care from consultation to treatment
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
            <div className="text-center lg:text-left lg:border-r lg:border-[var(--color-border)] lg:pr-12 animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">01</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Initial Consultation
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Contact our office to schedule your first appointment. We'll discuss your concerns, answer questions about our services, and determine which type of evaluation or therapy best fits your needs.
              </p>
            </div>

            <div className="text-center lg:text-left lg:border-r lg:border-[var(--color-border)] lg:px-12 animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">02</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Participate in thorough testing and clinical interviews conducted by our experienced psychologists. We use evidence-based assessment tools and take the time to understand your unique situation and background.
              </p>
            </div>

            <div className="text-center lg:text-left lg:pl-12 animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-50 mb-4">03</div>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                Results and Recommendations
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Receive a detailed report with findings, diagnosis, and personalized recommendations. We'll meet to review results, answer questions, and create a clear path forward for treatment or accommodations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Ready to Begin?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Schedule your consultation today and take the first step toward comprehensive neuropsychological care
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
          >
            Schedule an Evaluation
          </Link>
        </div>
      </section>
    </main>
  )
}
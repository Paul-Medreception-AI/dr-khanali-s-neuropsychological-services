import { INSURANCE_GENERAL, INSURANCE_MEDICATION_MGMT } from '@/lib/practice'
import Link from 'next/link'

export default function InsurancePage() {
  // Real carrier list, transcribed from the practice's own site. The autobuild
  // invented this array — it listed Humana, Tricare and Magellan (not accepted)
  // and omitted 14 carriers that are.
  const insuranceProviders = INSURANCE_GENERAL

  const billingSteps = [
    {
      title: "Verify Coverage",
      description: "We verify your insurance benefits before your first appointment to determine coverage and any out-of-pocket costs.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
    },
    {
      title: "Service Provided",
      description: "You attend your scheduled evaluation or therapy session. We collect any applicable co-payment at the time of service.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
    },
    {
      title: "Claim Submitted",
      description: "We submit claims directly to your insurance company on your behalf. Claims are typically processed within 30-45 days.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
    },
    {
      title: "You Pay Remainder",
      description: "After insurance processes the claim, you receive an Explanation of Benefits (EOB) and are responsible for any remaining balance per your plan.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>
    }
  ]

  const faqs = [
    {
      question: "Do you accept my insurance?",
      answer: "The carriers listed above are the plans we accept. Coverage varies by plan, so we recommend contacting our office to verify your specific benefits. We will check your coverage before your first appointment and provide you with an estimate of any out-of-pocket costs."
    },
    {
      question: "What if I don't have insurance or my plan isn't accepted?",
      answer: "Self-pay options are available for clients without insurance or whose plans we do not accept, and we provide a Good Faith Estimate as required by the No Surprises Act. Contact the office to discuss fees and payment options for your situation."
    },
    {
      question: "What is a co-payment and when is it due?",
      answer: "A co-payment (co-pay) is a fixed amount you pay for a covered service as defined by your insurance plan. Co-pays are typically due at the time of service. The amount varies by insurance plan and type of service. We accept payment by cash, check, or major credit cards."
    },
    {
      question: "What is a deductible and how does it affect my costs?",
      answer: "A deductible is the amount you must pay out-of-pocket before your insurance begins to cover services. If you haven't met your annual deductible, you'll be responsible for the full negotiated rate with your insurance until the deductible is met. After that, you'll typically only pay your co-pay or co-insurance amount."
    },
    {
      question: "How long does it take to process insurance claims?",
      answer: "Insurance claims are typically processed within 30-45 days of submission. Once processed, you'll receive an Explanation of Benefits (EOB) from your insurance company showing what was covered and any patient responsibility. We'll then send you a statement for any remaining balance. If you have questions about your EOB or statement, our billing staff is happy to help."
    }
  ]

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            Insurance & Billing
          </h1>
          <p className="text-xl text-white/90">
            Transparent pricing and billing information
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-16">
            Accepted Insurance Plans
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {insuranceProviders.map((provider, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] hover:border-[var(--color-primary)] transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {provider}
              </div>
            ))}
          </div>
          {/* Medication management is credentialed with a narrower panel than
              therapy and evaluation. Showing one merged list would misrepresent
              coverage for anyone calling about prescribing. */}
          <div className="mt-16 max-w-4xl mx-auto bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)]">
            <h3 className="font-cormorant text-3xl text-[var(--color-primary)] mb-3">
              Medication Management Plans
            </h3>
            <p className="text-[var(--color-ink)] mb-6">
              Medication management for ADHD and other psychiatric conditions in Virginia is
              credentialed with a narrower set of plans than therapy and evaluation:
            </p>
            <ul className="flex flex-wrap gap-3">
              {INSURANCE_MEDICATION_MGMT.map((plan) => (
                <li
                  key={plan}
                  className="bg-white border border-[var(--color-border)] rounded-lg px-4 py-2 text-sm font-medium text-[var(--color-ink)]"
                >
                  {plan}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-center text-[var(--color-muted)] mt-12 max-w-3xl mx-auto">
            Coverage and benefits vary by plan. Please contact our office to verify your specific insurance coverage and out-of-pocket costs before scheduling your appointment.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-16">
            How Billing Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {billingSteps.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-6 text-[var(--color-accent)]">
                  {step.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                  {step.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 max-w-3xl mx-auto bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
            <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
              Understanding Your Explanation of Benefits (EOB)
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              After your insurance processes a claim, you'll receive an Explanation of Benefits (EOB). This document is not a bill—it explains what services were provided, what your insurance covered, and what you may owe.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Your EOB will show the billed amount, the negotiated rate with your insurance, what your plan paid, and your responsibility (co-pay, co-insurance, or deductible). If you have questions about your EOB, our billing team is here to help clarify any confusion.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <h3 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6">
              Self-Pay Options
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              We believe quality mental health care should be accessible to everyone. For clients who prefer to pay out-of-pocket or whose insurance we don't accept, we offer flexible payment options.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-2 text-lg">
                  Sliding Scale Fees
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We offer reduced fees based on financial need and household income. Contact our office to discuss eligibility and available rates.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-2 text-lg">
                  Payment Plans
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  For comprehensive evaluations, contact the office to discuss payment options before you schedule.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-2 text-lg">
                  Good Faith Estimate
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Under the No Surprises Act, you have the right to receive a Good Faith Estimate of expected charges before receiving services. We will provide a written estimate upon request that outlines the expected cost of your evaluation or therapy services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-[var(--color-border)] overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors duration-200 flex items-center justify-between">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-[var(--color-accent)] transition-transform duration-200 group-open:rotate-180"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Questions About Insurance or Billing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our billing team is here to help you understand your coverage and payment options. Contact us today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Contact Our Office
          </Link>
        </div>
      </section>
    </main>
  )
}
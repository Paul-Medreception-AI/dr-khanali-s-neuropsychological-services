import Link from 'next/link'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">
            Resources & Patient Education
          </h1>
          <p className="text-xl text-white/90">
            Evidence-based information to support your mental health journey
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm animate-fade-up">
            <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">
              Featured Article
            </div>
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              Understanding Neuropsychological Evaluations: What to Expect and How They Can Help
            </h2>
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                Neuropsychological evaluations are comprehensive assessments that examine how your brain functions across various cognitive domains. Unlike brief screenings, these in-depth evaluations provide detailed insights into memory, attention, executive functioning, language, and visual-spatial skills. Whether you're seeking clarity about learning difficulties, cognitive changes, or diagnostic questions, understanding the evaluation process can help you feel more prepared and confident.
              </p>
              <p>
                During a neuropsychological evaluation, you'll work with a trained psychologist who will administer standardized tests and conduct clinical interviews. The process typically takes several hours and may be completed in one or multiple sessions. These assessments are not pass-fail tests; rather, they're designed to identify your unique pattern of cognitive strengths and weaknesses. This information becomes invaluable for treatment planning, educational accommodations, and understanding how specific conditions may be affecting your daily functioning.
              </p>
              <p>
                The results of your evaluation will be compiled into a comprehensive report that includes diagnostic impressions, detailed findings, and personalized recommendations. This report can be shared with other healthcare providers, schools, or employers to support your needs. Many individuals find that the evaluation process itself brings relief—finally having answers and a clear path forward. If you've been wondering whether a neuropsychological evaluation might be right for you, our bilingual team is here to answer your questions and guide you through every step of the process.
              </p>
            </div>
            <Link 
              href="/blog/what-to-expect-during-a-neuropsychological-evaluation"
              className="inline-block mt-8 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors"
            >
              Read More →
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Article 1 */}
            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                ADHD
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Understanding ADHD in Adults: Signs You May Have Missed
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Adult ADHD often goes undiagnosed because symptoms can look different than in children. Learn about the subtle signs of attention difficulties, executive dysfunction, and how proper assessment can lead to life-changing support.
              </p>
              <Link 
                href="/blog/adhd-in-adults-signs-you-might-have-missed"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More →
              </Link>
            </article>

            {/* Article 2 */}
            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Mental Health
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                When to Consider a Neuropsychological Evaluation
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Cognitive concerns can arise from many sources—injury, illness, aging, or developmental conditions. Discover when a comprehensive neuropsychological evaluation can provide the answers you need.
              </p>
              <Link 
                href="/blog/what-to-expect-during-a-neuropsychological-evaluation"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More →
              </Link>
            </article>

            {/* Article 3 */}
            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Therapy
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                The Benefits of Culturally Sensitive Therapy
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Cultural background shapes how we experience and express mental health concerns. Learn why working with a bilingual, culturally competent therapist can make all the difference in your healing journey.
              </p>
              <Link 
                href="/blog/the-importance-of-culturally-sensitive-mental-health-care"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More →
              </Link>
            </article>

            {/* Article 4 */}
            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Assessment
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Preparing for Your Bariatric Surgery Psychological Evaluation
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Pre-surgical psychological evaluations are an important step in preparing for weight loss surgery. Understand what to expect and how this assessment supports your long-term success.
              </p>
              <Link 
                href="/blog/preparing-for-pre-bariatric-surgery-psychological-evaluation"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More →
              </Link>
            </article>

            {/* Article 5 */}
            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Mental Health
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Navigating Grief and Loss: A Psychologist's Perspective
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Grief is a universal experience, yet everyone's journey is unique. Explore the different stages of grief, how cultural factors influence mourning, and when professional support can help.
              </p>
              <Link 
                href="/blog/finding-meaning-after-loss-the-grief-journey"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More →
              </Link>
            </article>

            {/* Article 6 */}
            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Disability
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Understanding Disability Evaluations: Your Rights and the Process
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Disability evaluations provide essential documentation for accommodations and benefits. Learn what's involved in the assessment process and how to advocate for your needs effectively.
              </p>
              <Link 
                href="/blog/disability-evaluations-understanding-the-process"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More →
              </Link>
            </article>

            {/* Article 7 */}
            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Anxiety
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Managing Anxiety in Uncertain Times: Evidence-Based Strategies
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Anxiety can feel overwhelming, especially during periods of change or stress. Discover practical, research-supported techniques to reduce anxiety and regain a sense of control in your daily life.
              </p>
              <Link 
                href="/blog/anxiety-disorders-more-than-just-worry"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More →
              </Link>
            </article>

            {/* Article 8 */}
            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Telehealth
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                The Advantages of Telehealth for Psychological Services
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Virtual therapy and assessments offer convenience without compromising quality. Learn how PSYPACT licensure enables access to care across 38 states and why telehealth might be right for you.
              </p>
              <Link 
                href="/blog/telehealth-psychology-quality-care-from-anywhere"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More →
              </Link>
            </article>

            {/* Article 9 */}
            <article className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">
                Trauma
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Healing from Trauma: What Research Tells Us About Recovery
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Trauma can have lasting effects on mental health and daily functioning. Explore evidence-based approaches to trauma therapy and how specialized support can facilitate healing and resilience.
              </p>
              <Link 
                href="/blog/trauma-and-the-brain-how-ptsd-affects-cognition"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] text-sm font-medium transition-colors"
              >
                Read More →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl font-light mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Schedule a consultation to discuss your concerns and learn how our bilingual neuropsychological services can support your mental health journey.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full font-medium transition-colors"
          >
            Schedule an Evaluation
          </Link>
        </div>
      </section>
    </main>
  )
}
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Importance of Culturally Sensitive Mental Health Care',
  description: 'Discover why culturally sensitive mental health care is essential for effective treatment. Learn how cultural competence improves therapeutic outcomes and access to care in Fredericksburg, VA.',
  keywords: 'culturally sensitive mental health care, cultural competence, mental health Fredericksburg VA, diverse mental health care, multicultural therapy, culturally informed treatment',
  openGraph: {
    title: 'The Importance of Culturally Sensitive Mental Health Care',
    description: 'Discover why culturally sensitive mental health care is essential for effective treatment and improved therapeutic outcomes.',
    type: 'article',
    publishedTime: '2024-01-15T10:00:00Z',
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health Education
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Importance of Culturally Sensitive Mental Health Care
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Khanali's Clinical Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6 text-lg">
              Imagine walking into a therapist's office and feeling immediately understood—not just in your symptoms, but in your lived experience, your values, your worldview, and the cultural context that shapes how you see yourself and your challenges. This is the promise of culturally sensitive mental health care, and it can make the difference between treatment that truly heals and treatment that misses the mark entirely.
            </p>
            <p className="mb-6">
              In our increasingly diverse communities like Fredericksburg, VA, mental health providers must recognize that culture profoundly influences how individuals experience, express, and seek help for psychological distress. Yet despite growing awareness, many people from marginalized or minority backgrounds still face significant barriers to receiving care that honors their cultural identity and lived experience.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Culturally Sensitive Mental Health Care?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Culturally sensitive mental health care—also known as culturally competent or culturally responsive care—goes beyond simply acknowledging that patients come from different backgrounds. It involves actively integrating awareness of cultural differences into every aspect of assessment, diagnosis, and treatment.
            </p>
            <p className="mb-6">
              This approach recognizes that culture shapes fundamental aspects of mental health, including:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>How symptoms are experienced and expressed (somatic vs. emotional)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Beliefs about the causes of mental illness (spiritual, biological, social)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Attitudes toward seeking professional help and therapy</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Communication styles and comfort with emotional disclosure</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Family roles, collectivism vs. individualism, and support systems</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Experiences of discrimination, trauma, and systemic oppression</span>
              </li>
            </ul>
            <p className="mb-6">
              Culturally sensitive providers understand that these differences are not deficits but valuable perspectives that must inform treatment for it to be truly effective.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Cultural Competence Matters for Treatment Outcomes
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Research consistently demonstrates that culturally adapted mental health interventions lead to better outcomes than standard treatments. A meta-analysis published in the <em>American Psychologist</em> found that culturally adapted therapies were four times more effective than unadaptive interventions, particularly for clients from ethnic minority backgrounds.
            </p>
            <p className="mb-6">
              When mental health care fails to account for cultural context, several problems can arise:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span><strong>Misdiagnosis:</strong> Cultural expressions of distress may be mistaken for pathology</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span><strong>Poor therapeutic alliance:</strong> Clients feel misunderstood or judged</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span><strong>Premature termination:</strong> Clients drop out when treatment doesn't resonate</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span><strong>Ineffective interventions:</strong> Strategies conflict with cultural values or contexts</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span><strong>Perpetuated stigma:</strong> Negative experiences discourage future help-seeking</span>
              </li>
            </ul>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "When therapists fail to understand the cultural context of their clients' lives, they risk imposing their own cultural assumptions and values, which can undermine trust and therapeutic progress."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Addressing Disparities in Mental Health Access
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Cultural sensitivity in mental health care is not just about improving treatment for those who access it—it's also about removing barriers that prevent marginalized communities from seeking help in the first place.
            </p>
            <p className="mb-6">
              Studies show significant disparities in mental health care access and quality across racial, ethnic, and cultural groups. According to the National Alliance on Mental Illness (NAMI), people from minority communities are less likely to receive mental health treatment and more likely to receive lower-quality care when they do access services.
            </p>
            <p className="mb-6">
              Contributing factors include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span>Cultural stigma around mental health and therapy</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span>Language barriers and lack of bilingual providers</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span>Historical mistrust of healthcare systems due to past discrimination</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span>Lack of representation—few providers who share cultural backgrounds</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span>Economic barriers and insurance challenges</span>
              </li>
            </ul>
            <p className="mb-6">
              By providing culturally sensitive care, mental health professionals can help rebuild trust, reduce stigma, and create welcoming spaces where all individuals feel safe seeking support.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Key Elements of Culturally Competent Practice
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Cultural competence is not a one-time achievement but an ongoing process of learning, self-reflection, and adaptation. Effective culturally sensitive mental health care includes several key components:
            </p>
            
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">Cultural Awareness and Humility</h3>
            <p className="mb-6">
              Providers must examine their own cultural identities, biases, and assumptions. Cultural humility—recognizing that the client is the expert on their own culture—is essential. This means approaching each person with openness and curiosity rather than making assumptions based on stereotypes.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">Culturally Adapted Assessment</h3>
            <p className="mb-6">
              Standard diagnostic tools may not accurately capture symptoms across cultures. Culturally competent providers use validated, culturally adapted assessment instruments and ask open-ended questions about how clients understand their distress within their cultural framework.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">Flexible Treatment Approaches</h3>
            <p className="mb-6">
              Evidence-based treatments can and should be adapted to fit clients' cultural contexts. This might include incorporating religious or spiritual practices, involving family members in treatment, adjusting communication styles, or addressing culturally specific stressors like discrimination and acculturation.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-ink)] mt-8 mb-3">Systemic and Contextual Understanding</h3>
            <p className="mb-6">
              Culturally competent providers recognize that mental health struggles are often rooted in or exacerbated by systemic issues like racism, poverty, immigration stress, and marginalization. Treatment addresses not only individual symptoms but also these broader contextual factors.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What to Look for in a Culturally Sensitive Provider
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're seeking mental health care and cultural sensitivity is important to you, here are some questions and considerations that can guide your search:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Does the provider ask about your cultural background and how it relates to your concerns?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Do they demonstrate awareness of cultural differences in symptom expression and coping?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Are they willing to adapt treatment approaches to align with your values and preferences?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Do they acknowledge and validate experiences of discrimination or systemic oppression?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Do they express cultural humility and openness to learning from you?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Can they provide services in your preferred language or work with interpreters?</span>
              </li>
            </ul>
            <p className="mb-6">
              Remember, you have the right to feel understood and respected in therapy. If a provider's approach doesn't feel culturally attuned, it's okay to seek care elsewhere.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Moving Toward Equity in Mental Health Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Culturally sensitive mental health care is not just a clinical best practice—it's a matter of equity and justice. Every person deserves access to mental health services that honor their identity, respect their lived experience, and provide effective, compassionate support.
            </p>
            <p className="mb-6">
              As our communities become more diverse, the field of mental health must continue evolving to meet the needs of all individuals. This includes increasing workforce diversity, integrating cultural competence into training programs, conducting research with diverse populations, and advocating for policies that reduce systemic barriers to care.
            </p>
            <p className="mb-6">
              For individuals seeking care in Fredericksburg, VA and surrounding areas, finding a provider who values cultural sensitivity can be transformative. It's the difference between feeling like a diagnosis and feeling seen as a whole person—with a rich cultural history, unique strengths, and a path toward healing that honors who you are.
            </p>
          </div>

          {/* Closing CTA */}
          <div className="bg-[var(--color-light)] rounded-xl p-8 my-12 text-center">
            <p className="text-[var(--color-ink)] text-lg mb-6">
              At Dr. Khanali's Neuropsychological Services, we are committed to providing culturally sensitive, person-centered care that respects the diverse backgrounds and experiences of all our clients. If you're seeking mental health support that honors your cultural identity, we're here to help.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium"
            >
              Schedule a Consultation
            </Link>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] text-lg mb-1">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm mb-3">
                Board-certified providers specializing in Mental Health
              </div>
              <p className="text-[var(--color-ink)] text-sm leading-relaxed">
                Our multidisciplinary team is dedicated to providing evidence-based, culturally sensitive care to individuals and families throughout Fredericksburg, VA. We are committed to advancing mental health equity and access for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Mental Health
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding the Mind-Body Connection in Mental Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore how physical and mental health are deeply interconnected and what it means for treatment.
                </p>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Patient Education
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Breaking the Stigma: Talking About Mental Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn practical strategies for having open, supportive conversations about mental health.
                </p>
              </div>
            </Link>

            {/* Article 3 */}
            <Link href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  Treatment Approaches
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  What to Expect During Your First Therapy Session
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  A comprehensive guide to preparing for and making the most of your initial visit.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our team is here to help. Schedule a consultation today to begin your journey toward culturally sensitive, compassionate mental health care.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] px-8 py-4 rounded-lg transition-all duration-300 font-medium"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

    </main>
  )
}
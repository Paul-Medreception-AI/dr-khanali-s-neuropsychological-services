import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Immigrant Experience and Mental Health',
  description: 'Understanding the unique mental health challenges faced by immigrants, including cultural adjustment, identity, trauma, and resilience. Expert guidance from Dr. Khanali\'s team in Fredericksburg, VA.',
  keywords: 'immigrant mental health, cultural adjustment, acculturation stress, immigration trauma, bicultural identity, refugee mental health, Fredericksburg VA',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>
          
          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Immigrant Experience and Mental Health
          </h1>
          
          {/* Meta */}
          <div className="flex justify-center items-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Khanali's Services Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Moving to a new country is one of life's most profound transformations. It brings opportunity, hope, and the promise of a better future. Yet beneath the surface of new beginnings lies a complex emotional landscape that many immigrants navigate in silence. From the loss of familiar surroundings to the challenge of building identity across cultures, the immigrant experience carries unique mental health considerations that deserve understanding, validation, and culturally informed care.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Whether you're a first-generation immigrant, a refugee, an international student, or someone supporting a loved one through this journey, recognizing these challenges is the first step toward healing and resilience. At Dr. Khanali's Neuropsychological Services in Fredericksburg, VA, we honor the strength it takes to rebuild life in a new land while addressing the mental health needs that often accompany this transition.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Acculturative Stress
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Acculturative stress refers to the psychological impact of adapting to a new culture. This isn't simply about learning a new language or adjusting to different foods—it's a fundamental reshaping of how you understand yourself and your place in the world.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Common sources of acculturative stress include:
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Language barriers</strong> that affect employment, healthcare access, and social connection</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Discrimination and microaggressions</strong> based on accent, appearance, or cultural background</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Loss of professional status</strong> when credentials aren't recognized or transferable</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Separation from family and support networks</strong> that provided emotional grounding</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Navigating unfamiliar systems</strong> for healthcare, education, housing, and legal matters</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Conflicting cultural values</strong> between heritage culture and new environment</span>
            </li>
          </ul>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research shows that acculturative stress can manifest as anxiety, depression, somatic complaints, and even post-traumatic stress symptoms—particularly for those who experienced trauma before, during, or after migration.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Immigration is not just a change of location—it's a transformation of identity. Honoring both where you come from and where you're going is essential to mental wellness."
          </blockquote>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Challenge of Bicultural Identity
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            One of the most complex aspects of the immigrant experience is developing a bicultural or multicultural identity. This involves integrating elements of your heritage culture with the values, norms, and expectations of your new home—a process that can feel like walking a tightrope.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Many immigrants describe feeling "caught between two worlds"—not fully belonging to either their country of origin or their adopted country. Children of immigrants often experience this acutely, facing pressure to maintain cultural traditions at home while assimilating at school or work.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This identity negotiation can lead to:
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Feelings of alienation or not fully belonging anywhere</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Intergenerational conflict within families about cultural values</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Guilt about losing connection to heritage language or traditions</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Code-switching exhaustion from constantly adapting behavior to different contexts</span>
            </li>
          </ul>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news? Research increasingly shows that bicultural identity, when integrated healthily, can be a source of strength, resilience, and cognitive flexibility. The key is finding support to navigate this complexity rather than being forced to choose one identity over another.
          </p>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Pre-Migration Trauma and Ongoing Impact
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For refugees and asylum seekers, the immigrant experience often includes exposure to traumatic events before and during migration: war, persecution, violence, dangerous border crossings, family separation, or prolonged uncertainty about legal status.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Even after reaching safety, trauma's impact continues. Post-traumatic stress disorder (PTSD), depression, and anxiety are common among refugee populations. Yet accessing mental health care can be complicated by:
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Cultural stigma around mental health treatment</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Lack of culturally and linguistically appropriate services</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Mistrust of authority figures due to past persecution</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Prioritizing immediate survival needs over emotional wellbeing</span>
            </li>
          </ul>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Trauma-informed, culturally responsive mental health care acknowledges these realities while providing safe space for healing. Recovery is possible, and seeking help is a sign of strength, not weakness.
          </p>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Model Minority Myth and Hidden Struggles
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Certain immigrant communities face the burden of the "model minority" stereotype—the expectation that they should excel academically and professionally without complaint. While seemingly positive, this myth is deeply harmful.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            It obscures real struggles with mental health, creates pressure to achieve at any cost, and discourages help-seeking behavior. Many high-achieving immigrants carry silent burdens of anxiety, perfectionism, and fear of failure—unable to express vulnerability because it conflicts with how they're "supposed" to be.
          </p>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This stereotype also erases diversity within immigrant communities, ignoring those who face poverty, discrimination, or limited educational access. Mental health challenges exist across all backgrounds and achievement levels—and everyone deserves compassionate support.
          </p>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Building Resilience: Protective Factors and Strategies
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Despite these challenges, immigrants demonstrate remarkable resilience. Understanding what supports mental wellness can help you or your loved ones thrive:
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Community connection:</strong> Finding others who share your cultural background or immigrant experience provides validation and reduces isolation</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Cultural pride:</strong> Maintaining connection to heritage language, traditions, and values strengthens identity</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Flexible coping:</strong> Allowing yourself to integrate aspects of both cultures rather than forcing an either/or choice</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Professional support:</strong> Working with culturally informed therapists who understand immigration-related stress</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Narrative reframing:</strong> Recognizing your journey as one of courage, not just hardship</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Self-compassion:</strong> Allowing yourself to struggle, grieve losses, and seek help without shame</span>
            </li>
          </ul>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Support
          </h2>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Adjusting to a new country takes time, and some distress is normal. However, professional mental health support can be valuable when:
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Symptoms of anxiety or depression persist beyond initial adjustment</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>You're experiencing flashbacks, nightmares, or trauma symptoms</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Family relationships are strained by cultural conflicts</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>You're struggling with identity confusion or feeling "stuck between worlds"</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Isolation or loneliness is affecting your daily functioning</span>
            </li>
            <li className="flex gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>You want support navigating life transitions in a new cultural context</span>
            </li>
          </ul>
          
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            At Dr. Khanali's Neuropsychological Services in Fredericksburg, VA, we provide culturally sensitive mental health care that honors your unique background and experiences. Whether you're navigating acculturative stress, processing trauma, or seeking support for family dynamics, we're here to help you build resilience and thrive in your new home.
          </p>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6 mt-8">
            Your story matters. Your struggles are valid. And support is available. Reaching out for help isn't abandoning your cultural values—it's honoring your whole self and investing in your future.
          </p>
          
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Mental Health, offering compassionate, evidence-based care to the Fredericksburg, VA community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Mental Health</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Cultural Trauma and Healing
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Exploring how cultural trauma affects mental health and pathways to collective healing.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Family Therapy</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Bridging Generational Gaps in Immigrant Families
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Strategies for navigating cultural conflicts between immigrant parents and children.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Wellness</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Self-Care Strategies for Life in Transition
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Practical tools for maintaining mental wellness during major life changes and cultural adjustment.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Our team is here to help you navigate your unique journey with compassionate, culturally informed care.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all hover:scale-105 shadow-lg"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

    </main>
  )
}
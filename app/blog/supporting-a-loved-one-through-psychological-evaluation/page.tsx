import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Supporting a Loved One Through Psychological Evaluation',
  description: 'Learn how to provide meaningful support when a family member or friend undergoes psychological evaluation. Expert guidance from Fredericksburg\'s trusted neuropsychological team.',
  keywords: 'psychological evaluation support, family support mental health, neuropsychological assessment Fredericksburg VA, supporting loved ones therapy, mental health evaluation guide',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-8">
            Supporting a Loved One Through Psychological Evaluation
          </h1>

          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Khanali&apos;s Services Team</span>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              When someone you care about faces a psychological evaluation, you may feel uncertain about how to help. Questions arise: What should I say? What should I avoid? How can I be supportive without being overbearing? These concerns are natural and reflect your commitment to their wellbeing. Understanding the evaluation process and your role in it can transform anxiety into meaningful support that makes a genuine difference in their experience and outcomes.
            </p>
            <p>
              Psychological evaluations are comprehensive assessments designed to understand cognitive functioning, emotional health, personality patterns, and behavioral concerns. Whether your loved one is undergoing testing for ADHD, learning disabilities, memory issues, or mental health conditions, your support during this vulnerable time can significantly impact their comfort level, honesty during assessment, and willingness to follow through with recommendations.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding What They&apos;re Going Through
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Psychological evaluations can evoke complex emotions. Your loved one may feel anxious about what the testing will reveal, worried about being judged, or frustrated by having to confront difficulties they&apos;ve been managing privately. Some individuals experience relief at finally getting answers, while others fear a diagnosis that might change how they see themselves or how others perceive them.
            </p>
            <p className="mb-4">
              The evaluation process itself can be lengthy and mentally taxing. Sessions may last several hours and involve challenging cognitive tasks, personal questions about symptoms and history, and standardized questionnaires about sensitive topics. It&apos;s normal for someone to feel exhausted, emotionally drained, or even temporarily more symptomatic after intensive testing sessions.
            </p>
            <p>
              In Fredericksburg and the surrounding Northern Virginia communities, we see individuals from all backgrounds seeking clarity about cognitive and emotional concerns. The decision to pursue evaluation often comes after months or years of struggling, making this a significant milestone that deserves recognition and support.
            </p>
          </div>

          <div className="bg-[var(--color-cream)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              &quot;Your presence, patience, and willingness to listen without judgment can provide the emotional safety net that allows someone to fully engage in the evaluation process and accept its findings.&quot;
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Ways to Offer Support
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Supporting someone through psychological evaluation involves both practical assistance and emotional presence. Here are evidence-based approaches that make a meaningful difference:
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Help with logistics:</strong> Offer to drive them to appointments, help schedule sessions around their energy levels, or assist with paperwork and insurance coordination. These practical supports reduce stress and demonstrate your commitment.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Create a calm environment:</strong> Ensure they get adequate rest before testing sessions. Help minimize distractions and stressors in the days leading up to appointments. Consider taking on extra household responsibilities temporarily.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Be available to listen:</strong> Create space for them to share concerns without immediately problem-solving or minimizing their feelings. Sometimes people need to process anxieties verbally before they can move forward.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Respect their privacy:</strong> Let them decide what information they want to share about the evaluation and with whom. Avoid discussing their testing with others unless they&apos;ve explicitly given permission.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Normalize the process:</strong> Remind them that seeking evaluation is a sign of strength and self-awareness, not weakness. Many successful, capable people undergo psychological testing to better understand themselves and optimize their functioning.
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Not to Say or Do
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Well-intentioned comments can sometimes increase anxiety rather than alleviate it. Being aware of common missteps helps you provide more effective support:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="mb-2">
                  <strong className="text-red-900">Avoid:</strong> <span className="text-red-800">&quot;You&apos;ll be fine&quot; or &quot;There&apos;s nothing wrong with you&quot;</span>
                </p>
                <p className="text-sm text-red-700">
                  These statements, while meant to be reassuring, can feel dismissive of legitimate concerns and may discourage honest reporting during the evaluation.
                </p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="mb-2">
                  <strong className="text-red-900">Avoid:</strong> <span className="text-red-800">&quot;Just try harder&quot; or &quot;Everyone forgets things sometimes&quot;</span>
                </p>
                <p className="text-sm text-red-700">
                  Minimizing symptoms suggests you don&apos;t understand the severity of their struggles and may cause them to withdraw or feel misunderstood.
                </p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="mb-2">
                  <strong className="text-red-900">Avoid:</strong> <span className="text-red-800">Sharing worst-case scenarios or negative stories</span>
                </p>
                <p className="text-sm text-red-700">
                  Tales about others with difficult diagnoses or treatment failures increase anxiety without providing useful information or support.
                </p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="mb-2">
                  <strong className="text-red-900">Avoid:</strong> <span className="text-red-800">Pressuring them to share results before they&apos;re ready</span>
                </p>
                <p className="text-sm text-red-700">
                  Processing evaluation findings takes time. Let them control the pace and depth of information sharing.
                </p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="mb-2">
                  <strong className="text-red-900">Avoid:</strong> <span className="text-red-800">Offering unsolicited advice about diagnosis or treatment</span>
                </p>
                <p className="text-sm text-red-700">
                  Unless you&apos;re a trained professional familiar with their specific case, opinions about what the results mean or what they should do next can create confusion and undermine their relationship with their evaluator.
                </p>
              </div>
            </div>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Supporting Them After Results
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              The feedback session, where results are explained and recommendations discussed, can be emotionally intense regardless of the findings. Your loved one may experience relief, grief, validation, overwhelm, or a complex mixture of emotions. Here&apos;s how to provide meaningful support during this crucial phase:
            </p>
            
            <p className="mb-4">
              <strong>Be present for the emotional response.</strong> Whether the results confirm long-held suspicions or reveal unexpected findings, allow space for whatever feelings arise. Some people need time to sit with information before discussing it, while others want to process immediately through conversation.
            </p>
            
            <p className="mb-4">
              <strong>Help organize information.</strong> Evaluation reports can be lengthy and technical. Offer to attend the feedback session if appropriate, take notes, or help create a summary of key findings and recommendations. This practical support is especially valuable when someone feels overwhelmed.
            </p>
            
            <p className="mb-4">
              <strong>Support treatment planning.</strong> If recommendations include therapy, medication evaluation, academic accommodations, or lifestyle changes, help them break these into manageable next steps. Offer to research providers, make phone calls, or attend initial appointments if they want company.
            </p>
            
            <p className="mb-4">
              <strong>Maintain consistency in your relationship.</strong> A diagnosis doesn&apos;t change who someone is fundamentally. Continue treating them with the same respect and expectations while also being flexible as they implement new strategies or accommodations.
            </p>
            
            <p>
              <strong>Celebrate progress.</strong> Acknowledge the courage it took to pursue evaluation and the strength demonstrated in facing results honestly. Recognize steps taken toward implementing recommendations, no matter how small they might seem.
            </p>
          </div>

          <div className="bg-[var(--color-cream)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              &quot;The journey through psychological evaluation is not just about obtaining a diagnosis—it&apos;s about gaining self-understanding and accessing the right support. Your role as a loved one is to facilitate that journey with compassion and patience.&quot;
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Additional Support
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Supporting someone through psychological evaluation can be emotionally demanding. It&apos;s important to recognize when you might need additional resources or guidance:
            </p>
            
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-primary)] font-bold">•</span>
                <span>If you notice signs of crisis, such as suicidal thoughts, severe depression, or dangerous behaviors, seek immediate professional help.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-primary)] font-bold">•</span>
                <span>If supporting them is significantly impacting your own mental health, consider speaking with a therapist about healthy boundaries and coping strategies.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-primary)] font-bold">•</span>
                <span>If you&apos;re struggling to understand the evaluation process or findings, ask if you can participate in part of the feedback session or request educational resources from the provider.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-primary)] font-bold">•</span>
                <span>If family dynamics are complicated or there&apos;s disagreement about pursuing evaluation, family therapy may help facilitate communication and shared understanding.</span>
              </li>
            </ul>
          </div>

          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Long-Term Perspective
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Psychological evaluation is typically not a one-time event but rather a gateway to ongoing growth and support. As your loved one implements recommendations and adapts to new understandings of their cognitive and emotional functioning, your continued support remains valuable.
            </p>
            
            <p className="mb-4">
              In Fredericksburg and the broader Northern Virginia area, we&apos;re fortunate to have access to excellent mental health resources, educational support services, and medical specialists who can help implement evaluation recommendations. Your role may evolve from providing immediate emotional support during the evaluation process to being a consistent presence as they navigate treatment, accommodations, or lifestyle adjustments.
            </p>
            
            <p className="mb-4">
              Remember that seeking psychological evaluation reflects insight, courage, and a commitment to personal growth. By supporting your loved one through this process with patience, compassion, and practical assistance, you&apos;re contributing to better outcomes and demonstrating that they don&apos;t have to face challenges alone.
            </p>
            
            <p>
              The evaluation may provide answers to long-standing questions, open doors to appropriate interventions, and validate experiences that others may have dismissed. These benefits often extend beyond the individual to improve relationships, work performance, and overall quality of life—outcomes that ultimately benefit everyone in their support system.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] text-white p-8 rounded-lg mt-12">
            <h3 className="font-cormorant text-2xl mb-4">Need Guidance for Your Situation?</h3>
            <p className="mb-6 text-white/90 leading-relaxed">
              If you&apos;re supporting someone through psychological evaluation or considering assessment for yourself or a family member, Dr. Khanali&apos;s Neuropsychological Services provides comprehensive evaluations in a compassionate, professional environment. Our Fredericksburg practice serves individuals across Northern Virginia with expertise in ADHD, learning disabilities, cognitive concerns, and mental health assessment.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-[var(--color-muted)]">Topics:</span>
              <a href="/blog" className="text-sm text-[var(--color-primary)] hover:underline">Patient Support</a>
              <span className="text-[var(--color-muted)]">•</span>
              <a href="/blog" className="text-sm text-[var(--color-primary)] hover:underline">Family Guidance</a>
              <span className="text-[var(--color-muted)]">•</span>
              <a href="/blog" className="text-sm text-[var(--color-primary)] hover:underline">Psychological Evaluation</a>
              <span className="text-[var(--color-muted)]">•</span>
              <a href="/blog" className="text-sm text-[var(--color-primary)] hover:underline">Mental Health</a>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
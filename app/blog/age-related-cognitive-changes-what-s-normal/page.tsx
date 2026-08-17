import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Age-Related Cognitive Changes: What\'s Normal? | Dr. Khanali\'s Neuropsychological Services',
  description: 'Learn what cognitive changes are normal with aging and when to seek professional evaluation. Expert guidance from Dr. Khanali\'s Neuropsychological Services in Arlington, VA.',
  keywords: 'age-related cognitive changes, normal aging, memory changes, cognitive decline, neuropsychology, Arlington VA, mental health',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <article>
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <nav className="text-sm mb-6 text-white/80 text-center">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="mx-2">›</span>
              <a href="/blog" className="hover:text-white transition-colors">Resources</a>
              <span className="mx-2">›</span>
              <span className="text-white">Article</span>
            </nav>
            
            <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
              Mental Health
            </div>
            
            <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-6">
              Age-Related Cognitive Changes: What&apos;s Normal?
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>7 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span>Dr. Khanali&apos;s Services Team</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="text-xl leading-relaxed mb-8 text-[var(--color-muted)]">
                &quot;Where did I put my keys?&quot; &quot;What was I about to say?&quot; If you&apos;ve found yourself asking these questions more frequently as you age, you&apos;re not alone. Many adults worry that memory lapses signal the beginning of serious cognitive decline. But here&apos;s the truth: not all cognitive changes are cause for concern. Understanding what&apos;s normal—and what&apos;s not—can bring peace of mind and help you know when to seek professional guidance.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                The Aging Brain: What Science Tells Us
              </h2>
              
              <p className="mb-6">
                Our brains change as we age, just like every other part of our body. Research shows that certain cognitive shifts are a natural part of healthy aging. The brain&apos;s processing speed gradually slows, and some types of memory become less sharp. This doesn&apos;t mean your brain is failing—it&apos;s simply maturing.
              </p>
              
              <p className="mb-6">
                Studies indicate that starting in our 30s and 40s, the brain begins to shrink slightly in volume, particularly in regions associated with memory and executive function. Blood flow to the brain may decrease, and communication between neurons can become less efficient. Yet despite these changes, most older adults maintain their cognitive abilities and continue to learn, problem-solve, and live independently.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                Normal Age-Related Cognitive Changes
              </h2>
              
              <p className="mb-6">
                Distinguishing normal aging from pathological decline is crucial. Here are cognitive changes that are typically considered normal as we age:
              </p>

              <div className="space-y-4 my-8">
                <div className="flex gap-3 items-start">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Occasional forgetfulness:</strong> Misplacing items, forgetting names temporarily, or walking into a room and forgetting why you went there are common experiences that increase with age.
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Slower processing speed:</strong> It may take longer to learn new information or recall facts quickly, though the information eventually comes to mind.
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Decreased multitasking ability:</strong> Managing multiple tasks simultaneously becomes more challenging, and you may prefer to focus on one thing at a time.
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Mild word-finding difficulties:</strong> The &quot;tip of the tongue&quot; phenomenon—knowing what you want to say but temporarily unable to retrieve the exact word—becomes more frequent.
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Reduced attention span:</strong> Staying focused for extended periods or filtering out distractions may require more effort.
                  </div>
                </div>
              </div>

              <p className="mb-6">
                These changes typically emerge gradually and don&apos;t significantly interfere with daily functioning. You may need to use strategies like lists or calendars more often, but you can still manage your responsibilities, maintain relationships, and enjoy hobbies.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                When Cognitive Changes Are Concerning
              </h2>
              
              <p className="mb-6">
                While some cognitive changes are expected, others may signal a more serious problem. Here are warning signs that warrant professional evaluation:
              </p>

              <div className="bg-[var(--color-cream)] border-l-4 border-[var(--color-primary)] p-6 my-8">
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div>
                      <strong className="text-[var(--color-ink)]">Memory loss that disrupts daily life:</strong> Forgetting recently learned information, important dates, or asking the same questions repeatedly.
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div>
                      <strong className="text-[var(--color-ink)]">Difficulty completing familiar tasks:</strong> Trouble driving to a familiar location, managing a budget, or following a recipe you&apos;ve made many times.
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div>
                      <strong className="text-[var(--color-ink)]">Confusion with time or place:</strong> Losing track of dates, seasons, or getting lost in familiar places.
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div>
                      <strong className="text-[var(--color-ink)]">Problems with language:</strong> Struggling to follow or join conversations, stopping mid-sentence, or calling things by the wrong name.
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div>
                      <strong className="text-[var(--color-ink)]">Poor judgment:</strong> Making uncharacteristic financial decisions, neglecting personal hygiene, or falling for scams.
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div>
                      <strong className="text-[var(--color-ink)]">Withdrawal from social activities:</strong> Avoiding hobbies, social events, or work projects due to cognitive difficulties.
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div>
                      <strong className="text-[var(--color-ink)]">Changes in mood or personality:</strong> Sudden shifts in mood, increased anxiety, depression, or uncharacteristic suspiciousness.
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-6">
                If you or a loved one are experiencing any of these symptoms, it&apos;s important to seek evaluation from a healthcare professional. Early detection and intervention can make a significant difference in managing cognitive conditions.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                The Role of Neuropsychological Assessment
              </h2>
              
              <p className="mb-6">
                When concerns about cognitive changes arise, a comprehensive neuropsychological assessment can provide clarity. These evaluations go beyond simple screening tests to examine multiple cognitive domains in depth, including memory, attention, language, visual-spatial skills, and executive functioning.
              </p>
              
              <p className="mb-6">
                A neuropsychological assessment can:
              </p>

              <ul className="space-y-3 my-6 ml-6">
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Distinguish normal aging from mild cognitive impairment or dementia</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Identify specific cognitive strengths and weaknesses</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Detect early signs of neurodegenerative conditions</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Establish a baseline for tracking changes over time</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Guide treatment planning and recommend cognitive interventions</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Provide reassurance when cognitive functioning is within normal limits</span>
                </li>
              </ul>

              <p className="mb-6">
                At Dr. Khanali&apos;s Neuropsychological Services, we understand the anxiety that comes with noticing cognitive changes. Our assessments are conducted in a supportive, professional environment designed to put you at ease while gathering the most accurate information about your cognitive health.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                Strategies to Support Healthy Cognitive Aging
              </h2>
              
              <p className="mb-6">
                Whether your cognitive changes are normal or warrant intervention, there are evidence-based strategies to support brain health as you age:
              </p>

              <div className="bg-[var(--color-cream)] rounded-lg p-8 my-8">
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                  Stay Physically Active
                </h3>
                <p className="mb-4">
                  Regular exercise increases blood flow to the brain and promotes the growth of new brain cells. Aim for at least 150 minutes of moderate aerobic activity per week, along with strength training exercises.
                </p>

                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4 mt-8">
                  Engage Your Mind
                </h3>
                <p className="mb-4">
                  Mental stimulation through learning new skills, reading, puzzles, or creative activities can help maintain cognitive function. The key is to challenge yourself with activities that are novel and complex.
                </p>

                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4 mt-8">
                  Maintain Social Connections
                </h3>
                <p className="mb-4">
                  Social engagement has been linked to better cognitive health. Regular interactions with friends and family, participation in group activities, or volunteering can provide mental stimulation and emotional support.
                </p>

                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4 mt-8">
                  Prioritize Sleep
                </h3>
                <p className="mb-4">
                  Quality sleep is essential for memory consolidation and brain health. Aim for 7-9 hours of sleep per night and address any sleep disorders with your healthcare provider.
                </p>

                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4 mt-8">
                  Eat a Brain-Healthy Diet
                </h3>
                <p className="mb-4">
                  Diets rich in fruits, vegetables, whole grains, lean proteins, and healthy fats—like the Mediterranean diet—have been associated with better cognitive outcomes. Limit processed foods, saturated fats, and excess sugar.
                </p>

                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4 mt-8">
                  Manage Chronic Conditions
                </h3>
                <p className="mb-4">
                  Conditions like diabetes, hypertension, and high cholesterol can impact brain health. Work with your healthcare team to manage these conditions effectively.
                </p>

                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4 mt-8">
                  Reduce Stress
                </h3>
                <p className="mb-0">
                  Chronic stress can negatively affect memory and cognitive function. Practice stress-reduction techniques such as mindfulness, meditation, yoga, or deep breathing exercises.
                </p>
              </div>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                When to Seek Professional Help
              </h2>
              
              <p className="mb-6">
                If you&apos;re unsure whether your cognitive changes are normal, it&apos;s always better to seek professional evaluation. Early assessment can:
              </p>

              <ul className="space-y-3 my-6 ml-6">
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Provide peace of mind if changes are within normal limits</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Allow for early intervention if problems are detected</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Rule out treatable causes of cognitive decline, such as vitamin deficiencies, medication side effects, or depression</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Create a cognitive baseline for future comparison</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>Connect you with appropriate resources and support</span>
                </li>
              </ul>

              <p className="mb-6">
                Don&apos;t let fear prevent you from seeking answers. Many people find that understanding their cognitive profile—even when it reveals challenges—empowers them to take proactive steps toward maintaining their brain health.
              </p>

              <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
                Moving Forward with Confidence
              </h2>
              
              <p className="mb-6">
                Aging brings changes to every part of our bodies, including our brains. While some cognitive changes are a natural part of getting older, others may signal a need for professional evaluation. Understanding the difference—and knowing when to seek help—can make all the difference in maintaining your cognitive health and quality of life.
              </p>
              
              <p className="mb-6">
                At Dr. Khanali&apos;s Neuropsychological Services, we&apos;re here to provide expert, compassionate assessment and guidance. Whether you&apos;re seeking reassurance, answers, or a plan for moving forward, we&apos;re committed to supporting you every step of the way.
              </p>

              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white rounded-lg p-8 my-12">
                <h3 className="font-cormorant text-2xl mb-4">
                  Schedule a Consultation
                </h3>
                <p className="mb-6">
                  If you have concerns about cognitive changes—yours or a loved one&apos;s—we invite you to schedule a consultation. Our comprehensive neuropsychological assessments can provide the clarity and guidance you need.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/contact" 
                    className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-md font-medium hover:bg-[var(--color-cream)] transition-colors"
                  >
                    Contact Us Today
                  </a>
                  <a 
                    href="/services" 
                    className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
                  >
                    Learn About Our Services
                  </a>
                </div>
              </div>

              <div className="border-t border-[var(--color-border)] pt-8 mt-12">
                <p className="text-sm text-[var(--color-muted)] italic">
                  Disclaimer: This article is for informational purposes only and does not constitute medical advice. If you have concerns about cognitive changes, please consult with a qualified healthcare professional for proper evaluation and guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-cream)] py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] text-center mb-8">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/blog/understanding-neuropsychological-assessment" className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">
                  Understanding Neuropsychological Assessment
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  Learn what to expect during a comprehensive cognitive evaluation.
                </p>
              </a>
              <a href="/blog/supporting-loved-one-memory-concerns" className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">
                  Supporting a Loved One with Memory Concerns
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  Practical guidance for family members and caregivers.
                </p>
              </a>
              <a href="/blog/brain-health-lifestyle-factors" className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">
                  Brain Health: Key Lifestyle Factors
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  Evidence-based strategies to support cognitive wellness.
                </p>
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
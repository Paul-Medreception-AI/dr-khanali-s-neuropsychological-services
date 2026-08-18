import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Workplace Accommodations for ADHD: Your Rights',
  description: 'Learn about your legal rights to workplace accommodations for ADHD under the ADA. Discover practical examples of accommodations and how to request them in Fredericksburg, VA.',
  keywords: 'ADHD workplace accommodations, ADA rights ADHD, workplace disability accommodations, ADHD at work, reasonable accommodations ADHD, Fredericksburg VA ADHD services',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </nav>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>
          
          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Workplace Accommodations for ADHD: Your Rights
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Khanali's Neuropsychological Services Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Imagine sitting at your desk, trying to focus on an important report while the fluorescent lights hum overhead, colleagues chat nearby, and email notifications ping constantly. For someone with ADHD, this scenario isn't just distracting—it can make productive work nearly impossible. Yet many adults with ADHD don't realize they have legal rights to workplace accommodations that could transform their professional experience.
            </p>
            <p className="mb-6">
              If you've been diagnosed with ADHD and struggle with certain aspects of your job, you're not alone—and you're protected. Understanding your rights under federal law can be the first step toward creating a work environment where you can truly thrive.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Understanding ADHD as a Protected Disability
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Under the Americans with Disabilities Act (ADA), ADHD is recognized as a disability when it substantially limits one or more major life activities—including working, concentrating, thinking, and communicating. This federal protection applies to employers with 15 or more employees, covering most workplaces across the United States.
            </p>
            <p className="mb-6">
              The ADA prohibits discrimination based on disability and requires employers to provide reasonable accommodations to qualified employees. These accommodations are modifications or adjustments to the work environment that enable individuals with disabilities to perform essential job functions and enjoy equal employment opportunities.
            </p>
            <p className="mb-6">
              It's important to note that you don't need to disclose your ADHD diagnosis during the hiring process. However, to request accommodations, you will need to inform your employer about your condition and how it affects your work performance.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
            "Workplace accommodations aren't special treatment—they're about leveling the playing field so that talented employees with ADHD can contribute their full potential."
          </blockquote>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            What Qualifies as a Reasonable Accommodation?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Reasonable accommodations are changes to the work environment or job duties that don't cause undue hardship to the employer. For ADHD, accommodations typically focus on reducing distractions, improving organization, and providing structure. The specific accommodations that work best will depend on your individual challenges and job requirements.
            </p>
            <p className="mb-6">
              Common workplace accommodations for ADHD include:
            </p>
          </div>

          {/* Bullet List with Checkmarks */}
          <div className="space-y-4 mb-8 animate-fade-up">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Modified workspace:</strong> A quiet office, cubicle with higher walls, noise-cancelling headphones, or the ability to work from home part-time</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Flexible scheduling:</strong> Adjusted start/end times, breaks at specific intervals, or compressed work weeks</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Task management support:</strong> Written instructions, project management tools, checklists, or more frequent check-ins with supervisors</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Communication adjustments:</strong> Email follow-ups after verbal meetings, agenda provided in advance, or permission to record meetings</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Time management assistance:</strong> Extended deadlines when possible, breaking large projects into smaller tasks, or using timers and reminders</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose"><strong>Modified training:</strong> Additional time for learning new systems, one-on-one training sessions, or written materials to supplement verbal instruction</p>
            </div>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            How to Request Workplace Accommodations
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Requesting accommodations doesn't need to be complicated, but it does require clear communication. Here's a step-by-step approach:
            </p>
            <p className="mb-6">
              <strong>1. Document your challenges.</strong> Before approaching your employer, identify which aspects of your job are most impacted by ADHD. Be specific about how symptoms interfere with your work performance.
            </p>
            <p className="mb-6">
              <strong>2. Request a meeting with HR or your supervisor.</strong> You can make this request verbally or in writing. Simply state that you have a medical condition that affects your work and you'd like to discuss possible accommodations.
            </p>
            <p className="mb-6">
              <strong>3. Provide documentation if requested.</strong> Your employer may ask for verification from a healthcare provider. This doesn't need to include your full medical history—just confirmation of your diagnosis and recommended accommodations. A neuropsychologist can provide comprehensive documentation including cognitive testing results that support specific accommodation requests.
            </p>
            <p className="mb-6">
              <strong>4. Engage in the interactive process.</strong> The ADA requires both you and your employer to work together in good faith to identify effective accommodations. Be open to suggestions and willing to try different solutions.
            </p>
            <p className="mb-6">
              <strong>5. Get agreements in writing.</strong> Once accommodations are approved, request written confirmation of what has been agreed upon, including implementation timelines.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Your Rights Are Protected by Law
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Under the ADA, your employer cannot:
            </p>
          </div>

          <div className="space-y-4 mb-8 animate-fade-up">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Retaliate against you for requesting accommodations</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Share your medical information with coworkers without your permission</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Deny reasonable accommodations without engaging in the interactive process</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">Discriminate in hiring, promotion, or termination decisions based on your ADHD diagnosis</p>
            </div>
          </div>

          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Your employer is only permitted to deny an accommodation if they can demonstrate it would cause undue hardship—a significant difficulty or expense relative to their size and resources. Most accommodations for ADHD are low-cost or free to implement.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            When to Seek Professional Support
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              If you suspect you have ADHD but haven't been formally diagnosed, or if you need updated documentation to support your accommodation request, a comprehensive neuropsychological evaluation can be invaluable. This assessment provides objective data about your cognitive strengths and challenges, helping both you and your employer understand which accommodations are most likely to be effective.
            </p>
            <p className="mb-6">
              A neuropsychological evaluation for ADHD typically includes testing of attention, executive functions, memory, and processing speed. The resulting report offers specific recommendations for workplace accommodations based on your unique cognitive profile.
            </p>
            <p className="mb-6">
              Many adults find that the evaluation process itself provides clarity and validation. Understanding how your brain works differently can reduce self-blame and empower you to advocate effectively for your needs.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Moving Forward with Confidence
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Living with ADHD in the workplace doesn't mean you're less capable—it means you may need to work differently. The right accommodations can make the difference between struggling daily and excelling in your career. Many successful professionals with ADHD report that once they received appropriate accommodations, their work quality improved dramatically and their stress levels decreased significantly.
            </p>
            <p className="mb-6">
              Remember that advocating for yourself isn't a sign of weakness. It's a demonstration of self-awareness and professionalism. By understanding your rights and communicating your needs clearly, you're not only helping yourself but also potentially paving the way for other employees with ADHD to receive the support they need.
            </p>
            <p className="mb-6">
              If you're in the Fredericksburg, VA area and would like to explore whether a neuropsychological evaluation could support your accommodation request, or if you're seeking strategies to manage ADHD symptoms in the workplace, professional guidance can help you create a comprehensive plan for workplace success.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Licensed clinical psychologists and a board-certified psychiatric nurse practitioner, offering comprehensive neuropsychological evaluations and evidence-based care in Fredericksburg, VA.
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
            
            {/* Article Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Mental Health
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Adult ADHD: Signs and Treatment
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed text-sm mb-4">
                  Learn about the signs of ADHD in adults and evidence-based treatment approaches that can help.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Article Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Career Support
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Executive Function Strategies for Work Success
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed text-sm mb-4">
                  Practical strategies to improve organization, time management, and productivity at work.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Article Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Assessment
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  What to Expect: Neuropsychological Testing
                </h4>
                <p className="text-[var(--color-muted)] leading-relaxed text-sm mb-4">
                  A comprehensive guide to the neuropsychological evaluation process and how it can help.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4 animate-fade-up">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90 animate-fade-up">
            Our team is here to help you understand your cognitive strengths and access the support you deserve.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 animate-fade-up"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

    </main>
  )
}
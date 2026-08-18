import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Telehealth Psychology: Quality Care from Anywhere',
  description: 'Discover how telehealth psychology provides accessible, effective mental health care. Learn about the benefits, research, and what to expect from virtual therapy sessions in Fredericksburg, VA.',
  keywords: 'telehealth psychology, virtual therapy, online mental health, telepsychology, remote counseling, Fredericksburg VA',
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
            <span>Article</span>
          </div>

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-8">
            Telehealth Psychology: Quality Care from Anywhere
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
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
          <div className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
            <p className="text-xl leading-relaxed mb-6">
              The way we access healthcare has fundamentally changed. Just as we now attend work meetings, connect with family, and manage our finances from home, quality mental health care has evolved to meet us where we are. Telehealth psychology isn't a compromise or temporary solution—it's a proven, effective way to receive comprehensive psychological care that fits seamlessly into your life.
            </p>

            <p className="mb-6">
              Whether you're balancing a demanding work schedule, managing transportation challenges, living in a rural area, or simply prefer the comfort of your own space, virtual psychology services offer a pathway to the support you need without the barriers that have traditionally stood in the way.
            </p>
          </div>

          {/* Section 1 */}
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Is Telehealth Psychology?
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                Telehealth psychology, also known as telepsychology or teletherapy, involves providing psychological services through secure video conferencing platforms. This approach allows licensed psychologists and mental health professionals to conduct comprehensive assessments, deliver evidence-based therapy, and provide ongoing support—all through a virtual connection.
              </p>
              <p className="mb-6">
                These aren't simplified or abbreviated sessions. Virtual appointments mirror the structure, depth, and therapeutic relationship of traditional in-person care. Your psychologist can observe your nonverbal communication, engage in meaningful dialogue, administer certain assessments, and develop personalized treatment plans just as they would in an office setting.
              </p>
              <p className="mb-6">
                The technology is straightforward: using a computer, tablet, or smartphone with a camera and microphone, you connect to a secure, HIPAA-compliant video platform. No special equipment or technical expertise is required—if you can make a video call, you can participate in telehealth psychology.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Research: Does Virtual Care Really Work?
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                One of the most common questions about telehealth is whether it's as effective as traditional face-to-face therapy. The answer, supported by extensive research, is a resounding yes.
              </p>
              <p className="mb-6">
                Multiple systematic reviews and meta-analyses have demonstrated that telehealth psychology produces outcomes equivalent to in-person treatment across a wide range of conditions. Studies examining cognitive-behavioral therapy, interpersonal therapy, and other evidence-based approaches delivered virtually have shown comparable improvements in symptoms of depression, anxiety, PTSD, and other mental health concerns.
              </p>
              <p className="mb-6">
                In fact, some research suggests certain populations may actually prefer and benefit more from virtual care. Individuals with social anxiety, for instance, often find it easier to open up from a familiar environment. People with mobility challenges, chronic pain, or immune system concerns can access care without the physical toll of traveling to appointments.
              </p>
            </div>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 animate-fade-up">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "The therapeutic relationship—the foundation of effective psychological care—develops just as strongly through secure video as it does in person. What matters most is the quality of the connection, not the medium through which it occurs."
            </p>
          </blockquote>

          {/* Section 3 */}
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Who Benefits from Telehealth Psychology?
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                While virtually anyone can benefit from telehealth psychology, certain situations make virtual care particularly valuable:
              </p>
              
              <div className="space-y-4 my-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p><strong>Busy professionals</strong> who struggle to fit appointments into demanding work schedules or who travel frequently for business</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p><strong>Parents and caregivers</strong> who find it difficult to arrange childcare or leave home for appointments</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p><strong>Individuals with mobility challenges</strong> or chronic health conditions that make travel difficult</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p><strong>Those living in rural areas</strong> or locations with limited access to specialized mental health services</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p><strong>People who value privacy</strong> and prefer to avoid waiting rooms or being seen entering a mental health facility</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p><strong>Individuals with anxiety</strong> who feel more comfortable in their own environment</p>
                </div>
              </div>

              <p className="mb-6">
                In Fredericksburg, VA and surrounding areas, where traffic and work demands can make scheduling difficult, telehealth psychology offers a practical solution without sacrificing quality of care.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Privacy and Security: Your Information Is Protected
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                Concerns about privacy in virtual care are completely understandable. The good news is that telehealth platforms used by licensed mental health providers are specifically designed to meet strict HIPAA compliance standards.
              </p>
              <p className="mb-6">
                These aren't standard video calling apps. Professional telehealth platforms use end-to-end encryption, secure data storage, and rigorous security protocols to protect your personal health information. Your sessions are as private—if not more so—than traditional office visits where conversations might be overheard in waiting areas or through office walls.
              </p>
              <p className="mb-6">
                Your provider will guide you through best practices for ensuring privacy on your end, such as finding a quiet, private space for sessions and using a secure internet connection. The technology is designed to make security seamless, so you can focus on your care rather than worrying about technical details.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What to Expect from Your First Virtual Session
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                If you've never participated in telehealth psychology, knowing what to expect can help ease any apprehension:
              </p>
              
              <p className="mb-4"><strong>Before Your Appointment:</strong></p>
              <p className="mb-6">
                You'll receive instructions for accessing the secure video platform, along with a link to join your session. Test your technology a few minutes early to ensure your camera and microphone are working. Find a comfortable, private space where you won't be interrupted.
              </p>

              <p className="mb-4"><strong>During Your Session:</strong></p>
              <p className="mb-6">
                Your psychologist will greet you just as they would in an office. The structure of the session remains the same: you'll discuss your concerns, work through therapeutic exercises, and develop strategies for managing your mental health. Most people find that after the first few minutes, the virtual format feels completely natural.
              </p>

              <p className="mb-4"><strong>Between Sessions:</strong></p>
              <p className="mb-6">
                Many practices offer secure messaging for non-urgent questions and can share resources or worksheets electronically. The continuity of care remains strong, with your provider maintaining comprehensive records just as with traditional treatment.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Making Telehealth Work for You
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                To get the most from your virtual psychology sessions, consider these practical tips:
              </p>

              <div className="space-y-4 my-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p><strong>Create a consistent space:</strong> Using the same location for sessions helps create a therapeutic environment and signals to your mind that it's time to focus on your mental health</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p><strong>Minimize distractions:</strong> Turn off notifications on your device, let household members know you need privacy, and consider using headphones for better audio quality</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p><strong>Treat it like an office visit:</strong> Log in a few minutes early, be present and engaged, and give yourself a few moments after the session to process before returning to daily activities</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p><strong>Communicate openly:</strong> If something about the virtual format isn't working for you, let your provider know so they can make adjustments</p>
                </div>
              </div>

              <p className="mb-6">
                Remember that telehealth psychology is a tool that should serve your needs. If you find that in-person sessions work better for you, or if you prefer a hybrid approach with both virtual and office visits, most providers can accommodate your preferences.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Taking the Next Step
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base">
              <p className="mb-6">
                The barriers that once prevented people from accessing mental health care—time, distance, mobility, scheduling conflicts—no longer need to stand in your way. Telehealth psychology represents not just a convenience, but a fundamental expansion of access to quality, evidence-based care.
              </p>
              <p className="mb-6">
                Whether you're managing depression, anxiety, trauma, cognitive concerns, or simply seeking support during a difficult time, virtual care can provide the same comprehensive, personalized treatment you would receive in person. The therapeutic relationship, the evidence-based interventions, and the compassionate support all translate seamlessly to the virtual environment.
              </p>
              <p className="mb-6">
                If you've been putting off seeking help because of logistical challenges, or if you're simply curious about whether telehealth might be right for you, we encourage you to reach out. Our team in Fredericksburg, VA is here to answer your questions, address your concerns, and help you determine the best approach for your unique situation.
              </p>
              <p className="text-lg font-semibold">
                Quality mental health care is no longer limited by geography or circumstance. It's available wherever you are, whenever you need it.
              </p>
            </div>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="flex-shrink-0">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mb-1">
                Written by the Dr. Khanali's Neuropsychological Services Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm mb-3">
                Licensed clinical psychologists and a board-certified psychiatric nurse practitioner
              </p>
              <p className="text-[var(--color-ink)] text-sm leading-relaxed">
                Our team of experienced psychologists and mental health professionals is dedicated to providing evidence-based, compassionate care to individuals and families in Fredericksburg, VA and beyond. We stay current with the latest research and best practices to ensure our patients receive the highest quality treatment.
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
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Mental Health</div>
                <h4 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Your First Psychology Appointment
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  What to expect during your initial consultation and how to prepare for a successful first session.
                </p>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Education</div>
                <h4 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  When to Seek Professional Mental Health Support
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Recognizing the signs that it's time to reach out for professional psychological care and support.
                </p>
              </div>
            </Link>

            {/* Article 3 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Mental Health</div>
                <h4 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Evidence-Based Approaches to Anxiety Treatment
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Exploring proven therapeutic techniques and what makes them effective for managing anxiety.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4 animate-fade-up">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-up">
            Our team is here to help.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-up"
          >
            <span>Schedule a Consultation</span>
            <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}
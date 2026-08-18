import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Psychological Preparation for Major Surgery',
  description: 'Learn evidence-based strategies for mentally preparing for major surgery. Expert guidance on reducing anxiety, improving recovery outcomes, and building psychological resilience in Fredericksburg, VA.',
  keywords: 'psychological preparation surgery, preoperative anxiety, surgery mental health, surgical recovery, health psychology, Fredericksburg VA',
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
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-6">
            Psychological Preparation for Major Surgery
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
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
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The decision to undergo major surgery often comes after careful consideration, medical consultations, and weighing treatment options. Yet amid the flurry of preoperative appointments, insurance coordination, and logistical planning, one crucial element is frequently overlooked: the psychological preparation that can profoundly influence both your surgical experience and recovery outcome.
            </p>
            <p className="mb-6">
              Research consistently demonstrates that patients who engage in psychological preparation before major surgery experience less anxiety, require fewer pain medications, recover more quickly, and report higher satisfaction with their care. Your mind and body are intimately connected, and preparing your psychological state is just as important as the physical preparations your surgical team will guide you through.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Preoperative Anxiety
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Feeling anxious before surgery is not only common—it's nearly universal. Studies suggest that most surgical patients experience significant preoperative anxiety. This psychological response is a natural reaction to facing uncertainty, potential pain, loss of control, and concerns about outcomes.
            </p>
            <p className="mb-6">
              However, excessive anxiety can have measurable physiological effects. Elevated stress hormones like cortisol can compromise immune function, increase inflammation, affect wound healing, and even influence how your body responds to anesthesia. Anxiety can also contribute to higher blood pressure, increased heart rate, and muscle tension—all factors that may complicate the surgical process and recovery.
            </p>
            <p className="mb-6">
              Recognizing that your psychological state matters is the first step toward taking proactive control of this aspect of your surgical preparation.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Mind-Body Connection in Surgical Outcomes
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The field of psychoneuroimmunology has revealed fascinating insights into how psychological states influence physical healing. When you're chronically stressed or anxious, your body remains in a state of heightened alert, redirecting resources away from healing and immune function toward immediate survival responses.
            </p>
            <p className="mb-6">
              Conversely, patients who approach surgery with a sense of calm, confidence, and psychological preparedness show measurable differences in:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Reduced need for postoperative pain medication</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Shorter hospital stays and faster return to normal activities</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Lower rates of postoperative complications</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Improved wound healing and immune response</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Better overall satisfaction with the surgical experience</span>
              </li>
            </ul>
            <p className="mb-6">
              These aren't marginal differences—they represent meaningful improvements in both the quality and speed of recovery.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Psychological preparation isn't about eliminating all anxiety—it's about developing the mental tools and resilience to face surgery with confidence and control."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Evidence-Based Strategies for Psychological Preparation
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Fortunately, numerous evidence-based techniques can help you prepare psychologically for major surgery. These strategies are supported by research and recommended by health psychologists and surgical teams worldwide.
            </p>
            
            <h3 className="font-semibold text-lg text-[var(--color-ink)] mt-6 mb-3">
              1. Information and Education
            </h3>
            <p className="mb-6">
              Knowledge reduces fear. Request detailed information from your surgical team about what will happen before, during, and after your procedure. Understanding the process, timeline, and what to expect can significantly reduce anxiety. Don't hesitate to ask questions—your medical team expects and welcomes them.
            </p>

            <h3 className="font-semibold text-lg text-[var(--color-ink)] mt-6 mb-3">
              2. Relaxation Techniques
            </h3>
            <p className="mb-6">
              Deep breathing exercises, progressive muscle relaxation, and guided imagery are powerful tools for managing preoperative anxiety. Practice these techniques in the weeks leading up to surgery so they become second nature. Even five minutes of deep breathing can measurably lower stress hormones and heart rate.
            </p>

            <h3 className="font-semibold text-lg text-[var(--color-ink)] mt-6 mb-3">
              3. Cognitive Restructuring
            </h3>
            <p className="mb-6">
              Challenge catastrophic thinking patterns. When anxious thoughts arise—"What if something goes wrong?"—replace them with realistic, balanced perspectives: "My surgical team is experienced, I'm in good hands, and complications are rare." This isn't denial; it's balanced thinking based on evidence.
            </p>

            <h3 className="font-semibold text-lg text-[var(--color-ink)] mt-6 mb-3">
              4. Social Support
            </h3>
            <p className="mb-6">
              Don't face surgery alone. Research shows that patients with strong social support experience better outcomes. Share your concerns with trusted friends or family members, and arrange for someone to be with you before and after the procedure. Their presence provides comfort and practical assistance.
            </p>

            <h3 className="font-semibold text-lg text-[var(--color-ink)] mt-6 mb-3">
              5. Visualization and Mental Rehearsal
            </h3>
            <p className="mb-6">
              Athletes use visualization to prepare for competition—you can use the same technique for surgery. Regularly visualize yourself moving through the surgical experience successfully: arriving calm, waking up comfortably, and recovering smoothly. This mental rehearsal builds confidence and familiarity.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Addressing Specific Fears and Concerns
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Common preoperative fears include concerns about anesthesia, pain, loss of control, surgical complications, and the recovery process. Each of these deserves specific attention:
            </p>
            <p className="mb-6">
              <strong>Fear of anesthesia:</strong> Modern anesthesia is remarkably safe. Discuss your concerns directly with your anesthesiologist during your preoperative appointment. Understanding how they'll monitor you continuously and adjust medications in real-time can be reassuring.
            </p>
            <p className="mb-6">
              <strong>Pain concerns:</strong> Today's pain management protocols are sophisticated and multimodal. Your team will work with you to develop a personalized pain control plan. Knowing you'll have options and control over your comfort level reduces anticipatory anxiety.
            </p>
            <p className="mb-6">
              <strong>Loss of control:</strong> While you must surrender some control during surgery, you maintain agency in many ways—through advance directives, expressing preferences, asking questions, and making informed decisions about your care. Focus on what you can control rather than what you cannot.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When to Seek Professional Psychological Support
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While some anxiety is normal, excessive preoperative anxiety may warrant professional intervention. Consider seeking help from a psychologist or mental health professional if you experience:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Persistent, overwhelming anxiety that interferes with daily functioning</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Panic attacks or severe physical symptoms of anxiety</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sleep disturbances or significant changes in appetite</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Previous traumatic medical experiences that remain unresolved</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty managing anxious thoughts despite self-help strategies</span>
              </li>
            </ul>
            <p className="mb-6">
              Many hospitals and surgical centers now offer psychological preparation services, including brief cognitive-behavioral interventions specifically designed for surgical patients. Even one or two sessions with a trained professional can make a significant difference.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Creating Your Psychological Preparation Plan
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              As your surgery date approaches, develop a concrete psychological preparation plan:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Schedule daily relaxation practice, even if brief</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Write down questions for your surgical team and get them answered</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Arrange your support system—who will be with you and when</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Identify what comforts you (music, photos, meaningful objects) and plan to bring them</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Create a recovery vision—what will you look forward to post-surgery?</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Consider professional psychological support if anxiety feels unmanageable</span>
              </li>
            </ul>
            <p className="mb-6">
              Remember that psychological preparation isn't a one-time event but an ongoing process. Start early, practice regularly, and be patient with yourself as you develop these skills.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Facing major surgery requires courage, and attending to your psychological preparation is an act of self-care and wisdom. By understanding the mind-body connection, employing evidence-based coping strategies, and seeking support when needed, you're taking active steps to optimize your surgical experience and recovery.
            </p>
            <p className="mb-6">
              If you're preparing for surgery and struggling with anxiety or would like professional guidance in developing psychological preparation strategies, our team at Dr. Khanali's Neuropsychological Services in Fredericksburg, VA specializes in helping patients navigate medical challenges with greater psychological resilience and confidence. You don't have to face this alone.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-[var(--color-ink)] mb-1">
              Written by the Dr. Khanali's Neuropsychological Services Clinical Team
            </div>
            <div className="text-sm text-[var(--color-muted)]">
              Licensed clinical psychologists and a board-certified psychiatric nurse practitioner
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Understanding Health Anxiety in Chronic Illness
              </h4>
              <p className="text-sm text-[var(--color-muted)]">
                Learn how to manage anxiety when living with chronic medical conditions.
              </p>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Coping with Medical PTSD
              </h4>
              <p className="text-sm text-[var(--color-muted)]">
                Recognizing and healing from traumatic medical experiences.
              </p>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-[var(--color-light)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h4 className="font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Mindfulness Techniques for Pain Management
              </h4>
              <p className="text-sm text-[var(--color-muted)]">
                Evidence-based mindfulness strategies to help manage chronic pain.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}
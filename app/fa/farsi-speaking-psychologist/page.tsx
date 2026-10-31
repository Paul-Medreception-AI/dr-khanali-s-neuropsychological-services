import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Vazirmatn } from 'next/font/google'
import {
  OFFICES,
  formatOffice,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL_ADMIN,
  HOURS,
  PSYPACT,
  PROVIDERS,
  SITE_URL,
  INSURANCE_POLICY,
  INSURANCE_NOT_ACCEPTED,
  OUT_OF_POCKET_SERVICES,
} from '@/lib/practice'
import { FARSI_EN_PATH, FARSI_FA_PATH, FARSI_LANGUAGE_ALTERNATES, FARSI_SERVICES } from '@/lib/farsi'

// ─────────────────────────────────────────────────────────────────────────────
// Persian (Farsi) translation of /farsi-speaking-psychologist.
//
// ⚠️ MACHINE TRANSLATION. Published 2026-10-31 on Paul's instruction ("publish
// all pages, no need for me to review") WITHOUT review by a native speaker. Ask
// Dr. Khanali (native speaker, degree in English-Farsi translation) to read it
// when she can. Keep it a faithful translation of the English page: no
// claim may appear here that the English page does not make.
//
// Loaded the same way the site loads its other fonts (next/font/google), and only
// on this page. Vazirmatn is designed for Persian; Cormorant and DM Sans have no
// Arabic-script glyphs at all.
// ─────────────────────────────────────────────────────────────────────────────

const vazirmatn = Vazirmatn({ subsets: ['arabic', 'latin'], display: 'swap' })

// The Persian hours and insurance text below were translated from THESE values.
// If lib/practice.ts changes, the build stops here instead of publishing stale
// Persian facts: update the translation, then this snapshot.
const TRANSLATED_FROM = JSON.stringify({
  hours: [
    { days: 'Monday – Friday', hours: '9:00am – 5:00pm' },
    { days: 'Saturday', hours: '8:00am – 12:00pm' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  policy: 'We accept almost all insurance plans.',
  outOfPocket: ['Immigration evaluations', 'Learning disability evaluations'],
  psypact: 'Dr. Khanali is authorized under PSYPACT (E-Passport, Mobility Number 8709) to provide tele-psychological services in participating PSYPACT states.',
})
const CURRENT = JSON.stringify({
  hours: HOURS,
  policy: INSURANCE_POLICY,
  outOfPocket: OUT_OF_POCKET_SERVICES,
  psypact: PSYPACT.blurb,
})
if (CURRENT !== TRANSLATED_FROM) {
  throw new Error(
    'app/fa/farsi-speaking-psychologist: practice facts in lib/practice.ts changed since the Persian ' +
      'text was translated. Update the Persian hours/insurance/PSYPACT text, then TRANSLATED_FROM.',
  )
}

const HOURS_FA = [
  { days: 'دوشنبه تا جمعه', hours: '۹ صبح تا ۵ بعدازظهر' },
  { days: 'شنبه', hours: '۸ صبح تا ۱۲ ظهر' },
  { days: 'یکشنبه', hours: 'تعطیل' },
]
const OUT_OF_POCKET_FA = ['ارزیابی‌های مهاجرتی', 'ارزیابی‌های اختلال یادگیری']
const CITY_FA: Record<string, string> = {
  'fredericksburg-va': 'فردریکزبرگ، ویرجینیا',
  'woodbridge-va': 'وودبریج، ویرجینیا',
  'philadelphia-pa': 'فیلادلفیا، پنسیلوانیا',
}

export const metadata: Metadata = {
  title: 'روانشناس فارسی‌زبان در فردریکزبرگ، ویرجینیا | دکتر خانعلی',
  description:
    'روان‌درمانی و ارزیابی‌های روانشناختی، ADHD و عصب‌روانشناختی به زبان فارسی یا انگلیسی با دکتر رویا خانعلی، PsyD، در فردریکزبرگ و وودبریج، ویرجینیا.',
  alternates: {
    canonical: `${SITE_URL}${FARSI_FA_PATH}`,
    languages: FARSI_LANGUAGE_ALTERNATES,
  },
}

const dr = PROVIDERS[0]

/** Latin terms, phone numbers and names stay left-to-right inside Persian text.
 *  nowrap by default: a line break inside "E-Passport" or a phone number, in the
 *  middle of a right-to-left line, scrambles the visual order on phones. */
function Ltr({ children, wrap = false }: { children: React.ReactNode; wrap?: boolean }) {
  return <span dir="ltr" className={wrap ? undefined : 'whitespace-nowrap'}>{children}</span>
}

export default function FarsiSpeakingPsychologistFaPage() {
  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'صفحه اصلی', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'روانشناس فارسی‌زبان', item: `${SITE_URL}${FARSI_FA_PATH}` },
    ],
  }

  return (
    <div lang="fa" dir="rtl" className={`${vazirmatn.className} text-start`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      {/* Hero: same layout as the English page, mirrored by dir="rtl". */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-3/5">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <nav className="text-sm text-white/80">
                  <Link href="/" className="hover:underline">صفحه اصلی</Link>
                  <span className="mx-2">‹</span>
                  <span className="text-white">روانشناس فارسی‌زبان</span>
                </nav>
                <Link
                  href={FARSI_EN_PATH}
                  hrefLang="en"
                  lang="en"
                  dir="ltr"
                  className="rounded-full border border-white/35 bg-white/10 px-4 py-1.5 text-sm text-white hover:bg-white/20 transition-colors"
                >
                  Read this page in English
                </Link>
              </div>
              <p className="text-sm font-semibold text-white/80 mb-4">فارسی و انگلیسی</p>
              <h1 className="text-3xl md:text-5xl font-bold leading-[1.5] mb-6">
                روانشناس فارسی‌زبان در فردریکزبرگ، ویرجینیا
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-[2] max-w-3xl">
                دکتر رویا خانعلی، PsyD، روانشناس بالینی دوزبانه و مسلط به زبان‌های انگلیسی و فارسی است. او
                روان‌درمانی و ارزیابی‌های روانشناختی، ADHD، عصب‌روانشناختی، ناتوانی (Disability) و ارزیابی پیش از
                جراحی چاقی (باریاتریک) را به زبان فارسی و انگلیسی برای نوجوانان و بزرگسالان ارائه می‌دهد.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href={`tel:${PHONE_TEL}`} className="text-center bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">
                  تماس: <Ltr>{PHONE_DISPLAY}</Ltr>
                </a>
                <Link href="/contact" className="text-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                  درخواست نوبت
                </Link>
              </div>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[30rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={dr.photo!.src}
                alt="دکتر رویا خانعلی، MS, MA, PsyD، روانشناس بالینی دارای مجوز"
                fill
                priority
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 28rem, 100vw"
                className="object-cover object-[center_18%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who it is for + about Dr. Khanali */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-6 text-lg leading-[2] text-[color-mix(in_srgb,var(--color-ink)_80%,transparent)]">
            <h2 className="text-3xl font-bold leading-[1.6] text-[var(--color-ink)]">برای بیماران و خانواده‌های فارسی‌زبان</h2>
            <p>
              این صفحه برای بزرگسالان، جوانان و نوجوانان فارسی‌زبان است و همچنین برای اعضای خانواده‌ای که برای آن‌ها
              به دنبال مراقبت هستند.
            </p>
            <p>
              می‌توانید جلسات خود با دکتر خانعلی را به زبان فارسی یا انگلیسی داشته باشید.
            </p>
            <p>
              دکتر خانعلی تجربه گسترده‌ای در کار با مراجعانی از فرهنگ‌های گوناگون دارد. او دارای مدرک کارشناسی در
              رشته ترجمه انگلیسی و فارسی است و دوره دکترای خود را در برنامه دارای اعتبارنامه انجمن روانشناسی آمریکا
              (APA) در <Ltr wrap>The Chicago School of Professional Psychology</Ltr> در واشنگتن دی‌سی به پایان رسانده است.
            </p>
          </div>
          <aside className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
              <p className="text-2xl font-bold text-[var(--color-ink)]">
                دکتر رویا خانعلی<span className="text-base font-normal text-[var(--color-muted)]">، <Ltr>{dr.credentials}</Ltr></span>
              </p>
              <p className="text-[var(--color-primary)] font-semibold mt-2">روانشناس بالینی دارای مجوز</p>
              <p className="mt-4 text-[var(--color-ink)]">زبان‌ها: انگلیسی و فارسی</p>
              <Link href="/team" className="inline-block mt-6 text-[var(--color-primary)] font-semibold hover:underline">
                آشنایی با تیم ما (به انگلیسی) ←
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold leading-[1.6] text-center text-[var(--color-ink)] mb-4">خدماتی که به زبان فارسی ارائه می‌شود</h2>
          <p className="text-center text-[var(--color-muted)] max-w-2xl mx-auto mb-12 leading-[2]">
            دکتر خانعلی هر یک از این خدمات را به زبان فارسی یا انگلیسی ارائه می‌دهد. صفحه‌های توضیح هر خدمت به زبان
            انگلیسی هستند.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FARSI_SERVICES.map((s) => (
              <li key={s.en} className="relative bg-[var(--color-cream)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    {s.href ? (
                      <Link href={s.href} className="stretch-link font-semibold leading-[1.9] text-[var(--color-ink)] hover:text-[var(--color-primary)]">
                        {s.fa}
                      </Link>
                    ) : (
                      <span className="font-semibold leading-[1.9] text-[var(--color-ink)]">{s.fa}</span>
                    )}
                    {s.outOfPocket && (
                      <p className="text-sm text-[var(--color-muted)] mt-1">هزینه به‌صورت شخصی پرداخت می‌شود، نه از طریق بیمه</p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-center text-sm text-[var(--color-muted)] mt-8 max-w-2xl mx-auto leading-[2]">
            خدمات مدیریت دارو در این مطب توسط <Ltr>Anais Schultz, MSN</Ltr> به زبان‌های انگلیسی و اسپانیایی ارائه می‌شود.
          </p>
        </div>
      </section>

      {/* Offices + telehealth */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
            <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">مطب‌های ما</h2>
            <ul className="space-y-4">
              {OFFICES.map((o) => (
                <li key={o.slug}>
                  <Link href={`/locations/${o.slug}`} className="font-semibold text-[var(--color-primary)] hover:underline">
                    {CITY_FA[o.slug] ?? `${o.city}, ${o.stateName}`}
                  </Link>
                  <p className="text-[var(--color-muted)] text-end" dir="ltr">{formatOffice(o)}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
            <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">خدمات از راه دور (Telehealth)</h2>
            <p className="text-[var(--color-ink)] leading-[2]">
              دکتر خانعلی بر اساس <Ltr>PSYPACT</Ltr> (<Ltr>E-Passport</Ltr>، شماره <Ltr>Mobility</Ltr> ۸۷۰۹) مجاز به
              ارائه خدمات روانشناسی از راه دور در ایالت‌های عضو <Ltr>PSYPACT</Ltr> است.
            </p>
            <p className="text-[var(--color-ink)] leading-[2] mt-4">
              از مطب بپرسید کدام جلسات را می‌توان به‌صورت تصویری (ویدیویی) برگزار کرد.
            </p>
            <Link href="/telehealth" className="inline-block mt-6 text-[var(--color-primary)] font-semibold hover:underline">
              درباره خدمات از راه دور (به انگلیسی) ←
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-ink)] mb-8">بیمه</h2>
          <p className="text-lg text-center text-[var(--color-ink)]">ما تقریباً همه طرح‌های بیمه را می‌پذیریم.</p>
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <div className="bg-[var(--color-cream)] rounded-2xl p-6 border border-[var(--color-border)]">
              <h3 className="font-bold text-[var(--color-ink)] mb-3">پذیرفته نمی‌شود</h3>
              {/* Plan names stay in English: that is how they appear on the card. */}
              <ul className="space-y-1 text-[var(--color-muted)]">
                {INSURANCE_NOT_ACCEPTED.map((p) => <li key={p}><Ltr>{p}</Ltr></li>)}
              </ul>
            </div>
            <div className="bg-[var(--color-cream)] rounded-2xl p-6 border border-[var(--color-border)]">
              <h3 className="font-bold text-[var(--color-ink)] mb-3">با هزینه شخصی (بدون بیمه)</h3>
              <ul className="space-y-1 text-[var(--color-muted)]">
                {OUT_OF_POCKET_FA.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </div>
          <p className="text-center mt-8">
            <Link href="/insurance" className="text-[var(--color-primary)] font-semibold hover:underline">
              فهرست بیمه‌های پذیرفته‌شده (به انگلیسی) ←
            </Link>
          </p>
        </div>
      </section>

      {/* How to book */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold leading-[1.6] text-[var(--color-ink)] mb-8">چگونه به زبان فارسی نوبت بگیرید</h2>
            <ol className="space-y-6">
              {[
                <>با شماره <a href={`tel:${PHONE_TEL}`} className="font-semibold text-[var(--color-primary)] hover:underline"><Ltr>{PHONE_DISPLAY}</Ltr></a> تماس بگیرید یا از طریق <Link href="/contact" className="font-semibold text-[var(--color-primary)] hover:underline">فرم تماس</Link> ما پیام بفرستید.</>,
                <>به ما بگویید که می‌خواهید جلسه شما به زبان فارسی باشد.</>,
                <>ما برای تعیین وقت ارزیابی یا جلسه روان‌درمانی با شما تماس می‌گیریم.</>,
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)] text-white font-semibold flex items-center justify-center">
                    {(i + 1).toLocaleString('fa-IR')}
                  </span>
                  <p className="text-lg leading-[2] text-[var(--color-ink)] pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-[var(--color-muted)] leading-[2]">
              فرم تماس ما به زبان انگلیسی است. اگر برایتان ساده‌تر است، کلمه «<Ltr>Farsi</Ltr>» را در پیام خود بنویسید
              تا از ترجیح شما مطلع شویم.
            </p>
          </div>
          <aside className="lg:col-span-2 bg-white rounded-2xl p-8 border border-[var(--color-border)] h-fit">
            <h3 className="text-2xl font-bold text-[var(--color-ink)] mb-4">ساعات کاری</h3>
            <dl className="space-y-2 text-[var(--color-ink)]">
              {HOURS_FA.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt>{h.days}</dt>
                  <dd className="text-[var(--color-muted)]">{h.hours}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 break-all text-end" dir="ltr">
              <a href={`mailto:${EMAIL_ADMIN}`} className="text-[var(--color-primary)] hover:underline">{EMAIL_ADMIN}</a>
            </p>
          </aside>
        </div>
      </section>

      {/* Further reading */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-[var(--color-muted)] mb-3">مطلب مرتبط (به انگلیسی)</p>
          <Link
            href="/blog/bilingual-therapy-the-benefits-of-treatment-in-your-native-l"
            lang="en"
            dir="ltr"
            className="font-cormorant text-2xl text-[var(--color-primary)] hover:underline"
          >
            Bilingual Therapy: The Benefits of Treatment in Your Native Language
          </Link>
          <p className="mt-10 text-sm text-[var(--color-muted)] leading-[2]">
            این صفحه از نسخه انگلیسی ترجمه شده است. در صورت هرگونه تفاوت، <Link href={FARSI_EN_PATH} hrefLang="en" className="underline hover:text-[var(--color-primary)]">نسخه انگلیسی</Link> ملاک است.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.6] mb-6">درخواست نوبت به زبان فارسی</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-[2]">
            با شماره <Ltr>{PHONE_DISPLAY}</Ltr> تماس بگیرید یا برای ما پیام بفرستید و بگویید که می‌خواهید جلسه شما به
            زبان فارسی باشد.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE_TEL}`} className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">
              تماس: <Ltr>{PHONE_DISPLAY}</Ltr>
            </a>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
              درخواست نوبت
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

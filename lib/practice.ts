// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for every practice fact on this site.
//
// Everything here was taken verbatim from the practice's own site
// (drkhanalineuropsychologicalservicesllc.com) on 2026-08-17. Nothing in this
// file is inferred or invented.
//
// EDIT HERE, NOT IN THE PAGES. Offices, phone, hours, insurance, providers and
// licensure are all consumed from this file, so correcting a fact here corrects
// it everywhere.
//
// ⚠️ PENDING CONFIRMATION (2026-08-17): licensure is recorded as CP (New York),
// LP (Pennsylvania), Psychologist (Virginia) per Paul. The practice site states
// "Virginia, Pennsylvania and New York" under Dr. Khanali's name, which agrees.
// Confirm against the signed onboarding document before treating the state list
// or the PSYPACT count as marketing claims.
// ─────────────────────────────────────────────────────────────────────────────

export const PRACTICE_NAME = "Dr. Khanali's Neuropsychological Services, LLC"
export const PRACTICE_SHORT = "Dr. Khanali's Neuropsychological Services"
export const SITE_URL = 'https://www.drkhanalineuropsychologicalservicesllc.com'

export type Office = {
  slug: string
  city: string
  state: string
  stateName: string
  street: string
  suite: string
  zip: string
  primary: boolean
  /** Real neighbouring communities. Used for honest "serving" copy only — we do
   *  NOT claim an office in any of these. */
  nearby: string[]
}

/** The three real offices, in the order the practice lists them. */
export const OFFICES: Office[] = [
  {
    slug: 'fredericksburg-va',
    city: 'Fredericksburg',
    state: 'VA',
    stateName: 'Virginia',
    street: '1320 Central Park Blvd',
    suite: 'Ste 200',
    zip: '22401',
    primary: true,
    nearby: ['Stafford', 'Spotsylvania', 'King George', 'Culpeper'],
  },
  {
    slug: 'woodbridge-va',
    city: 'Woodbridge',
    state: 'VA',
    stateName: 'Virginia',
    street: '2026 Opitz Blvd',
    suite: 'Unit C',
    zip: '22191',
    primary: false,
    nearby: ['Dale City', 'Lake Ridge', 'Manassas', 'Prince William County'],
  },
  {
    slug: 'philadelphia-pa',
    city: 'Philadelphia',
    state: 'PA',
    stateName: 'Pennsylvania',
    street: '2929 Arch St.',
    suite: 'Ste 1700',
    zip: '19104',
    primary: false,
    nearby: ['University City', 'Center City', 'West Philadelphia'],
  },
]

export const PRIMARY_OFFICE = OFFICES.find(o => o.primary) ?? OFFICES[0]

export function formatOffice(o: Office): string {
  return `${o.street}, ${o.suite}, ${o.city}, ${o.state} ${o.zip}`
}

export const PHONE_DISPLAY = '(571) 317-1386'
export const PHONE_TEL = '+15713171386'
export const FAX_DISPLAY = '(571) 662-5157'
export const EMAIL_MAIN = 'Drkhanali@drkhanalineuropsychologicalservicesllc.com'
export const EMAIL_ADMIN = 'Admin1@drkhanalineuropsychologicalservicesllc.com'

export const HOURS: { days: string; hours: string }[] = [
  { days: 'Monday – Friday', hours: '9:00am – 5:00pm' },
  { days: 'Saturday', hours: '8:00am – 12:00pm' },
  { days: 'Sunday', hours: 'Closed' },
]

/** States where the practice holds a license. Confirm against onboarding doc. */
export const LICENSED_STATES = ['Virginia', 'Pennsylvania', 'New York']

/** PSYPACT E-Passport, taken verbatim from the practice site. */
export const PSYPACT = {
  mobilityNumber: '8709',
  stateCount: 38,
  blurb:
    'Dr. Khanali is authorized under PSYPACT (E-Passport, Mobility Number 8709) to provide tele-psychological services across 38 states.',
}

/** Who the practice actually treats — verbatim from the site. */
export const POPULATION = 'Adults, young adults and adolescents'

/** Real providers, with bios condensed from their own site copy. No invented people. */
export type Provider = {
  name: string
  credentials: string
  role: string
  languages?: string[]
  bio: string[]
  /** Real headshot scraped from the practice's own site. Attribution verified by
   *  document order on the source page (each image sits immediately before its
   *  provider's name in a repeating card template) and, for Anais, by filename. */
  photo?: { src: string; alt: string }
}

export const PROVIDERS: Provider[] = [
  {
    name: 'Dr. Roya Khanali',
    credentials: 'MS, MA, PsyD',
    role: 'Licensed Clinical Psychologist',
    languages: ['English', 'Persian/Farsi'],
    photo: { src: '/images/dr-roya-khanali.png', alt: 'Dr. Roya Khanali, MS, MA, PsyD, Licensed Clinical Psychologist' },
    bio: [
      'Dr. Roya Khanali, PsyD, is a bilingual clinical psychologist fluent in English and Persian/Farsi. She provides therapy and psychological, ADHD, neuropsychological, disability, and pre-bariatric surgery evaluations to adolescents and adults in both Persian/Farsi and English.',
      'Dr. Khanali has extensive experience working with culturally diverse clients. She holds a bachelor’s degree in science in English-Farsi Translation, and completed her doctorate at the APA-accredited program at the Chicago School of Professional Psychology in Washington, DC.',
      'Dr. Khanali is authorized under PSYPACT (E-Passport, Mobility Number 8709) to provide tele-psychological services across 38 states.',
    ],
  },
  {
    name: 'Dr. Nicole Carey',
    credentials: 'PsyD',
    role: 'Post-Doctoral Fellow in Clinical Psychology',
    photo: { src: '/images/dr-nicole-carey.png', alt: 'Dr. Nicole Carey, PsyD, Post-Doctoral Fellow in Clinical Psychology' },
    bio: [
      'Dr. Nicole Carey, PsyD, is a clinical psychology post-doctoral resident with over 15 years of experience providing psychological services and assessment to children, adolescents, adults, and families. She specializes in the treatment of trauma, anxiety, depression, grief, adjustment concerns, behavioral challenges, and social-emotional development.',
      'Dr. Carey has extensive experience conducting individual, family, play, and group therapy, as well as neuropsychological assessments. She has worked in community mental health settings, private practice, military research programs, and independent schools, allowing her to support individuals from diverse cultural, socioeconomic, and educational backgrounds.',
      'Dr. Carey earned her Doctorate in Clinical Psychology from the American School of Professional Psychology, an APA-accredited program. She also holds a Master of Education in Community Counseling from Howard University, a Master of Arts in Developmental Psychology from Teachers College, Columbia University, and a Bachelor of Arts in Child Development with a minor in Ethnic Studies from Mills College.',
      'Dr. Carey believes that every individual possesses unique strengths and resilience. She works collaboratively with clients to foster insight, build coping skills, strengthen relationships, and create lasting positive change.',
    ],
  },
  {
    name: 'Anais Schultz',
    credentials: 'MSN',
    role: 'Board-Certified Psychiatric Nurse Practitioner',
    languages: ['English', 'Spanish'],
    photo: { src: '/images/anais-schultz.jpeg', alt: 'Anais Schultz, MSN, Board-Certified Psychiatric Nurse Practitioner' },
    bio: [
      'Anais Schultz is a Board-Certified Psychiatric Nurse Practitioner who is passionate about creating a warm, compassionate, and culturally inclusive pathway to healing. She is committed to educating individuals and the broader community about the importance of mental health and wellness.',
      'Fluent in both English and Spanish, Anais embraces cultural diversity in her practice, ensuring that patients from all backgrounds feel seen, heard, and understood.',
      'Her journey in nursing began in 2017, gaining experience across mental health, internal medicine, and intensive care. That foundation inspired her to pursue advanced nursing education, earning her Master’s degree from Wilkes University in Pennsylvania.',
      'Anais is dedicated to continuous learning and to providing evidence-based, holistic care tailored to each individual’s needs, fostering a calm and trusting environment where patients feel safe to share their concerns.',
    ],
  },
]

/** ── Insurance ──────────────────────────────────────────────────────────────
 *  Updated 2026-08-18 direct from the practice, and this SUPERSEDES the
 *  ~22-carrier list transcribed from their old site: they accept almost all
 *  plans, and it is the exclusions that are worth naming.
 */
export const INSURANCE_POLICY =
  'We accept almost all insurance plans.'

/** The only plans NOT accepted. Naming exclusions is more useful — and stays
 *  accurate longer — than maintaining a list of every carrier. */
export const INSURANCE_NOT_ACCEPTED = [
  'PA Medicaid',
  'Aetna Better Health of Virginia',
  'Humana',
]

/** Services billed out of pocket rather than through insurance. */
export const OUT_OF_POCKET_SERVICES = [
  'Immigration evaluations',
  'Learning disability evaluations',
]

/** No social profiles exist on the practice site. Leave empty — do not invent. */
export const SOCIALS: { platform: string; url: string }[] = []

/** No published patient reviews. Leave empty — FTC endorsement rules. */
export const REVIEWS: { quote: string; name: string }[] = []

/** Short brand for <title> suffixes. The full practice name is 41 characters, so
 *  appending it left every page title over Google's ~65-char display limit —
 *  90 of 97 built pages were truncated, burning the brand twice over while the
 *  query itself got cut off. */
export const BRAND_SHORT = 'Dr. Khanali, PsyD'

/** Append the brand only when the title has room for it. */
export function withBrand(title: string): string {
  const t = title.trim()
  if (/khanali/i.test(t)) return t                       // already branded
  const suffixed = `${t} | ${BRAND_SHORT}`
  return suffixed.length <= 62 ? suffixed : t
}

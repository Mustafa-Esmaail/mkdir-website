export type Lang = 'en' | 'ar';

export const contact = {
  email: 'mustafa.e.shreif@gmail.com',
  whatsapp: '201055276221',
  phoneDisplay: '+20 105 527 6221',
  linkedin: 'https://linkedin.com/in/mustafa-elshrief',
  github: 'https://github.com/Mustafa-Esmaail',
};

/** Site base path ("/" locally, "/repo-name/" on GitHub Pages project sites) */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative asset or page path with the base path */
export const withBase = (path: string) => `${BASE}${path.startsWith('/') ? path : `/${path}`}`;

/** Build a localized URL: href('ar', '/work/') -> '/ar/work/' */
export function href(lang: Lang, path: string) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return withBase(lang === 'en' ? clean : `/ar${clean}`);
}

/** The same page in the other language */
export function switchLang(lang: Lang, pathname: string) {
  const local = pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname;
  const target = lang === 'ar' ? local.replace(/^\/ar(\/|$)/, '/') : `/ar${local}`;
  return withBase(target);
}

export const ui = {
  en: {
    'meta.title': 'mkdir Solutions — Software engineering studio',
    'meta.description': 'mkdir Solutions builds SaaS platforms, ERP systems, e-commerce and APIs for startups, SMEs and enterprises across Egypt, Saudi Arabia and the Gulf.',
    'nav.start': 'Start a project',
    'nav.otherLang': 'العربية',
    'nav.explorer': 'Explorer',
    'nav.openFiles': 'Browse site',
    'skip': 'Skip to content',

    'home.h1': 'Every great product starts with an empty folder.',
    'home.lead': 'We fill it with clean architecture and working software: SaaS platforms, ERP systems, e-commerce and APIs for startups, SMEs and enterprises in Egypt, Saudi Arabia and the Gulf.',
    'home.ctaWork': 'Browse work/',
    'home.services': 'services/',
    'home.servicesMeta': 'what we build',
    'home.work': 'work/',
    'home.workMeta': 'selected projects',
    'home.allWork': 'ls work/ — see all',
    'home.process': 'process.md',
    'home.processMeta': 'how we work',
    'home.why': 'Why mkdir',

    'process.1.cmd': '$ mkdir project', 'process.1.t': 'Discover', 'process.1.d': 'We map your business, users and goals, then agree scope, timeline and budget in writing.',
    'process.2.cmd': '$ cat ARCHITECTURE.md', 'process.2.t': 'Architect', 'process.2.d': 'Data model, system design and tech decisions are documented before any code is written.',
    'process.3.cmd': '$ git push', 'process.3.t': 'Build', 'process.3.d': 'Phase-by-phase delivery with a demo at every milestone, so you see real progress.',
    'process.4.cmd': '$ deploy --prod', 'process.4.t': 'Launch & support', 'process.4.d': 'Production release, documentation and handover, then ongoing support as you grow.',

    'why.1.t': 'Senior hands only', 'why.1.d': 'The people you talk to are the people who build your system — no account managers, no handoffs.',
    'why.2.t': 'Built for the region', 'why.2.d': 'Local payment gateways and shipping providers, Arabic and English, and the realities of Saudi and Egyptian markets.',
    'why.3.t': 'You own everything', 'why.3.d': 'Clean, documented code and a full handover. No lock-in.',

    'services.title': 'What we build',
    'services.lead': 'We focus on backend-heavy systems — the platforms that hold your data, your money and your operations.',

    'work.title': 'Selected work',
    'work.lead': 'Platforms we have designed and built for companies in Egypt, Saudi Arabia and beyond.',
    'work.items': 'items',
    'work.overview': 'Overview',
    'work.built': 'What we built',
    'work.stack': 'Stack',
    'work.market': 'Market',
    'work.sector': 'Sector',
    'work.back': 'cd ../work',
    'work.next': 'Next project',

    'about.title': 'About mkdir',
    'about.p1': 'In the terminal, mkdir is the first command of every project. It creates an empty folder: the place where something new gets built.',
    'about.p2': 'That is the work we do. We are a software engineering studio that designs and builds the systems companies run on, for startups, growing businesses and enterprises across Egypt, Saudi Arabia and the Gulf.',
    'about.valuesTitle': 'How we think',
    'about.v1.t': 'Architecture before code', 'about.v1.d': 'Every project starts with a documented plan for the data, the system and the trade-offs. Decisions are written down, not guessed later.',
    'about.v2.t': 'Small team, senior hands', 'about.v2.d': 'The people you talk to are the people who build your system. No account managers, no handoffs, no surprises.',
    'about.v3.t': 'Built for this region', 'about.v3.d': 'Arabic and English, local payment gateways and shipping providers, and a real understanding of how business works in Saudi Arabia and Egypt.',
    'about.v4.t': 'You own all of it', 'about.v4.d': 'Clean code, full documentation and a complete handover. Your system is never locked to us.',
    'about.founder': 'From the founder',
    'about.note': 'I named the studio after the first command of every project because that is the moment we care about most: the start, when the right foundations make everything after them easier. Our job is to give your business software that is built well from day one and keeps working as you grow.',
    'about.founderName': 'Mustafa El-Sherief',
    'about.founderRole': 'Founder, mkdir Solutions',

    'contact.title': 'Start a project',
    'contact.lead': 'Tell us what you are building. We reply within one business day with next steps and an honest view of scope.',
    'contact.name': 'Your name',
    'contact.email': 'Email',
    'contact.company': 'Company (optional)',
    'contact.type': 'Project type',
    'contact.message': 'What do you want to build?',
    'contact.send': 'Send message',
    'contact.or': 'Or reach us directly',
    'contact.required': 'Please fill in your name, email and message.',
    'contact.cmd1': '# contact.sh',
    'contact.cmd2': './start-project --with mkdir',
    'contact.cmd3': '→ we reply within one business day',
    'contact.run': 'Run it',

    'footer.rights': 'mkdir Solutions',
    'footer.where': 'Based in Egypt · Serving KSA & the Gulf',
  },
  ar: {
    'meta.title': 'mkdir Solutions — استوديو هندسة برمجيات',
    'meta.description': 'نبني منصات SaaS وأنظمة ERP والتجارة الإلكترونية وواجهات API للشركات الناشئة والمتوسطة والكبرى في مصر والسعودية والخليج.',
    'nav.start': 'ابدأ مشروعك',
    'nav.otherLang': 'English',
    'nav.explorer': 'المستكشف',
    'nav.openFiles': 'تصفح الموقع',
    'skip': 'انتقل إلى المحتوى',

    'home.h1': 'كل منتج عظيم يبدأ بمجلد فارغ.',
    'home.lead': 'ونحن نملؤه بمعمارية نظيفة وبرمجيات تعمل: منصات SaaS وأنظمة ERP والتجارة الإلكترونية وواجهات API للشركات في مصر والسعودية والخليج.',
    'home.ctaWork': 'تصفح أعمالنا',
    'home.services': 'services/',
    'home.servicesMeta': 'ماذا نبني',
    'home.work': 'work/',
    'home.workMeta': 'مشاريع مختارة',
    'home.allWork': 'عرض كل المشاريع',
    'home.process': 'process.md',
    'home.processMeta': 'طريقة عملنا',
    'home.why': 'لماذا mkdir',

    'process.1.cmd': '$ mkdir project', 'process.1.t': 'الاكتشاف', 'process.1.d': 'نفهم نشاطك ومستخدميك وأهدافك، ثم نتفق كتابياً على النطاق والجدول الزمني والميزانية.',
    'process.2.cmd': '$ cat ARCHITECTURE.md', 'process.2.t': 'التصميم المعماري', 'process.2.d': 'نوثّق نموذج البيانات وتصميم النظام والقرارات التقنية قبل كتابة أي كود.',
    'process.3.cmd': '$ git push', 'process.3.t': 'التطوير', 'process.3.d': 'تسليم على مراحل مع عرض عملي في كل مرحلة، لترى التقدم الحقيقي بنفسك.',
    'process.4.cmd': '$ deploy --prod', 'process.4.t': 'الإطلاق والدعم', 'process.4.d': 'إطلاق على بيئة الإنتاج مع التوثيق والتسليم، ثم دعم مستمر مع نمو أعمالك.',

    'why.1.t': 'خبرة مباشرة', 'why.1.d': 'من تتحدث معهم هم من يبنون نظامك، بلا وسطاء وبلا تسليم بين فرق.',
    'why.2.t': 'مصمم للمنطقة', 'why.2.d': 'بوابات دفع وشركات شحن محلية، عربي وإنجليزي، وفهم حقيقي للسوقين السعودي والمصري.',
    'why.3.t': 'كل شيء ملكك', 'why.3.d': 'كود نظيف وموثق وتسليم كامل، بدون أي ارتباط إجباري.',

    'services.title': 'ماذا نبني',
    'services.lead': 'نركز على الأنظمة الخلفية المعقدة: المنصات التي تحمل بياناتك وأموالك وعملياتك.',

    'work.title': 'أعمال مختارة',
    'work.lead': 'منصات صممناها وبنيناها لشركات في مصر والسعودية وخارجهما.',
    'work.items': 'عناصر',
    'work.overview': 'نظرة عامة',
    'work.built': 'ماذا بنينا',
    'work.stack': 'التقنيات',
    'work.market': 'السوق',
    'work.sector': 'القطاع',
    'work.back': 'cd ../work',
    'work.next': 'المشروع التالي',

    'about.title': 'عن mkdir',
    'about.p1': 'في الـ Terminal، الأمر mkdir هو أول أمر في أي مشروع. ينشئ مجلداً فارغاً: المكان الذي يُبنى فيه كل شيء جديد.',
    'about.p2': 'وهذا هو عملنا. نحن استوديو هندسة برمجيات يصمم ويبني الأنظمة التي تعمل عليها الشركات، للشركات الناشئة والنامية والمؤسسات الكبرى في مصر والسعودية والخليج.',
    'about.valuesTitle': 'كيف نفكر',
    'about.v1.t': 'المعمارية قبل الكود', 'about.v1.d': 'كل مشروع يبدأ بخطة موثقة للبيانات والنظام والقرارات التقنية. القرارات تُكتب من البداية، لا تُخمَّن لاحقاً.',
    'about.v2.t': 'فريق صغير وخبرة حقيقية', 'about.v2.d': 'من تتحدث معهم هم من يبنون نظامك. لا وسطاء ولا تسليم بين فرق ولا مفاجآت.',
    'about.v3.t': 'مصمم لهذه المنطقة', 'about.v3.d': 'عربي وإنجليزي، بوابات دفع وشركات شحن محلية، وفهم حقيقي لطريقة العمل في السعودية ومصر.',
    'about.v4.t': 'كل شيء ملكك', 'about.v4.d': 'كود نظيف وتوثيق كامل وتسليم شامل. نظامك لا يرتبط بنا أبداً.',
    'about.founder': 'كلمة المؤسس',
    'about.note': 'سمّيت الاستوديو باسم أول أمر في أي مشروع لأن هذه هي اللحظة التي نهتم بها أكثر: البداية، حين تجعل الأسس الصحيحة كل ما بعدها أسهل. مهمتنا أن نقدم لشركتك برمجيات مبنية بشكل صحيح من اليوم الأول وتستمر في العمل مع نموك.',
    'about.founderName': 'مصطفى الشريف',
    'about.founderRole': 'المؤسس، mkdir Solutions',

    'contact.title': 'ابدأ مشروعك',
    'contact.lead': 'أخبرنا بما تريد بناءه، وسنرد خلال يوم عمل واحد بالخطوات التالية ورؤية واضحة للنطاق.',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.company': 'الشركة (اختياري)',
    'contact.type': 'نوع المشروع',
    'contact.message': 'ماذا تريد أن تبني؟',
    'contact.send': 'أرسل الرسالة',
    'contact.or': 'أو تواصل معنا مباشرة',
    'contact.required': 'من فضلك أدخل الاسم والبريد الإلكتروني والرسالة.',
    'contact.cmd1': '# contact.sh',
    'contact.cmd2': './start-project --with mkdir',
    'contact.cmd3': '← نرد خلال يوم عمل واحد',
    'contact.run': 'ابدأ الآن',

    'footer.rights': 'mkdir Solutions',
    'footer.where': 'مقرنا مصر · نخدم السعودية والخليج',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
export const t = (lang: Lang) => (key: UIKey) => ui[lang][key];

export type Lang = 'en' | 'ar';

export const contact = {
  email: 'mustafa.e.shreif@gmail.com',
  whatsapp: '201055276221',
  phoneDisplay: '+20 105 527 6221',
  linkedin: 'https://linkedin.com/in/mustafa-elshrief',
  github: 'https://github.com/Mustafa-Esmaail',
};

/** Build a localized URL: href('ar', '/work/') -> '/ar/work/' */
export function href(lang: Lang, path: string) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'en' ? clean : `/ar${clean === '/' ? '/' : clean}`;
}

/** The same page in the other language */
export function switchLang(lang: Lang, pathname: string) {
  if (lang === 'ar') return pathname.replace(/^\/ar(\/|$)/, '/') || '/';
  return pathname === '/' ? '/ar/' : `/ar${pathname}`;
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

    'why.1.t': 'Senior-led', 'why.1.d': 'You work directly with an engineer with 5+ years in Laravel, MySQL and APIs — no account managers in between.',
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
    'about.p1': 'In the terminal, mkdir is the first command you run to start something new — it creates the folder where everything gets built.',
    'about.p2': 'That is what we do for businesses: we create the systems and backends they run on. mkdir Solutions is a software engineering studio based in Egypt, working with clients across Egypt, Saudi Arabia and the Gulf.',
    'about.founder': 'Founder',
    'about.founderName': 'Mustafa El-Sherief',
    'about.founderRole': 'Founder & Senior Backend Engineer',
    'about.founderBio': '5+ years building ERP and CRM systems, multi-warehouse inventory, POS integrations, e-commerce with regional payment and shipping APIs, and SaaS platforms. Specialised in Laravel, MySQL and RESTful API design.',
    'about.stack': 'Core stack',

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

    'why.1.t': 'خبرة مباشرة', 'why.1.d': 'تتعامل مباشرة مع مهندس بخبرة تزيد عن 5 سنوات في Laravel و MySQL والـ API، دون وسطاء.',
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
    'about.p1': 'في الـ Terminal، الأمر mkdir هو أول أمر تكتبه لتبدأ شيئاً جديداً: ينشئ المجلد الذي يُبنى فيه كل شيء.',
    'about.p2': 'وهذا ما نفعله للشركات: نبني الأنظمة التي تعمل عليها. mkdir Solutions استوديو هندسة برمجيات مقره مصر، ويعمل مع عملاء في مصر والسعودية والخليج.',
    'about.founder': 'المؤسس',
    'about.founderName': 'مصطفى الشريف',
    'about.founderRole': 'المؤسس ومهندس Backend أول',
    'about.founderBio': 'أكثر من 5 سنوات في بناء أنظمة ERP و CRM، والمخزون متعدد المستودعات، وربط نقاط البيع، والمتاجر الإلكترونية مع بوابات الدفع والشحن المحلية، ومنصات SaaS. متخصص في Laravel و MySQL وتصميم واجهات REST.',
    'about.stack': 'التقنيات الأساسية',

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

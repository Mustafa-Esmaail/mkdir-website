import type { Lang } from '../i18n/ui';

export type Region = 'EG' | 'SA' | 'GL';

export interface Project {
  slug: string;
  name: string;
  featured?: boolean;
  region: Region;
  sector: Record<Lang, string>;
  summary: Record<Lang, string>;
  highlights: Record<Lang, string[]>;
  stack: string[];
}

export const projects: Project[] = [
  {
    slug: 'xclinics',
    name: 'XClinics',
    featured: true,
    region: 'GL',
    sector: { en: 'Healthcare SaaS', ar: 'SaaS طبي' },
    summary: {
      en: 'A multi-tenant appointment-booking platform for clinics. Each clinic gets its own space for staff, schedules and bookings on a shared, secure architecture.',
      ar: 'منصة SaaS متعددة المستأجرين لحجز مواعيد العيادات. كل عيادة لها مساحتها الخاصة للطاقم والجداول والحجوزات على بنية مشتركة وآمنة.',
    },
    highlights: {
      en: ['Shared-schema multi-tenancy with path-based tenant routing', 'Per-tenant users and role-based permissions', 'Full admin panel built with Filament', 'Domain-driven architecture, documented end to end'],
      ar: ['تعدد مستأجرين بقاعدة بيانات مشتركة وتوجيه حسب المسار', 'مستخدمون وصلاحيات مستقلة لكل عيادة', 'لوحة تحكم كاملة باستخدام Filament', 'معمارية موجهة بالمجال وموثقة بالكامل'],
    },
    stack: ['Laravel 11', 'Livewire 3', 'Filament 3', 'Alpine.js', 'Tailwind CSS'],
  },
  {
    slug: 'inatural',
    name: 'iNatural Store',
    featured: true,
    region: 'SA',
    sector: { en: 'E-commerce marketplace', ar: 'متجر إلكتروني' },
    summary: {
      en: 'An e-commerce marketplace for the Saudi market, integrated with six payment gateways and six shipping providers.',
      ar: 'متجر إلكتروني للسوق السعودي متكامل مع ست بوابات دفع وست شركات شحن.',
    },
    highlights: {
      en: ['Payments: Tabby, Tamara, Noon, STC Pay, Tap, UPayments', 'Shipping: Aramex, SMSA, Redbox, Hajer, Storage Station, iMile', 'Checkout and order flows for the Saudi market'],
      ar: ['الدفع: تابي، تمارا، نون، STC Pay، Tap، UPayments', 'الشحن: أرامكس، SMSA، ريدبوكس، هاجر، Storage Station، iMile', 'مسارات شراء وطلبات مصممة للسوق السعودي'],
    },
    stack: ['Laravel', 'Next.js', 'MySQL', 'Payment APIs', 'Shipping APIs'],
  },
  {
    slug: 'yalla-beena',
    name: 'Yalla Beena',
    featured: true,
    region: 'SA',
    sector: { en: 'On-demand home services', ar: 'خدمات منزلية عند الطلب' },
    summary: {
      en: 'A Saudi on-demand home services platform handling bookings for laundry, car detailing, medical testing and beauty services.',
      ar: 'منصة سعودية للخدمات المنزلية عند الطلب تدير حجوزات الغسيل وتنظيف السيارات والتحاليل الطبية وخدمات التجميل.',
    },
    highlights: {
      en: ['Booking engine across multiple service types', 'Structured REST API for web and mobile', 'Database design for providers, slots and orders'],
      ar: ['نظام حجز لعدة أنواع من الخدمات', 'واجهة REST منظمة للويب والموبايل', 'تصميم قاعدة بيانات للمزودين والمواعيد والطلبات'],
    },
    stack: ['Laravel', 'React.js', 'REST API', 'MySQL'],
  },
  {
    slug: 'cp-portal-erp',
    name: 'CP-Portal ERP',
    featured: true,
    region: 'EG',
    sector: { en: 'Construction ERP', ar: 'ERP للمقاولات' },
    summary: {
      en: 'An ERP portal for a construction company, connecting project metrics, HR, asset tracking, budgets and cost control.',
      ar: 'نظام ERP لشركة مقاولات يربط مؤشرات المشاريع والموارد البشرية وتتبع الأصول والميزانيات والتحكم في التكاليف.',
    },
    highlights: {
      en: ['Budget management and cost control', 'HR and asset tracking', 'Role-based access and financial logs'],
      ar: ['إدارة الميزانيات والتحكم في التكاليف', 'الموارد البشرية وتتبع الأصول', 'صلاحيات حسب الدور وسجلات مالية'],
    },
    stack: ['Laravel', 'Livewire', 'MySQL', 'RBAC'],
  },
  {
    slug: 'storex',
    name: 'StoreX Supermarket',
    region: 'EG',
    sector: { en: 'Online grocery', ar: 'سوبرماركت إلكتروني' },
    summary: {
      en: 'An online grocery platform with POS integration, multi-warehouse inventory, courier mapping and mobile app clients.',
      ar: 'منصة سوبرماركت إلكتروني مع ربط نقاط البيع وتعدد المستودعات وتتبع المندوبين وتطبيقات موبايل.',
    },
    highlights: {
      en: ['Real-time POS synchronisation', 'Multi-warehouse inventory allocation', 'API for Flutter mobile apps'],
      ar: ['مزامنة لحظية مع نقاط البيع', 'توزيع المخزون على عدة مستودعات', 'واجهة API لتطبيقات Flutter'],
    },
    stack: ['Laravel', 'React.js', 'Flutter API', 'MySQL'],
  },
  {
    slug: 'hssi',
    name: 'Higher Saudi Skills Institute',
    region: 'SA',
    sector: { en: 'Education & training', ar: 'التعليم والتدريب' },
    summary: {
      en: 'A training-academy platform with course management, certification records, notifications and a mobile API.',
      ar: 'منصة أكاديمية تدريبية لإدارة الدورات والشهادات والإشعارات مع واجهة API للموبايل.',
    },
    highlights: {
      en: ['Course and enrolment management', 'Certification records', 'Automated notifications', 'Mobile backend API'],
      ar: ['إدارة الدورات والتسجيل', 'سجلات الشهادات', 'إشعارات تلقائية', 'واجهة API لتطبيق الموبايل'],
    },
    stack: ['Laravel', 'REST API', 'MySQL'],
  },
  {
    slug: 'eapd',
    name: 'EAPD — Ministry of Foreign Affairs',
    region: 'EG',
    sector: { en: 'Government reporting', ar: 'تقارير حكومية' },
    summary: {
      en: 'An enterprise reporting dashboard for the Egyptian Ministry of Foreign Affairs, with dynamic filtering, role-based access and PDF / Excel exports.',
      ar: 'لوحة تقارير مؤسسية لوزارة الخارجية المصرية مع فلترة ديناميكية وصلاحيات حسب الدور وتصدير PDF و Excel.',
    },
    highlights: {
      en: ['Dynamic data filtering', 'Role-based security clearance', 'Optimised PDF and Excel export'],
      ar: ['فلترة ديناميكية للبيانات', 'مستويات وصول أمنية حسب الدور', 'تصدير محسّن إلى PDF و Excel'],
    },
    stack: ['Laravel', 'Blade', 'RBAC', 'MySQL'],
  },
  {
    slug: 'vera-expo',
    name: 'VERA EXPO',
    region: 'GL',
    sector: { en: 'Virtual events', ar: 'فعاليات افتراضية' },
    summary: {
      en: 'A virtual events platform for trade shows, real-estate exhibitions and conferences, with real-time messaging.',
      ar: 'منصة فعاليات افتراضية للمعارض التجارية والعقارية والمؤتمرات مع مراسلة لحظية.',
    },
    highlights: {
      en: ['Virtual exhibition spaces', 'Real-time messaging over APIs', 'Event activity tracking'],
      ar: ['مساحات معارض افتراضية', 'مراسلة لحظية عبر الـ API', 'تتبع نشاط الفعاليات'],
    },
    stack: ['Laravel', 'PHP', 'REST API'],
  },
  {
    slug: 'arabic-sign-language',
    name: 'Arabic Sign Language Translator',
    region: 'EG',
    sector: { en: 'AI research', ar: 'بحث في الذكاء الاصطناعي' },
    summary: {
      en: 'A web application connecting an AI model that translates Arabic sign language into readable text, to support deaf and hard-of-hearing communication.',
      ar: 'تطبيق ويب يربط نموذج ذكاء اصطناعي يترجم لغة الإشارة العربية إلى نص مقروء لدعم التواصل مع الصم وضعاف السمع.',
    },
    highlights: {
      en: ['AI model served through a Python API', 'Web interface for real-time translation', 'Graduation project — graded Excellent'],
      ar: ['نموذج ذكاء اصطناعي عبر Python API', 'واجهة ويب للترجمة', 'مشروع تخرج بتقدير امتياز'],
    },
    stack: ['Python', 'AI model', 'React.js'],
  },
];

export const regionLabel: Record<Region, Record<Lang, string>> = {
  EG: { en: 'Egypt', ar: 'مصر' },
  SA: { en: 'Saudi Arabia', ar: 'السعودية' },
  GL: { en: 'Global', ar: 'دولي' },
};

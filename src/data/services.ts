import type { Lang } from '../i18n/ui';

export interface Service {
  id: string;
  file: string;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
  points: Record<Lang, string[]>;
}

export const services: Service[] = [
  {
    id: 'saas',
    file: 'saas.md',
    title: { en: 'SaaS platforms', ar: 'منصات SaaS' },
    summary: {
      en: 'Multi-tenant products with subscriptions, roles and permissions, and admin panels — built on a clean domain architecture that scales.',
      ar: 'منتجات متعددة المستأجرين مع الاشتراكات والصلاحيات ولوحات التحكم، مبنية على معمارية نظيفة قابلة للتوسع.',
    },
    points: {
      en: ['Multi-tenancy & per-tenant data isolation', 'Billing and subscription flows', 'Role-based access control', 'Admin panels with Filament'],
      ar: ['تعدد المستأجرين وعزل بيانات كل عميل', 'الفوترة والاشتراكات', 'التحكم في الصلاحيات حسب الدور', 'لوحات تحكم باستخدام Filament'],
    },
  },
  {
    id: 'erp-crm',
    file: 'erp-crm.md',
    title: { en: 'ERP & CRM systems', ar: 'أنظمة ERP و CRM' },
    summary: {
      en: 'Custom systems modelled on how your business actually works — inventory, finance, HR, sales and approvals in one place.',
      ar: 'أنظمة مخصصة مبنية على طريقة عمل شركتك فعلياً: المخزون والمالية والموارد البشرية والمبيعات والموافقات في مكان واحد.',
    },
    points: {
      en: ['Inventory & multi-warehouse', 'Budgets and cost control', 'HR and asset tracking', 'Reporting with PDF / Excel export'],
      ar: ['المخزون وتعدد المستودعات', 'الميزانيات والتحكم في التكاليف', 'الموارد البشرية وتتبع الأصول', 'تقارير مع تصدير PDF و Excel'],
    },
  },
  {
    id: 'ecommerce',
    file: 'ecommerce.md',
    title: { en: 'E-commerce', ar: 'التجارة الإلكترونية' },
    summary: {
      en: 'Stores and marketplaces with the payment gateways and shipping providers your customers in Saudi Arabia, Egypt and the Gulf actually use.',
      ar: 'متاجر ومنصات بيع متكاملة مع بوابات الدفع وشركات الشحن التي يستخدمها عملاؤك في السعودية ومصر والخليج.',
    },
    points: {
      en: ['Tabby, Tamara, STC Pay, Tap and more', 'Aramex, SMSA, iMile and more', 'POS and inventory sync', 'Order and fulfilment workflows'],
      ar: ['تابي وتمارا و STC Pay و Tap وغيرها', 'أرامكس و SMSA و iMile وغيرها', 'ربط نقاط البيع والمخزون', 'إدارة الطلبات والتوصيل'],
    },
  },
  {
    id: 'apis',
    file: 'apis.md',
    title: { en: 'APIs & integrations', ar: 'واجهات API والتكاملات' },
    summary: {
      en: 'RESTful APIs that power your web and mobile apps, plus integrations with payments, SMS, maps and third-party platforms.',
      ar: 'واجهات REST تشغّل تطبيقات الويب والموبايل، مع التكامل مع أنظمة الدفع والرسائل والخرائط والمنصات الخارجية.',
    },
    points: {
      en: ['Mobile app backends', 'Versioned, documented APIs', 'Third-party integrations', 'Queues and background jobs'],
      ar: ['أنظمة خلفية لتطبيقات الموبايل', 'واجهات موثقة ومرقّمة الإصدارات', 'تكاملات مع أنظمة خارجية', 'الطوابير والمهام في الخلفية'],
    },
  },
  {
    id: 'architecture',
    file: 'architecture.md',
    title: { en: 'Architecture & audits', ar: 'المعمارية والمراجعات' },
    summary: {
      en: 'Code reviews, performance and security audits, and documented architecture so your system stays maintainable as it grows.',
      ar: 'مراجعة الكود وتدقيق الأداء والأمان وتوثيق المعمارية، ليبقى نظامك قابلاً للصيانة مع نموه.',
    },
    points: {
      en: ['Code & database review', 'Performance tuning', 'Security review', 'ARCHITECTURE.md you own'],
      ar: ['مراجعة الكود وقاعدة البيانات', 'تحسين الأداء', 'مراجعة الأمان', 'توثيق معماري تملكه بالكامل'],
    },
  },
];

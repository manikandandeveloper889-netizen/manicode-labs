import { useEffect, useState } from "react";

const company = {
  name: "ManiCode Labs",
  domain: "manicodelabs.com",
  phone: "+919025583807",
  email: "manikandandeveloper889@gmail.com",
  whatsapp: {
    en: "https://wa.me/919025583807?text=Hi%20Mani%2C%20I%20want%20to%20build%20a%20website%20for%20my%20business.",
    ar: "https://wa.me/919025583807?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D9%85%D8%A7%D9%86%D9%8A%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A5%D9%86%D8%B4%D8%A7%D8%A1%20%D9%85%D9%88%D9%82%D8%B9%20%D9%88%D9%8A%D8%A8%20%D9%84%D8%B9%D9%85%D9%84%D9%8A.",
  },
  mailto: {
    en: "mailto:manikandandeveloper889@gmail.com?subject=Website%20Project%20Enquiry%20-%20ManiCode%20Labs",
    ar: "mailto:manikandandeveloper889@gmail.com?subject=%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D9%85%D9%88%D9%82%D8%B9%20%D9%88%D9%8A%D8%A8%20-%20ManiCode%20Labs",
  },
};

const siteContent = {
  en: {
    lang: "en",
    dir: "ltr",
    languageToggleLabel: "Switch to Arabic",
    navLabel: "Main navigation",
    nav: ["Services", "Work", "Process", "Pricing", "Contact"],
    headerCta: "WhatsApp",
    hero: {
      badge: "Websites • Automation • Laravel Solutions",
      title: "Build a website that makes your business look premium.",
      text:
        "ManiCode Labs helps businesses create professional websites, WhatsApp lead systems, custom dashboards, and business automation tools that convert visitors into customers.",
      primaryCta: "Start Your Project →",
      secondaryCta: "Explore Services",
      stats: [
        { value: "3-7", label: "Days launch" },
        { value: "₹4,999", label: "Starting" },
        { value: "100%", label: "Mobile-ready" },
      ],
      preview: {
        eyebrow: "Live Website Preview",
        title: "Your business, online and trusted.",
        text: "Website + WhatsApp + enquiry system + SEO-ready structure.",
        items: ["Responsive", "Fast", "Secure", "Lead Focused"],
      },
    },
    sections: {
      services: {
        eyebrow: "Services",
        title: "Everything your business needs to grow online.",
        text:
          "Start with a professional website, then scale with lead systems, automation, custom dashboards, and support.",
        items: [
          {
            icon: "🌐",
            title: "Business Websites",
            desc: "Premium, mobile-first websites for shops, startups, schools, clinics, salons, and service businesses.",
            points: ["Landing pages", "Company websites", "Portfolio websites"],
          },
          {
            icon: "💬",
            title: "WhatsApp Lead Systems",
            desc: "Turn visitors into enquiries with WhatsApp buttons, lead forms, enquiry flows, and follow-up support.",
            points: ["Click-to-chat", "Lead forms", "Enquiry tracking"],
          },
          {
            icon: "💻",
            title: "Custom Web Apps",
            desc: "Laravel dashboards, booking systems, billing tools, school ERP modules, and internal business tools.",
            points: ["Admin panels", "Dashboards", "Reports"],
          },
          {
            icon: "🛠️",
            title: "Maintenance & Hosting",
            desc: "Monthly care for updates, hosting, backup, small fixes, security checks, and performance improvement.",
            points: ["Hosting", "Backups", "Monthly support"],
          },
        ],
      },
      work: {
        eyebrow: "Demo Work",
        title: "Demo projects that show what we can build.",
        text: "These project styles can be customized for your business, brand, and workflow.",
        cta: "Build similar →",
        items: [
          {
            icon: "🍽️",
            title: "Restaurant Website",
            type: "Food Business",
            desc: "Menu, location, WhatsApp order button, gallery, and enquiry form.",
          },
          {
            icon: "🏫",
            title: "School ERP Dashboard",
            type: "Education",
            desc: "Students, fees, attendance, reports, and admin access modules.",
          },
          {
            icon: "💇",
            title: "Salon Booking Page",
            type: "Service Business",
            desc: "Services, packages, appointment enquiry, reviews, and contact CTA.",
          },
        ],
      },
      industries: {
        eyebrow: "Industries",
        title: "We build for local businesses, startups, and service brands.",
        text:
          "If your customers search online, message on WhatsApp, or check reviews before buying, your business needs a strong online presence.",
        items: [
          "Restaurants",
          "Salons",
          "Clinics",
          "Schools",
          "Tuition Centres",
          "Gyms",
          "Travel Agencies",
          "Real Estate",
          "Retail Shops",
          "Service Providers",
        ],
      },
      process: {
        eyebrow: "Process",
        title: "Simple, clear, and professional workflow.",
        text: "No confusion. You know what will be built, when it will be delivered, and what support you get.",
        items: [
          {
            step: "01",
            title: "Free Consultation",
            desc: "We understand your business, target customers, and the exact website or software requirement.",
          },
          {
            step: "02",
            title: "Plan & Pricing",
            desc: "You get a clear scope, timeline, price, and deliverables before the project starts.",
          },
          {
            step: "03",
            title: "Design & Build",
            desc: "We create the website or system with clean UI, responsive layout, and business-focused content.",
          },
          {
            step: "04",
            title: "Launch & Support",
            desc: "After final approval, your website goes live with support for changes and improvements.",
          },
        ],
      },
      pricing: {
        eyebrow: "Pricing",
        title: "Transparent packages for every business stage.",
        text: "Choose a starter website, a growth website, or a custom software solution based on your requirement.",
        popular: "Popular",
        choose: "Choose",
        items: [
          {
            name: "Starter",
            price: "₹4,999",
            subtitle: "For personal brands and small shops",
            features: ["1-page website", "Mobile responsive", "WhatsApp CTA", "Basic SEO", "Delivery in 3-5 days"],
          },
          {
            name: "Growth",
            price: "₹14,999",
            subtitle: "For businesses that need online trust",
            features: ["Up to 5 pages", "Contact form", "Google Maps", "Service sections", "Speed optimization", "Delivery in 7-10 days"],
            popular: true,
          },
          {
            name: "Custom",
            price: "₹29,999+",
            subtitle: "For custom software and automation",
            features: ["Laravel web app", "Admin dashboard", "Database setup", "Reports", "Role-based access", "Custom workflow"],
          },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Common questions before starting a project.",
        text: "Clear answers help you decide faster and start with confidence.",
        items: [
          {
            q: "How long does it take to build a website?",
            a: "A basic website can be completed in 3-7 days. Custom web applications depend on features and scope.",
          },
          {
            q: "Do you provide domain and hosting support?",
            a: "Yes. We can guide or manage domain, hosting, email setup, SSL, and deployment.",
          },
          {
            q: "Can you build custom Laravel applications?",
            a: "Yes. ManiCode Labs builds dashboards, admin panels, ERP modules, booking systems, and custom workflows.",
          },
          {
            q: "Do you provide monthly maintenance?",
            a: "Yes. Monthly support is available for backups, updates, fixes, hosting support, and small improvements.",
          },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "Ready to build your business website?",
        text: "Message us with your business name and requirement. We will suggest the best plan and cost clearly.",
        website: "Website",
        phone: "Phone",
        email: "Email",
        primaryCta: "WhatsApp Now →",
        secondaryCta: "Email Us",
        formEyebrow: "Project Enquiry",
        formTitle: "Tell us what you need.",
        enquiryCards: [
          "Business type: Restaurant / Shop / School / Service",
          "Need: Website / Lead system / Custom app",
          "Budget: Starter / Growth / Custom",
        ],
        formCta: "Send Details on WhatsApp",
      },
    },
  },
  ar: {
    lang: "ar",
    dir: "rtl",
    languageToggleLabel: "التبديل إلى الإنجليزية",
    navLabel: "التنقل الرئيسي",
    nav: ["الخدمات", "الأعمال", "الخطوات", "الأسعار", "التواصل"],
    headerCta: "واتساب",
    hero: {
      badge: "مواقع إلكترونية • أتمتة • حلول Laravel",
      title: "أنشئ موقعًا يجعل نشاطك التجاري يبدو احترافيًا.",
      text:
        "تساعد ManiCode Labs الشركات على إنشاء مواقع احترافية وأنظمة جذب العملاء عبر واتساب ولوحات تحكم مخصصة وأدوات أتمتة تحول الزوار إلى عملاء.",
      primaryCta: "ابدأ مشروعك →",
      secondaryCta: "استكشف الخدمات",
      stats: [
        { value: "3-7", label: "أيام للإطلاق" },
        { value: "₹4,999", label: "سعر البداية" },
        { value: "100%", label: "جاهز للجوال" },
      ],
      preview: {
        eyebrow: "معاينة مباشرة للموقع",
        title: "نشاطك التجاري على الإنترنت وبشكل موثوق.",
        text: "موقع + واتساب + نظام استفسارات + بنية جاهزة لمحركات البحث.",
        items: ["متجاوب", "سريع", "آمن", "يركز على العملاء المحتملين"],
      },
    },
    sections: {
      services: {
        eyebrow: "الخدمات",
        title: "كل ما يحتاجه نشاطك التجاري للنمو عبر الإنترنت.",
        text:
          "ابدأ بموقع احترافي ثم توسع بأنظمة العملاء المحتملين والأتمتة ولوحات التحكم المخصصة والدعم المستمر.",
        items: [
          {
            icon: "🌐",
            title: "مواقع الأعمال",
            desc: "مواقع فاخرة ومتوافقة مع الجوال للمتاجر والشركات الناشئة والمدارس والعيادات والصالونات ومقدمي الخدمات.",
            points: ["صفحات هبوط", "مواقع شركات", "مواقع أعمال شخصية"],
          },
          {
            icon: "💬",
            title: "أنظمة العملاء عبر واتساب",
            desc: "حوّل الزوار إلى استفسارات من خلال أزرار واتساب ونماذج العملاء ومسارات الاستفسار ودعم المتابعة.",
            points: ["بدء محادثة مباشرة", "نماذج عملاء", "تتبع الاستفسارات"],
          },
          {
            icon: "💻",
            title: "تطبيقات ويب مخصصة",
            desc: "لوحات Laravel وأنظمة الحجز وأدوات الفوترة ووحدات ERP للمدارس وأدوات الأعمال الداخلية.",
            points: ["لوحات إدارة", "لوحات تحكم", "تقارير"],
          },
          {
            icon: "🛠️",
            title: "الصيانة والاستضافة",
            desc: "رعاية شهرية للتحديثات والاستضافة والنسخ الاحتياطي والإصلاحات الصغيرة وفحوصات الأمان وتحسين الأداء.",
            points: ["استضافة", "نسخ احتياطي", "دعم شهري"],
          },
        ],
      },
      work: {
        eyebrow: "نماذج أعمال",
        title: "مشاريع تجريبية توضح ما يمكننا بناؤه.",
        text: "يمكن تخصيص هذه النماذج لتناسب نشاطك التجاري وهويتك وطريقة عملك.",
        cta: "أنشئ شيئًا مشابهًا →",
        items: [
          {
            icon: "🍽️",
            title: "موقع مطعم",
            type: "نشاط غذائي",
            desc: "قائمة طعام وموقع وزر طلب عبر واتساب ومعرض صور ونموذج استفسار.",
          },
          {
            icon: "🏫",
            title: "لوحة ERP للمدرسة",
            type: "التعليم",
            desc: "الطلاب والرسوم والحضور والتقارير ووحدات صلاحيات الإدارة.",
          },
          {
            icon: "💇",
            title: "صفحة حجز صالون",
            type: "نشاط خدمي",
            desc: "الخدمات والباقات واستفسار المواعيد والتقييمات وزر تواصل واضح.",
          },
        ],
      },
      industries: {
        eyebrow: "القطاعات",
        title: "نبني للشركات المحلية والشركات الناشئة والعلامات الخدمية.",
        text:
          "إذا كان عملاؤك يبحثون عبر الإنترنت أو يرسلون رسائل واتساب أو يراجعون التقييمات قبل الشراء، فأنت بحاجة إلى حضور رقمي قوي.",
        items: [
          "مطاعم",
          "صالونات",
          "عيادات",
          "مدارس",
          "مراكز تعليم",
          "صالات رياضية",
          "وكالات سفر",
          "عقارات",
          "متاجر تجزئة",
          "مقدمو خدمات",
        ],
      },
      process: {
        eyebrow: "آلية العمل",
        title: "سير عمل بسيط وواضح واحترافي.",
        text: "بدون تعقيد. ستعرف ما الذي سيتم بناؤه ومتى سيتم تسليمه وما الدعم الذي ستحصل عليه.",
        items: [
          {
            step: "01",
            title: "استشارة مجانية",
            desc: "نفهم نشاطك التجاري والعملاء المستهدفين ومتطلبات الموقع أو النظام بدقة.",
          },
          {
            step: "02",
            title: "الخطة والتسعير",
            desc: "تحصل على نطاق عمل وجدول زمني وسعر ومخرجات واضحة قبل بدء المشروع.",
          },
          {
            step: "03",
            title: "التصميم والتنفيذ",
            desc: "ننشئ الموقع أو النظام بواجهة نظيفة وتصميم متجاوب ومحتوى يركز على الأعمال.",
          },
          {
            step: "04",
            title: "الإطلاق والدعم",
            desc: "بعد الموافقة النهائية ينطلق موقعك مع دعم للتعديلات والتحسينات.",
          },
        ],
      },
      pricing: {
        eyebrow: "الأسعار",
        title: "باقات واضحة لكل مرحلة من نمو الأعمال.",
        text: "اختر موقعًا مبتدئًا أو موقع نمو أو حلًا برمجيًا مخصصًا حسب احتياجك.",
        popular: "الأكثر طلبًا",
        choose: "اختر",
        items: [
          {
            name: "البداية",
            price: "₹4,999",
            subtitle: "للعلامات الشخصية والمتاجر الصغيرة",
            features: ["موقع من صفحة واحدة", "متجاوب مع الجوال", "زر واتساب", "SEO أساسي", "التسليم خلال 3-5 أيام"],
          },
          {
            name: "النمو",
            price: "₹14,999",
            subtitle: "للشركات التي تحتاج إلى حضور موثوق عبر الإنترنت",
            features: ["حتى 5 صفحات", "نموذج تواصل", "خرائط Google", "أقسام الخدمات", "تحسين السرعة", "التسليم خلال 7-10 أيام"],
            popular: true,
          },
          {
            name: "مخصص",
            price: "₹29,999+",
            subtitle: "للبرمجيات المخصصة والأتمتة",
            features: ["تطبيق ويب Laravel", "لوحة إدارة", "إعداد قاعدة بيانات", "تقارير", "صلاحيات حسب الدور", "سير عمل مخصص"],
          },
        ],
      },
      faq: {
        eyebrow: "الأسئلة الشائعة",
        title: "أسئلة متكررة قبل بدء المشروع.",
        text: "الإجابات الواضحة تساعدك على اتخاذ القرار بسرعة والبدء بثقة.",
        items: [
          {
            q: "كم يستغرق بناء موقع ويب؟",
            a: "يمكن إنجاز الموقع الأساسي خلال 3 إلى 7 أيام. أما تطبيقات الويب المخصصة فتعتمد على الميزات ونطاق العمل.",
          },
          {
            q: "هل توفرون دعم النطاق والاستضافة؟",
            a: "نعم. يمكننا الإرشاد أو إدارة النطاق والاستضافة وإعداد البريد الإلكتروني وSSL والنشر.",
          },
          {
            q: "هل يمكنكم بناء تطبيقات Laravel مخصصة؟",
            a: "نعم. تبني ManiCode Labs لوحات تحكم ولوحات إدارة ووحدات ERP وأنظمة حجز ومسارات عمل مخصصة.",
          },
          {
            q: "هل توفرون صيانة شهرية؟",
            a: "نعم. يتوفر دعم شهري للنسخ الاحتياطي والتحديثات والإصلاحات ودعم الاستضافة والتحسينات الصغيرة.",
          },
        ],
      },
      contact: {
        eyebrow: "التواصل",
        title: "جاهز لبناء موقع عملك؟",
        text: "أرسل لنا اسم نشاطك التجاري واحتياجك وسنقترح أفضل باقة وتكلفة بشكل واضح.",
        website: "الموقع",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        primaryCta: "راسلنا على واتساب →",
        secondaryCta: "راسلنا بالبريد",
        formEyebrow: "استفسار المشروع",
        formTitle: "أخبرنا بما تحتاجه.",
        enquiryCards: [
          "نوع النشاط: مطعم / متجر / مدرسة / خدمة",
          "الاحتياج: موقع / نظام عملاء / تطبيق مخصص",
          "الميزانية: بداية / نمو / مخصص",
        ],
        formCta: "أرسل التفاصيل عبر واتساب",
      },
    },
  },
};

const navIds = ["services", "work", "process", "pricing", "contact"];
const previewIcons = ["📱", "⚡", "🔒", "📈"];
const languageStorageKey = "manicode-labs-language";

function ButtonLink({ children, href, variant = "primary" }) {
  const baseClass =
    "inline-flex items-center justify-center rounded-2xl px-6 py-4 text-sm font-bold transition duration-300 hover:-translate-y-1";

  const variantClass =
    variant === "light"
      ? "bg-white text-slate-950 shadow-xl hover:bg-slate-100"
      : variant === "outline"
        ? "border border-white/20 bg-white/5 text-white hover:bg-white/10"
        : "bg-cyan-400 text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-cyan-300";

  return (
    <a href={href} className={`${baseClass} ${variantClass}`}>
      {children}
    </a>
  );
}

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`min-h-screen snap-start px-5 py-20 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div className={`rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/10 ${className}`}>
      {children}
    </div>
  );
}

function TitleBlock({ eyebrow, title, text }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-4xl font-black leading-tight md:text-6xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p> : null}
    </div>
  );
}

function LanguageSwitch({ isArabic, onToggle, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={isArabic}
      onClick={onToggle}
      className="relative inline-flex h-12 w-28 items-center rounded-full border border-white/10 bg-white/10 p-1 text-sm font-black text-white shadow-lg backdrop-blur-xl transition hover:border-cyan-300/50"
    >
      <span
        className={`absolute left-1 top-1 h-10 w-12 rounded-full bg-cyan-300 shadow-lg shadow-cyan-500/20 transition-transform duration-300 ${isArabic ? "translate-x-14" : "translate-x-0"}`}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-3">
        <span className={isArabic ? "text-white" : "text-slate-950"}>EN</span>
        <span className={isArabic ? "text-slate-950" : "text-white"}>AR</span>
      </span>
    </button>
  );
}

export default function ManiCodeLabsWebsite() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    return window.localStorage.getItem(languageStorageKey) === "ar" ? "ar" : "en";
  });
  const content = siteContent[language];
  const isArabic = language === "ar";
  const directionalPosition = (rtlClass, ltrClass) => (isArabic ? rtlClass : ltrClass);

  useEffect(() => {
    document.documentElement.lang = content.lang;
    document.documentElement.dir = content.dir;
  }, [content.dir, content.lang]);

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, language);
  }, [language]);

  return (
    <div
      dir={content.dir}
      className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-slate-950 text-white"
    >
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300 text-xl text-slate-950 shadow-xl shadow-cyan-500/20">
              💻
            </div>
            <div>
              <p className="text-lg font-black leading-none">{company.name}</p>
              <p className="mt-1 text-xs text-slate-400">{company.domain}</p>
            </div>
          </a>

          <nav className="hidden gap-7 text-sm font-semibold text-slate-300 lg:flex" aria-label={content.navLabel}>
            {content.nav.map((label, index) => (
              <a key={navIds[index]} className="hover:text-cyan-300" href={`#${navIds[index]}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitch
              isArabic={isArabic}
              label={content.languageToggleLabel}
              onToggle={() => setLanguage((current) => (current === "en" ? "ar" : "en"))}
            />
            <div className="hidden sm:block">
              <ButtonLink href={company.whatsapp[language]} variant="light">
                {content.headerCta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Section id="home" className="relative flex items-center overflow-hidden pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.25),transparent_30%),radial-gradient(circle_at_85%_40%,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.18),transparent_35%)]" />
          <div className={`absolute top-28 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl ${directionalPosition("right-10", "left-10")}`} />
          <div className={`absolute bottom-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl ${directionalPosition("left-16", "right-16")}`} />

          <div className="relative grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <span>🚀</span>
                <span>{content.hero.badge}</span>
              </div>

              <h1 className="text-5xl font-black leading-tight md:text-7xl">{content.hero.title}</h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{content.hero.text}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href={company.whatsapp[language]}>{content.hero.primaryCta}</ButtonLink>
                <ButtonLink href="#services" variant="outline">
                  {content.hero.secondaryCta}
                </ButtonLink>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 text-center">
                {content.hero.stats.map((stat) => (
                  <GlassCard key={stat.label} className="p-4">
                    <p className="text-2xl font-black text-cyan-300">{stat.value}</p>
                    <p className="text-xs text-slate-400">{stat.label}</p>
                  </GlassCard>
                ))}
              </div>
            </div>

            <div className="relative perspective-[1200px]">
              <div className="absolute -inset-6 rounded-[3rem] bg-cyan-400/20 blur-3xl" />
              <div className="relative rotate-1 rounded-[2.5rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl transition duration-500 hover:rotate-0 hover:scale-[1.02]">
                <div className="rounded-[2rem] bg-slate-900 p-5">
                  <div className="mb-5 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="rounded-3xl bg-white p-6 text-slate-950">
                    <p className="text-sm font-black text-cyan-600">{content.hero.preview.eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-black">{content.hero.preview.title}</h2>
                    <p className="mt-3 text-slate-600">{content.hero.preview.text}</p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {content.hero.preview.items.map((item, index) => (
                      <div key={item} className="rounded-3xl bg-white/5 p-5">
                        <p className="text-3xl">{previewIcons[index]}</p>
                        <p className="mt-3 font-bold">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="services" className="bg-slate-900/50">
          <TitleBlock
            eyebrow={content.sections.services.eyebrow}
            title={content.sections.services.title}
            text={content.sections.services.text}
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.sections.services.items.map(({ icon, title, desc, points }) => (
              <GlassCard key={title} className="p-7">
                <p className="text-4xl">{icon}</p>
                <h3 className="mt-5 text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{desc}</p>
                <div className="mt-6 space-y-3">
                  {points.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-cyan-300">✓</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section id="work">
          <TitleBlock
            eyebrow={content.sections.work.eyebrow}
            title={content.sections.work.title}
            text={content.sections.work.text}
          />

          <div className="grid gap-6 md:grid-cols-3">
            {content.sections.work.items.map((project) => (
              <GlassCard key={project.title} className="group overflow-hidden p-0">
                <div className="h-44 bg-gradient-to-br from-cyan-300/30 via-blue-500/20 to-slate-900 p-6">
                  <p className="text-5xl">{project.icon}</p>
                </div>
                <div className="p-7">
                  <p className="text-sm font-bold text-cyan-300">{project.type}</p>
                  <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{project.desc}</p>
                  <a href={company.whatsapp[language]} className="mt-6 inline-block font-bold text-cyan-300">
                    {content.sections.work.cta}
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section id="industries" className="bg-slate-900/50">
          <TitleBlock
            eyebrow={content.sections.industries.eyebrow}
            title={content.sections.industries.title}
            text={content.sections.industries.text}
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {content.sections.industries.items.map((industry) => (
              <GlassCard key={industry} className="p-5 text-center">
                <p className="font-bold">{industry}</p>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section id="process">
          <TitleBlock
            eyebrow={content.sections.process.eyebrow}
            title={content.sections.process.title}
            text={content.sections.process.text}
          />

          <div className="grid gap-6 md:grid-cols-4">
            {content.sections.process.items.map((item) => (
              <GlassCard key={item.step} className="p-7">
                <p className="text-5xl font-black text-cyan-300/40">{item.step}</p>
                <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section id="pricing" className="bg-white text-slate-950">
          <TitleBlock
            eyebrow={content.sections.pricing.eyebrow}
            title={content.sections.pricing.title}
            text={content.sections.pricing.text}
          />

          <div className="grid gap-6 md:grid-cols-3">
            {content.sections.pricing.items.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl transition duration-300 hover:-translate-y-2 ${
                  plan.popular ? "ring-4 ring-cyan-300" : ""
                }`}
              >
                {plan.popular ? (
                  <div className={`absolute rounded-full bg-slate-950 px-3 py-1 text-xs font-black text-white ${directionalPosition("left-5 top-5", "right-5 top-5")}`}>
                    {content.sections.pricing.popular}
                  </div>
                ) : null}

                <h3 className="text-2xl font-black">{plan.name}</h3>
                <p className="mt-2 text-slate-500">{plan.subtitle}</p>
                <p className="mt-5 text-4xl font-black">{plan.price}</p>

                <div className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={`${plan.name}-${feature}`} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 text-sm text-cyan-700">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={company.whatsapp[language]}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-slate-800"
                >
                  {content.sections.pricing.choose} {plan.name}
                </a>
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq" className="bg-slate-900/50">
          <TitleBlock
            eyebrow={content.sections.faq.eyebrow}
            title={content.sections.faq.title}
            text={content.sections.faq.text}
          />

          <div className="grid gap-5 md:grid-cols-2">
            {content.sections.faq.items.map((faq) => (
              <GlassCard key={faq.q} className="p-7">
                <h3 className="text-xl font-black">{faq.q}</h3>
                <p className="mt-4 leading-7 text-slate-400">{faq.a}</p>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section id="contact" className="flex items-center">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <TitleBlock
                eyebrow={content.sections.contact.eyebrow}
                title={content.sections.contact.title}
                text={content.sections.contact.text}
              />

              <div className="space-y-4 text-slate-300">
                <p><span className="font-bold text-white">{content.sections.contact.website}:</span> {company.domain}</p>
                <p><span className="font-bold text-white">{content.sections.contact.phone}:</span> {company.phone}</p>
                <p><span className="font-bold text-white">{content.sections.contact.email}:</span> {company.email}</p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href={company.whatsapp[language]}>{content.sections.contact.primaryCta}</ButtonLink>
                <ButtonLink href={company.mailto[language]} variant="outline">
                  {content.sections.contact.secondaryCta}
                </ButtonLink>
              </div>
            </div>

            <GlassCard className="p-8">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">{content.sections.contact.formEyebrow}</p>
              <h3 className="mt-4 text-3xl font-black">{content.sections.contact.formTitle}</h3>
              <div className="mt-6 space-y-4">
                {content.sections.contact.enquiryCards.map((card) => (
                  <div key={card} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">
                    {card}
                  </div>
                ))}
              </div>
              <a
                href={company.whatsapp[language]}
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-300 px-6 py-4 font-black text-slate-950 transition hover:bg-cyan-200"
              >
                {content.sections.contact.formCta}
              </a>
            </GlassCard>
          </div>
        </Section>
      </main>
    </div>
  );
}

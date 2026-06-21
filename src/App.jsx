import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const canUseGsap = typeof window !== "undefined";
if (canUseGsap) {
  gsap.registerPlugin(ScrollTrigger);
}

const company = {
  email: "hello@manicodelabs.com",
  phone: "+91 90255 83807",
  whatsapp: "https://wa.me/919025583807?text=Hi%20ManiCode%20Labs%2C%20I%20want%20a%20free%20consultation.",
};

const languageMeta = {
  en: { code: "en", direction: "ltr", locale: "en-IN", label: "English" },
  fr: { code: "fr", direction: "ltr", locale: "fr-FR", label: "Français" },
  ar: { code: "ar", direction: "rtl", locale: "ar-EG", label: "العربية" },
};

const englishCopy = {
    companyName: "ManiCode Labs",
    navItems: [
      { label: "Services", id: "services" },
      { label: "Solutions", id: "solutions" },
      { label: "Case Studies", id: "case-studies" },
      { label: "Pricing", id: "pricing" },
      { label: "Testimonials", id: "testimonials" },
      { label: "FAQ", id: "faq" },
    ],
    modeToggle: {
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
      light: "Light",
      dark: "Dark",
    },
    ctaBook: "Book Free Consultation",
    ctaDemo: "View Live Demo",
    hero: {
      badge: "Premium SaaS Agency",
      title: "Websites, Automation & Business Systems That Grow Your Business.",
      description:
        "We help schools, hotels, restaurants, malls, and growing businesses automate operations, generate leads, and build a premium online presence.",
      features: [
        "Live analytics counter",
        "Floating WhatsApp notifications",
        "Business growth metrics",
        "Client success indicators",
      ],
      dashboardTitle: "Animated dashboard preview",
      revenueGrowth: "Revenue Growth",
      qualifiedLeads: "Qualified Leads",
      automationStatus: "AI Automation Status",
    },
    sections: {
      trustedEyebrow: "Trusted By Businesses",
      trustedTitle: "Built for leaders across high-growth SMB industries.",
      servicesEyebrow: "Services Grid",
      servicesTitle: "Full-stack digital growth systems for modern businesses.",
      interactiveEyebrow: "Interactive Product Showcase",
      interactiveTitle: "Interactive dashboard mockups that mirror your operations.",
      solutionsEyebrow: "Industry-specific solutions",
      solutionsTitle: "Industries we serve with dedicated workflows.",
      whyEyebrow: "Why Choose ManiCode Labs",
      whyTitle: "Fast delivery, trusted execution, measurable outcomes.",
      processEyebrow: "Process Timeline",
      processTitle: "Discovery → Planning → Design → Development → Launch → Support",
      galleryEyebrow: "SaaS Product Gallery",
      galleryTitle: "Launch-ready product experiences for your team and customers.",
      resultsEyebrow: "Animated statistics",
      resultsTitle: "Results that directly impact growth and operations.",
      calculatorEyebrow: "Live project calculator",
      calculatorTitle: "Estimate investment in seconds.",
      roiEyebrow: "ROI calculator",
      roiTitle: "Model expected growth from automation and conversion upgrades.",
      caseEyebrow: "Case studies with results",
      caseTitle: "Before/after transformation stories from real businesses.",
      pricingEyebrow: "Pricing Section",
      pricingTitle: "Choose a growth package that matches your stage.",
      testimonialsEyebrow: "Video testimonials",
      testimonialsTitle: "Founders trust ManiCode Labs for business-critical systems.",
      auditEyebrow: "AI-powered business audit form",
      auditTitle: "Get an instant digital maturity score and roadmap.",
      faqEyebrow: "FAQ",
      faqTitle: "Everything you need before starting.",
      finalTitle: "Ready to Digitize Your Business?",
      finalDescription: "Build a trust-first, conversion-focused digital system that scales your operations and revenue.",
      finalButton: "Get Free Consultation",
    },
    calculator: {
      projectType: "Project Type",
      website: "Website Development",
      automation: "Business Automation",
      erp: "School/Hotel ERP",
      teamSize: "Team Size",
      monthlyLeads: "Monthly Leads",
      estimatedCost: "Estimated Project Cost",
      estimateDescription: "Tailored based on complexity, users, and lead volume.",
    },
    roi: {
      leads: "Projected additional qualified leads / month",
      revenue: "Projected additional monthly revenue",
    },
    audit: {
      businessName: "Business name",
      businessNamePlaceholder: "e.g. Metro Dental Clinic",
      industry: "Industry",
      industryPlaceholder: "e.g. Healthcare",
      enquiries: "Monthly enquiries",
      enquiriesPlaceholder: "e.g. 300",
      tools: "Current tools",
      toolsPlaceholder: "Excel, Zoho, WhatsApp...",
      bottleneck: "Operations bottleneck",
      bottleneckPlaceholder: "What is your biggest operations bottleneck?",
      button: "Get AI Business Assessment",
      success: "Assessment request captured. Our team will contact you shortly.",
    },
    footer: {
      whatsapp: "WhatsApp Us",
      banner: "Speak with ManiCode Labs in 15 minutes.",
      noObligations: "No obligations.",
      sales: "Contact Sales",
    },
    productDescription: "Custom modules, live analytics, and workflow automation.",
    stats: [
      { value: 100, suffix: "+", label: "Projects" },
      { value: 50, suffix: "+", label: "Businesses Automated" },
      { value: 98, suffix: "%", label: "Client Satisfaction" },
      { value: 24, suffix: "/7", label: "Support" },
    ],
    services: [
      "Business Websites",
      "WhatsApp Lead Systems",
      "School ERP",
      "Hotel Management Systems",
      "Restaurant Ordering Systems",
      "CRM Solutions",
      "Booking Systems",
      "Custom Dashboards",
      "Business Automation",
    ],
    dashboards: [
      { title: "Attendance Tracking", metric: "96% live sync" },
      { title: "Hotel Bookings", metric: "3.2x booking speed" },
      { title: "Restaurant Orders", metric: "41% faster fulfilment" },
      { title: "CRM Pipeline", metric: "2.8x lead conversion" },
      { title: "Analytics Reports", metric: "Real-time KPIs" },
    ],
    industries: ["Schools", "Hotels", "Restaurants", "Shopping Malls", "Clinics", "Salons", "Gyms", "Real Estate", "Retail Stores", "Service Businesses"],
    processSteps: ["Discovery", "Planning", "Design", "Development", "Launch", "Support"],
    products: ["School ERP", "Hotel Dashboard", "Restaurant POS", "CRM System", "Booking Platform", "Inventory Management"],
    whyPoints: [
      "Fast Delivery",
      "Affordable Pricing",
      "Custom Solutions",
      "Ongoing Support",
      "Mobile First",
      "SEO Optimized",
      "WhatsApp Integration",
      "Enterprise-grade reliability",
    ],
    pricing: [
      {
        tier: "Starter",
        price: "₹24,999",
        points: ["Premium one-page website", "WhatsApp lead capture", "SEO foundations"],
      },
      {
        tier: "Growth",
        price: "₹59,999",
        featured: true,
        points: ["5-8 page website", "CRM + automation", "Conversion analytics"],
      },
      {
        tier: "Business",
        price: "₹1,20,000",
        points: ["Industry workflow system", "Team dashboard", "API integrations"],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        points: ["Multi-branch architecture", "Advanced security", "Priority support"],
      },
    ],
    faqs: [
      {
        q: "How quickly can ManiCode Labs launch?",
        a: "Most websites launch in 2-4 weeks, while ERP/automation systems are delivered in phased milestones.",
      },
      {
        q: "Do you support schools, hotels, and restaurants with custom workflows?",
        a: "Yes, each solution is mapped to your real operations including admissions, bookings, orders, billing, and reports.",
      },
      {
        q: "Can you connect WhatsApp and CRM automation?",
        a: "Absolutely. We connect enquiry capture, follow-ups, reminders, and lead status updates into one flow.",
      },
      {
        q: "Do you provide ongoing support after launch?",
        a: "Yes, we offer 24/7 monitoring, updates, and optimization retainers after go-live.",
      },
    ],
    caseStudies: [
      ["Clinic chain", "Before: manual calls, 35% no-shows", "After: WhatsApp reminders, 72% conversion uplift"],
      ["Boutique hotel", "Before: fragmented booking channels", "After: unified booking engine, 2.4x direct bookings"],
      ["Restaurant group", "Before: order chaos during peak", "After: POS automation, 39% faster kitchen turnaround"],
      ["School campus", "Before: attendance in spreadsheets", "After: ERP tracking, instant parent alerts"],
    ],
    testimonials: ["Hotel owner", "School principal", "Restaurant founder"],
};

const copy = {
  en: englishCopy,
  fr: {
    ...englishCopy,
    companyName: "ManiCode Labs",
    ctaBook: "Réserver une consultation gratuite",
    ctaDemo: "Voir la démo en direct",
    modeToggle: {
      toLight: "Passer en mode clair",
      toDark: "Passer en mode sombre",
      light: "Clair",
      dark: "Sombre",
    },
    navItems: [
      { label: "Services", id: "services" },
      { label: "Solutions", id: "solutions" },
      { label: "Études de cas", id: "case-studies" },
      { label: "Tarifs", id: "pricing" },
      { label: "Témoignages", id: "testimonials" },
      { label: "FAQ", id: "faq" },
    ],
    hero: {
      ...englishCopy.hero,
      badge: "Agence SaaS Premium",
      description:
        "Nous aidons les écoles, hôtels, restaurants, centres commerciaux et entreprises en croissance à automatiser leurs opérations et générer plus de prospects.",
    },
    sections: {
      ...englishCopy.sections,
      trustedEyebrow: "Ils nous font confiance",
      trustedTitle: "Conçu pour les leaders des secteurs SMB en forte croissance.",
      servicesTitle: "Des systèmes digitaux complets pour accélérer votre croissance.",
      solutionsEyebrow: "Solutions par secteur",
      whyEyebrow: "Pourquoi ManiCode Labs",
      processEyebrow: "Processus",
      calculatorTitle: "Estimez votre investissement en quelques secondes.",
      faqTitle: "Tout ce qu'il faut savoir avant de démarrer.",
      finalTitle: "Prêt à digitaliser votre entreprise ?",
      finalButton: "Obtenir une consultation gratuite",
    },
    calculator: {
      ...englishCopy.calculator,
      projectType: "Type de projet",
      website: "Développement de site web",
      automation: "Automatisation métier",
      teamSize: "Taille de l'équipe",
      monthlyLeads: "Leads mensuels",
      estimatedCost: "Coût estimé du projet",
    },
    audit: {
      ...englishCopy.audit,
      businessName: "Nom de l'entreprise",
      industry: "Secteur",
      enquiries: "Demandes mensuelles",
      tools: "Outils actuels",
      bottleneck: "Blocage opérationnel",
      button: "Obtenir l'évaluation IA",
      success: "Demande enregistrée. Notre équipe vous contactera rapidement.",
    },
    footer: {
      ...englishCopy.footer,
      whatsapp: "Contact WhatsApp",
      sales: "Contacter les ventes",
      noObligations: "Sans engagement.",
    },
  },
  ar: {
    ...englishCopy,
    companyName: "ماني كود لابز",
    ctaBook: "احجز استشارة مجانية",
    ctaDemo: "عرض تجريبي مباشر",
    modeToggle: {
      toLight: "التبديل إلى الوضع الفاتح",
      toDark: "التبديل إلى الوضع الداكن",
      light: "فاتح",
      dark: "داكن",
    },
    navItems: [
      { label: "الخدمات", id: "services" },
      { label: "الحلول", id: "solutions" },
      { label: "دراسات الحالة", id: "case-studies" },
      { label: "الأسعار", id: "pricing" },
      { label: "الشهادات", id: "testimonials" },
      { label: "الأسئلة الشائعة", id: "faq" },
    ],
    hero: {
      ...englishCopy.hero,
      badge: "وكالة SaaS احترافية",
      title: "مواقع وأنظمة أتمتة وحلول أعمال تنمّي شركتك.",
      description:
        "نساعد المدارس والفنادق والمطاعم والمراكز التجارية والشركات المتنامية على أتمتة العمليات وزيادة العملاء المحتملين وبناء حضور رقمي قوي.",
      features: ["عداد تحليلات مباشر", "إشعارات واتساب متحركة", "مؤشرات نمو الأعمال", "مؤشرات نجاح العملاء"],
      dashboardTitle: "معاينة لوحة معلومات متحركة",
      revenueGrowth: "نمو الإيرادات",
      qualifiedLeads: "العملاء المحتملون المؤهلون",
      automationStatus: "حالة الأتمتة الذكية",
    },
    sections: {
      ...englishCopy.sections,
      trustedEyebrow: "موثوق من الشركات",
      trustedTitle: "مصمم لقادة قطاعات الشركات الصغيرة والمتوسطة سريعة النمو.",
      servicesEyebrow: "الخدمات",
      servicesTitle: "أنظمة رقمية متكاملة لنمو الأعمال الحديثة.",
      interactiveEyebrow: "عرض منتج تفاعلي",
      interactiveTitle: "نماذج لوحات تفاعلية تعكس عملياتك الفعلية.",
      solutionsEyebrow: "حلول حسب القطاع",
      solutionsTitle: "القطاعات التي نخدمها بحلول مخصصة.",
      whyEyebrow: "لماذا ماني كود لابز",
      whyTitle: "تنفيذ سريع ونتائج قابلة للقياس.",
      processEyebrow: "مراحل العمل",
      processTitle: "اكتشاف → تخطيط → تصميم → تطوير → إطلاق → دعم",
      galleryEyebrow: "معرض منتجات SaaS",
      galleryTitle: "تجارب منتجات جاهزة للإطلاق لفريقك وعملائك.",
      resultsEyebrow: "إحصائيات متحركة",
      resultsTitle: "نتائج تؤثر مباشرة على النمو والعمليات.",
      calculatorEyebrow: "حاسبة المشروع",
      calculatorTitle: "قدّر استثمارك خلال ثوانٍ.",
      roiEyebrow: "حاسبة العائد",
      roiTitle: "نمذجة النمو المتوقع من الأتمتة وتحسين التحويل.",
      caseEyebrow: "دراسات حالة",
      caseTitle: "قصص تحول قبل/بعد من أعمال حقيقية.",
      pricingEyebrow: "الأسعار",
      pricingTitle: "اختر باقة نمو تناسب مرحلة عملك.",
      testimonialsEyebrow: "آراء العملاء",
      testimonialsTitle: "المؤسسون يثقون بماني كود لابز لأنظمتهم الحيوية.",
      auditEyebrow: "نموذج تدقيق أعمال ذكي",
      auditTitle: "احصل على تقييم رقمي وخارطة طريق فورًا.",
      faqEyebrow: "الأسئلة الشائعة",
      faqTitle: "كل ما تحتاج معرفته قبل البدء.",
      finalTitle: "جاهز لرقمنة أعمالك؟",
      finalDescription: "ابنِ نظامًا رقميًا موثوقًا يرفع عملياتك وإيراداتك.",
      finalButton: "احصل على استشارة مجانية",
    },
    calculator: {
      ...englishCopy.calculator,
      projectType: "نوع المشروع",
      website: "تطوير موقع ويب",
      automation: "أتمتة الأعمال",
      erp: "نظام ERP للمدارس/الفنادق",
      teamSize: "حجم الفريق",
      monthlyLeads: "العملاء المحتملون شهريًا",
      estimatedCost: "التكلفة التقديرية للمشروع",
      estimateDescription: "تقدير حسب التعقيد وعدد المستخدمين وحجم العملاء المحتملين.",
    },
    roi: {
      leads: "الزيادة المتوقعة في العملاء المؤهلين / شهر",
      revenue: "الزيادة المتوقعة في الإيرادات الشهرية",
    },
    footer: {
      whatsapp: "تواصل عبر واتساب",
      banner: "تحدث مع ماني كود لابز خلال 15 دقيقة.",
      noObligations: "بدون التزام.",
      sales: "تواصل مع المبيعات",
    },
    processSteps: ["اكتشاف", "تخطيط", "تصميم", "تطوير", "إطلاق", "دعم"],
    testimonials: ["مالك فندق", "مدير مدرسة", "مؤسس مطعم"],
  },
};
// Estimated incremental delivery cost per additional operational team member.
const teamSizeMultiplier = 4500;
// Estimated scaling cost factor per expected monthly enquiry.
const monthlyLeadsMultiplier = 120;
// Conservative lead uplift from conversion-focused redesign + automation.
const roiLeadRate = 0.18;
// Operational uplift from team enablement in optimized workflows.
const roiTeamFactor = 6;
// Average revenue contribution per additional qualified lead.
const revenuePerLead = 2500;
// 18 particles keeps motion premium while staying smooth on low-end mobile devices.
const particleCount = 18;


function Section({ id, title, eyebrow, children, className = "" }) {
  return (
    <section id={id} className={`px-5 py-20 md:px-10 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {eyebrow || title ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-10"
          >
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">{eyebrow}</p>
            ) : null}
            {title ? <h2 className="mt-4 text-3xl font-bold md:text-5xl">{title}</h2> : null}
          </motion.div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

function Counter({ value, suffix, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf;
    const duration = 1400;
    const start = performance.now();

    const update = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        raf = requestAnimationFrame(update);
      }
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <p className="text-4xl font-bold text-violet-300">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(true);
  const [language, setLanguage] = useState("en");
  const [projectType, setProjectType] = useState("website");
  const [teamSize, setTeamSize] = useState(6);
  const [monthlyLeads, setMonthlyLeads] = useState(120);
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  const content = copy[language] ?? copy.en;
  const languageConfig = languageMeta[language] ?? languageMeta.en;
  const isRtl = languageConfig.direction === "rtl";

  const estimatedCost = useMemo(() => {
    const baseMap = {
      website: 60000,
      automation: 120000,
      erp: 250000,
    };
    return Math.round(baseMap[projectType] + teamSize * teamSizeMultiplier + monthlyLeads * monthlyLeadsMultiplier);
  }, [monthlyLeads, projectType, teamSize]);

  const estimatedRoi = useMemo(() => {
    const uplift = Math.round(monthlyLeads * roiLeadRate + teamSize * roiTeamFactor);
    return {
      revenue: uplift * revenuePerLead,
      leads: uplift,
    };
  }, [monthlyLeads, teamSize]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.lang = languageConfig.code;
    document.documentElement.dir = languageConfig.direction;

    if (!canUseGsap) {
      return undefined;
    }

    const cards = gsap.utils.toArray(".parallax-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 0 },
        {
          y: (index + 1) * -18,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [dark, languageConfig.code, languageConfig.direction]);

  const handleAuditSubmit = (event) => {
    event.preventDefault();
    setAuditSubmitted(true);
  };

  return (
    <div
      dir={languageConfig.direction}
      className={`${dark ? "dark bg-slate-950 text-white" : "bg-slate-50 text-slate-900"} transition-colors`}
    >
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(particleCount)].map((_, idx) => (
          <motion.span
            key={idx}
            className="absolute h-2 w-2 rounded-full bg-violet-400/25"
            initial={{ y: "110vh", x: `${(idx * 93) % 100}vw` }}
            animate={{ y: "-10vh" }}
            transition={{ duration: 14 + (idx % 7), repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 px-5 py-4 backdrop-blur dark:text-white md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="#hero" className="text-xl font-semibold tracking-tight">
            {content.companyName}
          </a>
          <nav className="hidden gap-6 text-sm lg:flex">
            {content.navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="hover:text-violet-300">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex rounded-xl border border-white/20 p-1 text-xs">
              {Object.entries(languageMeta).map(([code, meta]) => (
                <button
                  key={code}
                  type="button"
                  aria-label={`Switch to ${meta.label}`}
                  onClick={() => setLanguage(code)}
                  className={`rounded-lg px-2 py-1 ${language === code ? "bg-violet-500 text-white" : ""}`}
                >
                  {meta.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label={dark ? content.modeToggle.toLight : content.modeToggle.toDark}
              onClick={() => setDark((current) => !current)}
              className="rounded-xl border border-white/20 px-3 py-2 text-xs"
            >
              {dark ? content.modeToggle.light : content.modeToggle.dark}
            </button>
            <a href={company.whatsapp} className="rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white">
              {content.ctaBook}
            </a>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
          <Section id="hero" className="pt-14 md:pt-20">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
                <p className="inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-violet-300">
                  {content.hero.badge}
                </p>
                <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                  {content.hero.title}
                </h1>
                <p className="mt-6 text-lg text-slate-300 dark:text-slate-300">
                  {content.hero.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href={company.whatsapp} className="rounded-2xl bg-violet-500 px-6 py-3 font-semibold text-white">
                    {content.ctaBook}
                  </a>
                  <a href="#interactive-dashboard-mockups" className="rounded-2xl border border-white/20 px-6 py-3 font-semibold">
                    {content.ctaDemo}
                  </a>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                  {content.hero.features.map((feature) => (
                    <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="parallax-card rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-400/20 via-slate-900 to-slate-950 p-6 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-violet-300">{content.hero.dashboardTitle}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-xs text-slate-300">{content.hero.revenueGrowth}</p>
                      <p className="mt-2 text-2xl font-semibold">+184%</p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-xs text-slate-300">{content.hero.qualifiedLeads}</p>
                      <p className="mt-2 text-2xl font-semibold">1,248</p>
                    </div>
                    <div className="col-span-2 rounded-xl bg-white/10 p-4">
                      <p className="text-xs text-slate-300">{content.hero.automationStatus}</p>
                      <motion.div
                        className="mt-3 h-2 rounded-full bg-violet-400"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "87%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Section>

          <Section id="trusted-by-businesses" eyebrow={content.sections.trustedEyebrow} title={content.sections.trustedTitle}>
            <div className="grid gap-4 md:grid-cols-3">
              {["EduCore Group", "Grand Arc Hotels", "Urban Eats", "Nexa Clinics", "MallHub", "Prime Realty"].map(
                (logo) => (
                  <div key={logo} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-sm text-slate-300">
                    {logo}
                  </div>
                ),
              )}
            </div>
          </Section>

          <Section id="services" eyebrow={content.sections.servicesEyebrow} title={content.sections.servicesTitle} className="bg-slate-900/50">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {content.services.map((service) => (
                <motion.div
                  key={service}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </Section>

          <Section id="interactive-dashboard-mockups" eyebrow={content.sections.interactiveEyebrow} title={content.sections.interactiveTitle}>
            <div className="grid gap-4 md:grid-cols-3">
              {content.dashboards.map((item) => (
                <div key={item.title} className="parallax-card rounded-3xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-violet-300">{item.metric}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="solutions" eyebrow={content.sections.solutionsEyebrow} title={content.sections.solutionsTitle} className="bg-slate-900/50">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {content.industries.map((industry) => (
                <div key={industry} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm">
                  {industry}
                </div>
              ))}
            </div>
          </Section>

          <Section id="why-choose" eyebrow={content.sections.whyEyebrow} title={content.sections.whyTitle}>
            <div className="grid gap-4 md:grid-cols-4">
              {content.whyPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  {point}
                </div>
              ))}
            </div>
          </Section>

          <Section id="process" eyebrow={content.sections.processEyebrow} title={content.sections.processTitle} className="bg-slate-900/50">
            <div className="grid gap-4 md:grid-cols-6">
              {content.processSteps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-xs text-violet-300">0{index + 1}</p>
                  <p className="mt-2 font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="saas-product-gallery" eyebrow={content.sections.galleryEyebrow} title={content.sections.galleryTitle}>
            <div className="grid gap-4 md:grid-cols-3">
              {content.products.map((product) => (
                <div key={product} className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-slate-900 p-6">
                  <h3 className="text-xl font-semibold">{product}</h3>
                  <p className="mt-2 text-sm text-slate-300">{content.productDescription}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="results" eyebrow={content.sections.resultsEyebrow} title={content.sections.resultsTitle} className="bg-slate-900/50">
            <div className="grid gap-4 md:grid-cols-4">
              {content.stats.map((item) => (
                <Counter key={item.label} {...item} />
              ))}
            </div>
          </Section>

          <Section id="live-project-calculator" eyebrow={content.sections.calculatorEyebrow} title={content.sections.calculatorTitle}>
            <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
              <div className="space-y-5">
                <label className="block">
                  <span className="text-sm text-slate-300">{content.calculator.projectType}</span>
                  <select
                    value={projectType}
                    onChange={(event) => setProjectType(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 p-3"
                  >
                    <option value="website">{content.calculator.website}</option>
                    <option value="automation">{content.calculator.automation}</option>
                    <option value="erp">{content.calculator.erp}</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm text-slate-300">
                    {content.calculator.teamSize}: {teamSize}
                  </span>
                  <input
                    type="range"
                    min="2"
                    max="80"
                    value={teamSize}
                    onChange={(event) => setTeamSize(Number(event.target.value))}
                    className="mt-2 w-full"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-slate-300">
                    {content.calculator.monthlyLeads}: {monthlyLeads}
                  </span>
                  <input
                    type="range"
                    min="20"
                    max="1200"
                    value={monthlyLeads}
                    onChange={(event) => setMonthlyLeads(Number(event.target.value))}
                    className="mt-2 w-full"
                  />
                </label>
              </div>
              <div className="rounded-2xl border border-violet-400/30 bg-violet-500/10 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-violet-300">{content.calculator.estimatedCost}</p>
                <p className="mt-4 text-4xl font-bold">₹{estimatedCost.toLocaleString(languageConfig.locale)}</p>
                <p className="mt-3 text-sm text-slate-300">{content.calculator.estimateDescription}</p>
              </div>
            </div>
          </Section>

          <Section id="roi-calculator" eyebrow={content.sections.roiEyebrow} title={content.sections.roiTitle} className="bg-slate-900/50">
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-slate-300">{content.roi.leads}</p>
                <p className="mt-3 text-4xl font-bold text-violet-300">{estimatedRoi.leads}</p>
              </div>
              <div>
                <p className="text-sm text-slate-300">{content.roi.revenue}</p>
                <p className="mt-3 text-4xl font-bold text-violet-300">₹{estimatedRoi.revenue.toLocaleString(languageConfig.locale)}</p>
              </div>
            </div>
          </Section>

          <Section id="case-studies" eyebrow={content.sections.caseEyebrow} title={content.sections.caseTitle}>
            <div className="grid gap-4 md:grid-cols-2">
              {content.caseStudies.map(([name, before, after]) => (
                <div key={name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="mt-3 text-sm text-slate-300">{before}</p>
                  <p className="mt-2 text-sm text-violet-300">{after}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="pricing" eyebrow={content.sections.pricingEyebrow} title={content.sections.pricingTitle} className="bg-slate-900/50">
            <div className="grid gap-4 md:grid-cols-4">
              {content.pricing.map((plan) => (
                <div
                  key={plan.tier}
                  className={`rounded-3xl border p-6 ${plan.featured ? "border-violet-400 bg-violet-500/10" : "border-white/10 bg-white/5"}`}
                >
                  <h3 className="text-2xl font-bold">{plan.tier}</h3>
                  <p className="mt-3 text-3xl font-semibold">{plan.price}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {plan.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section id="testimonials" eyebrow={content.sections.testimonialsEyebrow} title={content.sections.testimonialsTitle}>
            <div className="grid gap-4 md:grid-cols-3">
              {content.testimonials.map((name) => (
                <div key={name} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex h-40 items-center justify-center rounded-2xl bg-slate-800 text-4xl">▶</div>
                  <p className="mt-4 font-semibold">{name}</p>
                  <p className="text-sm text-yellow-300">★★★★★</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="ai-powered-business-audit-form" eyebrow={content.sections.auditEyebrow} title={content.sections.auditTitle} className="bg-slate-900/50">
            <form onSubmit={handleAuditSubmit} className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
              <label className="block">
              <span className="mb-2 block text-xs text-slate-300">{content.audit.businessName}</span>
              <input
                name="businessName"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900 p-3"
                placeholder={content.audit.businessNamePlaceholder}
              />
              </label>
              <label className="block">
              <span className="mb-2 block text-xs text-slate-300">{content.audit.industry}</span>
              <input name="industry" required className="w-full rounded-xl border border-white/10 bg-slate-900 p-3" placeholder={content.audit.industryPlaceholder} />
              </label>
              <label className="block">
              <span className="mb-2 block text-xs text-slate-300">{content.audit.enquiries}</span>
              <input
                type="number"
                name="monthlyEnquiries"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900 p-3"
                placeholder={content.audit.enquiriesPlaceholder}
              />
              </label>
              <label className="block">
              <span className="mb-2 block text-xs text-slate-300">{content.audit.tools}</span>
              <input name="currentTools" required className="w-full rounded-xl border border-white/10 bg-slate-900 p-3" placeholder={content.audit.toolsPlaceholder} />
              </label>
              <label className="block md:col-span-2">
              <span className="mb-2 block text-xs text-slate-300">{content.audit.bottleneck}</span>
              <textarea
                name="operationsBottleneck"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900 p-3"
                placeholder={content.audit.bottleneckPlaceholder}
                rows="4"
              />
              </label>
              <button type="submit" className="rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white md:col-span-2">
              {content.audit.button}
              </button>
              {auditSubmitted ? (
              <p className="text-sm text-violet-300 md:col-span-2">{content.audit.success}</p>
              ) : null}
            </form>
          </Section>

          <Section id="faq" eyebrow={content.sections.faqEyebrow} title={content.sections.faqTitle}>
            <div className="grid gap-4 md:grid-cols-2">
              {content.faqs.map((faq) => (
                <div key={faq.q} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold">{faq.q}</h3>
                  <p className="mt-3 text-sm text-slate-300">{faq.a}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="final-cta" title={content.sections.finalTitle} className="pb-36">
            <div className="rounded-3xl border border-violet-400/30 bg-violet-500/10 p-10 text-center">
              <p className="mx-auto max-w-3xl text-slate-200">
                {content.sections.finalDescription}
              </p>
              <a href={company.whatsapp} className="mt-6 inline-flex rounded-2xl bg-violet-500 px-8 py-3 font-semibold text-white">
                {content.sections.finalButton}
              </a>
            </div>
          </Section>
        </motion.main>
      </AnimatePresence>

      <a
        href={company.whatsapp}
        className={`fixed bottom-24 z-50 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-xl ${
          isRtl ? "left-4" : "right-4"
        }`}
      >
        {content.footer.whatsapp}
      </a>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-slate-950/90 px-5 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-sm">
          <p>
            {content.footer.banner} <span className="text-violet-300">{content.footer.noObligations}</span>
          </p>
          <div className="flex gap-3">
            <a href={company.whatsapp} className="rounded-lg bg-violet-500 px-4 py-2 font-semibold text-white">
              {content.ctaBook}
            </a>
            <a href={`mailto:${company.email}`} className="rounded-lg border border-white/20 px-4 py-2 font-semibold">
              {content.footer.sales}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

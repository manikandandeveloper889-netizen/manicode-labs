import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const canUseGsap = typeof window !== "undefined";
if (canUseGsap) {
  gsap.registerPlugin(ScrollTrigger);
}

const company = {
  name: "ManiCode Labs",
  email: "hello@manicodelabs.com",
  phone: "+91 90255 83807",
  whatsapp: "https://wa.me/919025583807?text=Hi%20ManiCode%20Labs%2C%20I%20want%20a%20free%20consultation.",
};

const navItems = [
  { label: "Services", id: "services" },
  { label: "Solutions", id: "solutions" },
  { label: "Case Studies", id: "case-studies" },
  { label: "Pricing", id: "pricing" },
  { label: "Testimonials", id: "testimonials" },
  { label: "FAQ", id: "faq" },
];
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

const services = [
  "Business Websites",
  "WhatsApp Lead Systems",
  "School ERP",
  "Hotel Management Systems",
  "Restaurant Ordering Systems",
  "CRM Solutions",
  "Booking Systems",
  "Custom Dashboards",
  "Business Automation",
];

const dashboards = [
  { title: "Attendance Tracking", metric: "96% live sync" },
  { title: "Hotel Bookings", metric: "3.2x booking speed" },
  { title: "Restaurant Orders", metric: "41% faster fulfilment" },
  { title: "CRM Pipeline", metric: "2.8x lead conversion" },
  { title: "Analytics Reports", metric: "Real-time KPIs" },
];

const industries = [
  "Schools",
  "Hotels",
  "Restaurants",
  "Shopping Malls",
  "Clinics",
  "Salons",
  "Gyms",
  "Real Estate",
  "Retail Stores",
  "Service Businesses",
];

const processSteps = ["Discovery", "Planning", "Design", "Development", "Launch", "Support"];

const products = [
  "School ERP",
  "Hotel Dashboard",
  "Restaurant POS",
  "CRM System",
  "Booking Platform",
  "Inventory Management",
];

const stats = [
  { value: 100, suffix: "+", label: "Projects" },
  { value: 50, suffix: "+", label: "Businesses Automated" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support" },
];

const pricing = [
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
];

const faqs = [
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
];

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
  const [projectType, setProjectType] = useState("website");
  const [teamSize, setTeamSize] = useState(6);
  const [monthlyLeads, setMonthlyLeads] = useState(120);
  const [auditSubmitted, setAuditSubmitted] = useState(false);

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
    document.documentElement.lang = "en";

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
  }, [dark]);

  const handleAuditSubmit = (event) => {
    event.preventDefault();
    setAuditSubmitted(true);
  };

  return (
    <div className={`${dark ? "dark bg-slate-950 text-white" : "bg-slate-50 text-slate-900"} transition-colors`}>
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
            ManiCode Labs
          </a>
          <nav className="hidden gap-6 text-sm lg:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="hover:text-violet-300">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={() => setDark((current) => !current)}
              className="rounded-xl border border-white/20 px-3 py-2 text-xs"
            >
              {dark ? "Light" : "Dark"}
            </button>
            <a href={company.whatsapp} className="rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white">
              Book Free Consultation
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
                  Premium SaaS Agency
                </p>
                <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                  Websites, Automation & Business Systems That Grow Your Business.
                </h1>
                <p className="mt-6 text-lg text-slate-300 dark:text-slate-300">
                  We help schools, hotels, restaurants, malls, and growing businesses automate operations, generate leads, and build a premium online presence.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href={company.whatsapp} className="rounded-2xl bg-violet-500 px-6 py-3 font-semibold text-white">
                    Book Free Consultation
                  </a>
                  <a href="#interactive-dashboard-mockups" className="rounded-2xl border border-white/20 px-6 py-3 font-semibold">
                    View Live Demo
                  </a>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                  {[
                    "Live analytics counter",
                    "Floating WhatsApp notifications",
                    "Business growth metrics",
                    "Client success indicators",
                  ].map((feature) => (
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
                  <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Animated dashboard preview</p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-xs text-slate-300">Revenue Growth</p>
                      <p className="mt-2 text-2xl font-semibold">+184%</p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-xs text-slate-300">Qualified Leads</p>
                      <p className="mt-2 text-2xl font-semibold">1,248</p>
                    </div>
                    <div className="col-span-2 rounded-xl bg-white/10 p-4">
                      <p className="text-xs text-slate-300">AI Automation Status</p>
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

          <Section id="trusted-by-businesses" eyebrow="Trusted By Businesses" title="Built for leaders across high-growth SMB industries.">
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

          <Section id="services" eyebrow="Services Grid" title="Full-stack digital growth systems for modern businesses." className="bg-slate-900/50">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
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

          <Section id="interactive-dashboard-mockups" eyebrow="Interactive Product Showcase" title="Interactive dashboard mockups that mirror your operations.">
            <div className="grid gap-4 md:grid-cols-3">
              {dashboards.map((item) => (
                <div key={item.title} className="parallax-card rounded-3xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-violet-300">{item.metric}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="solutions" eyebrow="Industry-specific solutions" title="Industries we serve with dedicated workflows." className="bg-slate-900/50">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {industries.map((industry) => (
                <div key={industry} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm">
                  {industry}
                </div>
              ))}
            </div>
          </Section>

          <Section id="why-choose" eyebrow="Why Choose ManiCode Labs" title="Fast delivery, trusted execution, measurable outcomes.">
            <div className="grid gap-4 md:grid-cols-4">
              {[
                "Fast Delivery",
                "Affordable Pricing",
                "Custom Solutions",
                "Ongoing Support",
                "Mobile First",
                "SEO Optimized",
                "WhatsApp Integration",
                "Enterprise-grade reliability",
              ].map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  {point}
                </div>
              ))}
            </div>
          </Section>

          <Section id="process" eyebrow="Process Timeline" title="Discovery → Planning → Design → Development → Launch → Support" className="bg-slate-900/50">
            <div className="grid gap-4 md:grid-cols-6">
              {processSteps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-xs text-violet-300">0{index + 1}</p>
                  <p className="mt-2 font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="saas-product-gallery" eyebrow="SaaS Product Gallery" title="Launch-ready product experiences for your team and customers.">
            <div className="grid gap-4 md:grid-cols-3">
              {products.map((product) => (
                <div key={product} className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-slate-900 p-6">
                  <h3 className="text-xl font-semibold">{product}</h3>
                  <p className="mt-2 text-sm text-slate-300">Custom modules, live analytics, and workflow automation.</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="results" eyebrow="Animated statistics" title="Results that directly impact growth and operations." className="bg-slate-900/50">
            <div className="grid gap-4 md:grid-cols-4">
              {stats.map((item) => (
                <Counter key={item.label} {...item} />
              ))}
            </div>
          </Section>

          <Section id="live-project-calculator" eyebrow="Live project calculator" title="Estimate investment in seconds.">
            <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
              <div className="space-y-5">
                <label className="block">
                  <span className="text-sm text-slate-300">Project Type</span>
                  <select
                    value={projectType}
                    onChange={(event) => setProjectType(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 p-3"
                  >
                    <option value="website">Website Development</option>
                    <option value="automation">Business Automation</option>
                    <option value="erp">School/Hotel ERP</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm text-slate-300">Team Size: {teamSize}</span>
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
                  <span className="text-sm text-slate-300">Monthly Leads: {monthlyLeads}</span>
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
                <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Estimated Project Cost</p>
                <p className="mt-4 text-4xl font-bold">₹{estimatedCost.toLocaleString("en-IN")}</p>
                <p className="mt-3 text-sm text-slate-300">Tailored based on complexity, users, and lead volume.</p>
              </div>
            </div>
          </Section>

          <Section id="roi-calculator" eyebrow="ROI calculator" title="Model expected growth from automation and conversion upgrades." className="bg-slate-900/50">
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-slate-300">Projected additional qualified leads / month</p>
                <p className="mt-3 text-4xl font-bold text-violet-300">{estimatedRoi.leads}</p>
              </div>
              <div>
                <p className="text-sm text-slate-300">Projected additional monthly revenue</p>
                <p className="mt-3 text-4xl font-bold text-violet-300">₹{estimatedRoi.revenue.toLocaleString("en-IN")}</p>
              </div>
            </div>
          </Section>

          <Section id="case-studies" eyebrow="Case studies with results" title="Before/after transformation stories from real businesses.">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Clinic chain", "Before: manual calls, 35% no-shows", "After: WhatsApp reminders, 72% conversion uplift"],
                ["Boutique hotel", "Before: fragmented booking channels", "After: unified booking engine, 2.4x direct bookings"],
                ["Restaurant group", "Before: order chaos during peak", "After: POS automation, 39% faster kitchen turnaround"],
                ["School campus", "Before: attendance in spreadsheets", "After: ERP tracking, instant parent alerts"],
              ].map(([name, before, after]) => (
                <div key={name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="mt-3 text-sm text-slate-300">{before}</p>
                  <p className="mt-2 text-sm text-violet-300">{after}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="pricing" eyebrow="Pricing Section" title="Choose a growth package that matches your stage." className="bg-slate-900/50">
            <div className="grid gap-4 md:grid-cols-4">
              {pricing.map((plan) => (
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

          <Section id="testimonials" eyebrow="Video testimonials" title="Founders trust ManiCode Labs for business-critical systems.">
            <div className="grid gap-4 md:grid-cols-3">
              {["Hotel owner", "School principal", "Restaurant founder"].map((name) => (
                <div key={name} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex h-40 items-center justify-center rounded-2xl bg-slate-800 text-4xl">▶</div>
                  <p className="mt-4 font-semibold">{name}</p>
                  <p className="text-sm text-yellow-300">★★★★★</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="ai-powered-business-audit-form" eyebrow="AI-powered business audit form" title="Get an instant digital maturity score and roadmap." className="bg-slate-900/50">
            <form onSubmit={handleAuditSubmit} className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
              <label className="block">
              <span className="mb-2 block text-xs text-slate-300">Business name</span>
              <input
                name="businessName"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900 p-3"
                placeholder="e.g. Metro Dental Clinic"
              />
              </label>
              <label className="block">
              <span className="mb-2 block text-xs text-slate-300">Industry</span>
              <input name="industry" required className="w-full rounded-xl border border-white/10 bg-slate-900 p-3" placeholder="e.g. Healthcare" />
              </label>
              <label className="block">
              <span className="mb-2 block text-xs text-slate-300">Monthly enquiries</span>
              <input
                type="number"
                name="monthlyEnquiries"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900 p-3"
                placeholder="e.g. 300"
              />
              </label>
              <label className="block">
              <span className="mb-2 block text-xs text-slate-300">Current tools</span>
              <input name="currentTools" required className="w-full rounded-xl border border-white/10 bg-slate-900 p-3" placeholder="Excel, Zoho, WhatsApp..." />
              </label>
              <label className="block md:col-span-2">
              <span className="mb-2 block text-xs text-slate-300">Operations bottleneck</span>
              <textarea
                name="operationsBottleneck"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900 p-3"
                placeholder="What is your biggest operations bottleneck?"
                rows="4"
              />
              </label>
              <button type="submit" className="rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white md:col-span-2">
              Get AI Business Assessment
              </button>
              {auditSubmitted ? (
              <p className="text-sm text-violet-300 md:col-span-2">Assessment request captured. Our team will contact you shortly.</p>
              ) : null}
            </form>
          </Section>

          <Section id="faq" eyebrow="FAQ" title="Everything you need before starting.">
            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold">{faq.q}</h3>
                  <p className="mt-3 text-sm text-slate-300">{faq.a}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="final-cta" title="Ready to Digitize Your Business?" className="pb-36">
            <div className="rounded-3xl border border-violet-400/30 bg-violet-500/10 p-10 text-center">
              <p className="mx-auto max-w-3xl text-slate-200">
                Build a trust-first, conversion-focused digital system that scales your operations and revenue.
              </p>
              <a href={company.whatsapp} className="mt-6 inline-flex rounded-2xl bg-violet-500 px-8 py-3 font-semibold text-white">
                Get Free Consultation
              </a>
            </div>
          </Section>
        </motion.main>
      </AnimatePresence>

      <a
        href={company.whatsapp}
        className="fixed bottom-24 right-4 z-50 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-xl"
      >
        WhatsApp Us
      </a>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-slate-950/90 px-5 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-sm">
          <p>
            Speak with ManiCode Labs in 15 minutes. <span className="text-violet-300">No obligations.</span>
          </p>
          <div className="flex gap-3">
            <a href={company.whatsapp} className="rounded-lg bg-violet-500 px-4 py-2 font-semibold text-white">
              Book Free Consultation
            </a>
            <a href={`mailto:${company.email}`} className="rounded-lg border border-white/20 px-4 py-2 font-semibold">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

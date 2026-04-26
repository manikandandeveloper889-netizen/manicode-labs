const company = {
  name: "ManiCode Labs",
  domain: "manicodelabs.com",
  phone: "+919025583807",
  email: "manikandandeveloper889@gmail.com",
  whatsapp: "https://wa.me/919025583807?text=Hi%20Mani%2C%20I%20want%20to%20build%20a%20website%20for%20my%20business.",
  mailto: "mailto:manikandandeveloper889@gmail.com?subject=Website%20Project%20Enquiry%20-%20ManiCode%20Labs",
};

const services = [
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
];

const plans = [
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
];

const industries = [
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
];

const process = [
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
];

const projects = [
  {
    title: "Restaurant Website",
    type: "Food Business",
    desc: "Menu, location, WhatsApp order button, gallery, and enquiry form.",
  },
  {
    title: "School ERP Dashboard",
    type: "Education",
    desc: "Students, fees, attendance, reports, and admin access modules.",
  },
  {
    title: "Salon Booking Page",
    type: "Service Business",
    desc: "Services, packages, appointment enquiry, reviews, and contact CTA.",
  },
];

const faqs = [
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
];

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

export default function ManiCodeLabsWebsite() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-slate-950 text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300 text-xl text-slate-950 shadow-xl shadow-cyan-500/20">
              💻
            </div>
            <div>
              <p className="text-lg font-black leading-none">{company.name}</p>
              <p className="mt-1 text-xs text-slate-400">{company.domain}</p>
            </div>
          </a>

          <nav className="hidden gap-7 text-sm font-semibold text-slate-300 lg:flex" aria-label="Main navigation">
            <a className="hover:text-cyan-300" href="#services">Services</a>
            <a className="hover:text-cyan-300" href="#work">Work</a>
            <a className="hover:text-cyan-300" href="#process">Process</a>
            <a className="hover:text-cyan-300" href="#pricing">Pricing</a>
            <a className="hover:text-cyan-300" href="#contact">Contact</a>
          </nav>

          <ButtonLink href={company.whatsapp} variant="light">WhatsApp</ButtonLink>
        </div>
      </header>

      <main>
        <Section id="home" className="relative flex items-center overflow-hidden pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.25),transparent_30%),radial-gradient(circle_at_85%_40%,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.18),transparent_35%)]" />
          <div className="absolute left-10 top-28 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-20 right-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <span>🚀</span>
                <span>Websites • Automation • Laravel Solutions</span>
              </div>

              <h1 className="text-5xl font-black leading-tight md:text-7xl">
                Build a website that makes your business look premium.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {company.name} helps businesses create professional websites, WhatsApp lead systems, custom dashboards, and business automation tools that convert visitors into customers.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href={company.whatsapp}>Start Your Project →</ButtonLink>
                <ButtonLink href="#services" variant="outline">Explore Services</ButtonLink>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 text-center">
                <GlassCard className="p-4">
                  <p className="text-2xl font-black text-cyan-300">3-7</p>
                  <p className="text-xs text-slate-400">Days launch</p>
                </GlassCard>
                <GlassCard className="p-4">
                  <p className="text-2xl font-black text-cyan-300">₹4,999</p>
                  <p className="text-xs text-slate-400">Starting</p>
                </GlassCard>
                <GlassCard className="p-4">
                  <p className="text-2xl font-black text-cyan-300">100%</p>
                  <p className="text-xs text-slate-400">Mobile-ready</p>
                </GlassCard>
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
                    <p className="text-sm font-black text-cyan-600">Live Website Preview</p>
                    <h2 className="mt-3 text-3xl font-black">Your business, online and trusted.</h2>
                    <p className="mt-3 text-slate-600">Website + WhatsApp + enquiry system + SEO-ready structure.</p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-3xl bg-white/5 p-5">
                      <p className="text-3xl">📱</p>
                      <p className="mt-3 font-bold">Responsive</p>
                    </div>
                    <div className="rounded-3xl bg-white/5 p-5">
                      <p className="text-3xl">⚡</p>
                      <p className="mt-3 font-bold">Fast</p>
                    </div>
                    <div className="rounded-3xl bg-white/5 p-5">
                      <p className="text-3xl">🔒</p>
                      <p className="mt-3 font-bold">Secure</p>
                    </div>
                    <div className="rounded-3xl bg-white/5 p-5">
                      <p className="text-3xl">📈</p>
                      <p className="mt-3 font-bold">Lead Focused</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="services" className="bg-slate-900/50">
          <TitleBlock
            eyebrow="Services"
            title="Everything your business needs to grow online."
            text="Start with a professional website, then scale with lead systems, automation, custom dashboards, and support."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon, title, desc, points }) => (
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
            eyebrow="Demo Work"
            title="Demo projects that show what we can build."
            text="These project styles can be customized for your business, brand, and workflow."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <GlassCard key={project.title} className="group overflow-hidden p-0">
                <div className="h-44 bg-gradient-to-br from-cyan-300/30 via-blue-500/20 to-slate-900 p-6">
                  <p className="text-5xl">{index === 0 ? "🍽️" : index === 1 ? "🏫" : "💇"}</p>
                </div>
                <div className="p-7">
                  <p className="text-sm font-bold text-cyan-300">{project.type}</p>
                  <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{project.desc}</p>
                  <a href={company.whatsapp} className="mt-6 inline-block font-bold text-cyan-300">
                    Build similar →
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section id="industries" className="bg-slate-900/50">
          <TitleBlock
            eyebrow="Industries"
            title="We build for local businesses, startups, and service brands."
            text="If your customers search online, message on WhatsApp, or check reviews before buying, your business needs a strong online presence."
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {industries.map((industry) => (
              <GlassCard key={industry} className="p-5 text-center">
                <p className="font-bold">{industry}</p>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section id="process">
          <TitleBlock
            eyebrow="Process"
            title="Simple, clear, and professional workflow."
            text="No confusion. You know what will be built, when it will be delivered, and what support you get."
          />

          <div className="grid gap-6 md:grid-cols-4">
            {process.map((item) => (
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
            eyebrow="Pricing"
            title="Transparent packages for every business stage."
            text="Choose a starter website, a growth website, or a custom software solution based on your requirement."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl transition duration-300 hover:-translate-y-2 ${
                  plan.popular ? "ring-4 ring-cyan-300" : ""
                }`}
              >
                {plan.popular ? (
                  <div className="absolute right-5 top-5 rounded-full bg-slate-950 px-3 py-1 text-xs font-black text-white">
                    Popular
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
                  href={company.whatsapp}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-slate-800"
                >
                  Choose {plan.name}
                </a>
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq" className="bg-slate-900/50">
          <TitleBlock
            eyebrow="FAQ"
            title="Common questions before starting a project."
            text="Clear answers help you decide faster and start with confidence."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
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
                eyebrow="Contact"
                title="Ready to build your business website?"
                text="Message us with your business name and requirement. We will suggest the best plan and cost clearly."
              />

              <div className="space-y-4 text-slate-300">
                <p><span className="font-bold text-white">Website:</span> {company.domain}</p>
                <p><span className="font-bold text-white">Phone:</span> {company.phone}</p>
                <p><span className="font-bold text-white">Email:</span> {company.email}</p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href={company.whatsapp}>WhatsApp Now →</ButtonLink>
                <ButtonLink href={company.mailto} variant="outline">Email Us</ButtonLink>
              </div>
            </div>

            <GlassCard className="p-8">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">Project Enquiry</p>
              <h3 className="mt-4 text-3xl font-black">Tell us what you need.</h3>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">Business type: Restaurant / Shop / School / Service</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">Need: Website / Lead system / Custom app</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">Budget: Starter / Growth / Custom</div>
              </div>
              <a
                href={company.whatsapp}
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-300 px-6 py-4 font-black text-slate-950 transition hover:bg-cyan-200"
              >
                Send Details on WhatsApp
              </a>
            </GlassCard>
          </div>
        </Section>
      </main>
    </div>
  );
}

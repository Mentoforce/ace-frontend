import Image from "next/image";

// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: "◈",
    title: "Property Investment Advisory",
    desc: "Research-backed strategies tailored to your financial goals and risk profile.",
  },
  {
    icon: "◈",
    title: "Luxury Villas & Apartments",
    desc: "Access Dubai's finest residences across all prime districts.",
  },
  {
    icon: "◈",
    title: "Off-Plan & Pre-Launch Strategy",
    desc: "First-mover advantage in the most lucrative developments.",
  },
  {
    icon: "◈",
    title: "Commercial Real Estate",
    desc: "Office, retail, and industrial assets matched to your mandate.",
  },
  {
    icon: "◈",
    title: "Portfolio Structuring",
    desc: "Holistic asset optimization for sustainable real estate wealth.",
  },
  {
    icon: "◈",
    title: "Leasing & Property Management",
    desc: "Comprehensive management for residential and commercial assets.",
  },
  {
    icon: "◈",
    title: "Mortgage & Financing",
    desc: "Competitive financing solutions coordinated within the buying process.",
  },
  {
    icon: "◈",
    title: "Relocation & Migration",
    desc: "End-to-end support for individuals and families moving to Dubai.",
  },
];

const clients = [
  { icon: "🏦", label: "Property Investors" },
  { icon: "🏡", label: "End Users & Homeowners" },
  { icon: "🌍", label: "International Buyers" },
  { icon: "👨‍👩‍👧", label: "Relocating Families" },
  { icon: "📈", label: "Wealth Builders" },
];

const pillars = [
  {
    num: "01",
    title: "Compliance & Transparency",
    desc: "Every transaction managed under full regulatory compliance with total clarity at each stage.",
  },
  {
    num: "02",
    title: "Research-Driven Strategy",
    desc: "Structured, data-backed recommendations aligned with your objectives and risk appetite.",
  },
  {
    num: "03",
    title: "End-to-End Support",
    desc: "From acquisition strategy to title transfer and post-handover — fully managed.",
  },
];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function EyebrowLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-[#c29a1f]" />
      <span className="text-[11px] tracking-[0.25em] uppercase text-[#c29a1f] font-medium font-sans">
        {text}
      </span>
    </div>
  );
}

function SectionHeading({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`font-serif text-4xl md:text-5xl font-light leading-[1.15] ${
        light ? "text-white" : "text-[#0c2848]"
      }`}
    >
      {children}
    </h2>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="bg-[#EEEEEE] font-sans overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-20 grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left */}
          <div>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.08] font-didot text-[#0c2448] mb-6">
              Built for{" "}
              <em className="not-italic text-[#c29a1f]">Investors.</em>
              <br />
              Designed for{" "}
              <em className="not-italic text-[#c29a1f]">Growth.</em>
            </h1>
            <p className="text-[#212121] font-montserrat text-[15px] leading-relaxed max-w-md mb-10">
              Ace Ventures Real Estate LLC is a Dubai-based full-service
              brokerage delivering research-driven property strategies — from
              acquisition to asset optimization.
            </p>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "360°", label: "Full-Service Coverage" },
              { val: "UAE", label: "Dubai-Based & Global" },
              { val: "8+", label: "Service Verticals" },
              { val: "1", label: "Single Point of Contact" },
            ].map(({ val, label }) => (
              <div
                key={label}
                className="bg-white/5 border border-[#0c2448]/40 backdrop-blur-sm p-6"
              >
                <span className="font-serif text-4xl font-didot text-[#0c2448] block leading-none mb-2">
                  {val}
                </span>
                <span className="text-[11px] tracking-[0.15em] uppercase font-montserrat text-[#212121]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom quote bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#c29a1f]/90 backdrop-blur-sm px-8 py-4">
          <p className="text-center font-serif italic text-[#0c2848] text-base md:text-lg max-w-3xl mx-auto">
            "We don't just facilitate transactions — we design property
            strategies aligned with long-term financial growth."
          </p>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <EyebrowLabel text="Who We Are" />
            <SectionHeading>
              A Partner in Every{" "}
              <strong className="font-semibold text-[#C28A2A]">
                Property Decision
              </strong>
            </SectionHeading>
            <div className="mt-8 space-y-5 text-[#0c2848]/60 text-[15px] leading-[1.9] font-light">
              <p>
                Ace Ventures Real Estate LLC is a Dubai-based real estate
                brokerage specializing in investment advisory, luxury
                residential sales, commercial real estate, off-plan projects,
                and complete relocation solutions.
              </p>
              <p>
                We are structured around a single conviction: every property
                decision should be backed by research, guided by expertise, and
                executed with precision. From a first-time buyer to a seasoned
                portfolio investor, every client receives the same depth of
                strategic attention.
              </p>
              <p>
                From acquisition strategy to title transfer and post-handover
                support, every stage is managed with compliance, transparency,
                and precision.
              </p>
            </div>
          </div>

          {/* Right — pillars */}
          <div className="space-y-0">
            {pillars.map((p, i) => (
              <div
                key={p.num}
                className={`flex gap-6 p-8 ${
                  i !== pillars.length - 1 ? "border-b border-[#EEEEEE]" : ""
                } group`}
              >
                <div className="flex-shrink-0">
                  <span className="font-serif text-5xl font-light text-[#c29a1f]/20 group-hover:text-[#c29a1f]/40 transition-colors leading-none">
                    {p.num}
                  </span>
                </div>
                <div>
                  <div className="w-6 h-px bg-[#c29a1f] mb-3" />
                  <h4 className="text-[#0c2848] text-[14px] font-semibold tracking-wide mb-2">
                    {p.title}
                  </h4>
                  <p className="text-[#0c2848]/55 text-[13.5px] leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="bg-[#EEEEEE] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <EyebrowLabel text="What We Do" />
              <SectionHeading>
                Complete Solutions{" "}
                <strong className="font-semibold text-[#C28A2A]">
                  Under One Roof
                </strong>
              </SectionHeading>
            </div>
            <p className="text-[#0c2848]/55 text-[14px] leading-relaxed max-w-sm font-light">
              Every service you need for Dubai real estate — delivered by one
              expert team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0c2848]/8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white p-8 group hover:bg-[#0c2848] transition-colors duration-300"
              >
                <div className="w-8 h-px bg-[#c29a1f] mb-6 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-[#0c2848] group-hover:text-white text-[13.5px] font-semibold tracking-wide mb-3 transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#0c2848]/55 group-hover:text-white/50 text-[13px] leading-relaxed font-light transition-colors">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="bg-[#0c2848] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#FCE7A5]/50" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#FCE7A5]/70 font-medium">
                Who We Serve
              </span>
              <div className="w-8 h-px bg-[#FCE7A5]/50" />
            </div>
            <SectionHeading light>
              Structured Solutions for{" "}
              <em className="not-italic text-[#FCE7A5]">Every Client</em>
            </SectionHeading>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {clients.map((c) => (
              <div
                key={c.label}
                className="bg-white/5 border border-[#c29a1f]/20 p-6 text-center group hover:bg-[#c29a1f]/10 hover:border-[#c29a1f]/50 transition-all duration-200"
              >
                <span className="text-3xl block mb-4">{c.icon}</span>
                <span className="text-white/70 text-[12.5px] font-medium leading-snug block">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY BANNER ── */}
      <section className="bg-[#FCE7A5] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <EyebrowLabel text="Our Philosophy" />
            <SectionHeading>
              Built for Today.{" "}
              <strong className="font-semibold text-[#C28A2A]">
                Positioned for the Future.
              </strong>
            </SectionHeading>
            <p className="mt-6 text-[#0c2848]/65 text-[15px] leading-relaxed font-light">
              Dubai is not just a market — it is an ecosystem of opportunity. At
              Ace Ventures, we navigate this ecosystem through a disciplined,
              research-first approach that places your long-term financial
              growth above short-term transactional thinking.
            </p>
          </div>
          <div className="flex gap-10 flex-shrink-0">
            {[
              { val: "100%", sub: "Compliant" },
              { val: "360°", sub: "Coverage" },
              { val: "1", sub: "Point of Contact" },
            ].map(({ val, sub }) => (
              <div key={sub} className="text-center">
                <span className="font-serif text-5xl font-light text-[#0c2848] block leading-none">
                  {val}
                </span>
                <span className="text-[11px] tracking-[0.15em] uppercase text-[#C28A2A] font-semibold block mt-2">
                  {sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <section id="contact" className="bg-[#0c2848] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <EyebrowLabel text="Get Started" />
            <SectionHeading light>
              Ready to Build Your{" "}
              <em className="not-italic text-[#FCE7A5]">
                Dubai Property Strategy?
              </em>
            </SectionHeading>
            <p className="mt-5 text-white/50 text-[14px] leading-relaxed font-light max-w-md">
              Speak with an advisor and receive a tailored property investment
              plan aligned with your goals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <a
              href="#"
              className="bg-[#c29a1f] hover:bg-[#FCE7A5] text-[#0c2848] px-10 py-4 text-[12px] font-semibold tracking-[0.15em] uppercase text-center transition-colors"
            >
              Schedule a Consultation
            </a>
            <a
              href="#"
              className="border border-white/25 hover:border-[#c29a1f] text-white/70 hover:text-[#FCE7A5] px-10 py-4 text-[12px] font-medium tracking-[0.12em] uppercase text-center transition-colors"
            >
              View Properties
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-serif text-white text-base font-semibold tracking-wide">
              ACE VENTURES
            </span>
            <span className="text-[#C28A2A] text-[10px] tracking-[0.2em] uppercase ml-2">
              Real Estate LLC
            </span>
          </div>
          <p className="text-white/30 text-[12px]">
            Dubai Real Estate Experts | Investment Advisory | Complete Property
            Solutions
          </p>
        </div>
      </section>
    </main>
  );
}

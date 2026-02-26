"use client";
import Image from "next/image";
import { useTranslations } from "@/lib/i18n/client";
import { aboutSection } from "@/mock/about";
import { IconEye, IconTarget } from "@tabler/icons-react";
import { useParams } from "next/navigation";

import {
  IconTrendingUp,
  IconHome,
  IconWorld,
  IconUsers,
  IconBriefcase,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";

export function AboutPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* ───────────────── HERO ───────────────── */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600"
            alt="Dubai Skyline"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="font-didot text-6xl md:text-7xl leading-tight mb-6">
            Ace Ventures
            <br />
            Real Estate
          </h1>

          <p className="max-w-3xl text-white/80 text-lg leading-relaxed font-light">
            Dubai Real Estate Experts | Investment Advisory | Complete Property
            Solutions
          </p>
        </div>
      </section>

      {/* ───────────────── FLOATING STRIP ───────────────── */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white shadow-2xl rounded-2xl grid md:grid-cols-3 text-center overflow-hidden">
            {[
              {
                number: "Investment Advisory",
                label: "Strategic Property Planning",
              },
              {
                number: "Luxury & Commercial",
                label: "Residential & Business Assets",
              },
              {
                number: "End-to-End Support",
                label: "Acquisition to Handover",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="py-10 border-r last:border-none px-6"
              >
                <h3 className="font-didot text-xl text-[#0c2848]">
                  {item.number}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── STORY ───────────────── */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-didot text-5xl text-[#0c2848] mb-8 leading-snug">
              Complete Real Estate Solutions in Dubai – Under One Roof
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-[16px]">
              <p>
                Ace Ventures Real Estate LLC is a Dubai-based real estate
                brokerage firm specializing in property investment advisory,
                luxury residential sales, commercial real estate, off-plan
                projects, and complete relocation solutions in Dubai, UAE.
              </p>

              <p>
                From acquisition strategy to title transfer and post-handover
                support, every stage is managed with compliance, transparency,
                and precision.
              </p>

              <p>
                We provide structured, research-driven real estate solutions
                tailored for investors, homeowners, international buyers, and
                families relocating to Dubai.
              </p>
            </div>
          </div>

          <div className="relative h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200"
              alt="Dubai Real Estate"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ───────────────── WHO WE SERVE ───────────────── */}
      <section className="py-28 bg-[#0c2848]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-didot text-5xl text-white text-center mb-20">
            Who We Serve
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: IconTrendingUp, label: "Property Investors" },
              { icon: IconHome, label: "End Users & Homeowners" },
              { icon: IconWorld, label: "International Buyers" },
              { icon: IconUsers, label: "Families Relocating to Dubai" },
              {
                icon: IconBriefcase,
                label: "Portfolio-Focused Wealth Builders",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-[#C28A2A]/60 transition-all duration-300"
                >
                  <Icon
                    size={34}
                    stroke={1.5}
                    className="text-[#C28A2A] mb-6"
                  />
                  <h3 className="text-white text-lg font-medium">
                    {item.label}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────── SERVICES TIMELINE ───────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-didot text-5xl text-[#0c2848] text-center mb-20">
            Our Service Architecture
          </h2>

          <div className="space-y-16 border-l border-[#0c2848]/20 pl-10">
            {[
              "Dubai Property Investment Advisory",
              "Luxury Villas & Apartments for Sale",
              "Off-Plan & Pre-Launch Project Strategy",
              "Commercial Real Estate Brokerage",
              "Portfolio Structuring & Asset Optimization",
              "Leasing & Property Management",
              "Mortgage & Financing Coordination",
              "Relocation & Migration Assistance",
            ].map((service, index) => (
              <div key={service} className="relative">
                <div className="absolute -left-[46px] top-1 w-6 h-6 bg-[#C28A2A] rounded-full"></div>
                <span className="text-[#C28A2A] text-sm tracking-widest">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h4 className="font-didot text-xl text-[#0c2848] mt-2">
                  {service}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── PHILOSOPHY ───────────────── */}
      <section className="py-24 bg-[#f5f5f5] text-center">
        <h2 className="font-didot text-4xl text-[#0c2848] mb-6">
          Built for Today. Positioned for the Future.
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          We don’t just facilitate transactions — we design property strategies
          aligned with long-term financial growth.
        </p>

        <div className="mt-10 text-sm text-gray-500">
          Dubai Real Estate Brokerage | Property Investment Advisory | Complete
          Real Estate Solutions in UAE
        </div>
      </section>
    </main>
  );
}

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

function SectionHeading({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`font-serif text-4xl md:text-5xl font-didot leading-[1.15] ${
        light ? "text-white" : "text-[#0c2848]"
      }`}
    >
      {children}
    </h2>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <main className="bg-[#faf8f5] font-sans overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] bg-[#000000]/60 flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600"
            alt="Dubai Skyline"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="font-didot text-6xl md:text-7xl leading-tight mb-6">
            Ace Ventures
            <br />
            Real Estate
          </h1>

          <p className="max-w-3xl text-white/80 text-lg leading-relaxed font-light">
            Dubai Real Estate Experts | Investment Advisory | Complete Property
            Solutions
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { val: "360°", label: "Full-Service Coverage" },
            { val: "UAE", label: "Dubai-Based & Global" },
            { val: "8+", label: "Service Verticals" },
            { val: "1", label: "Single Point of Contact" },
          ].map(({ val, label }) => (
            <div
              key={label}
              className="bg-white/50 border rounded-lg border-[#0c2448]/40 backdrop-blur-xl p-6 mr-20"
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
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="bg-white section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <SectionHeading>
              A Partner in Every Property Decision
            </SectionHeading>
            <div className="mt-8 space-y-5 text-[#212121] text-[15px] leading-[1.9] font-montserrat">
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
                <div className="shrink-0">
                  <span className="font-serif text-5xl font-didot text-[#e0e0e0]/80 group-hover:text-[#757575]/60 transition-colors leading-none">
                    {p.num}
                  </span>
                </div>
                <div>
                  {/* <div className="w-6 h-px bg-[#c29a1f] mb-3" /> */}
                  <h4 className="text-[#0c2848] text-[14px] font-didot tracking-wide mb-2">
                    {p.title}
                  </h4>
                  <p className="text-[#757575] text-[13.5px] font-montserrat leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="bg-[#EEEEEE]/50 section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              {/* <EyebrowLabel text="What We Do" /> */}
              <SectionHeading>Complete Solutions Under One Roof</SectionHeading>
            </div>
            <p className="text-[#757575] text-[14px] leading-relaxed max-w-sm font-montserrat">
              Every service you need for Dubai real estate — delivered by one
              expert team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0c2848]/8 rounded-lg overflow-hidden">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white p-8 group hover:bg-[#eeeeee]/10 transition-colors duration-300"
              >
                {/* <div className="w-8 h-px bg-[#c29a1f] mb-6 group-hover:w-12 transition-all duration-300" /> */}
                <h3 className="text-[#0c2848] font-didot  text-[13.5px] font-semibold tracking-wide mb-3 transition-colors">
                  {s.title}
                </h3>
                <p className="text-[212121] font-montserrat  text-[13px] leading-relaxed font-light transition-colors">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            {/* <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#FCE7A5]/50" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#FCE7A5]/70 font-medium">
                Who We Serve
              </span>
              <div className="w-8 h-px bg-[#FCE7A5]/50" />
            </div> */}
            <SectionHeading>
              Structured Solutions for Every Client
            </SectionHeading>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {clients.map((c) => (
              <div
                key={c.label}
                className="bg-white/5 border border-[#e0e0e0] p-6 rounded-lg text-center group hover:bg-[#e0e0e0]/40 hover:border-[#e0e0e0]/90 transition-all duration-200"
              >
                <span className="text-3xl block mb-4">{c.icon}</span>
                <span className="text-[#212121] font-montserrat text-[12.5px] font-medium leading-snug block">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY BANNER ── */}
      <section className="bg-[#eeeeee] section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            {/* <EyebrowLabel text="Our Philosophy" /> */}
            <SectionHeading>Our Philosophy</SectionHeading>
            <p className="font-didot text-[20px] text-[#212121] italic pt-4">
              Built for Today. Positioned for the Future.
            </p>
            <p className="mt-6 text-[#757575] text-[15px] leading-relaxed font-montserrat">
              Dubai is not just a market — it is an ecosystem of opportunity. At
              Ace Ventures, we navigate this ecosystem through a disciplined,
              research-first approach that places your long-term financial
              growth above short-term transactional thinking.
            </p>
          </div>
          <div className="flex gap-10 shrink-0">
            {[
              { val: "100%", sub: "Compliant" },
              { val: "360°", sub: "Coverage" },
              { val: "1", sub: "Point of Contact" },
            ].map(({ val, sub }) => (
              <div key={sub} className="text-center">
                <span className="font-didot text-5xl text-[#0c2848] block leading-none">
                  {val}
                </span>
                <span className="text-[11px] font-montserrat tracking-[0.15em] uppercase text-[#C28A2A] font-semibold block mt-2">
                  {sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="section-padding bg-white">
        <MissionVision7 />
      </div>
    </main>
  );
}

function MissionVision() {
  return (
    <section className="max-w-6xl md:rounded-3xl mx-auto relative overflow-hidden flex rounded-none">
      {/* ─── LEFT PANEL — Our Vision (Dark Navy) ─── */}
      <div
        className="relative z-10 w-1/2 min-h-full flex flex-col p-10 md:0 m-5"
        style={{
          background:
            "linear-gradient(135deg, #061636 0%, #0C2448 55%, #163860 100%)",
        }}
      >
        <div className="relative z-10">
          <h2 className="text-[#D7AB22] font-serif md:text-5xl text-3xl mb-6 font-bold leading-none">
            OUR VISION
          </h2>
        </div>

        {/* Body text */}
        <div className="relative z-10 max-w-md mt-auto">
          <p className="text-[#C29A1F] text-base leading-relaxed">
            To be Dubai's most trusted real estate partner — pioneering a future
            where every investment unlocks lasting prosperity, and every client
            experiences unmatched clarity and confidence in their journey toward
            building generational wealth.
          </p>
        </div>
      </div>

      {/* ─── RIGHT PANEL — Our Mission (Gold) ─── */}
      <div
        className="relative z-0 w-1/2 min-h-full flex flex-col justify-between p-10 items-end text-end md:m-0 -m-5"
        style={{
          background:
            "linear-gradient(135deg, #e8c44a 0%, #D7AB22 45%, #c49a1a 100%)",
        }}
      >
        {/* Heading + Body — bottom right */}
        <div className="relative z-10 mt-auto max-w-md ">
          <h2 className="font-serif md:text-5xl text-3xl font-bold leading-none text-[#0C2448] mb-6">
            OUR MISSION
          </h2>

          {/* <div className="w-14 h-0.5 bg-[#0C2448]/50 ml-auto mb-6"></div> */}

          <p className="text-[#0C2448] text-base leading-relaxed">
            To deliver bespoke real estate solutions that go beyond transactions
            — empowering high-net-worth individuals and institutional investors
            with exclusive access, strategic foresight, and discretionary
            guidance at every stage of ownership.
          </p>
        </div>
      </div>

      {/* ─── DIAGONAL OVERLAP BLADE — creates the angled split ─── */}
      <div className="absolute inset-0 flex justify-center pointer-events-none z-20">
        <div
          className="
      h-full w-16
      ltr:skew-x-[-8deg] rtl:skew-x-[8deg]
      ltr:translate-x-2.5 rtl:translate-x-2.5
    "
          style={{
            background: "white",
            boxShadow: "6px 0 30px rgba(0,0,0,0.25)",
          }}
        />
      </div>

      {/* ─── MOBILE LAYOUT (stacked) ─── */}
      <style>{`
        @media (max-width: 639px) {
          /* Hide the two-column flex layout */
          section > div:nth-child(1),
          section > div:nth-child(2) {
            width: 100% !important;
          }
          section {
            flex-direction: column !important;
          }
          /* Hide the diagonal blade on mobile */
          section > div:nth-child(3) {
            display: none !important;
          }
          /* Reset right panel text alignment */
          section > div:nth-child(2) {
            text-align: left !important;
            align-items: flex-start !important;
          }
          section > div:nth-child(2) > div:last-child > h2,
          section > div:nth-child(2) > div:last-child > div {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
function MissionVision4() {
  const t = useTranslations();
  const { locale } = useParams();
  const translation =
    aboutSection.translations[locale as string] ??
    aboutSection.translations["en-gb"];
  return (
    <section className="max-w-6xl mx-auto relative overflow-hidden flex flex-col sm:flex-row rounded-none md:rounded-3xl">
      {/* ─── LEFT PANEL — Our Vision (Dark Navy) ─── */}
      <div
        className="
          relative z-10
          w-full sm:w-1/2
          flex flex-col
          p-8 sm:p-10
        "
        style={{
          background:
            "linear-gradient(135deg, #061636 0%, #0C2448 55%, #163860 100%)",
        }}
      >
        <h2 className="text-[#D7AB22] font-serif text-3xl uppercase md:text-5xl mb-6 font-bold leading-none">
          {t("about.vision")}
        </h2>

        <p className="text-[#C29A1F] text-base leading-relaxed max-w-md mt-auto">
          {translation.vision}
        </p>
      </div>

      {/* ─── RIGHT PANEL — Our Mission (Gold) ─── */}
      <div
        className="
          relative z-0
          w-full sm:w-1/2
          flex flex-col
          p-8 sm:p-10
          text-left sm:text-end
          items-start sm:items-end
        "
        style={{
          background:
            "linear-gradient(135deg, #e8c44a 0%, #D7AB22 45%, #c49a1a 100%)",
        }}
      >
        <div className="max-w-md mt-0 sm:mt-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase leading-none text-[#0C2448] mb-6">
            {t("about.mission")}
          </h2>

          <p className="text-[#0C2448] text-base leading-relaxed">
            {translation.mission}
          </p>
        </div>
      </div>

      {/* ─── DIAGONAL OVERLAP BLADE (desktop only) ─── */}
      <div className="hidden sm:flex absolute inset-0 justify-center pointer-events-none z-20">
        <div
          className="
            h-full w-14 md:w-16
            ltr:skew-x-[-8deg] rtl:skew-x-[8deg]
            ltr:translate-x-2 rtl:translate-x-2
          "
          style={{
            background: "white",
            boxShadow: "6px 0 30px rgba(0,0,0,0.25)",
          }}
        />
      </div>
    </section>
  );
}
function MissionVision5() {
  const t = useTranslations();
  const { locale } = useParams();
  const translation =
    aboutSection.translations[locale as string] ??
    aboutSection.translations["en-gb"];
  return (
    <section className="max-w-6xl mx-auto relative overflow-hidden flex flex-col sm:flex-row rounded-none md:rounded-3xl">
      {/* ─── LEFT PANEL — Our Vision (Dark Navy) ─── */}
      <div
        className="
          relative z-10
          w-full sm:w-1/2
          flex flex-col
          p-8 sm:p-10
        "
        style={{
          background:
            "linear-gradient(135deg, #061636 0%, #0C2448 55%, #163860 100%)",
        }}
      >
        <h2 className="text-[#ffffff]/80 font-serif text-3xl uppercase md:text-5xl mb-6 font-bold leading-none">
          {t("about.vision")}
        </h2>

        <p className="text-[#ffffff]/80 text-base leading-relaxed max-w-md mt-auto">
          {translation.vision}
        </p>
      </div>

      {/* ─── RIGHT PANEL — Our Mission (Gold) ─── */}
      <div
        className="
          relative z-0
          w-full sm:w-1/2
          flex flex-col
          p-8 sm:p-10
          text-left sm:text-end
          items-start sm:items-end
        "
        style={{
          background:
            "linear-gradient(135deg, #e8c44a66 0%, #D7AB2266 45%, #c49a1a66 100%)",
        }}
      >
        <div className="max-w-md mt-0 sm:mt-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase leading-none text-[#0C2448] mb-6">
            {t("about.mission")}
          </h2>

          <p className="text-[#0C2448] text-base leading-relaxed">
            {translation.mission}
          </p>
        </div>
      </div>

      {/* ─── DIAGONAL OVERLAP BLADE (desktop only) ─── */}
      <div className="hidden sm:flex absolute inset-0 justify-center pointer-events-none z-20">
        <div
          className="
            h-full w-14 md:w-16
            ltr:skew-x-[-8deg] rtl:skew-x-[8deg]
            ltr:translate-x-2 rtl:translate-x-2
          "
          style={{
            background: "white",
            boxShadow: "6px 0 30px rgba(0,0,0,0.25)",
          }}
        />
      </div>
    </section>
  );
}
function MissionVision7() {
  const t = useTranslations();
  const { locale } = useParams();
  const translation =
    aboutSection.translations[locale as string] ??
    aboutSection.translations["en-gb"];
  return (
    <section className="max-w-6xl mx-auto relative overflow-hidden flex flex-col sm:flex-row rounded-none md:rounded-3xl">
      {/* ─── LEFT PANEL — Our Vision (Dark Navy) ─── */}
      <div
        className="
          relative z-10
          w-full sm:w-1/2
          flex flex-col
          p-8 sm:p-10
        "
        style={{
          background:
            "linear-gradient(135deg, #061636 0%, #0C2448 55%, #163860 100%)",
        }}
      >
        <h2 className="text-[#ffffff]/80 font-serif text-3xl md:text-5xl mb-6 font-didot leading-none">
          {t("about.vision")}
        </h2>

        <p className="text-[#ffffff]/80 text-base leading-relaxed max-w-md font-montserrat mt-auto">
          {translation.vision}
        </p>
      </div>

      {/* ─── RIGHT PANEL — Our Mission (Gold) ─── */}
      <div
        className="
          relative z-0
          w-full sm:w-1/2
          flex flex-col
          p-8 sm:p-10
          text-left sm:text-end
          items-start sm:items-end
        "
        style={{
          background:
            "linear-gradient(135deg, #eeeeee 0%, #e0e0e0 45%, #eeeeee 100%)",
        }}
      >
        <div className="max-w-md mt-0 sm:mt-auto">
          <h2 className="font-serif text-3xl md:text-5xl  font-didot leading-none text-[#0C2448] mb-6">
            {t("about.mission")}
          </h2>

          <p className="text-[#0C2448] text-base leading-relaxed font-montserrat">
            {translation.mission}
          </p>
        </div>
      </div>

      {/* ─── DIAGONAL OVERLAP BLADE (desktop only) ─── */}
      <div className="hidden sm:flex absolute inset-0 justify-center pointer-events-none z-20">
        <div
          className="
            h-full w-14 md:w-16
            ltr:skew-x-[-8deg] rtl:skew-x-[8deg]
            ltr:translate-x-2 rtl:translate-x-2
          "
          style={{
            background: "white",
            boxShadow: "6px 0 30px rgba(0,0,0,0.25)",
          }}
        />
      </div>
    </section>
  );
}
function MissionVision2() {
  return (
    <section className="max-w-5xl overflow-hidden mx-auto px-4">
      <div className="flex flex-col md:flex-row w-full justify-around gap-24 mt-20">
        {/* ───── Vision Panel (kept almost identical) ───── */}
        <div className="relative h-112 w-full md:w-104 pt-10 mx-auto">
          <div className="relative flex flex-col justify-start items-center text-center md:text-left">
            <div>
              <h2 className="text-[#D7AB22] font-serif text-4xl font-bold leading-none mb-4">
                OUR VISION
              </h2>

              <div className="relative z-10 max-w-md">
                <p className="text-[#C29A1F] text-base leading-relaxed">
                  To be Dubai&apos;s most trusted real estate partner —
                  pioneering a future where every investment unlocks lasting
                  prosperity.
                </p>
              </div>
            </div>

            {/* Rotated background */}
            <div
              className="
                absolute
                top-0 left-1/2
                w-[20rem] h-96
                -translate-x-1/2 -translate-y-1/3
                rotate-45
                rounded-4xl
                bg-amber-100
                -z-20
              "
            />
          </div>
        </div>

        {/* ───── Mission Panel (adjusted slightly) ───── */}
        <div className="relative w-full md:w-104 mx-auto">
          <div className="relative flex flex-col items-center md:items-end text-center md:text-end z-10 max-w-md mt-12 md:mt-20">
            {/* Background block */}
            <div
              className="
                absolute
                w-72 h-72
                -rotate-45
                top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                md:left-auto md:right-0 md:translate-x-1/3
                rounded-4xl
                bg-amber-100
                -z-20
              "
            />

            <h2 className="font-serif text-4xl font-bold leading-none text-[#0C2448] mb-6">
              OUR MISSION
            </h2>

            <p className="text-[#0C2448] text-base leading-relaxed">
              To deliver bespoke real estate solutions that go beyond
              transactions — empowering high-net-worth individuals and
              institutional investors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// function MissionVision1() {
//   return (
//     <section className="max-w-5xl overflow-hidden mx-auto">
//       <div className="flex w-full justify-around mt-10">
//         {/* Vison Panel */}
//         <div className="relative h-150 w-100">
//           <div className="relative flex flex-col justify-start items-center">
//             <div>
//               <h2 className="text-[#D7AB22] font-serif text-4xl font-bold leading-none mb-4">
//                 OUR VISION
//               </h2>

//               <div className="relative z-10 max-w-md">
//                 <p className="text-[#C29A1F] text-base leading-relaxed">
//                   To be Dubai's most trusted real estate partner — pioneering a
//                   future where every investment unlocks lasting prosperity.
//                 </p>
//               </div>
//             </div>
//             {/* Centered rotated background */}
//             <div
//               className="
//         absolute
//         top-0 left-1/2
//         w-130 h-150
//         -translate-x-1/2 -translate-y-7/12
//         rotate-45
//         rounded-4xl
//         bg-amber-100
//         -z-20 -inset-10
//       "
//             />
//           </div>
//         </div>

//         {/* Mission Panel */}
//         <div className="relative">
//           {/* Heading + Body — bottom right */}
//           <div className="flex justify-around flex-col items-end z-10 max-w-md mt-20">
//             <div className="-inset-10 rounded-4xl rotate-45 -z-20 absolute top-10 -end-2 bg-amber-100"></div>
//             <h2 className="font-serif text-4xl text-end font-bold leading-none text-[#0C2448] m-6">
//               OUR MISSION
//             </h2>
//             <p className="text-[#0C2448] text-base text-end leading-relaxed">
//               To deliver bespoke real estate solutions that go beyond
//               transactions — empowering high-net-worth individuals and
//               institutional investors.
//             </p>

//             {/* <IconTarget size={50} /> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

function Image1() {
  return (
    <div className="relative m-2 w-full max-w-md mx-auto">
      {/* Top-left accent square */}
      <div
        className="
          absolute
          md:-start-4 -top-4
          start:0
          w-28 h-28
          sm:w-32 sm:h-32
          md:w-40 md:h-40
          bg-[#0C2448]
          -z-20
        "
      />

      {/* Image (real size, rectangular) */}
      <Image
        src="/about.jpg"
        alt="About ACE"
        width={600}
        height={420}
        className="relative z-10 object-cover"
      />

      {/* Bottom-right accent square */}
      <div
        className="
          absolute
          md:-end-4 -bottom-4
          end-0
          w-28 h-28
          sm:w-32 sm:h-32
          md:w-40 md:h-40
          bg-[#C29A1F]
          -z-20
        "
      />
    </div>
  );
}
function Image6() {
  return (
    <div className="relative m-2 w-full max-w-md mx-auto">
      {/* Top-left accent square */}
      <div
        className="
          absolute
          md:-start-4 -top-4
          start:0
          w-28 h-28
          sm:w-32 sm:h-32
          md:w-40 md:h-40
          bg-[#0C2448]
          -z-20
        "
      />

      {/* Image (real size, rectangular) */}
      <Image
        src="/about.jpg"
        alt="About ACE"
        width={600}
        height={420}
        className="relative z-10 object-cover"
      />

      {/* Bottom-right accent square */}
      <div
        className="
          absolute
          md:-end-4 -bottom-4
          end-0
          w-28 h-28
          sm:w-32 sm:h-32
          md:w-40 md:h-40
          bg-[#C29A1F]/40
          -z-20
        "
      />
    </div>
  );
}

export function About1() {
  const t = useTranslations();
  const { locale } = useParams();
  const translation =
    aboutSection.translations[locale as string] ??
    aboutSection.translations["en-gb"];

  return (
    <section className="font-didot max-w-7xl mx-auto md:py-30 py-20">
      <div className="py-10 grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-2 items-center">
        <div className="">
          <h1 className="md:text-2xl text-center md:p-2 text-xl">
            {t("about.about")}
          </h1>

          <h1 className="md:text-6xl text-center p-1 text-4xl font-bold">
            ACE Ventures
          </h1>
          <h1 className="md:text-4xl text-center text-xl pb-8">Real Estate</h1>
          <p className="text-center text-xl italic">{translation.tagline}</p>
        </div>
        <Image6 />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#c29a1f] mb-8">
          Who We Are
        </h2>

        <p className="text-[#0c2448] text-lg leading-relaxed mb-2">
          Ace Ventures Real Estate LLC is a Dubai-based real estate brokerage
          firm specializing in property investment advisory, luxury residential
          sales, commercial real estate, off-plan projects, and complete
          relocation solutions across Dubai, UAE.
        </p>

        <p className="text-[#0c2448] text-lg leading-relaxed">
          We provide structured, research-driven real estate strategies designed
          for investors, homeowners, international buyers, and portfolio-focused
          wealth builders seeking long-term financial growth.
        </p>
      </div>

      {/* <MissionVision4 /> */}
      {/* <div className="h-40" /> */}
      <MissionVision5 />
    </section>
  );
}

function Image2() {
  return (
    <div className="relative m-2">
      <div className="bg-[#0C2448] h-80 w-80 absolute -z-20 -start-4 -top-4"></div>
      <Image src={"/about.jpg"} alt="" width={600} height={600} />
      <div className="bg-[#0C2448] h-80 w-80 absolute -z-20 end-6 -bottom-4"></div>
    </div>
  );
}

function Image3() {
  return (
    <div className="relative m-2">
      <div className="bg-[#C29A1F] h-80 w-80 absolute -z-20 -start-4 -top-4"></div>
      <Image src={"/about.jpg"} alt="" width={600} height={600} />
      <div className="bg-[#C29A1F] h-80 w-80 absolute -z-20 end-6 -bottom-4"></div>
    </div>
  );
}

function Image4() {
  return (
    <div className="relative m-2">
      <div className="border-[#C29A1F] border h-80 w-80 absolute -z-20 -start-4 -top-4"></div>
      <Image src={"/about.jpg"} alt="" width={600} height={600} />
      <div className="border-[#C29A1F] border h-80 w-80 absolute -z-20 end-6 -bottom-4"></div>
    </div>
  );
}

function Image5() {
  return (
    <div className="relative m-2">
      <div className="border-[#0C2448] border h-80 w-80 absolute -z-20 -start-4 -top-4"></div>
      <Image src={"/about.jpg"} alt="" width={600} height={600} />
      <div className="border-[#0C2448] border h-80 w-80 absolute -z-20 end-6 -bottom-4"></div>
    </div>
  );
}

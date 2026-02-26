"use client";

import {
  IconHeartHandshake,
  IconBuildingSkyscraper,
  IconKey,
  IconChartLine,
} from "@tabler/icons-react";

interface FeatureCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  side: "left" | "right";
  icon: React.ReactNode;
}

const cards: FeatureCard[] = [
  {
    id: "01",
    title: "Trust & Credibility",
    subtitle: "Licensed · Compliant · Transparent",
    description:
      "We operate with integrity, regulatory discipline, and measurable performance — ensuring every transaction is secure, ethical, and professionally executed.",
    side: "left",
    icon: (
      <IconHeartHandshake size={28} stroke={1.5} className="text-[#0C2448]" />
    ),
  },
  {
    id: "02",
    title: "Curated Prime Portfolio",
    subtitle: "Luxury · Investment · Commercial · Off-Plan",
    description:
      "Exclusive access to Dubai's most sought-after properties, backed by strong developer alliances and data-driven market intelligence.",
    side: "left",
    icon: (
      <IconBuildingSkyscraper
        size={28}
        stroke={1.5}
        className="text-[#0C2448]"
      />
    ),
  },
  {
    id: "03",
    title: "End-to-End Execution",
    subtitle: "Advisory to Ownership — Seamlessly Managed",
    description:
      "Property sourcing, negotiation, due diligence, financing coordination, documentation, and handover — handled with precision.",
    side: "right",
    icon: <IconKey size={28} stroke={1.5} className="text-[#0C2448]" />,
  },
  {
    id: "04",
    title: "Strategic Wealth Partnership",
    subtitle: "Beyond Transactions · Focused on Growth",
    description:
      "We align every deal with long-term capital appreciation, rental yield optimization, and portfolio expansion strategies.",
    side: "right",
    icon: <IconChartLine size={28} stroke={1.5} className="text-[#0C2448]" />,
  },
];

function FeatureCard({
  id,
  title,
  subtitle,
  description,
  side,
  icon,
}: FeatureCard) {
  const isLeft = side === "left";

  return (
    <div className="relative shadow-lg bg-[#ffffff]/40 md:p-6 p-4 overflow-hidden group transition-all duration-300 rounded-2xl h-full">
      {/* Side Gold Bar */}
      {/* <div className="absolute top-0 left-0 w-0.75 h-full bg-linear-to-b from-[#FCE7A5] to-[#C28A2A]"></div> */}
      {/* Icon - Top Left, above Title//mb-4 */}
      <div className="md:mb-3 mb-1">{icon}</div>
      <h3 className="font-display text-[#0C2448] md:text-[22px] text-[20px] font-semibold leading-snug mb-0.5">
        {title}
      </h3>
      <span className="text-[13px] mb-0.5 block text-[#212121]">
        {subtitle}
      </span>
      <p className="text-[12px] font-light text-[#212121] leading-[1.9] tracking-[0.2px]">
        {description}
      </p>
    </div>
  );
}
//px-6 md:px-10 py-12
export default function WhyChooseACE() {
  return (
    <section
      className=" font-didot mx-auto section-padding bg-[#faf8f5]/90"
      style={{ paddingBottom: "6rem" }}
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2
            className=" text-[#0C2448] leading-tight mb-3 text-4xl md:text-5xl"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
          >
            Why Choose Us
            <br />
          </h2>
          <p className=" flex justify-center gap-2 md:text-[15px] text-xs flex-wrap font-montserrat uppercase text-[#212121] mb-10">
            Elite Advisory
            <span> · </span>
            Strategic Execution <span> · </span> Complete Real Estate Solutions
          </p>
        </div>

        {/* GRID LAYOUT - Mobile Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px_1fr] xl:grid-cols-[1fr_340px_1fr] gap-6 md:gap-10 items-center font-montserrat text-2xs">
          {/* LEFT CARDS */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {cards
              .filter((c) => c.side === "left")
              .map((card) => (
                <FeatureCard key={card.id} {...card} />
              ))}
          </div>

          {/* CENTER IMAGE - Becomes top visual on mobile */}
          <div className="flex flex-col items-center gap-7 order-2">
            <div
              className="relative z-1 rounded-2xl h-125 max-w-[90vw] shadow-xl"
              style={{ aspectRatio: 3 / 4 }}
            >
              <img
                src="/why7.jpg"
                alt="Luxury Dubai Property"
                className="w-full h-full rounded-2xl object-cover brightness-90 contrast-105"
              />
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-8 order-3">
            {cards
              .filter((c) => c.side === "right")
              .map((card) => (
                <FeatureCard key={card.id} {...card} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

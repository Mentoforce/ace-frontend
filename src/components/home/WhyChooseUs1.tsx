"use client";

interface FeatureCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  side: "left" | "right";
}

const cards: FeatureCard[] = [
  {
    id: "01",
    title: "Trust & Credibility",
    subtitle: "Licensed · Compliant · Transparent",
    description:
      "We operate with integrity, regulatory discipline, and measurable performance — ensuring every transaction is secure, ethical, and professionally executed.",
    side: "left",
  },
  {
    id: "02",
    title: "Curated Prime Portfolio",
    subtitle: "Luxury · Investment · Commercial · Off-Plan",
    description:
      "Exclusive access to Dubai's most sought-after properties, backed by strong developer alliances and data-driven market intelligence.",
    side: "left",
  },
  {
    id: "03",
    title: "End-to-End Execution",
    subtitle: "Advisory to Ownership — Seamlessly Managed",
    description:
      "Property sourcing, negotiation, due diligence, financing coordination, documentation, and handover — handled with precision.",
    side: "right",
  },
  {
    id: "04",
    title: "Strategic Wealth Partnership",
    subtitle: "Beyond Transactions · Focused on Growth",
    description:
      "We align every deal with long-term capital appreciation, rental yield optimization, and portfolio expansion strategies.",
    side: "right",
  },
];

function FeatureCard({ id, title, subtitle, description, side }: FeatureCard) {
  const isLeft = side === "left";

  return (
    <div className="relative bg-white border border-[#C29A1F]/20 p-8 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-[#C29A1F]/40 rounded-lg">
      {/* Side Gold Bar */}
      {isLeft ? (
        <div className="absolute top-0 left-0 w-0.75 h-full bg-linear-to-b from-[#C29A1F] to-[#C29A1F]/20"></div>
      ) : (
        <div className="absolute top-0 right-0 w-0.75 h-full bg-linear-to-b from-[#C29A1F] to-[#C29A1F]/20"></div>
      )}

      {/* Corner Decoration */}
      {isLeft ? (
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#C29A1F]/40"></div>
      ) : (
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#C29A1F]/40"></div>
      )}

      <span
        className={`font-display text-[11px] tracking-[4px] 
        } uppercase mb-3 block font-semibold`}
      >
        {id}
      </span>

      <h3 className="font-display text-navy text-[22px] font-semibold leading-snug mb-1">
        {title}
      </h3>

      <span
        className={`text-[9.5px] font-semibold tracking-[2.5px] uppercase mb-4 block
        }`}
      >
        {subtitle}
      </span>

      <p className="text-[12.5px] font-light text-gray-500 leading-[1.9] tracking-[0.2px]">
        {description}
      </p>
    </div>
  );
}
export default function WhyChooseACE() {
  return (
    <section className="max-w-7xl font-didot mx-auto section-padding">
      {/* HEADER — UNCHANGED */}
      <div className="text-center mt-20">
        <h2
          className="font-display font-light text-navy leading-tight mb-5 text-4xl"
          style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
        >
          Why Choose
          <span className="font-semibold"> ACE Ventures</span>
          <br />
        </h2>

        <p className="text-[11px] font-semibold tracking-[3.5px] uppercase mb-4">
          Elite Advisory · Strategic Execution · Complete Real Estate Solutions
        </p>

        <p className="text-sm font-light text-gray-400 max-w-lg mx-auto leading-relaxed tracking-wide mb-10">
          Dubai's most trusted real estate partner — Where precision meets
          prestige.
        </p>
      </div>

      {/* GRID LAYOUT — UNCHANGED */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px_1fr] xl:grid-cols-[1fr_340px_1fr] gap-10 items-center">
        {/* LEFT CARDS */}
        <div className="flex flex-col gap-25">
          {cards
            .filter((c) => c.side === "left")
            .map((card) => (
              <FeatureCard key={card.id} {...card} />
            ))}
        </div>

        <div className="flex flex-col items-center gap-7 ">
          <div className="relative w-full rounded-lg">
            <div className="absolute -inset-2 rounded-lg border border-[#C29A1F]/25 pointer-events-none z-0"></div>

            <div
              className="relative z-1 overflow-hidden rounded-lg"
              style={{ aspectRatio: 3 / 4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=85"
                alt="Luxury Dubai Property"
                className="w-full h-full rounded-lg object-cover brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0c2448]/80 via-[#0c2448]/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 z-10 py-4 px-5 text-center">
                <span className="font-sans text-[9px] font-semibold tracking-[3px] uppercase text-white">
                  Dubai's Premier Real Estate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="flex flex-col gap-25">
          {cards
            .filter((c) => c.side === "right")
            .map((card) => (
              <FeatureCard key={card.id} {...card} />
            ))}
        </div>
      </div>
    </section>
  );
}

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
    <div className="relative bg-white border border-[#C28A2A]/20 p-6 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-[#C28A2A]/40 rounded-lg h-full">
      {/* Side Gold Bar */}
      {isLeft ? (
        <div className="absolute top-0 left-0 w-0.75 h-full bg-linear-to-b from-[#FCE7A5] to-[#C28A2A]"></div>
      ) : (
        <div className="absolute top-0 right-0 w-0.75 h-full bg-linear-to-b from-[#FCE7A5] to-[#C28A2A]"></div>
      )}

      {/* Icon - Top Left, above Title//mb-4 */}
      <div className="mb-3">{icon}</div>

      <h3 className="font-display text-[#0C2448] text-[22px] font-semibold leading-snug mb-0.5">
        {title}
      </h3>

      <span className="text-[13px] mb-0.5 block text-[#757575]">
        {subtitle}
      </span>

      <p className="text-[12.5px] font-light text-[#212121] leading-[1.9] tracking-[0.2px]">
        {description}
      </p>
    </div>
  );
}

export default function WhyChooseACE() {
  return (
    <section className="max-w-7xl font-didot mx-auto px-6 md:px-10 py-12 mb-8">
      {/* HEADER */}
      <div className="text-center mt-10 md:mt-20">
        <h2
          className="font-display font-light text-[#0C2448] leading-tight mb-5 text-4xl md:text-5xl"
          style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
        >
          Why Choose
          <span className="font-semibold"> ACE Ventures</span>
          <br />
        </h2>

        <p className="text-[11px] text-[#212121] font-semibold tracking-[3.5px] uppercase mb-10 md:mb-15">
          Elite Advisory · Strategic Execution · Complete Real Estate Solutions
        </p>
      </div>

      {/* GRID LAYOUT - Mobile Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px_1fr] xl:grid-cols-[1fr_340px_1fr] gap-8 md:gap-10 items-center font-montserrat text-2xs">
        {/* LEFT CARDS */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          {cards
            .filter((c) => c.side === "left")
            .map((card) => (
              <FeatureCard key={card.id} {...card} />
            ))}
        </div>

        {/* CENTER IMAGE - Becomes top visual on mobile */}
        <div className="flex flex-col items-center gap-7 order-1 lg:order-2">
          <div className="relative w-full rounded-lg">
            <div
              className="relative z-1 overflow-hidden rounded-lg shadow-xl"
              style={{ aspectRatio: 3 / 4 }}
            >
              <img
                src="/why7.jpg"
                alt="Luxury Dubai Property"
                className="w-full h-full rounded-lg object-cover object-center brightness-90 contrast-105"
              />
              {/* <div className="absolute inset-0 bg-linear-to-t from-[#0c2448]/80 via-[#0c2448]/20 to-transparent"></div> */}
              {/* 
              <div className="absolute bottom-0 left-0 right-0 z-10 py-4 px-5 text-center">
                <span className="font-sans text-[9px] font-semibold tracking-[3px] uppercase text-white">
                  Dubai's Premier Real Estate
                </span>
              </div> */}
            </div>
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
    </section>
  );
}

//----------------------------------------------------------------------------------------------------------------------------------
//style 2
// : 212121     grey:757575
// "use client";

// interface Feature {
//   id: string;
//   title: string;
//   subtitle: string;
//   description: string;
// }

// const features: Feature[] = [
//   {
//     id: "01",
//     title: "Trust & Credibility",
//     subtitle: "Licensed · Compliant · Transparent",
//     description:
//       "We operate with integrity, regulatory discipline, and measurable performance — ensuring every transaction is secure, ethical, and professionally executed.",
//   },
//   {
//     id: "02",
//     title: "Curated Prime Portfolio",
//     subtitle: "Luxury · Investment · Commercial · Off-Plan",
//     description:
//       "Exclusive access to Dubai's most sought-after properties, backed by strong developer alliances and data-driven market intelligence.",
//   },
//   {
//     id: "03",
//     title: "End-to-End Execution",
//     subtitle: "Advisory to Ownership — Seamlessly Managed",
//     description:
//       "Property sourcing, negotiation, due diligence, financing coordination, documentation, and handover — handled with precision.",
//   },
//   {
//     id: "04",
//     title: "Strategic Wealth Partnership",
//     subtitle: "Beyond Transactions · Focused on Growth",
//     description:
//       "We align every deal with long-term capital appreciation, rental yield optimization, and portfolio expansion strategies.",
//   },
// ];

// export default function WhyChooseACE() {
//   return (
//     <section className="w-full section-padding font-didot">
//       {/* HEADER */}
//       <div className="text-center mt-20 mb-24 max-w-4xl mx-auto px-6">
//         <h2
//           className="font-display font-light text-navy leading-tight mb-5"
//           style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
//         >
//           Why Choose <span className="font-semibold">ACE Ventures</span>
//         </h2>

//         <p className="text-[11px] font-semibold tracking-[3.5px] uppercase mb-4">
//           Elite Advisory · Strategic Execution · Complete Real Estate Solutions
//         </p>

//         <p className="text-sm font-light text-gray-400 leading-relaxed tracking-wide">
//           Dubai's most trusted real estate partner — Where precision meets
//           prestige.
//         </p>
//       </div>

//       {/* HORIZONTAL PILLAR BAND */}
//       <div className="border-t border-b border-[#C29A1F]/20">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//           {features.map((feature, index) => (
//             <div
//               key={feature.id}
//               className={`
//                 relative px-10 py-16
//                 ${index !== features.length - 1 ? "lg:border-r border-[#C29A1F]/20" : ""}
//               `}
//             >
//               {/* Large Background Number */}
//               <span className="absolute top-6 right-8 text-[70px] font-display text-[#C29A1F]/6 select-none">
//                 {feature.id}
//               </span>

//               <h3 className="text-[20px] font-semibold text-navy mb-3">
//                 {feature.title}
//               </h3>

//               <p className="text-[9px] font-semibold tracking-[2.5px] uppercase text-[#C29A1F] mb-5">
//                 {feature.subtitle}
//               </p>

//               <p className="text-[13px] font-light text-gray-500 leading-[1.9] tracking-[0.2px]">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

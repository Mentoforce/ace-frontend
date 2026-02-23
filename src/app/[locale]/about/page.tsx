"use client";

import { useTranslations } from "@/lib/i18n/client";
import { aboutSection } from "@/mock/about";
import { IconEye, IconTarget } from "@tabler/icons-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTransition } from "react";

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
export default function About() {
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
          <h1 className="md:text-4xl text-center text-xl pb-8">
            Real Estate LLC
          </h1>
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

      <div className=" py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#c29a1f] mb-12 text-center">
            Who We Serve
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Property Investors",
              "End Users & Homeowners",
              "International Buyers",
              "Families Relocating to Dubai",
              "Portfolio-Focused Wealth Builders",
            ].map((item, index) => (
              <div
                key={index}
                className="border border-[#C28A2A]/30 p-6 rounded-xl hover:border-[#c29a1f] transition duration-300"
              >
                <p className="text-[#FCE7A5] text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
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

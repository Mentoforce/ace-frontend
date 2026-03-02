// "use client";

// import { useEffect, useRef, useState } from "react";
// import { useTranslations } from "@/lib/i18n/client";
// import { developers } from "@/mock/developers";

// export default function Marquee() {
//   const t = useTranslations();
//   const containerRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);

//   const [repeatCount, setRepeatCount] = useState(2);

//   useEffect(() => {
//     if (!containerRef.current || !contentRef.current) return;

//     const containerWidth = containerRef.current.offsetWidth;
//     const contentWidth = contentRef.current.scrollWidth;

//     if (contentWidth === 0) return;

//     // Ensure content width is at least 2x container width
//     const minWidth = containerWidth * 2;
//     const neededRepeats = Math.ceil(minWidth / contentWidth);

//     setRepeatCount(neededRepeats);
//   }, []);

//   return (
//     <section className="section-padding -mb-10">
//       <div className="relative mx-auto w-full overflow-hidden bg-linear-to-br pb-3">
//         {/* Heading */}
//         <div className=" text-center">
//           <h2
//             className="font-didot text-[#0C2448] leading-tight mb-3 text-4xl md:text-5xl"
//             style={{ fontSize: "clamp(30px, 4.2vw, 54px)" }}
//           >
//             {t("home.trustedDevelopers")}
//             <br />
//           </h2>
//           <p className=" flex justify-center gap-2 md:text-[15px] text-xs flex-wrap font-montserrat uppercase text-[#212121] mb-10">
//             Exclusive Access to Dubai’s Most Distinguished Developments{" "}
//           </p>
//         </div>

//         {/* Fade edges */}
//         <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-[#ffffff] to-transparent" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-[#ffffff] to-transparent" />

//         {/* Marquee */}
//         <div ref={containerRef} className="relative overflow-hidden">
//           <div className="marquee-track">
//             <div ref={contentRef} className="marquee-content">
//               {Array(repeatCount)
//                 .fill(developers)
//                 .flat()
//                 .map((dev, i) => (
//                   <div
//                     key={`${dev._id}-${i}`}
//                     className="flex w-50 px-5 shrink-0 items-center justify-center my-10"
//                   >
//                     <img
//                       src={dev.logo}
//                       alt={dev.name}
//                       className="max-h-full max-w-full opacity-90 transition-opacity duration-300 hover:opacity-100"
//                     />
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useTranslations } from "@/lib/i18n/client";
import { developers } from "@/mock/developers";

export default function Marquee() {
  const t = useTranslations();

  return (
    <section className="section-padding -mb-10">
      <div className="relative mx-auto w-full overflow-hidden pb-3">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="font-didot text-[#0C2448] leading-tight mb-3 text-4xl md:text-5xl"
            style={{ fontSize: "clamp(30px, 4.2vw, 54px)" }}
          >
            {t("home.trustedDevelopers")}
          </h2>

          <p className="flex justify-center gap-2 flex-wrap md:text-[15px] text-xs font-montserrat uppercase text-[#212121] mb-10">
            Exclusive Access to Dubai’s Most Distinguished Developments
          </p>
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee">
            {/* First Set */}
            <div className="flex items-center gap-20 pr-20">
              {developers.map((dev) => (
                <div
                  key={dev._id}
                  className="flex w-50 px-5 my-10 shrink-0 items-center justify-center"
                >
                  <img
                    src={dev.logo}
                    alt={dev.name}
                    className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate Set */}
            <div className="flex items-center gap-20">
              {developers.map((dev) => (
                <div
                  key={`${dev._id}-dup`}
                  className="flex w-50 px-5 my-10 shrink-0 items-center justify-center"
                >
                  <img
                    src={dev.logo}
                    alt={dev.name}
                    className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useTranslations } from "@/lib/i18n/client";

// export default function WhyChooseUs() {
//   const t = useTranslations();

//   const services = [
//     {
//       title: "Bespoke Advisory",
//       description: "For high-net-worth individuals and institutional investors",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: "Comprehensive Strategies",
//       description: "Acquisition and disposal strategies tailored to your goals",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: "Exclusive Access",
//       description: "Prime and off-market properties unavailable to the public",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: "Investment Analysis",
//       description:
//         "Tailored investment analysis and wealth preservation planning",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
//           />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <section className="font-didot relative py-16 md:py-26 overflow-hidden bg-linear-to-br from-[#0A1929] via-[#0C2448] to-[#1a1a2e]">
//       {/* Gradient orbs for depth */}
//       <div className="absolute top-20 left-10 w-96 h-96 bg-[#D7AB22]/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0C2448]/30 rounded-full blur-3xl"></div>

//       <div className="relative max-w-7xl mx-auto px-4">
//         <div className="items-center">
//           {/* Content Section */}
//           <div className="space-y-8 lg:pr-8">
//             {/* Section Title */}
//             <div className="space-y-4">
//               <div className="inline-block">
//                 <span className="text-[#D7AB22] text-sm font-semibold tracking-widest uppercase">
//                   Excellence in Real Estate
//                 </span>
//                 <div className="h-0.5 w-20 bg-linear-to-r from-[#D7AB22] to-transparent mt-2"></div>
//               </div>
//               <h2 className=" text-4xl md:text-5xl text-white leading-tight">
//                 Where we help you grow...
//               </h2>
//             </div>

//             {/* Main Description */}
//             <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-5xl">
//               At <span className="font-semibold">ACE Ventures</span>, we combine
//               local mastery with global perspective. We understand that real
//               estate is more than a transaction — it's an investment in
//               lifestyle, legacy, and long‑term value.
//             </p>

//             <div className="max-w-3xl md:block hidden">
//               <p className="text-gray-300 text-base leading-relaxed italic pe-10">
//                 Our approach is rooted in{" "}
//                 <span className="text-[#D7AB22] font-medium not-italic">
//                   trust, transparency, and strategic foresight
//                 </span>{" "}
//                 — guiding clients with clarity, confidence, and discretion at
//                 every stage of ownership, whether it's acquisition, disposition,
//                 leasing, or portfolio growth.
//               </p>
//             </div>

//             {/* Subheading */}
//             <div className="pt-4">
//               <h3 className="text-white text-xl font-medium mb-6">
//                 Our seasoned advisors deliver:
//               </h3>

//               {/* Services Grid - Glassmorphism Cards */}
//               <div className="grid sm:grid-cols-2 gap-4 max-w-145">
//                 {services.map((service, index) => (
//                   <div
//                     key={index}
//                     className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-3.5 hover:bg-white/5 transition-all duration-500 hover:scale-[1.01]"
//                   >
//                     {/* Icon */}
//                     <div className="flex items-center gap-4">
//                       <div className="shrink-0 w-5 h-5 flex items-center justify-center text-white group-hover:scale-103 transition-transform duration-300">
//                         {service.icon}
//                       </div>

//                       <div className="flex-1 min-w-0 text-white font-semibold text-base transition-colors duration-300">
//                         {service.title}
//                       </div>
//                     </div>
//                     <p className="text-gray-300 pt-3 text-sm">
//                       {service.description}
//                     </p>

//                     {/* Hover glow effect */}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Bottom Description */}

//             {/* CTA Button */}
//             {/* <div className="pt-4">
//               <button className="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-[#D7AB22] to-[#C29A1F] text-[#0C2448] font-semibold rounded-xl transition-all duration-300 hover:scale-[1.01]">
//                 <span>Schedule a Consultation</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2.5}
//                   stroke="currentColor"
//                   className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//                   />
//                 </svg>
//               </button>
//             </div> */}
//           </div>

//           {/* Illustration Section */}
//           <div className="md:absolute md:-right-10 md:-bottom-1">
//             <div className="absolute -top-10 -right-1 w-72 h-72 bg-[#D7AB22]/10 rounded-full blur-3xl animate-pulse"></div>

//             {/* Glow effect behind image */}
//             <img
//               src="/buildings2.png"
//               alt="Building Growth Illustration"
//               className="lg:h-125 hidden lg:block"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Custom animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0) rotate(12deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(12deg);
//           }
//         }
//         @keyframes float-delayed {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-15px);
//           }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//           animation-delay: 1s;
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { whyChooseUs } from "@/mock/whychooseus";
import { rtlLocales } from "@/lib/i18n/config";
import { Icon } from "@/components/ui/Icon";
import { useParams } from "next/navigation";

export default function WhyChooseUs() {
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : "en-gb";
  const isRTL = rtlLocales.includes(locale);
  const section =
    whyChooseUs.sectionTranslations[locale as string] ??
    whyChooseUs.sectionTranslations["en-gb"];

  return (
    <section className="relative py-16 md:py-26 overflow-hidden bg-linear-to-br from-[#0A1929] via-[#0C2448] to-[#1a1a2e]">
      {/* orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#D7AB22]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0C2448]/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Badge */}
        <span className="text-[#D7AB22] text-sm font-semibold tracking-widest uppercase">
          {section.badge}
        </span>

        <div className="h-0.5 w-20 bg-linear-to-r from-[#D7AB22] to-transparent mt-2" />

        {/* Heading */}
        <h2 className="mt-4 text-4xl md:text-5xl text-white">
          {section.heading}
        </h2>

        {/* Intro */}
        <p className="mt-6 text-gray-300 max-w-5xl">{section.intro}</p>

        {/* Highlight paragraph */}
        {section.highlight && (
          <p className="hidden md:block mt-4 italic text-gray-300 pe-10 max-w-4xl">
            {section.before}
            <span className="text-[#D7AB22] font-medium not-italic">
              {section.highlight}
            </span>
            {section.after}
          </p>
        )}

        {/* Services */}
        <h3 className="mt-10 text-white text-xl font-medium">
          {section.advisorsHeading}
        </h3>

        <div className="mt-6 grid sm:grid-cols-2 gap-4 max-w-145">
          {whyChooseUs.services.map((service) => {
            const t =
              service.translations[locale as string] ??
              service.translations["en-gb"];

            return (
              <div
                key={service.id}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-4"
              >
                <div className="flex items-center gap-4">
                  <Icon name={service.icon} className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">{t.title}</span>
                </div>
                <p className="text-gray-300 pt-3 text-sm">{t.description}</p>
              </div>
            );
          })}
        </div>

        {/* Illustration */}
        <div className="md:absolute md:-end-10 md:-bottom-1">
          <div className="absolute -top-10 -end-1 w-72 h-72 bg-[#D7AB22]/10 rounded-full blur-3xl animate-pulse"></div>

          <img
            src={whyChooseUs.illustration.src}
            alt={whyChooseUs.illustration.alt}
            className={`hidden lg:block lg:h-125 ${
              isRTL && whyChooseUs.illustration.flipOnRTL ? "scale-x-[-1]" : ""
            }`}
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}

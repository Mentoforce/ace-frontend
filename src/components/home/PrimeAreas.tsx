// "use client";

// import { useParams } from "next/navigation";
// import { useTranslations } from "@/lib/i18n/client";
// import Image from "next/image";
// import { primeAreas } from "@/mock/primeAreas";

// export default function PrimeAreas() {
//   const { locale } = useParams();
//   const t = useTranslations();

//   return (
//     <section className="px-6 py-10 bg-[#D9D2CC]/50">
//       <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:grid-rows-7">
//         {/* Title block */}
//         <div className="col-span-2 flex rounded-2xl pb-5 pt-0 md:col-span-4 md:row-span-1">
//           <h2 className="font-[Didot] text-black text-3xl md:text-6xl tracking-wide">
//             {t("home.primeAreas")}
//           </h2>
//         </div>

//         {primeAreas.map((area, index) => {
//           const content =
//             area.translations[locale as string] ?? area.translations["en-gb"];

//           const layoutMap = [
//             "md:col-span-4 md:row-span-4",
//             "md:col-span-4 md:row-span-3",
//             "md:col-span-4 md:row-span-2",
//             "md:col-span-4 md:row-span-3",
//             "md:col-span-4 md:row-span-3",
//             "md:col-span-4 md:row-span-2",
//           ];

//           return (
//             <div
//               key={area._id}
//               className={`group relative h-52 md:h-auto overflow-hidden rounded-2xl ${layoutMap[index]}`}
//             >
//               <Image
//                 src={area.image}
//                 alt={content.title}
//                 fill
//                 className="object-cover transition-transform duration-700 group-hover:scale-105"
//                 sizes="(max-width: 768px) 50vw, 33vw"
//               />

//               {/* Default gradient overlay */}
//               <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-30" />

//               {/* Hover information overlay */}
//               <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//                 <p className="px-4 text-center font-[Didot] text-white text-lg tracking-wide">
//                   {content.description}
//                 </p>
//               </div>

//               {/* Title */}
//               <div className="absolute bottom-4 left-0 right-0 text-center transition-opacity duration-300 group-hover:opacity-0">
//                 <p className="font-[Didot] text-white text-base md:text-lg tracking-wide">
//                   {content.title}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "@/lib/i18n/client";
import Image from "next/image";
import { primeAreas } from "@/mock/primeAreas";

export default function PrimeAreas() {
  const { locale } = useParams();
  const t = useTranslations();

  return (
    <section className="font-didot py-25 bg-linear-to-br from-[#F5F1ED] via-[#FAF8F5] to-[#EFE9E3]">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-12 md:grid-rows-6">
          {/* ===== Title block (inside grid) ===== */}
          <div
            className="
              col-span-2
              flex flex-col justify-center
              rounded-2xl
              md:col-span-4 md:row-span-1
            "
          >
            <div className="relative">
              <div className="flex items-center justify-center md:justify-start">
                <h2 className="text-[#0C2448] text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-center md:text-left p-2">
                  {t("home.primeAreas")}
                </h2>
              </div>

              {/* <div className="mt-3 h-1 w-40 bg-linear-to-r from-[#D7AB22] to-transparent rounded-full mx-auto" /> */}
            </div>
          </div>

          {/* ===== Cards ===== */}
          {primeAreas.map((area, index) => {
            const content =
              area.translations[locale as string] ?? area.translations["en-gb"];

            const layoutMap = [
              "md:col-span-4 md:row-span-4",
              "md:col-span-4 md:row-span-3",
              "md:col-span-4 md:row-span-2",
              "md:col-span-4 md:row-span-3",
              "md:col-span-4 md:row-span-3",
              "md:col-span-4 md:row-span-2",
            ];

            return (
              <div
                key={area._id}
                className={`
                  group relative
                  aspect-[4/5] md:aspect-auto
                  overflow-hidden rounded-2xl
                  shadow-lg hover:shadow-2xl
                  transition-all duration-700
                  ${layoutMap[index]}
                `}
              >
                {/* Image */}
                <Image
                  src={area.image}
                  alt={content.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Default overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0C2448]/80 via-[#0C2448]/30 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-[#0C2448]/70 via-black/70 to-[#0C2448]/70 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-linear-to-tr from-[#0C2448]/60 to-transparent" />
                </div>

                {/* Hover content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <div className="w-16 h-0.5 bg-[#D7AB22] mb-4 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" />
                  <p className="text-center text-white text-sm md:text-base lg:text-lg max-w-xs">
                    {content.description}
                  </p>
                  <div className="w-16 h-0.5 bg-[#D7AB22] mt-4 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" />
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                  <div className="w-12 h-1 bg-[#D7AB22] mb-3 transition-transform duration-500 group-hover:scale-x-0 origin-left" />
                  <p className=" text-white text-lg md:text-xl lg:text-2xl drop-shadow-lg">
                    {content.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "@/lib/i18n/client";
import Image from "next/image";
import { primeAreas } from "@/mock/primeAreas";

export default function PrimeAreas() {
  const { locale } = useParams();
  const t = useTranslations();

  return (
    // from-[#EFE9E3] via-[#FAF8F5] to-white
    <section className="font-montserrat py-14 md:py-25 bg-linear-to-t ">
      <div className="max-w-7xl mx-auto px-4 md:px-2">
        <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-12 md:grid-rows-6">
          {/*Title block*/}
          <div
            className="
              col-span-2
              flex flex-col justify-center
              rounded-2xl
              md:col-span-4 md:row-span-1
            "
          >
            <div className="relative">
              <h2 className="text-[#0C2448] font-didot text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-start p-2">
                {t("home.primeAreas")}
              </h2>
            </div>
          </div>

          {/* Cards*/}
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
                  aspect-4/5 md:aspect-auto
                  overflow-hidden rounded-lg
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
                  {/* <div className="w-16 h-0.5 bg-[#D7AB22] mb-4 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" /> */}
                  <p className="text-center text-white text-sm md:text-sm max-w-xs">
                    {content.description}
                  </p>
                  {/* <div className="w-16 h-0.5 bg-[#D7AB22] mt-4 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" /> */}
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                  <div className="w-12 h-1 bg-linear-to-r from-[#FCE7A5] to-[#C28A2A] rounded-full mb-3 transition-transform duration-500 group-hover:scale-x-0 origin-left" />
                  <p className=" text-white font-didot text-lg md:text-xl lg:text-2xl drop-shadow-lg">
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

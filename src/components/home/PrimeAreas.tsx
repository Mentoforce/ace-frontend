"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "@/lib/i18n/client";
import Image from "next/image";
import { primeAreas } from "@/mock/primeAreas";

export default function PrimeAreas() {
  const { locale } = useParams();
  const t = useTranslations();

  return (
    <section className="px-6 py-10 bg-[#D9D2CC]/50">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:grid-rows-7">
        {/* Title block */}
        <div className="col-span-2 flex rounded-2xl pb-5 pt-0 md:col-span-4 md:row-span-1">
          <h2 className="font-[Didot] text-black text-3xl md:text-6xl tracking-wide">
            {t("home.primeAreas")}
          </h2>
        </div>

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
              className={`group relative h-52 md:h-auto overflow-hidden rounded-2xl ${layoutMap[index]}`}
            >
              <Image
                src={area.image}
                alt={content.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Default gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-30" />

              {/* Hover information overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="px-4 text-center font-[Didot] text-white text-lg tracking-wide">
                  {content.description}
                </p>
              </div>

              {/* Title */}
              <div className="absolute bottom-4 left-0 right-0 text-center transition-opacity duration-300 group-hover:opacity-0">
                <p className="font-[Didot] text-white text-base md:text-lg tracking-wide">
                  {content.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

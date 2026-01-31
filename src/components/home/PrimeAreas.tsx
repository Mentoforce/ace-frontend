"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "@/lib/i18n/client";
import Image from "next/image";
import { primeAreas } from "@/mock/primeAreas";

export default function PrimeAreas() {
  const { locale } = useParams();
  const t = useTranslations();

  return (
    <section className="px-6 py-10 bg-[#F5F5DC]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-7">
        {/* Title block */}
        <div className="flex rounded-2xl px-9 pb-5 pt-0 md:col-span-4 md:row-span-1">
          <h2 className="text-center text-6xl font-semibold tracking-wide">
            {t("home.primeAreas")}
          </h2>
        </div>

        {primeAreas.map((area, index) => {
          const content =
            area.translations[locale as string] ?? area.translations["en-gb"];

          const layoutMap = [
            "md:col-span-4 md:row-span-4", // Image A (largest top)
            "md:col-span-4 md:row-span-3", // Image B (smaller)
            "md:col-span-4 md:row-span-2", // Image C (smallest)
            "md:col-span-4 md:row-span-3", // Image D (bigger than C)
            "md:col-span-4 md:row-span-3", // Image E (medium)
            "md:col-span-4 md:row-span-2", // Image F (hero wide)
          ];

          return (
            <div
              key={area._id}
              className={`relative h-50 py-20 overflow-hidden rounded-2xl md:h-auto ${layoutMap[index]}`}
            >
              <Image
                src={area.image}
                alt={content.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

              {/* Title */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-lg font-medium tracking-wide text-white">
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

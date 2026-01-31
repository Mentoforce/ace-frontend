"use client";

import Image from "next/image";
import { useTranslations } from "@/lib/i18n/client";
import { developers } from "@/mock/developers";

export default function Marquee() {
  const t = useTranslations();

  const items = [...developers, ...developers];

  return (
    <section className="relative w-screen overflow-hidden bg-white py-14">
      {/* Section heading */}
      <div className="mb-8 px-6 md:px-12">
        <h3 className="font-[Didot] text-center font-medium text-xl md:text-3xl tracking-wide text-black">
          {t("home.trustedDevelopers")}
        </h3>
      </div>

      {/* Moving band */}
      <div className="relative overflow-hidden bg-[#0C2448] py-8">
        {/* Gold tint overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#D7AB22]/10 via-transparent to-[#D7AB22]/10" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#D7AB22]/40" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#D7AB22]/40" />

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0C2448] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0C2448] to-transparent" />

        {/* Marquee track */}
        <div className="relative">
          <div className="flex w-max animate-marquee gap-24 px-6 md:px-12">
            {items.map((dev, index) => (
              <div
                key={`${dev._id}-${index}`}
                className="flex h-20 min-w-40 items-center justify-center opacity-80 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={dev.logo}
                  alt={dev.name}
                  width={180}
                  height={90}
                  className="max-h-14 w-auto object-contain md:max-h-16 "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

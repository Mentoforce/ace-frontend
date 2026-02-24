"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "@/lib/i18n/client";
import { developers } from "@/mock/developers";

export default function Marquee() {
  const t = useTranslations();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [repeatCount, setRepeatCount] = useState(2);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const contentWidth = contentRef.current.scrollWidth;

    if (contentWidth === 0) return;

    // Ensure content width is at least 2x container width
    const minWidth = containerWidth * 2;
    const neededRepeats = Math.ceil(minWidth / contentWidth);

    setRepeatCount(neededRepeats);
  }, []);

  return (
    <section>
      <div className="relative mx-auto w-full overflow-hidden bg-linear-to-br pb-3">
        {/* Gold hairlines */}
        {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#D7AB22]/40" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#D7AB22]/40" /> */}

        {/* Heading */}
        {/* <div className="mb-5 text-center">
          <h3 className="font-didot text-base md:text-xl tracking-wide text-[#0C2448]/90">
            {t("home.trustedDevelopers")}
          </h3>
        </div> */}

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-[#ffffff] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-[#ffffff] to-transparent" />

        {/* Marquee */}
        <div ref={containerRef} className="relative overflow-hidden">
          <div className="marquee-track">
            <div ref={contentRef} className="marquee-content">
              {Array(repeatCount)
                .fill(developers)
                .flat()
                .map((dev, i) => (
                  <div
                    key={`${dev._id}-${i}`}
                    className="flex h-16 w-40 shrink-0 items-center justify-center my-10 mb-30"
                  >
                    <img
                      src={dev.logo}
                      alt={dev.name}
                      className="max-h-full max-w-full opacity-90 transition-opacity duration-300 hover:opacity-100"
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

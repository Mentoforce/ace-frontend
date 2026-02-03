"use client";

import { useTranslations } from "@/lib/i18n/client";

export default function Tagline() {
  const t = useTranslations();
  return (
    <h1
      className="
        font-birthstone text-center lg:text-9xl text-4xl p-7 lg:my-10 my-5 
        text-[#0C2448]
        bg-[url('/q3.jpg')]
        bg-contain bg-bottom
        relative
      "
    >
      <span
        className="
          absolute inset-0
          bg-white/40
          backdrop-grayscale
        "
      />
      <span className="relative z-10">{t("home.tagline")}</span>
    </h1>
  );
}

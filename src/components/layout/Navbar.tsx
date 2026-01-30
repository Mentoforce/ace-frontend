"use client";

import Image from "next/image";
import LanguageSwitcher from "../common/LanguageSwitcher";
import { useTranslations } from "@/lib/i18n/client";

export default function Navbar() {
  const t = useTranslations();

  return (
    <nav
      className="fixed top-5 left-1/2 -translate-x-1/2 
                flex items-center justify-between 
                px-8 w-[60%] z-50 
                bg-white/35 backdrop-blur-md 
                rounded-full shadow-lg"
    >
      <Image
        src="/logo2d.png"
        height={80}
        width={80}
        alt="ACE LOGO"
        // className="ml-50"
        // className="drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
      />
      <div className="flex items-center gap-6">
        <a className="text-sm font-medium" href="#">
          {t("nav.home")}
        </a>
        <a className="text-sm font-medium" href="#">
          {t("nav.about")}
        </a>
        <a className="text-sm font-medium" href="#">
          {t("nav.careers")}
        </a>

        <LanguageSwitcher />
      </div>
    </nav>
  );
}

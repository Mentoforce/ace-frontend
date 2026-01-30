"use client";

import LanguageSwitcher from "../common/LanguageSwitcher";
import { useTranslations } from "@/lib/i18n/client";

export default function Navbar() {
  const t = useTranslations();

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b absolute w-full top-0 bg-white/60">
      <div className="text-xl font-bold">ACE</div>

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

"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LANGUAGES = [
  { code: "en-gb", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ru", label: "RU" },
  { code: "zh", label: "中文" },
  { code: "ar", label: "AR" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const pathSegments = pathname.split("/");
  const currentLocale = pathSegments[1];

  function switchLanguage(locale: string) {
    pathSegments[1] = locale;
    router.push(pathSegments.join("/"));
    setOpen(false);
  }

  return (
    <div className="relative font-didot font-medium">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium hover:opacity-80"
      >
        {currentLocale?.toUpperCase()}
        <span className="text-xs">▾</span>
      </button>

      {open && (
        <div className="absolute start-0 mt-8 w-24 rounded-lg bg-gray-300/60">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className="w-full px-2 py-1 rounded-lg  text-gray-900 text-start text-sm hover:bg-gray-100/70"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

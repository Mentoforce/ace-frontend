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
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium hover:opacity-80"
      >
        {currentLocale?.toUpperCase()}
        <span className="text-xs">▾</span>
      </button>

      {open && (
        <div className="absolute end-0 mt-2 w-28 rounded-lg border bg-white shadow-md z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className="w-full px-3 py-2 text-start text-sm hover:bg-gray-100"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

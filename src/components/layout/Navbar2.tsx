"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import LanguageSwitcher from "../common/LanguageSwitcher";
import { useTranslations } from "@/lib/i18n/client";

export default function Navbar2() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-3 left-1/2 -translate-x-1/2 
      w-[90%] md:w-[80%]
      bg-white/25 backdrop-blur-md shadow-lg
      z-50 font-didot font-medium rounded-lg backdrop-brightness-125"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-5">
        {/* LOGO VARIANTS  */}
        {/* <Image
          src="/ace wn.png"
          className="ms-2 p-3"
          height={80}
          width={80}
          alt="ACE LOGO"
        /> */}
        <Image
          src="/logo3dwllc.png"
          className="ms-2 p-3"
          height={80}
          width={80}
          alt="ACE LOGO"
        />
        {/* <Image src="/logo2d.png" height={80} width={80} alt="ACE LOGO" /> */}

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/">{t("nav.home")}</Link>
          <Link href="/about">{t("nav.about")}</Link>
          <Link href="/blog">{t("nav.blogs")}</Link>
          {/* <LanguageSwitcher /> */}
          <button className="bg-linear-to-r from-[#FCE7A5] to-[#C28A2A] text-[#0c2448] font-bold px-4 py-2 rounded-lg">
            {t("nav.cta")}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-full hover:bg-black/5 transition"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden
        transition-all duration-300 ease-out
        ${
          open
            ? "max-h-64 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="px-6 pb-5 pt-2 border-t border-black/10 flex flex-col gap-4 text-sm">
          <Link onClick={() => setOpen(false)} href="/">
            {t("nav.home")}
          </Link>
          <Link onClick={() => setOpen(false)} href="/about">
            {t("nav.about")}
          </Link>
          <Link onClick={() => setOpen(false)} href="/blog">
            {t("nav.blogs")}
          </Link>
        </div>
      </div>
    </nav>
  );
}

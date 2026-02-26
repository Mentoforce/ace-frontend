"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import LanguageSwitcher from "../common/LanguageSwitcher";
import { useTranslations } from "@/lib/i18n/client";

export default function Navbar1() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 
      bg-white/55 backdrop-blur-md
      z-50 font-didot font-medium backdrop-brightness-125 w-screen md:px-15 px-5"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between mx-auto">
        {/* LOGO VARIANTS  */}
        {/* <Image
          src="/ace wn.png"
          className="ms-2 p-3"
          height={80}
          width={80}
          alt="ACE LOGO"
        /> */}
        {/* <Image
          src="/ace2d wn.png"
          className="ms-2 p-3"
          height={80}
          width={80}
          alt="ACE LOGO"
        /> */}
        <Image
          src="/logo3dwllc.png"
          height={80}
          width={80}
          className="p-1"
          alt="ACE LOGO"
        />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link href="/">{t("nav.home")}</Link>
          <Link href="/about">{t("nav.about")}</Link>
          <Link href="/blog">{t("nav.blogs")}</Link>
          {/* <LanguageSwitcher /> */}
          {/* <button className="bg-[#0C2448] text-white px-4 py-2 rounded-lg">
            {t("nav.cta")}
          </button> */}
          <button className=" bg-linear-to-r from-[#FCE7A5] to-[#C28A2A] text-[#0c2448] font-extrabold px-4 py-2.5 rounded-lg">
            {t("nav.cta")}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          {/* <LanguageSwitcher /> */}
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

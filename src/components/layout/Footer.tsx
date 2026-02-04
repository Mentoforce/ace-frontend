"use client";

import { useTranslations } from "@/lib/i18n/client";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[url('/q5.jpg')] bg-contain bg-no-repeat bg-bottom rounded-2xl md:pt-12 overflow-hidden">
      {/* Overlay */}
      <span className="absolute inset-0 bg-white/70 backdrop-grayscale z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row gap-10 justify-around items-center font-didot font-medium px-6">
        {/* Logo + Socials */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Image
            src="/logo2d.png"
            height={180}
            width={180}
            alt="ACE LOGO"
            priority
          />

          <div className="flex gap-4 text-[#0C2448]/80">
            <IconBrandInstagram className="cursor-pointer hover:text-[#0C2448] transition" />
            <IconBrandFacebook className="cursor-pointer hover:text-[#0C2448] transition" />
            <IconBrandTwitter className="cursor-pointer hover:text-[#0C2448] transition" />
            <IconMail className="cursor-pointer hover:text-[#0C2448] transition" />
            <IconBrandWhatsapp className="cursor-pointer hover:text-[#0C2448] transition" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3 text-center text-[#0C2448] md:text-start">
          <Link href="#">{t("nav.home")}</Link>
          <Link href="#">{t("nav.about")}</Link>
          <Link href="#">{t("nav.careers")}</Link>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <input
            type="text"
            placeholder={t("footer.name")}
            className="border border-[#0C2448]/50 bg-white/60 backdrop-blur px-3 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C29A1F]"
          />
          <input
            type="email"
            placeholder={t("footer.email")}
            className="border border-[#0C2448]/50 bg-white/60 backdrop-blur px-3 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C29A1F]"
          />
          <input
            type="tel"
            placeholder="+971-5678957"
            className="border border-[#0C2448]/50 bg-white/60 backdrop-blur px-3 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C29A1F]"
          />

          <button
            type="submit"
            className="bg-[#0C2448]/90 text-white py-2 rounded-xl cursor-pointer hover:bg-[#0C2448] transition"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative mt-12 mx-auto w-fit p-4 text-center text-sm text-[#0C2448] font-didot border-t-2">
        © {year} {t("footer.copyright")}
      </div>
    </footer>
  );
}

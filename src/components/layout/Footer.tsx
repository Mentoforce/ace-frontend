"use client";

import { useTranslations } from "@/lib/i18n/client";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconPhone,
  IconPin,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[url('/q5.jpg')] bg-contain md:bg-repeat-x bg-no-repeat bg-bottom rounded-2xl md:pt-12 overflow-hidden">
      {/* Overlay */}
      <span className="absolute inset-0 bg-white/70 backdrop-grayscale z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row gap-10 justify-around items-center font-didot font-medium px-6">
        {/* Logo + Socials */}
        <div className="flex flex-col  gap-6">
          <Image
            src="/logo3dwllc.png"
            height={150}
            width={150}
            alt="ACE LOGO"
            priority
          />

          <div className="flex gap-4 text-[#0C2448]/90">
            <IconBrandInstagram className="cursor-pointer hover:text-[#0C2448] transition" />
            <IconBrandFacebook className="cursor-pointer hover:text-[#0C2448] transition" />
            <IconBrandTwitter className="cursor-pointer hover:text-[#0C2448] transition" />
            <IconMail className="cursor-pointer hover:text-[#0C2448] transition" />
            <IconBrandWhatsapp className="cursor-pointer hover:text-[#0C2448] transition" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3 text-center text-[#0C2448] md:text-start">
          <Link href="/">{t("nav.home")}</Link>
          <Link href="/about">{t("nav.about")}</Link>
          <Link href="/blog">{t("nav.blogs")}</Link>
          <Link href="#">{t("nav.careers")}</Link>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col gap-3 max-w-2xs">
          <div className="flex gap-2 items-center">
            <IconMapPin size={20} />
            <p>Reef Tower, loremipsum, Dubai, lorem, 339182</p>
          </div>
          <div className="flex gap-2 items-center">
            <IconMail size={20} />
            <p>abc@infoaceventures.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <IconPhone size={20} />
            <p>+91 8765993856</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative mt-12 mx-auto w-fit p-4 text-center text-sm text-[#0C2448] font-didot border-t-2">
        © {year} {t("footer.copyright")}
      </div>
    </footer>
  );
}

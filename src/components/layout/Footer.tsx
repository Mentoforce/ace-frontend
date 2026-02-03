"use client";
import { useTranslations } from "@/lib/i18n/client";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconMail,
  IconX,
} from "@tabler/icons-react";
import { Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className=" bg-linear-to-t from-[#EFE9E3] via-[#FAF8F5] to-white font-didot font-medium rounded-2xl flex gap-4 justify-around items-center max-w-full flex-col md:flex-row py-10">
      <div className="flex flex-col">
        <Image src="/logo2d.png" height={180} width={180} alt="ACE LOGO" />
        <div className="flex justify-around">
          <IconBrandInstagram />
          <IconBrandFacebook />
          <IconBrandTwitter />
          <IconMail />
          <IconBrandWhatsapp />
        </div>
      </div>
      {/* Desktop */}
      <div className="flex flex-col">
        <Link href="#">{t("nav.home")}</Link>
        <Link href="#">{t("nav.about")}</Link>
        <Link href="#">{t("nav.careers")}</Link>
      </div>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Name"
          className="border px-2 py-1 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="border px-2 py-1 rounded-lg"
        />
        <input
          type="telephone"
          placeholder="Phone"
          className="border px-2 py-1 rounded-lg"
        />
        <button type="submit" className="border p-2 rounded-lg">
          Submit
        </button>
      </div>
    </footer>
  );
}

"use client";

import { useTranslations } from "@/lib/i18n/client";
import { latestBlogs } from "@/mock/blogs";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function BlogSection() {
  const { locale } = useParams<{ locale: string }>();
  const t = useTranslations();
  //py-20 px-6
  return (
    <section className=" section-padding ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-4xl md:text-5xl font-didot font-semibold text-[#0C2448] tracking-tight">
            {t("home.blog")}
          </h2>
          <Link
            href={`/${locale}/blog`}
            className="text-sm font-medium border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
          >
            {t("blog.view") || "View all"}
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <MobileBlogCarousel locale={locale} />
        </div>

        {/* Desktop – EXACT 3 cards, exact design */}
        <div className="hidden md:grid grid-cols-3 gap-x-10 gap-y-20">
          {latestBlogs.map((post, index) => {
            if (index > 2) return null;

            return (
              <BlogCard
                key={post._id}
                post={post}
                index={index}
                locale={locale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

//EDITORIAL CARD
function BlogCard({ post, index, locale }: any) {
  const content = post.translations[locale] ?? post.translations["en-gb"];

  const t = useTranslations();

  return (
    <Link href={`/${locale}/blog/${post.slug}`} className="group block">
      {/* Card Frame */}
      <div className="relative bg-[#E0E0E0] rounded-lg p-4 transition-shadow duration-500 group-hover:shadow-xl">
        {/* Index */}
        <span className="absolute -top-4 -left-2 font-didot text-5xl text-[#8B6F4E]/15">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Image */}
        <div className="relative aspect-3/2 overflow-hidden rounded-lg">
          <Image
            src={post.image}
            alt={content.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className="pt-6 px-2">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-[#757575] mb-3">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#757575]" />
            <span>{post.readTime}</span>
          </div>

          <h3 className="font-didot text-2xl text-[#0C2448] leading-snug mb-3 transition-colors duration-300 group-hover:text-[#C29A1F] line-clamp-2">
            {content.title}
          </h3>

          <p className="text-sm text-[#757575] leading-relaxed line-clamp-3">
            {content.subtitle}
          </p>

          {/* <div className="mt-6 flex items-center gap-2 text-xs tracking-widest uppercase text-[#C29A1F]">
            {t("blog.read") || "READ ARTICLE"}
            <span className="h-px w-6 bg-[#C29A1F] transition-all duration-300 group-hover:w-10" />
          </div> */}
        </div>
      </div>
    </Link>
  );
}

//Mobile Carousel
function MobileBlogCarousel({ locale }: any) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const total = latestBlogs.length;

  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(next, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  return (
    <div className="max-w-sm mx-auto">
      <div
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
        className="transition-all duration-700"
      >
        <BlogCard post={latestBlogs[index]} index={index} locale={locale} />
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {latestBlogs.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              stopAutoPlay();
              setIndex(i);
              startAutoPlay();
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "bg-slate-800 w-8" : "bg-slate-300 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

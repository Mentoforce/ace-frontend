"use client";

import { useTranslations } from "@/lib/i18n/client";
import { latestBlogs } from "@/mock/blogs";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export default function BlogSection() {
  const { locale } = useParams<{ locale: string }>();
  const t = useTranslations();

  return (
    <section className="md:section-padding px-3 py-12">
      <div className="max-w-7xl mx-auto overflow-x-hidden">
        {/* Header */}
        <div className="flex justify-center items-center">
          <h2
            className="font-didot text-[#0C2448] text-center font-display mb-12 text-4xl md:text-5xl lg:text-6xl p-3.5"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
          >
            {t("home.blog")}
          </h2>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <MobileBlogCarousel locale={locale} />
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <DesktopBlogCarousel locale={locale} />
        </div>
      </div>
    </section>
  );
}

/* ========================= */
/* DESKTOP CAROUSEL */
/* ========================= */

function DesktopBlogCarousel({ locale }: any) {
  const [index, setIndex] = useState(0);
  const total = latestBlogs.length;
  const visibleCards = 3;
  const maxIndex = total - visibleCards;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  /* ---------------- Autoplay (5s) ---------------- */
  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      next();
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  return (
    <div className="" onMouseEnter={stopAutoPlay} onMouseLeave={startAutoPlay}>
      {/* Window */}
      {/* Track */}
      <div
        className="flex gap-6 justify-start pl-5 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * 16}%)`,
          width: `${(total / visibleCards) * 90}%`,
        }}
      >
        {latestBlogs.map((post, i) => (
          <div
            key={post._id}
            className="shrink-0"
            style={{ width: `${105 / total}%` }}
          >
            <BlogCard post={post} index={i} locale={locale} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-18 relative flex justify-center gap-2">
        <button
          onClick={() => {
            stopAutoPlay();
            prev();
            startAutoPlay();
          }}
          className=" -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#eeeeee]/50 flex items-center justify-center"
        >
          <IconChevronLeft size={14} />
        </button>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-[#0C2448] w-6" : "bg-gray-300 w-3"
            }`}
          />
        ))}
        {/* Left Arrow */}

        {/* Right Arrow */}
        <button
          onClick={() => {
            stopAutoPlay();
            next();
            startAutoPlay();
          }}
          className="-translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-[#eeeeee]/50 flex items-center justify-center"
        >
          <IconChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

//EDITORIAL CARD
function BlogCard({ post, index, locale }: any) {
  const content = post.translations[locale] ?? post.translations["en-gb"];
  const t = useTranslations();

  return (
    <Link href={`/${locale}/blog/${post.slug}`} className="group block">
      <div className="relative bg-[#eeeeee]/50 rounded-lg p-4 transition-shadow duration-500 group-hover:shadow-xl">
        <span className="absolute -top-4 -left-2 font-didot text-5xl text-[#E0E0E0]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative aspect-3/2 overflow-hidden rounded-lg">
          <Image
            src={post.image}
            alt={content.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>

        <div className="pt-6 px-2">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-[#212121] mb-3">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#212121]" />
            <span>{post.readTime}</span>
          </div>

          <h3 className="font-didot text-2xl text-[#0C2448] leading-snug mb-3 line-clamp-2">
            {content.title}
          </h3>

          <p className="text-sm text-[#212121] leading-relaxed line-clamp-3">
            {content.subtitle}
          </p>
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
  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(next, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  return (
    <div className="max-w-sm pl-2 mx-auto">
      <div
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
        className="transition-all duration-700"
      >
        <BlogCard post={latestBlogs[index]} index={index} locale={locale} />
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={() => {
            stopAutoPlay();
            prev();
            startAutoPlay();
          }}
          className="w-9 h-9 rounded-full bg-[#eeeeee]/50  flex items-center justify-center active:scale-95"
        >
          <IconChevronLeft size={12} />
        </button>

        {/* Dots */}
        {/* <div className="flex gap-2">
          {latestBlogs.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-[#0C2448] w-4" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div> */}

        {/* Right Arrow */}
        <button
          onClick={() => {
            stopAutoPlay();
            next();
            startAutoPlay();
          }}
          className="w-9 h-9 rounded-full bg-[#eeeeee]/50 flex items-center justify-center active:scale-95"
        >
          <IconChevronRight size={12} />
        </button>
      </div>
    </div>
  );
}

// "use client";

// import { useTranslations } from "@/lib/i18n/client";
// import { latestBlogs } from "@/mock/blogs";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// export default function BlogSection() {
//   const { locale } = useParams<{ locale: string }>();
//   const t = useTranslations();
//   //py-20 px-6
//   return (
//     <section className="section-padding">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-center items-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-didot font-semibold text-[#0C2448] tracking-tight">
//             {t("home.blog")}
//           </h2>
//           {/* <Link
//             href={`/${locale}/blog`}
//             className="text-sm font-medium border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
//           >
//             {t("blog.view") || "View all"}
//           </Link> */}
//         </div>

//         {/* Mobile */}
//         <div className="md:hidden">
//           <MobileBlogCarousel locale={locale} />
//         </div>

//         {/* Desktop – EXACT 3 cards, exact design */}
//         <div className="hidden md:grid grid-cols-3 gap-x-10 gap-y-20">
//           {latestBlogs.map((post, index) => {
//             if (index > 2) return null;

//             return (
//               <BlogCard
//                 key={post._id}
//                 post={post}
//                 index={index}
//                 locale={locale}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// //EDITORIAL CARD
// function BlogCard({ post, index, locale }: any) {
//   const content = post.translations[locale] ?? post.translations["en-gb"];

//   const t = useTranslations();

//   return (
//     <Link href={`/${locale}/blog/${post.slug}`} className="group block">
//       {/* Card Frame */}
//       <div className="relative bg-[#eeeeee]/50 rounded-lg p-4 transition-shadow duration-500 group-hover:shadow-xl">
//         {/* Index */}
//         <span className="absolute -top-4 -left-2 font-didot text-5xl text-[#E0E0E0]">
//           {String(index + 1).padStart(2, "0")}
//         </span>

//         {/* Image */}
//         <div className="relative aspect-3/2 overflow-hidden rounded-lg">
//           <Image
//             src={post.image}
//             alt={content.title}
//             fill
//             className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
//         </div>

//         {/* Content */}
//         <div className="pt-6 px-2">
//           <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-[#212121] mb-3">
//             <span>{post.date}</span>
//             <span className="w-1 h-1 rounded-full bg-[#212121]" />
//             <span>{post.readTime}</span>
//           </div>

//           <h3 className="font-didot text-2xl text-[#0C2448] leading-snug mb-3 line-clamp-2">
//             {content.title}
//           </h3>

//           <p className="text-sm text-[#212121] leading-relaxed line-clamp-3">
//             {content.subtitle}
//           </p>

//           {/* <div className="mt-6 flex items-center gap-2 text-xs tracking-widest uppercase text-[#C29A1F]">
//             {t("blog.read") || "READ ARTICLE"}
//             <span className="h-px w-6 bg-[#C29A1F] transition-all duration-300 group-hover:w-10" />
//           </div> */}
//         </div>
//       </div>
//     </Link>
//   );
// }

// //Mobile Carousel
// function MobileBlogCarousel({ locale }: any) {
//   const [index, setIndex] = useState(0);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
//   const total = latestBlogs.length;

//   const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));

//   const startAutoPlay = () => {
//     stopAutoPlay();
//     intervalRef.current = setInterval(next, 4000);
//   };

//   const stopAutoPlay = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   };

//   useEffect(() => {
//     startAutoPlay();
//     return stopAutoPlay;
//   }, []);

//   return (
//     <div className="max-w-sm mx-auto">
//       <div
//         onMouseEnter={stopAutoPlay}
//         onMouseLeave={startAutoPlay}
//         className="transition-all duration-700"
//       >
//         <BlogCard post={latestBlogs[index]} index={index} locale={locale} />
//       </div>

//       <div className="mt-8 flex justify-center gap-2">
//         {latestBlogs.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               stopAutoPlay();
//               setIndex(i);
//               startAutoPlay();
//             }}
//             className={`h-1.5 rounded-full transition-all duration-500 ${
//               i === index ? "bg-slate-800 w-8" : "bg-slate-300 w-2"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

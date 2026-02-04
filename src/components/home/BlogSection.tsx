// "use client";
// import { useTranslations } from "@/lib/i18n/client";
// import { latestBlogs } from "@/mock/blogs";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// export default function BlogSection() {
//   const { locale } = useParams();
//   const t = useTranslations();

//   return (
//     <section className="py-16 px-6 bg-linear-to-r from-[#F5F1ED] via-[#FAF8F5] to-[#EFE9E3]">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-end mb-10">
//           <h2 className="text-4xl md:text-5xl font-didot font-semibold text-[#0C2448] tracking-tight">
//             {t("home.blog")}
//           </h2>
//           <Link
//             href={`/${locale}/blog`}
//             className="text-sm font-medium border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
//           >
//             {t("blog.view") || "View all"}
//           </Link>
//         </div>

//         {/* Mobile View*/}
//         <div className="md:hidden">
//           <MobileBlogCarousel locale={locale} />
//         </div>

//         {/* Desktop View*/}
//         <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
//           {latestBlogs.slice(0, 4).map((post) => (
//             <BlogCard key={post._id} post={post} locale={locale} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function BlogCard({ post, locale }: any) {
//   const content =
//     post.translations[locale as string] ?? post.translations["en-gb"];

//   return (
//     <Link
//       href={`/${locale}/blog/${post.slug}`}
//       className="group flex flex-col bg-white overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl h-full rounded-xl"
//     >
//       <div className="relative aspect-4/3 overflow-hidden">
//         <Image
//           src={post.image}
//           alt={content.title}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//       </div>
//       <div className="p-6 flex flex-col grow bg-[#F2ECE5]/30 group-hover:bg-[#F2ECE5]/60 transition-colors duration-300">
//         <h3 className="text-lg font-medium text-slate-800 leading-snug mb-6 line-clamp-3 min-h-18">
//           {content.title}
//         </h3>
//         <div className="mt-auto">
//           <p className="text-[10px] text-gray-500 uppercase tracking-widest">
//             {post.date}
//           </p>
//           <p className="text-[10px] text-gray-400 italic mt-1">
//             {post.readTime}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// }

// function MobileBlogCarousel({ locale }: any) {
//   const [index, setIndex] = useState(0);
//   const total = latestBlogs.length;
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
//     <div className="relative w-full max-w-sm mx-auto rounded-xl">
//       {/* Active Card */}
//       <div
//         className="transition-all duration-700 ease-in-out"
//         onMouseEnter={stopAutoPlay}
//         onMouseLeave={startAutoPlay}
//       >
//         <BlogCard post={latestBlogs[index]} locale={locale} />
//       </div>

//       {/* Scrolling Indicator */}
//       <div className="mt-8 flex items-center justify-center gap-2">
//         {latestBlogs.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               stopAutoPlay();
//               setIndex(i);
//               startAutoPlay();
//             }}
//             className={`h-1.5 transition-all duration-500 rounded-full ${
//               i === index ? "bg-slate-800 w-8" : "bg-slate-300 w-2"
//             }`}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

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

  return (
    <section className="py-20 px-6 bg-[#FAF8F5]">
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
      <div className="relative bg-white/60 rounded-2xl p-4 transition-shadow duration-500 group-hover:shadow-xl">
        {/* Index */}
        <span className="absolute -top-4 -left-2 font-didot text-5xl text-[#8B6F4E]/15">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Image */}
        <div className="relative aspect-3/2 overflow-hidden rounded-xl">
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
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-slate-500 mb-3">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-400" />
            <span>{post.readTime}</span>
          </div>

          <h3 className="font-didot text-2xl text-[#0C2448] leading-snug mb-3 transition-colors duration-300 group-hover:text-[#8B6F4E] line-clamp-2">
            {content.title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {content.subtitle}
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs tracking-widest uppercase text-[#8B6F4E]">
            {t("blog.read") || "READ ARTICLE"}
            <span className="h-px w-6 bg-[#8B6F4E] transition-all duration-300 group-hover:w-10" />
          </div>
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

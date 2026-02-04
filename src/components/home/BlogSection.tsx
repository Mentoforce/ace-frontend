// "use client";
// import { useTranslations } from "@/lib/i18n/client";
// import { latestBlogs } from "@/mock/blogs";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import Link from "next/link";

// export default function BlogSection() {
//   const { locale } = useParams();
//   const t = useTranslations();

//   return (
//     <section className="py-16 px-6 ">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-end mb-10">
//           <h2 className="text-4xl md:text-5xl font-didot font-semibold text-[#0C2448] tracking-tight">
//             {t("home.blog")}
//           </h2>
//           {/* <Link
//             href={`/${locale}/blog`}
//             className="text-sm font-medium border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
//           >
//             View all
//           </Link> */}
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {latestBlogs.map((post) => {
//             const content =
//               post.translations[locale as string] ?? post.translations["en-gb"];

//             return (
//               <Link
//                 key={post._id}
//                 href={`/${locale}/blog/${post.slug}`}
//                 className="group flex flex-col bg-white/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl rounded-xl"
//               >
//                 {/* Image Aspect Ratio 4:3 roughly */}
//                 <div className="relative aspect-4/3 overflow-hidden">
//                   <Image
//                     src={post.image}
//                     alt={content.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>

//                 {/* Content Area */}
//                 <div className="p-6 flex flex-col grow bg-[#F2ECE5]/50 group-hover:bg-[#F2ECE5] transition-colors duration-300">
//                   <h3 className="text-lg md:text-xl font-medium text-slate-800 leading-snug mb-4 line-clamp-3">
//                     {content.title}
//                   </h3>

//                   <div className="mt-auto flex flex-col gap-1">
//                     <span className="text-xs text-gray-500 uppercase tracking-wider">
//                       {post.date}
//                     </span>
//                     <span className="text-xs text-gray-400 font-medium italic">
//                       {post.readTime}
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </section>
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
  const { locale } = useParams();
  const t = useTranslations();

  return (
    <section className="py-16 px-6 bg-linear-to-r from-[#F5F1ED] via-[#FAF8F5] to-[#EFE9E3]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
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

        {/* Mobile View*/}
        <div className="md:hidden">
          <MobileBlogCarousel locale={locale} />
        </div>

        {/* Desktop View*/}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {latestBlogs.slice(0, 4).map((post) => (
            <BlogCard key={post._id} post={post} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post, locale }: any) {
  const content =
    post.translations[locale as string] ?? post.translations["en-gb"];

  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group flex flex-col bg-white overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl h-full rounded-xl"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={post.image}
          alt={content.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col grow bg-[#F2ECE5]/30 group-hover:bg-[#F2ECE5]/60 transition-colors duration-300">
        <h3 className="text-lg font-medium text-slate-800 leading-snug mb-6 line-clamp-3 min-h-18">
          {content.title}
        </h3>
        <div className="mt-auto">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">
            {post.date}
          </p>
          <p className="text-[10px] text-gray-400 italic mt-1">
            {post.readTime}
          </p>
        </div>
      </div>
    </Link>
  );
}

function MobileBlogCarousel({ locale }: any) {
  const [index, setIndex] = useState(0);
  const total = latestBlogs.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
    <div className="relative w-full max-w-sm mx-auto rounded-xl">
      {/* Active Card */}
      <div
        className="transition-all duration-700 ease-in-out"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <BlogCard post={latestBlogs[index]} locale={locale} />
      </div>

      {/* Scrolling Indicator */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {latestBlogs.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              stopAutoPlay();
              setIndex(i);
              startAutoPlay();
            }}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              i === index ? "bg-slate-800 w-8" : "bg-slate-300 w-2"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

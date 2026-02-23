// "use client";

// import { latestBlogs } from "@/mock/blogs";
// import Image from "next/image";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { useTranslations } from "@/lib/i18n/client";

// export default function BlogsPage() {
//   const { locale } = useParams<{ locale: string }>();
//   const t = useTranslations();

//   return (
//     <main className="min-h-screen bg-[#FAF8F5] pt-32 pb-24">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="mb-16">
//           <h1 className="text-5xl md:text-6xl font-didot text-center justify-center font-semibold text-[#0C2448]">
//             {t("home.blog")}
//           </h1>
//         </div>

//         {/* Blogs Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {latestBlogs.map((post) => {
//             const content =
//               post.translations[locale] ?? post.translations["en-gb"];

//             return (
//               <Link
//                 key={post._id}
//                 href={`/${locale}/blog/${post.slug}`}
//                 className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="relative aspect-4/3 overflow-hidden">
//                   <Image
//                     src={post.image}
//                     alt={content.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>

//                 <div className="p-8 flex flex-col grow bg-[#F2ECE5]/40 group-hover:bg-[#F2ECE5]/70 transition-colors duration-300">
//                   <h2 className="text-xl font-medium text-[#0C2448] mb-4 line-clamp-3">
//                     {content.title}
//                   </h2>

//                   <p className="text-sm text-slate-600 mb-6 line-clamp-3">
//                     {content.subtitle}
//                   </p>

//                   <div className="mt-auto">
//                     <p className="text-[11px] uppercase tracking-widest text-slate-500">
//                       {post.date}
//                     </p>
//                     <p className="text-[11px] italic text-slate-400 mt-1">
//                       {post.readTime}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { latestBlogs } from "@/mock/blogs";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "@/lib/i18n/client";

export default function BlogsPage() {
  const { locale } = useParams<{ locale: string }>();
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[#FAF8F5] py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Header */}
        <div className="relative mb-28 text-center">
          <span className="pointer-events-none absolute -top-18 left-1/2 -translate-x-1/2 text-[140px] md:text-[200px] font-didot text-[#0C2448]/5 tracking-tight">
            {t("blog.journal") || "Journal"}
          </span>

          <p className="text-xs uppercase tracking-[0.35em] text-[#0C2448]/70 mb-6">
            {t("blog.design") || "Design Narratives"}
          </p>

          <h1 className="font-didot text-5xl md:text-7xl text-[#0C2448]">
            {t("home.blog")}
          </h1>

          <div className="mt-8 flex justify-center items-center gap-4">
            <span className="h-px w-12 bg-[#C29A1F]" />
            <span className="text-[11px] tracking-widest uppercase text-[#0C2448]/70">
              {t("blog.curate") || "Curated Stories"}
            </span>
            <span className="h-px w-12 bg-[#C29A1F]" />
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {latestBlogs.map((post, index) => {
            const content =
              post.translations[locale] ?? post.translations["en-gb"];

            return (
              <Link
                key={post._id}
                href={`/${locale}/blog/${post.slug}`}
                className="group block"
              >
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

                    <h2 className="font-didot text-2xl text-[#0C2448] leading-snug mb-3 transition-colors duration-300 group-hover:text-[#C29A1F] line-clamp-2">
                      {content.title}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
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
          })}
        </div>
      </div>
    </main>
  );
}

"use client";
import { useTranslations } from "@/lib/i18n/client";
import { latestBlogs } from "@/mock/blogs";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function BlogSection() {
  const { locale } = useParams();
  const t = useTranslations();

  return (
    <section className="py-16 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">
            {t("home.blog")}
          </h2>
          {/* <Link
            href={`/${locale}/blog`}
            className="text-sm font-medium border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
          >
            View all
          </Link> */}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestBlogs.map((post) => {
            const content =
              post.translations[locale as string] ?? post.translations["en-gb"];

            return (
              <Link
                key={post._id}
                href={`/${locale}/blog/${post.slug}`}
                className="group flex flex-col bg-white/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                {/* Image Aspect Ratio 4:3 roughly */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={content.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow bg-[#F2ECE5]/50 group-hover:bg-[#F2ECE5] transition-colors duration-300">
                  <h3 className="text-lg md:text-xl font-medium text-slate-800 leading-snug mb-4 line-clamp-3">
                    {content.title}
                  </h3>

                  <div className="mt-auto flex flex-col gap-1">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {post.date}
                    </span>
                    <span className="text-xs text-gray-400 font-medium italic">
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

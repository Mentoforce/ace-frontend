"use client";
import { latestBlogs } from "@/mock/blogs";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "@/lib/i18n/client";

export default function BlogDetailPage() {
  const params = useParams();
  const { locale, slug } = params;
  const t = useTranslations();

  const post = latestBlogs.find((p) => p.slug === slug);

  if (!post) return notFound();

  const content =
    post.translations[locale as string] ?? post.translations["en-gb"];

  return (
    <main
      className="min-h-screen section-padding"
      style={{ paddingTop: "8rem" }}
    >
      <article className="max-w-6xl mx-auto px-6">
        {/* Image Card */}
        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white">
          <div className="relative h-85 w-full">
            <Image
              src={post.image}
              alt={content.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title + Meta */}
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-didot font-semibold text-[#0C2448] leading-tight mb-4">
              {content.title}
            </h1>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{post.date}</span>
              {/* <span className="text-[#0C2448]">{post.category}</span> */}
            </div>
          </div>
        </div>

        {/* Subtitle Block */}
        {content.subtitle && (
          <div className="mt-10 text-lg md:text-xl text-[#212121] font-montserrat">
            {content.subtitle}
          </div>
        )}

        {/* Article Content */}
        <div className="mt-8">
          <div className="text-[#212121] font-montserrat leading-relaxed whitespace-pre-wrap">
            {content.content}
          </div>
        </div>

        {/* Back Link */}
        {/* <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            href={`/${locale}`}
            className="text-[#0C2448] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            {t("blog.back") || "← Back to Insights"}
          </Link>
        </div> */}
      </article>
    </main>
  );
}

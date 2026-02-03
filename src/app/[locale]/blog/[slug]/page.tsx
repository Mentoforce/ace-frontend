"use client";
import { latestBlogs } from "@/mock/blogs";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";

export default function BlogDetailPage() {
  const params = useParams();
  const { locale, slug } = params;

  console.log(slug);
  const post = latestBlogs.find((p) => p.slug === slug);

  if (!post) return notFound();

  const content =
    post.translations[locale as string] ?? post.translations["en-gb"];

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Article Header/Hero */}
      <header className="relative h-[50vh] w-full">
        <Image
          src={post.image}
          alt={content.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-didot font-bold mb-4">
              {content.title}
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90">
              {content.subtitle}
            </p>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="max-w-5xl mx-auto px-6 py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">
            {content.content}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            href={`/${locale}`}
            className="text-[#0C2448] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            ← Back to Insights
          </Link>
        </div>
      </article>
    </main>
  );
}

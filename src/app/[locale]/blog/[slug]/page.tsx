import { latestBlogs } from "@/mock/blogs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function BlogDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params;

  // Find the specific blog post
  const post = latestBlogs.find((b) => b.slug === slug);

  // If the user types a wrong URL, show 404
  if (!post) return notFound();

  const content = post.translations[locale] ?? post.translations["en-gb"];

  return (
    <main className="bg-[#FAF8F5] min-h-screen pb-20">
      {/* 1. HERO SECTION */}
      <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center">
        <Image
          src={post.image}
          alt={content.title}
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl px-6 text-center">
          <p className="text-[#D7AB22] uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Market Insights • {post.date}
          </p>
          <h1 className="text-4xl md:text-6xl font-didot text-white font-bold leading-tight">
            {content.title}
          </h1>
        </div>
      </div>

      {/* 2. ARTICLE CONTENT */}
      <article className="max-w-4xl mx-auto px-6 -mt-24 relative z-20">
        <div className="bg-white p-8 md:p-16 shadow-2xl rounded-2xl border border-gray-100">
          {/* Breadcrumbs */}
          <nav className="flex gap-2 text-xs text-gray-400 mb-8 uppercase tracking-widest">
            <Link href={`/${locale}`} className="hover:text-black">
              Home
            </Link>
            <span>/</span>
            <Link href={`/${locale}/blog`} className="hover:text-black">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900 line-clamp-1">Current Post</span>
          </nav>

          {/* Body Content */}
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 font-light italic">
              As we navigate through early 2026, the Dubai property landscape
              offers unique opportunities for landlords. Understanding the shift
              in rental yields is no longer optional—it is essential.
            </p>

            <h2 className="font-didot text-[#0C2448]">
              The Shift in High-Demand Areas
            </h2>
            <p>
              While areas like <strong>Dubai Marina</strong> and{" "}
              <strong>Downtown Dubai</strong>
              remain perennial favorites, 2025 data shows a significant surge in
              secondary neighborhoods. Landlords are seeing a 12% increase in
              renewals as residents prioritize long-term stability over annual
              moving.
            </p>

            <blockquote className="border-l-4 border-[#D7AB22] pl-6 py-2 bg-gray-50 italic text-[#0C2448]">
              "Consistency in occupancy is becoming the new metric of success
              for Dubai's premium real estate investors."
            </blockquote>

            <h2 className="font-didot text-[#0C2448]">
              Key Takeaways for 2026
            </h2>
            <ul>
              <li>
                <strong>Yield Compression:</strong> Prime areas are stabilizing.
              </li>
              <li>
                <strong>Short-Term vs Long-Term:</strong> Holiday homes are
                seeing a 15% occupancy boost.
              </li>
              <li>
                <strong>Tenant Retention:</strong> Flexible payment plans (4-6
                checks) are becoming standard.
              </li>
            </ul>

            <div className="my-10 h-[400px] relative rounded-xl overflow-hidden">
              <Image
                src="/featuredprop/p1.jpg"
                alt="Dubai Skyline"
                fill
                className="object-cover"
              />
            </div>

            <p>
              In conclusion, landlords should focus on property maintenance and
              upgraded interiors to command the highest premiums in this
              competitive market.
            </p>
          </div>

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
            <div className="flex gap-4">
              <span className="font-bold text-sm text-[#0C2448]">SHARE:</span>
              <button className="text-gray-400 hover:text-[#0C2448]">
                Twitter
              </button>
              <button className="text-gray-400 hover:text-[#0C2448]">
                LinkedIn
              </button>
            </div>
            <p className="text-sm text-gray-400 italic">{post.readTime}</p>
          </div>
        </div>
      </article>

      {/* 3. BACK BUTTON */}
      <div className="text-center mt-12">
        <Link
          href={`/${locale}`}
          className="inline-block px-8 py-3 bg-[#0C2448] text-white rounded-full hover:bg-opacity-90 transition-all"
        >
          Back to Insights
        </Link>
      </div>
    </main>
  );
}

"use client";

import { BlogCard } from "@/components/home/BlogSection";
import { latestBlogs } from "@/mock/blogs";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function NewsPage() {
  const { locale } = useParams<{ locale: string }>();

  const featured = latestBlogs[0];
  const sidebarPosts = latestBlogs.slice(1, 6);
  const gridPosts = latestBlogs.slice(1);

  return (
    <main
      className="min-h-screen section-padding"
      style={{ marginTop: "6rem" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-14">
          {/* Featured News */}
          <Link href={`/${locale}/news/${featured.slug}`}>
            <div className="grid md:grid-cols-2 gap-10 items-center mb-5 p-5 bg-[#faf8f5] rounded-2xl">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.slug}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl font-semibold text-[#212121] leading-snug mb-4">
                  {featured.translations[locale]?.title ??
                    featured.translations["en-gb"]?.title}
                </h2>

                <p className="text-[#757575] mb-6 line-clamp-3">
                  {featured.translations[locale]?.subtitle ??
                    featured.translations["en-gb"]?.subtitle}
                </p>

                <div className="flex items-center justify-between text-sm text-[#9E9E9E]">
                  <span>{featured.date}</span>
                  {/* <span>{featured.category}</span> */}
                </div>
              </div>
            </div>
          </Link>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {gridPosts.map((post, index) => {
              return (
                <BlogCard post={post} index={index} locale={locale} />

                // <Link
                //   key={post._id}
                //   href={`/${locale}/news/${post.slug}`}
                //   className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
                // >
                //   <div className="relative aspect-video">
                //     <Image
                //       src={post.image}
                //       alt={content.title}
                //       fill
                //       className="object-cover"
                //     />
                //   </div>

                //   <div className="p-5">
                //     <h3 className="text-lg font-medium text-[#212121] line-clamp-2 mb-3">
                //       {content.title}
                //     </h3>

                //     <div className="flex justify-between text-xs text-[#9E9E9E]">
                //       <span>{post.date}</span>
                //       {/* <span>{post.readTime}</span> */}
                //     </div>
                //   </div>
                // </Link>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-12">
          {/* Shortcut Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#212121]">
              Shortcut Links
            </h4>

            <div className="space-y-4">
              {sidebarPosts.map((post) => {
                const content =
                  post.translations[locale] ?? post.translations["en-gb"];

                return (
                  <Link
                    key={post._id}
                    href={`/${locale}/news/${post.slug}`}
                    className="flex gap-4 items-center bg-[#faf8f5]/90 p-3 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={post.image}
                        alt={content.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-[#212121] line-clamp-2">
                        {content.title}
                      </p>
                      <p className="text-xs text-[#9E9E9E] mt-1">{post.date}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Featured Video */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-6 text-[#212121]">
              Featured Video
            </h4>

            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/news/video-placeholder.jpg"
                alt="Featured Video"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  ▶
                </div>
              </div>
            </div>
          </div> */}
        </aside>
      </div>
    </main>
  );
}

"use client";
import { useTranslations } from "@/lib/i18n/client";
import { featuredProperties } from "@/mock/properties";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function FeaturedProperties() {
  const { locale } = useParams();
  const t = useTranslations();

  return (
    <section className="font-didot py-16 md:py-25 px-6 bg-linear-to-b from-[#EFE9E3] via-[#FAF8F5] to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-12 md:text-5xl text-4xl font-bold text-left tracking-wide text-[#0C2448]">
          {t("home.featured")}
        </h2>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <MobileCarousel locale={locale} t={t} />
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {featuredProperties.map((property) => {
            const content =
              property.translations[locale as string] ??
              property.translations["en-gb"];

            return (
              <PropertyCard
                key={property._id}
                property={property}
                content={content}
                t={t}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property, content, t }: any) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-0.5 border border-gray-100">
      {/* Image Container */}
      <div className="relative h-50 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={content.title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-300"></div>

        {/* Favorite Heart Icon */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/95 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300 hover:scale-105 z-10"
          aria-label="Add to favorites"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFavorite ? "#ffcc33" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={isFavorite ? "#f4c430" : "#0C2448"}
            className="w-5 h-5 transition-colors duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Property Name */}
        <h3 className="text-xl font-bold text-[#0C2448] mb-1 line-clamp-1 transition-colors duration-300">
          {content.title}
        </h3>

        {/* Location */}
        <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <span className="line-clamp-1">{content.location}</span>
        </p>

        {/* Price */}
        <div className="text-xl font-semibold text-[#D7AB22] mb-2">
          AED{" "}
          <span className="font-bricolage">
            {property.price?.toLocaleString()}
          </span>
        </div>

        {/* Details */}
        <div className="flex items-center gap-4 text-xs text-gray-600 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>
              {property.bedrooms} {t("property.bedrooms")}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              />
            </svg>
            <span>{property.area} sq ft</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full py-3 px-6 bg-[#0C2448]/80 text-white font-semibold rounded-lg hover:bg-[#0C2448] transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-[1.01] active:scale-[0.99]">
          {t("property.contact") || "Contact Us"}
        </button>
      </div>
    </div>
  );
}

function MobileCarousel({ locale, t }: any) {
  const [index, setIndex] = useState(0);
  const total = featuredProperties.length;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startX = useRef(0);

  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));

  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));

  /** -------- Autoplay -------- */
  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(next, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  /** -------- Swipe -------- */
  const handleTouchStart = (e: React.TouchEvent) => {
    stopAutoPlay();
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;

    if (startX.current - endX > 50) next();
    if (endX - startX.current > 50) prev();

    startAutoPlay();
  };

  const property = featuredProperties[index];
  const content =
    property.translations[locale as string] ?? property.translations["en-gb"];

  return (
    <div className="relative max-w-sm mx-auto">
      {/* Card */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="transition-all duration-500"
      >
        <PropertyCard property={property} content={content} t={t} />
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
          className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center active:scale-95"
        >
          ‹
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {featuredProperties.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-[#0C2448] w-4" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => {
            stopAutoPlay();
            next();
            startAutoPlay();
          }}
          className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center active:scale-95"
        >
          ›
        </button>
      </div>
    </div>
  );
}

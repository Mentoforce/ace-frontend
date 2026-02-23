"use client";
import { useTranslations } from "@/lib/i18n/client";
import { featuredProperties } from "@/mock/properties";
import {
  IconBath,
  IconBed,
  IconMinusVertical,
  IconRulerMeasure,
} from "@tabler/icons-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function FeaturedProperties2() {
  const { locale } = useParams();
  const t = useTranslations();

  return (
    //  from-[#EFE9E3] via-[#FAF8F5] to-white
    <section className="font-didot relative py-16 md:py-25 px-6 bg-linear-to-b ">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-12 md:text-5xl text-4xl font-bold text-start tracking-wide text-[#0C2448]">
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
        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          <DesktopCarousel locale={locale} t={t} />
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property, content, t }: any) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-0.5 border border-gray-100">
      {/* Image Container */}
      <div className="relative h-50 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={content.title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-300"></div>

        {/* Favorite Heart */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/95 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300 hover:scale-105 z-10"
          aria-label="Add to favorites"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFavorite ? "#c29a1f" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={isFavorite ? "#c29a1f" : "#0C2448"}
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
        <h3 className="text-xl font-bold text-[#0C2448] mb-1 line-clamp-1">
          {content.title}
        </h3>

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

        <div className="text-xl font-semibold text-[#D7AB22] mb-2">
          AED{" "}
          <span className="font-bricolage">
            {property.price?.toLocaleString()}
          </span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-around border border-[#E5E5E5] rounded-lg p-2 mb-4 text-xs text-[#212121]">
          <div className="flex flex-col items-center gap-2">
            <IconBed size={18} stroke={1.8} />
            <span>{property.bedrooms} Beds</span>
          </div>

          <div className="h-5 w-px bg-[#D1D5DB]" />

          <div className="flex flex-col items-center gap-2">
            <IconBath size={16} stroke={1.8} />
            <span>{property.bathrooms} Baths</span>
          </div>

          <div className="h-5 w-px bg-[#D1D5DB]" />

          <div className="flex flex-col items-center gap-2">
            <IconRulerMeasure size={16} stroke={1.8} />
            <span>{property.area} Sqft</span>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <button
          className="w-full mt-4 py-3 px-6 
                     bg-[#E6F9F0] text-[#128C7E] 
                     font-semibold rounded-lg 
                     hover:bg-[#D0F5E4] 
                     transition-all duration-300 
                     shadow-sm hover:shadow-md 
                     transform hover:scale-[1.01] active:scale-[0.99]
                     flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M12.04 2C6.58 2 2.12 6.46 2.12 11.92c0 1.93.51 3.8 1.48 5.44L2 22l4.77-1.57a9.88 9.88 0 005.27 1.54h.01c5.46 0 9.92-4.46 9.92-9.92C21.97 6.46 17.5 2 12.04 2zm5.76 14.24c-.24.67-1.41 1.28-1.94 1.35-.5.07-1.14.1-1.84-.13-.42-.13-.96-.31-1.66-.61-2.91-1.26-4.8-4.2-4.95-4.39-.15-.2-1.19-1.58-1.19-3.01 0-1.44.75-2.15 1.02-2.44.27-.3.6-.37.8-.37h.58c.18 0 .43-.07.67.5.24.57.83 2 .9 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.53-.15.15-.31.31-.13.61.17.3.76 1.26 1.64 2.04 1.12.99 2.07 1.3 2.37 1.44.3.15.48.13.65-.07.17-.2.73-.85.93-1.14.2-.3.4-.24.67-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.35.07.13.07.76-.17 1.43z" />
          </svg>
          WhatsApp
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

function DesktopCarousel({ locale, t }: any) {
  const [index, setIndex] = useState(0);
  const total = featuredProperties.length;

  const next = () => {
    if (index < total - 4) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const maxIndex = total - 4;

  return (
    <div className="relative overflow-hidden">
      {/* Track */}
      <div
        className="flex gap-6 transition-transform duration-500"
        style={{
          transform: `translateX(-${index * 25}%)`,
        }}
      >
        {featuredProperties.map((property) => {
          const content =
            property.translations[locale as string] ??
            property.translations["en-gb"];

          return (
            <div key={property._id} className="w-1/4 shrink-0">
              <PropertyCard property={property} content={content} t={t} />
            </div>
          );
        })}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        disabled={index === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-30"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        disabled={index >= maxIndex}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-30"
      >
        ›
      </button>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-[#0C2448] w-6" : "bg-gray-300 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

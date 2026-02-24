"use client";
import { useTranslations } from "@/lib/i18n/client";
import { featuredProperties } from "@/mock/properties";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  IconBed,
  IconBath,
  IconRulerMeasure,
  IconMapPin,
  IconArrowRightToArc,
  IconChevronRight,
  IconChevronLeft,
} from "@tabler/icons-react";

export default function FeaturedProperties1() {
  const { locale } = useParams();
  const t = useTranslations();

  return (
    //  from-[#EFE9E3] via-[#FAF8F5] to-white, py-16 md:py-25 px-6
    <section className="font-montserrat max-w-7xl mx-auto section-padding bg-linear-to-b ">
      <div className="">
        <h2
          className="font-didot text-[#0C2448] text-center font-display mb-12 text-4xl md:text-5xl lg:text-6xl p-3.5"
          style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
        >
          {t("home.featured")}
        </h2>

        {/* Mobile Carousel */}
        <div className="md:hidden flex justify-center">
          <MobileCarousel locale={locale} t={t} />
        </div>

        {/* Desktop Grid */}
        {/* <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
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
        </div> */}
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
    <div className="group w-72 relative bg-white rounded-lg border border-[#E5E5E5] overflow-hidden transition-all duration-300">
      {/* Image */}
      <div className="h-45 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={content.title}
          width={302}
          height={200}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
        />

        {/* Heart */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-4 w-6 h-6 flex items-center justify-center rounded-full bg-linear-to-t from-[#D4AF6126] to-[#D4AF610D] border-2 border-white/70 bg-white/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFavorite ? "#c29a1f" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={isFavorite ? "#c28a2a" : "#0C2448"}
            className="w-4 h-4"
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
      <div className="p-3 font-montserrat">
        {/* Title */}
        <h3 className="text-[18px] font-didot font-bold text-[#0c2448] mb-2 leading-tight line-clamp-1">
          {content.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-[14px] text-[#212121] mb-3">
          <IconMapPin size={14} stroke={1.8} />
          <span>{content.location}</span>
        </div>

        {/* Price */}
        <div className="text-[20px] font-didot font-bold text-[#0c2448] mb-3">
          AED {property.price?.toLocaleString()}
        </div>

        {/* Details Box */}
        <div className="flex items-center justify-around border border-[#E5E5E5] rounded-lg p-1 mb-4 text-xs text-[#212121]">
          <div className="flex flex-col items-center gap-1">
            <IconBed size={18} stroke={1.8} />
            <span>{property.bedrooms} Beds</span>
          </div>

          <div className="h-5 w-px bg-[#D1D5DB]" />

          <div className="flex flex-col items-center gap-1">
            <IconBath size={16} stroke={1.8} />
            <span>{property.bathrooms} Baths</span>
          </div>

          <div className="h-5 w-px bg-[#D1D5DB]" />

          <div className="flex flex-col items-center gap-1">
            <IconRulerMeasure size={16} stroke={1.8} />
            <span>{property.area} Sqft</span>
          </div>
        </div>

        {/* WhatsApp Button */}
        <button className="w-full font-didot py-2 rounded-lg bg-[#29A71A]/20 text-[#29A71A] text-[18px] font-semibold transition-all duration-200 hover:bg-[#29A71A] hover:text-white">
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
          className="w-9 h-9 rounded-full bg-[#eeeeee]/50  flex items-center justify-center active:scale-95"
        >
          <IconChevronLeft size={12} />
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
          className="w-9 h-9 rounded-full bg-[#eeeeee]/50 flex items-center justify-center active:scale-95"
        >
          <IconChevronRight size={12} />
        </button>
      </div>
    </div>
  );
}

function DesktopCarousel({ locale, t }: any) {
  const [index, setIndex] = useState(0);
  const total = featuredProperties.length;
  const visibleCards = 4;
  const maxIndex = total - visibleCards;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  /* ---------------- Autoplay ---------------- */
  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      next();
    }, 3000); // 3 seconds
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Track */}
      <div
        className="flex gap-6 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * 25}%)`,
        }}
      >
        {featuredProperties.map((property) => {
          const content =
            property.translations[locale as string] ??
            property.translations["en-gb"];

          return (
            <div key={property._id} className="shrink-0">
              <PropertyCard property={property} content={content} t={t} />
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="mt-18 relative flex justify-center gap-2">
        <button
          onClick={() => {
            stopAutoPlay();
            prev();
            startAutoPlay();
          }}
          className=" -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#eeeeee]/50 flex items-center justify-center"
        >
          <IconChevronLeft size={14} />
        </button>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-[#0C2448] w-6" : "bg-gray-300 w-3"
            }`}
          />
        ))}
        {/* Left Arrow */}

        {/* Right Arrow */}
        <button
          onClick={() => {
            stopAutoPlay();
            next();
            startAutoPlay();
          }}
          className="-translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-[#eeeeee]/50 flex items-center justify-center"
        >
          <IconChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

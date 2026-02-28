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
  IconChevronRight,
  IconChevronLeft,
} from "@tabler/icons-react";
import Link from "next/link";

export default function FeaturedProperties1() {
  const { locale } = useParams();
  const t = useTranslations();

  return (
    //  from-[#EFE9E3] via-[#FAF8F5] to-white, py-16 md:py-25 px-6
    <section className="font-montserrat max-w-7xl mx-auto section-padding bg-linear-to-b">
      <h2
        className="font-didot text-[#0C2448] text-center font-display mb-8 text-4xl md:text-5xl lg:text-6xl p-3.5"
        style={{ fontSize: "clamp(30px, 4.2vw, 54px)" }}
      >
        {t("home.featured")}
      </h2>

      {/* Mobile Carousel */}
      <div className="md:hidden flex justify-center">
        <MobileCarousel locale={locale} t={t} />
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:block relative">
        <DesktopCarousel locale={locale} t={t} />
      </div>
    </section>
  );
}

// function PropertyCard({ property, content, t }: any) {
//   const [isFavorite, setIsFavorite] = useState(false);

//   return (
//     <Link href={`/en-gb/property/${property.slug}`}>
//       <div className="group md:w-72 w-83 max-w-[95vh] relative bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden transition-all duration-300">
//         {/* Image */}
// <div className="h-45 max-w-[95vh] overflow-hidden">
//   <Image
//     src={property.images[0]}
//     alt={content.title}
//     width={302}
//     height={200}
//     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
//   />

//   {/* Heart */}
//   <button
//     onClick={() => setIsFavorite(!isFavorite)}
//     className="absolute top-3 right-4 w-6 h-6 flex items-center justify-center rounded-full bg-linear-to-t from-[#D4AF6126] to-[#D4AF610D] border-2 border-white/70 bg-white/50"
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill={isFavorite ? "#c29a1f" : "none"}
//       viewBox="0 0 24 24"
//       strokeWidth={2}
//       stroke={isFavorite ? "#c28a2a" : "#0C2448"}
//       className="w-4 h-4"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//       />
//     </svg>
//   </button>
// </div>

//         {/* Content */}
//         <div className="p-3 font-montserrat">
//           {/* Title */}
//           <h3 className="text-[18px] font-didot font-bold text-[#0c2448] mb-2 leading-tight line-clamp-1">
//             {content.title}
//           </h3>

//           {/* Location */}
//           <div className="flex items-center gap-2 text-[14px] text-[#212121] mb-3">
//             <IconMapPin size={14} stroke={1.8} />
//             <span>{content.location}</span>
//           </div>

//           {/* Price */}
// <div className="text-[20px] font-didot font-bold text-[#0c2448] mb-3">
//   AED {property.price?.toLocaleString()}
// </div>

// {/* Details Box */}
// <div className="flex items-center justify-around border border-[#E5E5E5] rounded-lg p-2 mb-4 text-xs text-[#212121]">
//   <div className="flex flex-col items-center gap-1">
//     <IconBed size={18} stroke={1.8} />
//     <span>{property.bedrooms} Beds</span>
//   </div>

//   <div className="h-5 w-px bg-[#E5E5E5]" />

//   <div className="flex flex-col items-center gap-1">
//     <IconBath size={16} stroke={1.8} />
//     <span>{property.bathrooms} Baths</span>
//   </div>

//   <div className="h-5 w-px bg-[#E5E5E5]" />

//   <div className="flex flex-col items-center gap-1">
//     <IconRulerMeasure size={16} stroke={1.8} />
//     <span>{property.area} Sqft</span>
//   </div>
// </div>

// {/* WhatsApp Button */}
// <button className="w-full cursor-pointer font-didot py-2 rounded-lg bg-[#29A71A]/20 text-[#29A71A] text-[18px] font-semibold transition-all duration-200 hover:bg-[#29A71A] hover:text-white">
//   WhatsApp
// </button>
//         </div>
//       </div>
//     </Link>
//   );
// }
function PropertyCard({ property, content }: any) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <Link href={`/en-gb/property/${property.slug}`}>
      <div className="group w-[320px] bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        {/* Image Section */}
        <div className="relative h-50 w-full overflow-hidden">
          <Image
            src={property.images[0]}
            alt={content.title}
            width={302}
            height={200}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
          />

          {/* Heart */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // ⬅ prevents card click
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
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
          {property.status?.toLowerCase() === "off_plan" && (
            <span className="absolute top-3 left-3 bg-[#0c2448] text-white text-sm px-4 py-1 rounded-full font-medium shadow">
              Off-Plan
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title + Developer */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-[#2c2c2c] leading-tight">
              {content.title}
            </h3>

            <Image
              src="/developers/azizi1.png"
              alt="Developer"
              width={80}
              height={35}
              className="object-contain h-8 w-auto"
            />
          </div>

          {/* Location */}
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <IconMapPin size={14} className="mr-1" />
            {content.location}
          </div>

          {/* Starting Price */}
          <div className="mb-3">
            <p className="text-sm font-montserrat text-[#0c2448]">
              Starting from{" "}
              <span className="text-lg font-didot font-bold text-[#0c2448] mb-3">
                AED {property.price?.toLocaleString()}
              </span>
            </p>
          </div>

          {/* Details Box */}
          <div className="flex items-center justify-around border border-[#E5E5E5] rounded-lg p-2 mb-4 text-xs text-[#212121]">
            <div className="flex flex-col items-center gap-1">
              <IconBed size={18} stroke={1.8} />
              <span>{property.bedrooms} Beds</span>
            </div>

            <div className="h-10 w-px bg-[#E5E5E5]" />

            <div className="flex flex-col items-center gap-1">
              <IconRulerMeasure size={16} stroke={1.8} />
              <span>{property.area} Sqft</span>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full text-center block cursor-pointer font-didot py-2 rounded-lg bg-[#29A71A]/20 text-[#29A71A] text-[18px] font-semibold transition-all duration-200 hover:bg-[#29A71A] hover:text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </Link>
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
    intervalRef.current = setInterval(next, 2500);
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
          className="w-9 h-9 rounded-full bg-[#faf8f5]/70  flex items-center justify-center active:scale-95"
        >
          <IconChevronLeft size={12} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => {
            stopAutoPlay();
            next();
            startAutoPlay();
          }}
          className="w-9 h-9 rounded-full bg-[#faf8f5]/70 flex items-center justify-center active:scale-95"
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

  const maxIndex = Math.max(total - visibleCards, 0);
  const showControls = total > visibleCards;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    if (!showControls) return;
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    if (!showControls) return;
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  /* ---------------- Autoplay ---------------- */
  const startAutoPlay = () => {
    if (!showControls) return;
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      next();
    }, 1500);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (showControls) startAutoPlay();
    return stopAutoPlay;
  }, [showControls]);

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
          transform: showControls
            ? `translateX(-${index * 25}%)`
            : "translateX(0)",
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

      {/* Controls (Only if more than 4 cards) */}
      {showControls && (
        <div className="mt-18 relative flex justify-center gap-2">
          {/* Left Arrow */}
          <button
            onClick={() => {
              stopAutoPlay();
              prev();
              startAutoPlay();
            }}
            className="w-10 h-10 rounded-full bg-[#faf8f5]/90 flex items-center justify-center"
          >
            <IconChevronLeft size={14} />
          </button>

          {/* Dots */}
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-[#0C2448] w-6" : "bg-gray-300 w-3"
              }`}
            />
          ))}

          {/* Right Arrow */}
          <button
            onClick={() => {
              stopAutoPlay();
              next();
              startAutoPlay();
            }}
            className="w-10 h-10 rounded-full bg-[#faf8f5]/90 flex items-center justify-center"
          >
            <IconChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

//--------------------------------------------------------------------------------------------------------------
// function PropertyCard({ property, content, t }: any) {
//   const [isFavorite, setIsFavorite] = useState(false);

//   return (
//     <Link href={`/en-gb/property/${property.slug}`}>
//       <div className="group md:w-80 w-full relative bg-white rounded-xl border border-[#EAEAEA] overflow-hidden transition-all duration-300 hover:shadow-lg">
//         {/* Image */}
//         <div className="relative h-56 overflow-hidden">
//           <Image
//             src={property.images[0]}
//             alt={content.title}
//             width={400}
//             height={260}
//             className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//           />

//           {/* Offplan Tag */}
//           <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-sm font-semibold text-[#4A4A4A] shadow-sm">
//             Off-Plan
//           </div>

//           {/* Heart */}
//           <button
//             onClick={() => setIsFavorite(!isFavorite)}
//             className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill={isFavorite ? "#c28a2a" : "none"}
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke={isFavorite ? "#c28a2a" : "#0C2448"}
//               className="w-4 h-4"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Content */}
//         <div className="p-5 font-montserrat">
//           {/* Title */}
//           <h3 className="text-[20px] font-semibold text-[#1f2e45] mb-1 line-clamp-1">
//             {content.title}
//           </h3>

//           {/* Location */}
//           <div className="flex items-center gap-2 text-[14px] text-[#6B7280] mb-3">
//             <IconMapPin size={15} stroke={1.8} />
//             <span>{content.location}</span>
//           </div>

//           {/* Starting Price */}
//           <div className="mb-4">
//             <span className="text-[14px] text-[#6B7280]">Starting Price </span>
//             <span className="text-[20px] font-semibold text-[#1f2e45]">
//               AED {property.price?.toLocaleString()}
//             </span>
//           </div>

//           {/* Specs Strip */}
//           <div className="flex items-center justify-between bg-[#F3F4F6] rounded-lg px-4 py-3 mb-4 text-sm text-[#4B5563]">
//             <div className="flex items-center gap-2">
//               <IconBed size={18} stroke={1.8} />
//               <span>{property.bedrooms}, Studio</span>
//             </div>

//             <div className="h-5 w-px bg-[#D1D5DB]" />

//             <div className="flex items-center gap-2">
//               <IconRulerMeasure size={18} stroke={1.8} />
//               <span>{property.area} SQ.FT.</span>
//             </div>
//           </div>

//           {/* WhatsApp Button */}
//           <button className="w-full py-3 rounded-lg bg-[#CFE3C7] text-[#2F6B2F] font-semibold text-[16px] transition-all duration-200 hover:bg-[#2F6B2F] hover:text-white">
//             WhatsApp
//           </button>
//         </div>
//       </div>
//     </Link>
//   );
// }

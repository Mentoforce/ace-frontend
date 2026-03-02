"use client";

import { featuredProperties } from "@/mock/properties";
import {
  IconBrandWhatsapp,
  IconDownload,
  IconLocation,
  IconMapPin,
  IconPhone,
  IconPower,
  IconTools,
  IconKey,
  IconChevronDown,
  IconRuler,
  IconBed,
} from "@tabler/icons-react";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function PropertyDetailPage() {
  const { slug, locale } = useParams<{ slug: string; locale: string }>();
  const property = featuredProperties.find((p) => p.slug === slug);
  if (!property) return notFound();
  const content =
    property.translations[locale] ?? property.translations["en-gb"];
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const [selectedFloorPlan, setSelectedFloorPlan] = useState<string | null>(
    null,
  );
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric", // Must be 'numeric' or '2-digit'
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };

  const currentDate = new Date();
  const formatter = new Intl.DateTimeFormat("en-IN", options);
  const istFormatted = formatter.format(currentDate);
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzdKuiv0Bdw3i2achEGkDjh2nExOYgDdwrLZBux74a-8FQBVbg6nSBd0kB8nwgDYt4p/exec";
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const formPayload = new FormData();
      formPayload.append("Name", formData.name);
      formPayload.append("Email", formData.email);
      formPayload.append("Phone", formData.phone);
      formPayload.append("Query", formData.query);
      formPayload.append("Property Name", content.title);
      formPayload.append("Property ID", property._id);
      formPayload.append("Property Link", window.location.href);
      formPayload.append("Timestamp", new Date().toLocaleString("en-IN"));

      const res = await fetch(scriptURL, {
        method: "POST",
        body: formPayload,
      });

      if (!res.ok) throw new Error("Network response was not ok");

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        query: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("likedProperties");
    if (!stored) return;

    const liked = JSON.parse(stored);
    if (liked.includes(property.slug)) {
      setIsFavorite(true);
    }
  }, [property.slug]);

  const toggleFavorite = () => {
    const stored = localStorage.getItem("likedProperties");
    let liked = stored ? JSON.parse(stored) : [];

    if (liked.includes(property.slug)) {
      liked = liked.filter((slug: string) => slug !== property.slug);
      setIsFavorite(false);
    } else {
      liked.push(property.slug);
      setIsFavorite(true);
    }

    localStorage.setItem("likedProperties", JSON.stringify(liked));
  };

  const openImage = (index: number) => setActiveIndex(index);
  const closeImage = () => setActiveIndex(null);

  const nextImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % property.images.length);
  };

  const prevImage = () => {
    if (activeIndex === null) return;
    setActiveIndex(
      (activeIndex - 1 + property.images.length) % property.images.length,
    );
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedFloorPlan(null);
      }
    };
    if (selectedFloorPlan) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [selectedFloorPlan]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (activeIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);
  const handleWhatsAppClick = () => {
    const phoneNumber = ""; // without + and spaces

    const propertyLink = `${window.location.origin}/en-gb/property/${property.slug}`;

    const message = `
Hello, I'm interested in this property:

Name: ${content.title}
Location: ${content.location}
Link: ${propertyLink}
  `;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };
  return (
    <main className="min-h-screen section-padding font-montserrat">
      <div className=" mx-auto md:px-6">
        {/* ── TOP PHOTO GRID ─────────────────────────────────────────────── */}
        {/* Layout: main image left (2/3) + vertical thumbnail strip right (1/3) */}
        <div className="grid lg:grid-cols-3 gap-3">
          {/* ================= MAIN IMAGE ================= */}
          <div
            onClick={() => openImage(0)}
            className="relative aspect-2/1 rounded-2xl overflow-hidden cursor-pointer lg:col-span-2"
          >
            <Image
              src={property.images[0]}
              alt={content.title}
              fill
              className="object-cover"
            />

            {/* Price + Brochure */}
            <div className="absolute bottom-4 left-4">
              <div className="flex gap-3">
                <div className="bg-[#0C2448] text-white px-4 py-2 rounded-lg md:text-lg text-sm font-semibold font-montserrat">
                  <span className="font-medium md:text-md text-sm">
                    Starting from
                  </span>{" "}
                  {property.currency} {property.price.toLocaleString()}
                </div>
                {property.brochure && (
                  <a
                    href={property.brochure}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white/50 text-[#0c2448] backdrop-blur-sm font-semibold px-4 py-2 rounded-lg md:text-md text-sm font-montserrat flex gap-1 items-center"
                  >
                    <IconDownload size={16} stroke={2.5} />
                    <span className="hidden md:flex">Download Brochure</span>
                  </a>
                )}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation(); // ⬅ prevents card click
                e.preventDefault();
                toggleFavorite();
              }}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-linear-to-t from-[#D4AF6126] to-[#D4AF610D] border-2 border-white/70 bg-white/50"
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

          {/* ================= DESKTOP THUMBNAILS ================= */}
          <div className="hidden lg:flex flex-col gap-3">
            {property.images.slice(1, 3).map((img, i) => {
              const realIndex = i + 1;
              const extraImages = property.images.length - 3;
              const showOverlay = property.images.length > 3 && i === 1;

              return (
                <div
                  key={i}
                  onClick={() => openImage(realIndex)}
                  className="relative rounded-xl overflow-hidden cursor-pointer aspect-2/1"
                >
                  <Image src={img} alt="" fill className="object-cover" />

                  {showOverlay && (
                    <button
                      onClick={() => openImage(3)}
                      className="absolute bottom-2 right-2 bg-white rounded-lg px-3 py-1 font-semibold text-sm"
                    >
                      +{extraImages} More
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= MOBILE THUMBNAILS ================= */}
        <div className="mt-3 flex gap-2 overflow-x-auto lg:hidden">
          {property.images.slice(1, 5).map((img, i) => {
            const realIndex = i + 1;
            const extraImages = property.images.length - 5;
            const showOverlay = property.images.length > 5 && i === 3;

            return (
              <div
                key={i}
                onClick={() => openImage(realIndex)}
                className="relative min-w-21.25 h-21.25 rounded-lg overflow-hidden shrink-0 cursor-pointer"
              >
                <Image src={img} alt="" fill className="object-cover" />

                {showOverlay && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-sm font-semibold">
                    +{extraImages} More
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── CONTENT + STICKY SIDEBAR ───────────────────────────────────── */}
        <div className="grid lg:grid-cols-3 gap-12 mt-5">
          {/* LEFT — main content */}
          <div className="lg:col-span-2">
            {/* DLD + Title */}
            {property.dldNumber && (
              <p className="text-xs text-gray-400 mb-3 flex items-center gap-2">
                <span className="inline-block bg-[#e0e0e0] text-[#212121] px-4 py-2 rounded-full text-xs">
                  DLD Permit Number:{" "}
                  <span className="font-bold">{property.dldNumber}</span>
                </span>
              </p>
            )}
            <h1 className="text-3xl font-semibold font-didot text-[#212121] mb-4 leading-snug">
              {content.title}
            </h1>
            <div className="flex flex-wrap font-montserrat items-center gap-5 text-sm text-[#212121] mb-3">
              <span className="flex items-center gap-1.5">
                <IconMapPin stroke={1} size={15} />
                {content.location}
              </span>
            </div>
            {/* <button className="text-sm text-[#1E3A8A] underline underline-offset-2 hover:text-[#0C2448] transition mb-2">
              Calculate your Mortgage Calculator
            </button> */}

            {/* Property Details Grid */}
            <h2 className="text-2xl font-bold font-didot text-[#212121] my-6">
              Property Details
            </h2>
            <div className="mt-4 bg-white rounded-2xl border border-[#e0e0e0] overflow-hidden">
              {/* <div className="px-6 py-4 border-b border-gray-100"> */}

              {/* </div> */}
              <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-y divide-[#e0e0e0] text-sm">
                {property.details?.map((item, index) => (
                  <Detail
                    key={index}
                    label={item.label}
                    value={item.value || "-"}
                  />
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mt-12 font-montserrat">
              <h2 className="text-2xl font-bold font-didot text-[#212121] mb-6">
                Property Description
              </h2>
              <p className="text-[#212121] font-sm leading-relaxed whitespace-pre-wrap">
                {content.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="mt-12 font-montserrat">
              <h2 className="text-2xl font-bold font-didot text-[#212121] mb-6">
                Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                {property.amenities.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[#212121]"
                  >
                    <svg
                      className="w-4 h-4 text-[#C29A1F] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 font-montserrat">
              <h2 className="text-2xl font-bold font-didot text-[#212121] mb-6">
                Payment Plan
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.payment_plan
                  .filter((_, index, arr) => {
                    if (arr.length === 2) {
                      return index === 0 || index === arr.length - 1;
                    }
                    return true;
                  })
                  .map((percent, i, arr) => {
                    const labels = [
                      "First Installment",
                      "Under Construction",
                      "On Handover",
                    ];
                    const icons = [IconPower, IconTools, IconKey];

                    let label = labels[i];
                    let Icon = icons[i];

                    if (arr.length === 2) {
                      if (i === 0) {
                        label = labels[0];
                        Icon = icons[0];
                      } else {
                        label = labels[2];
                        Icon = icons[2];
                      }
                    }

                    return (
                      <div
                        key={i}
                        className="relative bg-[#faf8f5] rounded-2xl p-6 h-35 flex flex-col justify-end gap-2 text-[#212121]"
                      >
                        {/* Top Right Icon */}
                        <div className="absolute top-4 right-4">
                          <Icon size={35} stroke={1.5} />
                        </div>

                        {/* Percentage */}
                        <div className="text-4xl font-semibold font-didot">
                          {percent}%
                        </div>

                        {/* Label */}
                        <div className="text-sm">{label}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <section className="mt-12 font-montserrat">
              <h2 className="text-2xl font-bold font-didot text-[#212121] mb-6">
                Floor Plans
              </h2>

              {property.unit_types.map((unit, unitIdx) => (
                <div key={unitIdx} className="mb-10">
                  <h3 className="text-lg font-didot text-[#0c2448] mb-4">
                    {unit.unit_type}
                  </h3>

                  <div className="space-y-4">
                    {unit.beds.map((bed, bedIdx) => {
                      const key = `${unitIdx}-${bedIdx}`;
                      const isOpen = openIndex === key;

                      return (
                        <div
                          key={key}
                          className="border border-[#e0e0e0] rounded-2xl overflow-hidden"
                        >
                          {/* Header */}
                          <div
                            onClick={() => setOpenIndex(isOpen ? null : key)}
                            className="cursor-pointer  p-5 flex justify-between items-center"
                          >
                            <div className="flex items-center gap-10">
                              {/* Bed */}
                              <div className="flex items-center gap-2">
                                <div className="bg-[#faf8f5] p-2 rounded-lg">
                                  <IconBed size={20} />
                                </div>
                                <span className="font-medium text-[#212121]">
                                  {bed.number}
                                </span>
                              </div>

                              {/* Size Range */}
                              <div className="flex items-center gap-2">
                                <div className="bg-[faf8f5] p-2 rounded-lg">
                                  <IconRuler size={20} />
                                </div>
                                <div>
                                  <div className="font-medium text-[#212121]">
                                    {bed.size_range}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    Size range
                                  </div>
                                </div>
                              </div>
                            </div>

                            <IconChevronDown
                              size={20}
                              className={`transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </div>

                          {/* Content */}
                          {isOpen && (
                            <div className="p-5 bg-white">
                              <div className="grid grid-cols-4 md:grid-cols-[2fr_1fr_1fr_1.2fr] font-montserrat text-sm font-medium text-[#212121] border-b border-[#e0e0e0] pb-3">
                                <div>Type</div>
                                <div>Size (Sqft)</div>
                                <div>Price (AED)</div>
                                <div>Floor Plan</div>
                              </div>

                              {bed.types.map((type, idx) => (
                                <div
                                  key={idx}
                                  className="grid grid-cols-4 md:grid-cols-[2fr_1fr_1fr_1.2fr] gap-4 items-center py-6 border-b text-[#212121] border-[#e0e0e0] last:border-none"
                                >
                                  <div className="text-[#212121]">
                                    {type.name}
                                  </div>

                                  <div className="text-[#212121]">
                                    {type.area}
                                  </div>
                                  <div className="text-[#212121]">
                                    {type.price ?? "-"}
                                  </div>
                                  <div>
                                    <Image
                                      src={type.floor_plan}
                                      alt="Floor Plan"
                                      width={120}
                                      height={80}
                                      onClick={() =>
                                        setSelectedFloorPlan(type.floor_plan)
                                      }
                                      className="rounded-lg object-cover cursor-pointer hover:scale-105 transition"
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>
            <section className="mt-12 font-montserrat">
              <h2 className="text-2xl font-bold font-didot text-[#212121] mb-6">
                Enquire Now
              </h2>
              <div className="w-full bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#C28A2A]"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#C28A2A]"
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#C28A2A]"
                    />
                  </div>

                  {/* Second Row */}
                  <textarea
                    rows={4}
                    name="query"
                    placeholder="Your Query"
                    value={formData.query}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#C28A2A] resize-none"
                  />

                  {/* Third Row - Center Button */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className=" font-didot bg-linear-to-r cursor-pointer from-[#FCE7A5] to-[#C28A2A] text-[#0c2448] font-extrabold px-4 py-2.5 rounded-lg"
                    >
                      {loading ? "Submitting" : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>

          {/* RIGHT — Sticky CTA card */}
          {/* 
            Behavior: 
            - Initially sits naturally in the flow (below the thumbnail column)
            - Becomes sticky (top-24) as you scroll down past it
            The `sticky top-24` class handles this natively in CSS.
          */}
          <div className="relative max-w-sm">
            <div className="sticky top-24 flex flex-col">
              <div className=" bg-[#0C2448] text-white p-6 rounded-2xl shadow-xl mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-full h-16 w-16 flex justify-center overflow-hidden bg-white">
                    <Image
                      src="/logo3dwllc.png"
                      alt="ACE"
                      width={60}
                      height={60}
                      className="object-contain m-2"
                    />
                  </div>
                  <div>
                    <p className=" font-didot text-lg">
                      ACE Ventures Real Estate
                    </p>
                    <p className="text-xs font-montserrat opacity-60">
                      RERA: 60432
                    </p>
                  </div>
                </div>
                <a
                  href={`tel:`}
                  className="gap-2 justify-center items-center flex w-full font-didot bg-[#0572D7] text-center py-3 rounded-lg font-bold mb-3"
                >
                  <IconPhone />
                  Call
                </a>
                <button
                  onClick={handleWhatsAppClick}
                  className="gap-2 justify-center w-full items-center flex font-didot bg-[#29A71A] text-center py-3 rounded-lg font-bold"
                >
                  <IconBrandWhatsapp />
                  WhatsApp
                </button>
              </div>
              {property.map_src && (
                <div className=" text-white rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src={property.map_src}
                    width="500"
                    height="400"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col justify-center items-center">
          {/* Close */}
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-6 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition"
          >
            ‹
          </button>

          {/* Image Container with Swipe */}
          <div
            className="relative w-[90%] max-w-7xl h-[75vh]"
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const delta = e.changedTouches[0].clientX - touchStartX.current;

              if (delta > 50) prevImage();
              if (delta < -50) nextImage();

              touchStartX.current = null;
            }}
          >
            <Image
              src={property.images[activeIndex]}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-6 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition"
          >
            ›
          </button>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 w-full flex justify-center gap-3 px-6 overflow-x-auto">
            {property.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative w-20 h-14 rounded-lg overflow-hidden cursor-pointer border-2 ${
                  activeIndex === index
                    ? "border-white"
                    : "border-transparent opacity-60"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedFloorPlan && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelectedFloorPlan(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedFloorPlan(null)}
              className="absolute -top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>

            {/* Full Image */}
            <div className="relative w-full h-[90vh]">
              <Image
                src={selectedFloorPlan}
                alt="Floor Plan"
                fill
                className="w-full h-auto rounded-2xl object-contain p-4"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3">
      <p className="text-[#212121] text-sm mb-1">{label}</p>
      <p className="font-semibold text-[#212121] text-sm">{value}</p>
    </div>
  );
}

// export function PropertyDetailPage1() {
//   const { slug, locale } = useParams<{ slug: string; locale: string }>();

//   const property = featuredProperties.find((p) => p.slug === slug);
//   if (!property) return notFound();

//   const content =
//     property.translations[locale] ?? property.translations["en-gb"];

//   return (
//     <main className=" min-h-screen section-padding">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* TOP GRID */}
//         <div className="grid lg:grid-cols-3 gap-12">
//           {/* LEFT SIDE */}
//           <div className="lg:col-span-2">
//             {/* Main Image */}
//             <div className="relative aspect-16/10 rounded-2xl overflow-hidden">
//               <Image
//                 src={property.images[0]}
//                 alt={content.title}
//                 fill
//                 className="object-cover"
//               />

//               <div className="absolute bottom-4 left-4 bg-[#0C2448] text-white px-4 py-2 rounded-full text-sm font-medium">
//                 {property.currency} {property.price.toLocaleString()}
//               </div>
//             </div>

//             {/* Thumbnail Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
//               {property.images.slice(1, 5).map((img, i) => (
//                 <div
//                   key={i}
//                   className="relative aspect-square rounded-xl overflow-hidden"
//                 >
//                   <Image src={img} alt="" fill className="object-cover" />
//                 </div>
//               ))}
//             </div>

//             {/* Title */}
//             <div className="mt-10">
//               {property.dldNumber && (
//                 <p className="text-xs text-gray-500 mb-3">
//                   DLD Permit Number: {property.dldNumber}
//                 </p>
//               )}

//               <h1 className="text-3xl font-semibold text-[#212121] mb-4">
//                 {content.title}
//               </h1>

//               <div className="flex flex-wrap gap-6 text-sm text-gray-600">
//                 <span>{content.location}</span>
//                 <span>{property.bedrooms} Beds</span>
//                 <span>{property.bathrooms} Baths</span>
//                 <span>{property.area} Sq. Ft</span>
//               </div>
//             </div>

//             {/* Property Details Grid */}
//             <div className="mt-10 bg-white rounded-2xl border border-gray-200 overflow-hidden">
//               <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-y text-sm">
//                 <Detail
//                   label="BUA"
//                   value={`${property.bua ?? property.area} sq. ft`}
//                 />
//                 <Detail label="Design" value={property.design ?? "-"} />
//                 <Detail label="Bedrooms" value={`${property.bedrooms}`} />
//                 <Detail label="Bathrooms" value={`${property.bathrooms}`} />
//                 <Detail label="Kitchen" value={property.kitchenType ?? "-"} />
//                 <Detail label="Balcony" value={property.balcony ?? "-"} />
//                 <Detail label="Garden" value={property.garden ?? "-"} />
//                 <Detail label="Handover" value={property.handover ?? "-"} />
//               </div>
//             </div>

//             {/* Description */}
//             <div className="mt-12">
//               <h2 className="text-xl font-semibold mb-4">
//                 Property Description
//               </h2>
//               <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
//                 {content.description}
//               </p>
//             </div>

//             {/* Amenities */}
//             <div className="mt-12">
//               <h2 className="text-xl font-semibold mb-6">Amenities</h2>
//               <div className="grid md:grid-cols-3 gap-4 text-sm">
//                 {property.amenities.map((item, i) => (
//                   <div key={i} className="flex items-center gap-2">
//                     <span className="text-[#C29A1F]">✓</span>
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE — Sticky CTA */}
//           <div className="relative">
//             <div className="sticky top-24 bg-[#0C2448] text-white p-6 rounded-2xl shadow-xl">
//               <div className="flex items-center gap-4 mb-6">
//                 <Image
//                   src={property.agent.image}
//                   alt={property.agent.name}
//                   width={60}
//                   height={60}
//                   className="rounded-full"
//                 />
//                 <div>
//                   <p className="font-semibold">{property.agent.name}</p>
//                   <p className="text-sm opacity-80">{property.agent.title}</p>
//                   {property.agent.rera && (
//                     <p className="text-xs opacity-60">
//                       RERA: {property.agent.rera}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <a
//                 href={`tel:${property.agent.phone}`}
//                 className="block w-full bg-[#1E3A8A] text-center py-3 rounded-lg font-medium mb-3"
//               >
//                 Call
//               </a>

//               <a
//                 href={`https://wa.me/${property.agent.whatsapp}`}
//                 target="_blank"
//                 className="block w-full bg-green-500 text-center py-3 rounded-lg font-medium"
//               >
//                 WhatsApp
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

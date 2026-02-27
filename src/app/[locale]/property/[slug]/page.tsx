"use client";

import { featuredProperties } from "@/mock/properties";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";

export function PropertyDetailPage1() {
  const { slug, locale } = useParams<{ slug: string; locale: string }>();

  const property = featuredProperties.find((p) => p.slug === slug);
  if (!property) return notFound();

  const content =
    property.translations[locale] ?? property.translations["en-gb"];

  return (
    <main className=" min-h-screen section-padding">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden">
              <Image
                src={property.images[0]}
                alt={content.title}
                fill
                className="object-cover"
              />

              <div className="absolute bottom-4 left-4 bg-[#0C2448] text-white px-4 py-2 rounded-full text-sm font-medium">
                {property.currency} {property.price.toLocaleString()}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {property.images.slice(1, 5).map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-xl overflow-hidden"
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>

            {/* Title */}
            <div className="mt-10">
              {property.dldNumber && (
                <p className="text-xs text-gray-500 mb-3">
                  DLD Permit Number: {property.dldNumber}
                </p>
              )}

              <h1 className="text-3xl font-semibold text-[#212121] mb-4">
                {content.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <span>{content.location}</span>
                <span>{property.bedrooms} Beds</span>
                <span>{property.bathrooms} Baths</span>
                <span>{property.area} Sq. Ft</span>
              </div>
            </div>

            {/* Property Details Grid */}
            <div className="mt-10 bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-y text-sm">
                <Detail
                  label="BUA"
                  value={`${property.bua ?? property.area} sq. ft`}
                />
                <Detail label="Design" value={property.design ?? "-"} />
                <Detail label="Bedrooms" value={`${property.bedrooms}`} />
                <Detail label="Bathrooms" value={`${property.bathrooms}`} />
                <Detail label="Kitchen" value={property.kitchenType ?? "-"} />
                <Detail label="Balcony" value={property.balcony ?? "-"} />
                <Detail label="Garden" value={property.garden ?? "-"} />
                <Detail label="Handover" value={property.handover ?? "-"} />
              </div>
            </div>

            {/* Description */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4">
                Property Description
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {content.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-6">Amenities</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {property.amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[#C29A1F]">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Sticky CTA */}
          <div className="relative">
            <div className="sticky top-24 bg-[#0C2448] text-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={property.agent.image}
                  alt={property.agent.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{property.agent.name}</p>
                  <p className="text-sm opacity-80">{property.agent.title}</p>
                  {property.agent.rera && (
                    <p className="text-xs opacity-60">
                      RERA: {property.agent.rera}
                    </p>
                  )}
                </div>
              </div>

              <a
                href={`tel:${property.agent.phone}`}
                className="block w-full bg-[#1E3A8A] text-center py-3 rounded-lg font-medium mb-3"
              >
                Call
              </a>

              <a
                href={`https://wa.me/${property.agent.whatsapp}`}
                target="_blank"
                className="block w-full bg-green-500 text-center py-3 rounded-lg font-medium"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function PropertyDetailPage() {
  const { slug, locale } = useParams<{ slug: string; locale: string }>();
  const property = featuredProperties.find((p) => p.slug === slug);
  if (!property) return notFound();
  const content =
    property.translations[locale] ?? property.translations["en-gb"];

  return (
    <main className="min-h-screen section-padding">
      <div className=" mx-auto px-6">
        {/* ── TOP PHOTO GRID ─────────────────────────────────────────────── */}
        {/* Layout: main image left (2/3) + vertical thumbnail strip right (1/3) */}
        <div className="grid lg:grid-cols-3 gap-3">
          {/* Main image */}
          <div className="lg:col-span-2 relative aspect-[16/10] rounded-2xl overflow-hidden">
            <Image
              src={property.images[0]}
              alt={content.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#0C2448] text-white px-4 py-2 rounded-full text-sm font-medium">
              {property.currency} {property.price.toLocaleString()}
            </div>
            {/* Share / Save icons overlay */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="bg-white/40 backdrop-blur-sm p-2 rounded-full shadow hover:bg-white transition">
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="bg-white/40 backdrop-blur-sm p-2 rounded-full shadow hover:bg-white transition">
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {/* Location badge */}
            {content.location && (
              <div className="absolute top-4 left-4 bg-white/40 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium shadow">
                {content.location}
              </div>
            )}
          </div>

          {/* Vertical thumbnail strip */}
          <div className="flex flex-col gap-3">
            {property.images.slice(1, 5).map((img, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden"
                style={{ aspectRatio: "16/10" }}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── CONTENT + STICKY SIDEBAR ───────────────────────────────────── */}
        <div className="grid lg:grid-cols-3 gap-12 mt-10">
          {/* LEFT — main content */}
          <div className="lg:col-span-2">
            {/* DLD + Title */}
            {property.dldNumber && (
              <p className="text-xs text-gray-400 mb-3 flex items-center gap-2">
                <span className="inline-block bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs">
                  DLD Permit Number: {property.dldNumber}
                </span>
              </p>
            )}
            <h1 className="text-3xl font-semibold text-[#212121] mb-4 leading-snug">
              {content.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 mb-3">
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx={12}
                    cy={9}
                    r={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {content.location}
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 22V12h6v10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {property.bedrooms} beds
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 12h16M4 6h16M4 18h7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {property.bathrooms} baths
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <rect
                    x={3}
                    y={3}
                    width={18}
                    height={18}
                    rx={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {property.area} Sq. Ft
              </span>
            </div>
            <button className="text-sm text-[#1E3A8A] underline underline-offset-2 hover:text-[#0C2448] transition mb-2">
              Calculate your Mortgage Calculator
            </button>

            {/* Property Details Grid */}
            <div className="mt-8 bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-[#212121]">
                  Property Details
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-y divide-gray-100 text-sm">
                <Detail
                  label="BUA"
                  value={`${property.bua ?? property.area} sq. ft`}
                />
                <Detail label="Design" value={property.design ?? "-"} />
                <Detail label="Bedrooms" value={`${property.bedrooms}`} />
                <Detail label="Bathrooms" value={`${property.bathrooms}`} />
                <Detail label="Kitchen" value={property.kitchenType ?? "-"} />
                <Detail label="Balcony" value={property.balcony ?? "-"} />
                <Detail label="Garden" value={property.garden ?? "-"} />
                <Detail label="Handover" value={property.handover ?? "-"} />
              </div>
            </div>

            {/* Description */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4 text-[#212121]">
                Property Description
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {content.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-6 text-[#212121]">
                Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                {property.amenities.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-700"
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
          </div>

          {/* RIGHT — Sticky CTA card */}
          {/* 
            Behavior: 
            - Initially sits naturally in the flow (below the thumbnail column)
            - Becomes sticky (top-24) as you scroll down past it
            The `sticky top-24` class handles this natively in CSS.
          */}
          <div className="relative">
            <div className="sticky top-24">
              <div className=" bg-[#0C2448] text-white p-6 rounded-2xl shadow-xl mb-10">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={property.agent.image}
                    alt={property.agent.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{property.agent.name}</p>
                    <p className="text-sm opacity-80">{property.agent.title}</p>
                    {property.agent.rera && (
                      <p className="text-xs opacity-60">
                        RERA: {property.agent.rera}
                      </p>
                    )}
                  </div>
                </div>

                <a
                  href={`tel:${property.agent.phone}`}
                  className="block w-full bg-[#1E3A8A] text-center py-3 rounded-lg font-medium mb-3"
                >
                  Call
                </a>

                <a
                  href={`https://wa.me/${property.agent.whatsapp}`}
                  target="_blank"
                  className="block w-full bg-green-500 text-center py-3 rounded-lg font-medium"
                >
                  WhatsApp
                </a>
              </div>
              <div className=" text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <p className="font-semibold">{property.agent.name}</p>
                    <p className="text-sm opacity-80">{property.agent.title}</p>
                    {property.agent.rera && (
                      <p className="text-xs opacity-60">
                        RERA: {property.agent.rera}
                      </p>
                    )}
                  </div>
                </div>

                <a
                  href={`tel:${property.agent.phone}`}
                  className="block w-full bg-[#1E3A8A] text-center py-3 rounded-lg font-medium mb-3"
                >
                  Call
                </a>

                <a
                  href={`https://wa.me/${property.agent.whatsapp}`}
                  target="_blank"
                  className="block w-full bg-green-500 text-center py-3 rounded-lg font-medium"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-5">
      <p className="text-gray-400 text-xs mb-1">{label}</p>
      <p className="font-medium text-[#212121] text-sm">{value}</p>
    </div>
  );
}

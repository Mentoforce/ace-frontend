"use client";

import { IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";

export default function ListPropertyPage() {
  return (
    <div className="font-montserrat text-[#1f2e45]">
      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden min-h-[90vh]">
        <Image
          src="/Mask group.svg" // put image in public/images
          alt="Residential Buildings"
          fill
          priority
          className="object-cover "
        />

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0c2448]/40 to-[#0c2448]/20" /> */}

        {/* Content */}
        <div className="relative z-10 h-[70vh] flex items-center justify-center px-6">
          <h1 className="font-didot text-[48px] text-center text-[#1f2e45]">
            Fast-track your Sale or Rental Process
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className=" mx-auto grid md:grid-cols-[1.2fr_1fr] gap-16">
          {/* LEFT SIDE */}
          <div>
            <h2 className="font-didot text-[36px] mb-10">
              Why list your property with us?
            </h2>

            {/* Item 1 */}
            <div className="mb-8">
              <div className="flex gap-3 items-center mb-3">
                <IconCircleCheck size={20} />
                <h3 className="font-didot text-[24px]">
                  38 years of unrivalled track record.
                </h3>
              </div>
              <p className="text-[14px] leading-7 text-[#212121]">
                We opened our doors in 1986, making us the UAE’s
                longest-established real estate company, with an unrivalled
                track record. Our reputation for consistent customer excellence
                has earned us a Google Reviews satisfaction score of 4.3/5.
              </p>
            </div>

            {/* Item 2 */}
            <div className="mb-8">
              <div className="flex gap-3 items-center mb-3">
                <IconCircleCheck size={20} />
                <h3 className="font-didot text-[24px]">
                  Highest number of leads generated in the market.
                </h3>
              </div>
              <p className="text-[14px] leading-7 text-[#212121]">
                We have an active database of over 750,000 clients, are present
                across all major property portals, and are consistently the top
                lead generator on all major UAE property portals.
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <div className="flex gap-3 items-center mb-3">
                <IconCircleCheck size={20} />
                <h3 className="font-didot text-[24px]">
                  Over 30,000 properties sold.
                </h3>
              </div>
              <p className="text-[14px] leading-7 text-[#212121]">
                Our team of more than 150 community specialists across five
                branches in Abu Dhabi and Dubai are here to help. With more than
                30,000 properties sold and over 8,500 managed properties, you
                can relax in the knowledge that your property will be in safe
                hands.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-[#0c2448] p-10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <h3 className="font-didot text-[36px] mb-6 text-white">
              Schedule a call with our property consultants
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[14px] focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[14px] focus:outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[14px] focus:outline-none"
              />

              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[14px] focus:outline-none">
                <option>Please Select</option>
              </select>

              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[14px] focus:outline-none">
                <option>Property Type</option>
              </select>

              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[14px] focus:outline-none"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-linear-to-r from-[#FCE7A5] to-[#C28A2A] text-[#0c2448] font-didot font-bold text-[16px] hover:opacity-95 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

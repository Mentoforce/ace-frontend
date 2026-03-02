"use client";

import {
  IconCircleCheck,
  IconBuildingBank,
  IconFileDescription,
  IconWorld,
  IconScale,
} from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ListPropertyPage() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwi-lc8zArFHPEVsnjcerYFquUgW7pgG5YqhjhmXRwEDmgDdFsR5mRXjddCA95svD9cuQ/exec";
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    status: "",
    location: "",
    message: "",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.location.trim() ||
      !formData.status.trim()
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
      formPayload.append("Property Type", formData.property);
      formPayload.append("Status", formData.status);
      formPayload.append("Location", formData.location);
      formPayload.append("Message", formData.message);
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
        property: "",
        status: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="font-montserrat text-[#0c2448]">
      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden min-h-[90vh]">
        <Image
          src="/listyp/wwebsite.jpg"
          alt="Residential Buildings"
          fill
          priority
          className="object-cover brightness-[0.5]"
        />

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/20" /> */}

        {/* Content */}
        <div className="relative z-10 h-[90vh] flex items-center justify-center px-6">
          <h1 className="font-didot text-white text-6xl md:text-7xl leading-tight">
            Accelerate Your Sale or Rental Today
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className=" mx-auto grid md:grid-cols-[1.2fr_1fr] gap-16">
          {/* LEFT SIDE */}
          <div>
            <h2 className="font-didot text-[36px] mb-15">
              Why list with <span className="font-bold">ACE VENTURES ?</span>
            </h2>

            {/* Item 1 */}
            <div className="mb-8">
              <div className="flex gap-3 items-center mb-3">
                <IconCircleCheck size={20} />
                <h3 className="font-didot text-[24px]">
                  Data-Led Valuation Within 24 Hours.
                </h3>
              </div>
              <p className="text-[14px] leading-7 text-[#212121]">
                We analyse live transaction data, buyer demand trends, and
                community absorption rates to determine the optimal pricing
                strategy — protecting your value while accelerating serious
                enquiries.
              </p>
            </div>

            {/* Item 2 */}
            <div className="mb-8">
              <div className="flex gap-3 items-center mb-3">
                <IconCircleCheck size={20} />
                <h3 className="font-didot text-[24px]">
                  Global Investor Reach.
                </h3>
              </div>
              <p className="text-[14px] leading-7 text-[#212121]">
                Your property is showcased across premium UAE portals,
                international investor networks, and targeted digital campaigns
                reaching qualified buyers across Europe, Asia, GCC, and beyond.
              </p>
            </div>

            {/* Item 3 */}
            <div className="mb-8">
              <div className="flex gap-3 items-center mb-3">
                <IconCircleCheck size={20} />
                <h3 className="font-didot text-[24px]">
                  Luxury Presentation Standards.
                </h3>
              </div>
              <p className="text-[14px] leading-7 text-[#212121]">
                Professional photography, cinematic video, investor-focused
                copywriting, and ROI highlighting ensure your property competes
                at the highest tier in its category.
              </p>
            </div>

            {/*Item 4 */}
            <div>
              <div className="flex gap-3 items-center mb-3">
                <IconCircleCheck size={20} />
                <h3 className="font-didot text-[24px]">
                  Seamless Transaction Management.
                </h3>
              </div>
              <p className="text-[14px] leading-7 text-[#212121]">
                From listing agreements and buyer qualification to trustee
                coordination and transfer supervision — we handle every detail
                with precision and discretion.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-[#0c2448] p-10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <h3 className="font-didot text-[32px] mb-6 text-white">
              Schedule a call with our property consultants
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[14px] focus:outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[14px] focus:outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[14px] focus:outline-none"
              />

              {/* <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[14px] focus:outline-none">
                <option>Please Select</option>
              </select> */}

              <select
                name="property"
                value={formData.property}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[14px] focus:outline-none"
              >
                <option value="">Property Type</option>
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
                <option value="Townhouse">Townhouse</option>
              </select>

              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[14px] focus:outline-none"
              >
                <option value="">Current Status</option>
                <option value="Vacant">Vacant</option>
                <option value="Rented">Rented</option>
                <option value="Off Plan">Off-Plan</option>
              </select>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Location"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[14px] focus:outline-none"
              />

              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[14px] focus:outline-none"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-linear-to-r from-[#FCE7A5] to-[#C28A2A] text-[#0c2448] font-didot font-bold text-[16px] hover:opacity-95 transition"
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* ================= LISTING JOURNEY ================= */}
      <section className="section-padding max-w-7xl mx-auto">
        <h2 className="font-didot text-[36px] mb-12">YOUR LISTING JOURNEY</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="border border-gray-200 p-8 rounded-xl bg-white shadow-sm">
            <div className="mb-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#c29a1f] text-black">
                <IconBuildingBank size={22} />
              </div>
            </div>
            <p className="text-[12px] uppercase tracking-widest text-[#212121] mb-2">
              Step 1
            </p>
            <h3 className="font-didot text-[20px] mb-3">
              Strategic Valuation Consultation
            </h3>
            <p className="text-[14px] leading-7 text-[#212121]">
              A confidential advisory session to assess pricing strategy,
              positioning and timing.
            </p>
          </div>

          {/* Step 2 */}
          <div className="border border-gray-200 p-8 rounded-xl bg-white shadow-sm">
            <div className="mb-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#c29a1f] text-black">
                <IconFileDescription size={22} />
              </div>
            </div>
            <p className="text-[12px] uppercase tracking-widest text-[#212121] mb-2">
              Step 2
            </p>
            <h3 className="font-didot text-[20px] mb-3">
              Listing & Compliance Execution
            </h3>
            <p className="text-[14px] leading-7 text-[#212121]">
              Formal documentation, regulatory alignment and launch preparation.
            </p>
          </div>

          {/* Step 3 */}
          <div className="border border-gray-200 p-8 rounded-xl bg-white shadow-sm">
            <div className="mb-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#c29a1f] text-black">
                <IconWorld size={22} />
              </div>
            </div>
            <p className="text-[12px] uppercase tracking-widest text-[#212121] mb-2">
              Step 3
            </p>
            <h3 className="font-didot text-[20px] mb-3">
              Global Marketing Activation
            </h3>
            <p className="text-[14px] leading-7 text-[#212121]">
              Targeted exposure across premium digital platforms, investor
              databases and premium portals.
            </p>
          </div>

          {/* Step 4 */}
          <div className="border border-gray-200 p-8 rounded-xl bg-white shadow-sm">
            <div className="mb-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#c29a1f] text-black">
                <IconScale size={22} />
              </div>
            </div>
            <p className="text-[12px] uppercase tracking-widest text-[#212121] mb-2">
              Step 4
            </p>
            <h3 className="font-didot text-[20px] mb-3">
              Negotiation & Deal Closure
            </h3>
            <p className="text-[14px] leading-7 text-[#212121]">
              Offer optimisation, structured negotiation, and seamless transfer
              coordination.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

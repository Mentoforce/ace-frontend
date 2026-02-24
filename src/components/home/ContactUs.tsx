"use client";

import {
  IconBlockquote,
  IconQuote,
  IconQuoteFilled,
  IconQuoteOff,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";

const ContactTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const testimonials = [
    {
      id: 1,
      text: "The team helped us gain traction with our new line of products. They are relentless in delivering great access to an enterprise-valuable value add items.  Highly recommended!!!",
      author: "Gabriel Dealo",
      position: "Chairman, CEO",
      avatar: "/api/placeholder/60/60",
    },
    {
      id: 2,
      text: "Working with this team has transformed our business operations. Their innovative solutions and dedicated support have exceeded our expectations at every turn. Highly recommended.",
      author: "Sarah Johnson",
      position: "Managing Director",
      avatar: "/api/placeholder/60/60",
    },
    {
      id: 3,
      text: "Exceptional service and outstanding results. The team's expertise and professionalism made our project a complete success. We couldn't be happier with the outcome and ongoing partnership.",
      author: "Michael Chen",
      position: "VP of Operations",
      avatar: "/api/placeholder/60/60",
    },
  ];

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="font-didot text-white mx-auto relative mt-20 mb-30 md:mt-50">
      <div>
        <div
          className="
        flex flex-col md:flex-row 
        bg-[#D2B48C]/80 
        justify-center 
        gap-10 md:gap-48 
        items-center 
        overflow-visible 
        py-16 md:h-120 px-5
      "
        >
          {/* Contact Card */}
          <div
            className="
          w-full max-w-md md:w-120 
          bg-[#FAF8F5]
          md:h-150 
          relative z-20 
          shadow-2xl 
          flex items-center 
          rounded-lg mb-5 md:mb-0
        "
          >
            <div className="p-6 md:p-10 text-[#0c2448] w-full">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
                Contact Us
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b outline-none py-2 border-[#0c2448]/40 focus:border-[#0c2448]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b outline-none py-2 border-[#0c2448]/40 focus:border-[#0c2448]"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b outline-none py-2 border-[#0c2448]/40 focus:border-[#0c2448]"
                />

                <textarea
                  name="message"
                  rows={3}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b outline-none py-2 border-[#0c2448]/40 focus:border-[#0c2448]"
                />

                <button
                  type="submit"
                  className="mt-6 px-6 py-3 bg-[#0C2448] rounded-lg text-white text-sm font-semibold hover:scale-105 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="relative w-full max-w-md md:h-120 flex items-center justify-center">
            <div
              className="
            relative 
            w-full 
            text-white 
            transition-all duration-500 
            bg-black/20 
            rounded-lg 
            p-6 md:p-10
          "
            >
              <div className="absolute -top-8 -left-4 md:-top-10 md:-left-8">
                <IconQuoteFilled size={60} className="rotate-180 md:size-20" />
              </div>

              <p className="text-sm md:text-base leading-relaxed">
                {testimonials[currentTestimonial].text}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20" />
                  <div>
                    <h4 className="text-base md:text-lg">
                      {testimonials[currentTestimonial].author}
                    </h4>
                    <p className="text-xs md:text-sm opacity-70">
                      {testimonials[currentTestimonial].position}
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <button
                    onClick={handlePrevious}
                    className="w-8 h-8 md:w-10 md:h-10 bg-black/20 flex items-center justify-center hover:bg-black/30 transition rounded-l-lg"
                  >
                    ←
                  </button>

                  <button
                    onClick={handleNext}
                    className="w-8 h-8 md:w-10 md:h-10 bg-black/20 flex items-center justify-center hover:bg-black/30 transition rounded-r-lg"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTestimonials;

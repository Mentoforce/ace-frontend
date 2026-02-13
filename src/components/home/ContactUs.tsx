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
      text: "Working with this team has transformed our business operations. Their innovative solutions and dedicated support have exceeded our expectations at every turn. Highly recommended for anyone looking to scale.",
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
    <section className="font-didot text-white h-150 mx-auto relative mt-50">
      <div>
        <div className="flex bg-[#D2B48C] justify-center gap-48 items-center overflow-visible h-120">
          <div className="w-120 bg-[#FAF8F5] h-150 relative z-20 shadow-2xl flex items-center rounded-xl">
            <div className="p-10 text-[#0c2448]">
              {/* <p className="uppercase tracking-widest text-xs font-semibold mb-2">
                We are always ready
              </p> */}

              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b  outline-none py-2  border-[#0c2448]/40 focus:border-[#0c2448] "
                />
                {/* border-[#0c2448]/40 focus:border-[#0c2448] */}

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b  outline-none py-2 border-[#0c2448]/40 focus:border-[#0c2448] "
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b  outline-none py-2 border-[#0c2448]/40 focus:border-[#0c2448]  "
                />

                <textarea
                  name="message"
                  rows={3}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b  outline-none py-2  border-[#0c2448]/40 focus:border-[#0c2448] "
                />

                <button
                  type="submit"
                  className="mt-6 px-6 py-3  bg-[#0C2448] rounded-lg text-white text-sm font-semibold hover:scale-105 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="relative h-120 flex items-center justify-center">
            {/* Glass Card */}

            <div className="relative max-w-lg text-white transition-all duration-500 bg-black/20 rounded-2xl p-10 ">
              <div className="absolute -top-10 -left-8">
                <IconQuoteFilled size={80} className="rotate-180" />
              </div>
              <p className="text-base leading-relaxed">
                {testimonials[currentTestimonial].text}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20" />
                  <div>
                    <h4 className=" text-lg">
                      {testimonials[currentTestimonial].author}
                    </h4>
                    <p className="text-sm opacity-70">
                      {testimonials[currentTestimonial].position}
                    </p>
                  </div>
                </div>
                <div className="flex me-5">
                  <button
                    onClick={handlePrevious}
                    className="w-10 h-10 bg-black/20 flex items-center justify-center hover:bg-black/30 transition rounded-l-lg"
                  >
                    ←
                  </button>

                  <button
                    onClick={handleNext}
                    className="w-10 h-10 flex bg-black/20 items-center justify-center hover:bg-black/30 transition rounded-r-lg"
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

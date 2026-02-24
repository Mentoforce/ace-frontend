"use client";

import { IconQuoteFilled } from "@tabler/icons-react";
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
  };

  return (
    <section className="font-didot text-[#0C2448] h-150 mx-auto relative mt-50">
      <div>
        <div
          className="flex justify-center gap-48 items-center overflow-visible h-120 bg-transparent backdrop-blur-lg border border-[#0C2448]/30
                      shadow-[inset_0_20px_220px_rgba(12,36,72,0.5)]
"
        >
          {/* Contact Card */}
          <div
            className="w-120 h-150 relative z-20 flex items-center rounded-xl
                       bg-white backdrop-blur-lg border border-[#C29A1F]/30
                       shadow-[inset_0_8px_80px_rgba(194,154,31,0.25)]"
          >
            <div className="p-10 text-[#0C2448]">
              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b outline-none py-2
                             border-[#0C2448]/30 focus:border-[#C29A1F]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b outline-none py-2
                             border-[#0C2448]/30 focus:border-[#C29A1F]"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b outline-none py-2
                             border-[#0C2448]/30 focus:border-[#C29A1F]"
                />

                <textarea
                  name="message"
                  rows={3}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b outline-none py-2
                             border-[#0C2448]/30 focus:border-[#C29A1F]"
                />

                <button
                  type="submit"
                  className="mt-6 px-6 py-3 rounded-lg text-white text-sm font-semibold
                             bg-[#0C2448] hover:bg-[#0C2448]/90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="relative h-120 flex items-center justify-center ">
            <div
              className="relative max-w-lg transition-all duration-500
                         bg-white/60 backdrop-blur-lg
                         border 
                         rounded-2xl p-10 border-[#0C2448]/30
                      shadow-[inset_0_20px_120px_rgba(12,36,72,0.25)]"
            >
              <div className="absolute -top-10 -left-8 text-[#C29A1F]">
                <IconQuoteFilled size={80} className="rotate-180 " />
              </div>

              <p className="text-base leading-relaxed text-[#0C2448]">
                {testimonials[currentTestimonial].text}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C29A1F]/20" />
                  <div>
                    <h4 className="text-lg text-[#0C2448]">
                      {testimonials[currentTestimonial].author}
                    </h4>
                    <p className="text-sm text-[#0C2448]/60">
                      {testimonials[currentTestimonial].position}
                    </p>
                  </div>
                </div>

                <div className="flex me-5">
                  <button
                    onClick={handlePrevious}
                    className="w-10 h-10 bg-[#0C2448]/5 flex items-center justify-center
                               hover:bg-[#0C2448]/10 transition rounded-l-lg text-[#0C2448]"
                  >
                    ←
                  </button>

                  <button
                    onClick={handleNext}
                    className="w-10 h-10 bg-[#0C2448]/5 flex items-center justify-center
                               hover:bg-[#0C2448]/10 transition rounded-r-lg text-[#0C2448]"
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

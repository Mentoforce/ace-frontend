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
      avatar: "/testimonials/test1.jpg",
    },
    {
      id: 2,
      text: "Working with this team has transformed our business operations. Their innovative solutions and dedicated support have exceeded our expectations at every turn. Highly recommended for anyone looking to scale.",
      author: "Sarah Johnson",
      position: "Managing Director",
      avatar: "/testimonials/test2.jpg",
    },
    {
      id: 3,
      text: "Exceptional service and outstanding results. The team's expertise and professionalism made our project a complete success. We couldn't be happier with the outcome and ongoing partnership.",
      author: "Michael Chen",
      position: "VP of Operations",
      avatar: "/testimonials/test3.jpg",
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
    <section className="font-didot text-white h-150 mx-auto relative mt-50">
      <div>
        <div className="flex bg-[#0C2448] justify-center gap-48 items-center overflow-visible h-120">
          {/* Contact Card - GOLD */}
          <div className="w-120 bg-[#C29A1F] h-150 relative z-20 shadow-2xl flex items-center rounded-xl">
            <div className="p-10 text-[#0C2448]">
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
                  className="w-full bg-transparent border-b outline-none py-2 border-[#0C2448]/60 focus:border-[#0C2448]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b outline-none py-2 border-[#0C2448]/60 focus:border-[#0C2448]"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b outline-none py-2 border-[#0C2448]/60 focus:border-[#0C2448]"
                />

                <textarea
                  name="message"
                  rows={3}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b outline-none py-2 border-[#0C2448]/60 focus:border-[#0C2448]"
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

          {/* Testimonial Glass Card */}
          <div className="relative h-120 flex items-center justify-center">
            <div className="relative max-w-lg text-white transition-all duration-500 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10">
              <div className="absolute -top-10 -left-8">
                <IconQuoteFilled size={80} className="rotate-180" />
              </div>
              <p className="text-base leading-relaxed">
                {testimonials[currentTestimonial].text}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C29A1F]/40" />
                  <div>
                    <h4 className="text-lg">
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
                    className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white/20 transition rounded-l-lg"
                  >
                    ←
                  </button>

                  <button
                    onClick={handleNext}
                    className="w-10 h-10 flex bg-white/10 items-center justify-center hover:bg-white/20 transition rounded-r-lg"
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

export const ContactTestimonials1 = () => {
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
      text: "The team helped us gain traction with our new line of products. They are relentless in delivering great access to an enterprise-valuable value add items.  Highly recommended. Must try their services!!!",
      author: "Gabriel Dealo",
      position: "Chairman, CEO",
      avatar: "/testimonials/test1.jpg",
    },
    {
      id: 2,
      text: "Working with this team has transformed our business operations. Their innovative solutions and dedicated support have exceeded our expectations at every turn. Highly recommended for anyone looking to scale.",
      author: "Sarah Johnson",
      position: "Managing Director",
      avatar: "/testimonials/test2.jpg",
    },
    {
      id: 3,
      text: "Exceptional service and outstanding results. The team's expertise and professionalism made our project a complete success. We couldn't be happier with the outcome and ongoing partnership.",
      author: "Michael Chen",
      position: "VP of Operations",
      avatar: "/testimonials/test3.jpg",
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
    <section className="font-montserrat text-white mx-auto relative md:mb-30">
      <div>
        <div className="flex flex-col md:flex-row bg-[#eeeeee] md:bg-[#eeeeee] justify-center gap-20 md:gap-48 items-center overflow-visible py-16 md:h-120 px-5">
          {/* Contact Card - GOLD */}
          <div className="w-full max-w-md md:w-120 bg-[#0C2448] md:h-140 relative z-20 shadow-2xl flex items-center rounded-lg mb-0">
            <div className="p-6 md:py-0 md:h-130 md:px-10 text-[#ffffff] w-full flex flex-col justify-evenly">
              {/* <p className="uppercase tracking-widest text-xs font-semibold mb-2">
                We are always ready
              </p> */}

              <h2
                className=" text-[#ffffff] leading-tight text-4xl font-didot md:mb-0 mb-8"
                style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
              >
                Contact Us
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b outline-none py-2 border-[#ffffff]/60 focus:border-[#0C2448]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b outline-none py-2 border-[#ffffff]/60 focus:border-[#ffffff]"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b outline-none py-2 border-[#ffffff]/60 focus:border-[#ffffff]"
                />

                <textarea
                  name="message"
                  rows={3}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b outline-none py-2 border-[#ffffff]/60 focus:border-[#ffffff]"
                />

                <button
                  type="submit"
                  className="font-didot bg-linear-to-r from-[#FCE7A5] to-[#C28A2A] text-[#0c2448] font-extrabold px-4 py-2.5 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Testimonial Glass Card */}
          <div className="relative w-full max-w-lg md:h-120 flex items-center justify-center">
            <div className="relative w-full text-[#212121] transition-all duration-500 bg-[#0c2448]/10 backdrop-blur-lg border border-white/20 rounded-2xl md:p-10 p-6">
              <div className="absolute -top-10 -left-4 md:-left-8">
                <IconQuoteFilled
                  size={70}
                  className="text-[#0c2848] rotate-180"
                />
              </div>
              <p className="text-sm leading-relaxed mt-3 md:mt-0">
                {testimonials[currentTestimonial].text}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    className="rounded-full h-15"
                  />
                  <div>
                    <h4 className="text-lg font-didot">
                      {testimonials[currentTestimonial].author}
                    </h4>
                    {/* <p className="text-xs opacity-70">
                      {testimonials[currentTestimonial].position}
                    </p> */}
                  </div>
                </div>

                <div className="flex me-5">
                  <button
                    onClick={handlePrevious}
                    className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white/20 transition rounded-l-lg"
                  >
                    ←
                  </button>

                  <button
                    onClick={handleNext}
                    className="w-10 h-10 flex bg-white/10 items-center justify-center hover:bg-white/20 transition rounded-r-lg"
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

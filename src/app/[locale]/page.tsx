import BlogSection from "@/components/home/BlogSection";
import ContactTestimonials from "@/components/home/Contact";
import Contact from "@/components/home/ContactUs";
import Testimoials from "@/components/home/Testimonials";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import HeroVideo from "@/components/home/HeroVideo";
import DevelopersMarquee from "@/components/home/Marquee1";
import PrimeAreas from "@/components/home/PrimeAreas";
import Tagline from "@/components/home/Tagline";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Marquee from "@/components/home/Marquee1";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <FeaturedProperties />
      <Tagline />

      <PrimeAreas />
      {/* <WhyChooseUs /> */}
      <BlogSection />
      <Marquee />
      {/* <DevelopersMarquee /> */}
      <ContactTestimonials />
      <Testimoials />
      <Contact />
    </>
  );
}

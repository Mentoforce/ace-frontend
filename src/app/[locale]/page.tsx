import BlogSection from "@/components/home/BlogSection";
import ContactTestimonials from "@/components/home/Contact";
import Contact from "@/components/home/ContactUs";
import Testimoials, {
  ContactTestimonials1,
} from "@/components/home/Testimonials";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import HeroVideo from "@/components/home/HeroVideo";
import DevelopersMarquee from "@/components/home/Marquee1";
import PrimeAreas from "@/components/home/PrimeAreas";
import Tagline from "@/components/home/Tagline";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Marquee from "@/components/home/Marquee1";
import FeaturedProperties1 from "@/components/home/FeaturedProperties1";
import FeaturedProperties2 from "@/components/home/FeaturedProperties2";
import WhyChooseACE from "@/components/home/WhyChooseUs1";
import PopularDubaiAreas from "@/components/home/PopularDubaiAreas";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      {/* <FeaturedProperties /> */}
      <FeaturedProperties1 />
      {/* <FeaturedProperties2 /> */}
      {/* <Tagline /> */}

      <PrimeAreas />
      <WhyChooseACE />

      {/* <WhyChooseUs /> */}
      <BlogSection />
      <PopularDubaiAreas />
      <Marquee />
      {/* <DevelopersMarquee /> */}
      {/* <ContactTestimonials /> */}
      {/* <Testimoials /> */}
      <ContactTestimonials1 />
      {/* <Contact /> */}
    </>
  );
}

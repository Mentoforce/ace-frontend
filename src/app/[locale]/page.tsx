import BlogSection from "@/components/home/BlogSection";

import Testimoials, {
  ContactTestimonials1,
} from "@/components/home/Testimonials";
import HeroVideo from "@/components/home/HeroVideo";
import DevelopersMarquee from "@/components/home/Marquee1";
import PrimeAreas from "@/components/home/PrimeAreas";
import Tagline from "@/components/home/Tagline";

import Marquee from "@/components/home/Marquee1";
import FeaturedProperties1 from "@/components/home/FeaturedProperties1";
import WhyChooseACE from "@/components/home/WhyChooseUs1";
import PopularDubaiAreas from "@/components/home/PopularDubaiAreas";
import PopularDubaiAreas1 from "@/components/home/PopularDubaiAreas1";
import StickyCTA from "@/components/home/StickyCTA";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      {/* <FeaturedProperties /> */}
      <FeaturedProperties1 />
      {/* <FeaturedProperties2 /> */}

      <PrimeAreas />
      <Marquee />

      <WhyChooseACE />
      {/* <Tagline /> */}
      {/* <WhyChooseUs /> */}
      <PopularDubaiAreas />
      {/* <PopularDubaiAreas1 /> */}
      <BlogSection />

      {/* <Marquee /> */}
      {/* <DevelopersMarquee /> */}
      {/* <ContactTestimonials /> */}
      {/* <Testimoials /> */}
      <ContactTestimonials1 />
      <StickyCTA />
      {/* <Contact /> */}
    </>
  );
}

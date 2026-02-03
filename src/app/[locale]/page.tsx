import BlogSection from "@/components/home/BlogSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import HeroVideo from "@/components/home/HeroVideo";
import DevelopersMarquee from "@/components/home/Marquee";
import PrimeAreas from "@/components/home/PrimeAreas";
import Tagline from "@/components/home/Tagline";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <FeaturedProperties />
      <Tagline />

      <PrimeAreas />
      <WhyChooseUs />
      <BlogSection />
      <DevelopersMarquee />
    </>
  );
}

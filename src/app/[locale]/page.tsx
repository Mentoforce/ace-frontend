import FeaturedProperties from "@/components/home/FeaturedProperties";
import HeroVideo from "@/components/home/HeroVideo";
import DevelopersMarquee from "@/components/home/Marquee";
import PrimeAreas from "@/components/home/PrimeAreas";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <FeaturedProperties />
      <DevelopersMarquee />

      <PrimeAreas />
      <WhyChooseUs />
    </>
  );
}

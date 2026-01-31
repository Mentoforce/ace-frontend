import FeaturedProperties from "@/components/home/FeaturedProperties";
import HeroVideo from "@/components/home/HeroVideo";
import DevelopersMarquee from "@/components/home/Marquee";
import PrimeAreas from "@/components/home/PrimeAreas";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <FeaturedProperties />
      <PrimeAreas />
      <DevelopersMarquee />
    </>
  );
}

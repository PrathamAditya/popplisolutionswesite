import HomeHero from "@/components/sections/HomeHero";
import FeatureIcons from "@/components/sections/FeatureIcons";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import WhyChoose from "@/components/sections/WhyChoose";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeatureIcons />
      <SolutionsGrid />
      <WhyChoose />
      <FeaturedProducts />
      <CTABanner />
    </>
  );
}

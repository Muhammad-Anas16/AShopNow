import CategoriesSection from "@/components/homePage/CategoriesSection";
import HeroSection from "@/components/homePage/HeroSection";
import HomePageProducts from "@/components/homePage/HomePageProducts";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <CategoriesSection />
      <HomePageProducts heading="Featured Products" />
      <HomePageProducts heading="Recommended For You" />
    </main>
  );
}

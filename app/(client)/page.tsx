import Categories from "@/components/categories";
import Fits from "@/components/fits";
import Hero from "@/components/hero";
import Hype from "@/components/hype";
import JustIN from "@/components/just-in";
import Reviews from "@/components/reviews";
import ShopNow from "@/components/shop-now";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <JustIN title="Just In" type="justIn" />
      <Categories />
      <JustIN title="Trending" type="trending" disable={true} />
      <ShopNow />
      <Fits />
      <Hype />
      <Reviews />
    </main>
  );
}

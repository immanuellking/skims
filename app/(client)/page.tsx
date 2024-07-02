import Categories from "@/components/categories";
import Hero from "@/components/hero";
import JustIN from "@/components/just-in";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <JustIN title="Just In" type="justIn" />
      <Categories />
      <JustIN title="Trending" type="trending" disable={true} />
    </main>
  );
}

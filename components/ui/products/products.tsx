import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./product-card";
import { fetchProducts } from "@/lib/queries";

export default async function Products({ type }: { type: string }) {
  const products = await fetchProducts(type);
  return (
    <div className="w-[90%] mx-auto">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {products.map((product) => {
            return (
              <CarouselItem className="basis-1/4" key={product.id}>
                <ProductCard product={product} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

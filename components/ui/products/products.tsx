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
    // <div className="relative w-full lg:w-[90%] lg:mx-auto p-0 m-0">
      <Carousel opts={{ align: "start" }} className="w-[95%] sm:w-[90%] mx-auto">
        <CarouselContent>
          {products.map((product) => {
            return (
              <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4" key={product.id}>
                <ProductCard product={product} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    // </div>
  );
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./product-card";
import { fetchProducts } from "@/lib/queries";

export default async function Products({
  type,
  parentClass,
  cardClass,
}: {
  type: string;
  parentClass: string;
  cardClass: string;
}) {

  const products = await fetchProducts(type);
  
  return (
    <Carousel opts={{ align: "start" }} className={parentClass}>
      <CarouselContent>
        {products.map((product) => {
          return (
            <CarouselItem className={cardClass} key={product.id}>
              <ProductCard product={product} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}

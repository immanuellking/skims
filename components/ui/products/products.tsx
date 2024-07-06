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
  const { error, products } = await fetchProducts(type);

  // if (error) {
  //   return (
  //     <section className="w-[95%] sm:w-[90%] mx-auto h-[350px]">
  //       <p>{message}</p>
  //     </section>
  //   );
  // }

  if (!error && products?.length) {
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
  } else {
    return (
      <section className="w-[95%] sm:w-[90%] mx-auto h-[350px] flex items-center justify-center text-center">
        <p className="uppercase text-lg xs:text-xl sm:text-2xl">
          Failed to fetch Products for this section ❌
        </p>
      </section>
    );
  }
}

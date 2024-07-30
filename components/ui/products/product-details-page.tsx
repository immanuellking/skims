import { getProduct } from "@/lib/queries";
import ProductDetails from "./product-details";
import Products from "./products";

export default async function ProductDetailsPage({
  type,
  slug,
}: {
  type: string;
  slug: string;
}) {
  const item = await getProduct(type, slug);
  return (
    <main className="w-[90%] mx-auto pt-8 xs:pt-10 lg:pt-16 pb-16 xs:pb-20 lg:pb-24">
      <ProductDetails item={item} />

      <div className="mt-16 xs:mt-20 lg:mt-28">
        <div className="w-full text-center text-[#62554A] text-lg xs:text-xl sm:text-2xl lg:text-3xl font-medium mb-10 xs:mb-14">
          <h1>MORE ITEMS WE THINK YOU MIGHT LIKE</h1>
        </div>
        <Products
          type={type}
          parentClass="w-[95%] sm:w-[90%] mx-auto"
          cardClass="basis-1/2 sm:basis-1/3 lg:basis-1/4 overflow-hidden"
        />
      </div>
    </main>
  );
}

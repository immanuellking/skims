import { Suspense } from "react";
import Products from "./ui/products/products";
import { ProductsCardsSkeleton } from "./skeletons";
import { cn } from "@/lib/utils";

export default async function JustIN({
  title,
  type,
  disable,
}: {
  title: string;
  type: string;
  disable?: boolean;
}) {
  return (
    <div className="w-full py-8 xs:py-10 sm:py-16">
      <div className="w-full text-center text-[#62554A] text-3xl font-semibold mb-10 xs:mb-14">
        <h1>{title}</h1>
      </div>
      <Suspense fallback={<ProductsCardsSkeleton />}>
        <Products type={type} />
      </Suspense>
      <div className="w-full flex justify-center mt-5 sm:mt-10">
        <button
          className={cn(
            "py-2 xs:py-3 uppercase w-60 xs:w-72 bg-[#62554A] hover:bg-[#8b7a6c] transition-all ease-in duration-300 text-white text-sm xs:text-base font-medium xs:font-semibold rounded-sm",
            { hidden: disable }
          )}
        >
          Shop All New Arrivals
        </button>
      </div>
    </div>
  );
}

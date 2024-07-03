import Image from "next/image";
import Products from "./ui/products/products";
import { Suspense } from "react";
import { FitsProductsCardsSkeleton } from "./skeletons";

export default async function Fits() {
  return (
    <section className="w-full flex flex-col lg:flex-row xs:py-10 lg:py-16 gap-8">
      <div className="relative h-[45vh] lg:h-[80vh] w-[100%] lg:w-[55%]">
        <Image
          src="/categories/fits.webp"
          alt="best fits"
          fill
          className="object-cover object-center"
        />

        <div className="block lg:hidden space-y-2 absolute top-[50%] left-[1rem] text-white">
          <h1 className="text-3xl uppercase font-semibold">
            3 fits for $300
          </h1>
          <p className="text-sm">
            Shop our best-selling styles at special pricing.
          </p>
          <span className="underline mt-2">shop now</span>
        </div>
      </div>
      <div className="w-[100%] lg:w-[45%] h-full space-y-8">
        <div className="hidden lg:block space-y-2">
          <h1 className="text-4xl  uppercase text-[#62554A] font-semibold">
            3 fits for $300
          </h1>
          <p className="text-sm">
            Shop our best-selling styles at special pricing.
          </p>
        </div>
        <Suspense fallback={<FitsProductsCardsSkeleton />}>
          <Products
            type="fits"
            parentClass="w-[85%] lg:w-[90%] mx-auto"
            cardClass="basis-1/2 lg:basis-1/2"
          />
        </Suspense>
      </div>
    </section>
  );
}

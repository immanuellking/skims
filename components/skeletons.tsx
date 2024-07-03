import { cn } from "@/lib/utils";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const ProductCardSkeletons = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-2 group cursor-pointer sm:w-[240px] lg:w-[300px]", className)}>
      <div
        className={`${shimmer} relative w-full h-[220px] xs:h-[300px] overflow-hidden bg-[#f2ded4]`}
      ></div>
      <div className="w-full space-y-3 flex flex-col items-center">
        <p className="h-4 w-full bg-[#f2ded4]"></p>
        <p className="h-4 w-20 bg-[#f2ded4]"></p>
      </div>
    </div>
  );
};

export const ProductsCardsSkeleton = () => {
  return (
    <div className=" w-[90%] mx-auto flex justify-between">
      <ProductCardSkeletons className="w-[140px] xs:w-[180px]" />
      <ProductCardSkeletons className="w-[140px] xs:w-[180px]" />
      <ProductCardSkeletons className="hidden sm:block" />
      <ProductCardSkeletons className="hidden lg:block" />
    </div>
  );
};

export const FitsProductsCardsSkeleton = () => {
  return (
    <div className=" w-[95%] mx-auto flex justify-between">
      <ProductCardSkeletons className="w-[140px] xs:w-[180px]" />
      <ProductCardSkeletons className="w-[140px] xs:w-[180px]" />
      <ProductCardSkeletons className="w-[140px] xs:w-[180px] block lg:hidden" />
    </div>
  )
}
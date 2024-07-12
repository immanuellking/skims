import { cn } from "@/lib/utils";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const ProductCardSkeletons = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "space-y-2 group cursor-pointer sm:w-[240px] lg:w-[300px]",
        className
      )}
    >
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

const ReviewCardSkeleton = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full lg:w-[280px]", className)}>
      <div
        className={`${shimmer} relative w-full lg:w-[280px] h-[280px] lg:h-[300px] bg-[#f2ded4]`}
      ></div>
      <div className="my-2 sm:my-4 space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="h-4 w-24 bg-[#f2ded4]"></h4>
          <div className="h-4 w-24 bg-[#f2ded4]"></div>
        </div>
        <p className="h-4 w-full bg-[#f2ded4]"></p>
      </div>
      <div className="h-4 bg-[#f2ded4]"></div>
    </div>
  );
};

export const ProductsCardsSkeleton = () => {
  return (
    <div className=" w-[90%] mx-auto flex justify-between">
      <ProductCardSkeletons className="w-[48%] xs:w-[180px]" />
      <ProductCardSkeletons className="w-[48%] xs:w-[180px]" />
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
  );
};

export const ReviewPostsCardsSkeleton = () => {
  return (
    <div className="w-[75%] sm:w-[80%] mx-auto flex gap-x-4">
      <ReviewCardSkeleton />
      <ReviewCardSkeleton className="hidden sm:block" />
      <ReviewCardSkeleton className="hidden sm:block" />
      <ReviewCardSkeleton className="hidden lg:block" />
    </div>
  );
};

export const ProductDetailsPageSkeleton = () => {
  return (
    <main
      className={`${shimmer} w-[90%] mx-auto pt-8 xs:pt-10 lg:pt-16 pb-16 xs:pb-20 lg:pb-24`}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col-reverse sm:flex-row gap-8 w-full lg:w-[50%]">
          <div className="flex flex-row sm:flex-col gap-2 sm:gap-4">
            <div className={`w-[7rem] h-[6rem] sm:h-[8rem] bg-[#f2ded4]`}></div>
            <div className={`w-[7rem] h-[6rem] sm:h-[8rem] bg-[#f2ded4]`}></div>
            <div className={`w-[7rem] h-[6rem] sm:h-[8rem] bg-[#f2ded4]`}></div>
            <div className={`w-[7rem] h-[6rem] sm:h-[8rem] bg-[#f2ded4]`}></div>
          </div>
          <div className="w-full h-[25rem] sm:h-[38rem] lg:h-[35rem] bg-[#f2ded4]"></div>
        </div>

        <div className="w-full lg:w-[50%]">
          <div className="space-y-4 lg:space-y-2">
            <h4 className="h-6 w-24 bg-[#f2ded4]"></h4>
            <div className="h-10 w-[60%] lg:w-full bg-[#f2ded4]"></div>
            <div className="h-6 w-[40%] bg-[#f2ded4]"></div>
          </div>

          <div className="mt-5 ">
            <div className="space-y-2">
              <h1 className="h-6 w-[10%] bg-[#f2ded4]"></h1>
              <div className="flex gap-x-2">
                <div className="h-7 w-7 rounded-full bg-[#f2ded4]"></div>
                <div className="h-7 w-7 rounded-full bg-[#f2ded4]"></div>
                <div className="h-7 w-7 rounded-full bg-[#f2ded4]"></div>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <div className="flex justify-between">
                <h1 className="h-6 w-[10%] bg-[#f2ded4]"></h1>
                <h1 className="h-6 w-[10%] bg-[#f2ded4]"></h1>
              </div>
              <div className="flex gap-x-2">
                <div className="h-10 w-10 bg-[#f2ded4] rounded-full"></div>
                <div className="h-10 w-10 bg-[#f2ded4] rounded-full"></div>
                <div className="h-10 w-10 bg-[#f2ded4] rounded-full"></div>
              </div>
            </div>

            <button className="bg-[#EEE4DA] mt-8 h-12 w-full rounded-3xl"></button>
          </div>

          <div className="mt-5 h-40 sm:h-48 w-full bg-[#f2ded4]"></div>
        </div>
      </div>

      <div className="mt-16 xs:mt-20 lg:mt-28">
        <div className="w-full mb-10 xs:mb-14 flex justify-center">
          <h1 className="h-12 w-[60%] lg:w-[50%] bg-[#EEE4DA]"></h1>
        </div>
        <ProductsCardsSkeleton />
      </div>
    </main>
  );
};

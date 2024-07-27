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
        className={`${shimmer} relative w-full h-[220px] xs:h-[300px] lg:h-[305px] overflow-hidden bg-[#f2ded4]`}
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

export const CartPageSkeleton = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between">
      <section
        className={`${shimmer} w-full sm:w-[55%] space-y-6 xs:space-y-8`}
      >
        <div className="relative flex w-auto p-4 justify-between shadow">
          <div className="flex gap-x-2 sm:gap-x-4">
            <div className="relative w-[8rem] h-[8rem]  xs:w-[9rem] xs:h-[9rem] bg-[#EEE4DA]"></div>
            <div className="flex flex-col gap-y-4 sm:gap-y-6">
              <div className="space-y-2">
                <h4 className="h-4 sm:h-5 w-32 bg-[#EEE4DA]"></h4>
                <h1 className="h-6 w-40 xs:w-48 bg-[#EEE4DA]"></h1>
              </div>
              <div className="h-9 sm:h-12 w-[150px] xs:w-[180px] rounded bg-[#EEE4DA]"></div>
            </div>
          </div>
          <div className="hidden sm:flex flex-col justify-between items-end">
            <div className="space-y-2 flex flex-col items-end">
              <div className="h-4 w-16 bg-[#EEE4DA]"></div>
              <div className="h-7 w-28 bg-[#EEE4DA]"></div>
            </div>
            <div className="bg-[#EEE4DA]-600 h-[40px] w-[40px] hidden sm:block"></div>
          </div>
          <div className="absolute bottom-1 right-1 bg-[#EEE4DA] h-[35px] w-[35px] xs:h-[40px] xs:w-[40px] rounded block sm:hidden"></div>
        </div>
        <div className="relative flex w-auto p-4 justify-between shadow">
          <div className="flex gap-x-2 sm:gap-x-4">
            <div className="relative w-[8rem] h-[8rem]  xs:w-[9rem] xs:h-[9rem] bg-[#EEE4DA]"></div>
            <div className="flex flex-col gap-y-4 sm:gap-y-6">
              <div className="space-y-2">
                <h4 className="h-4 sm:h-5 w-32 bg-[#EEE4DA]"></h4>
                <h1 className="h-6 w-40 xs:w-48 bg-[#EEE4DA]"></h1>
              </div>
              <div className="h-9 sm:h-12 w-[150px] xs:w-[180px] rounded bg-[#EEE4DA]"></div>
            </div>
          </div>
          <div className="hidden sm:flex flex-col justify-between items-end">
            <div className="space-y-2 flex flex-col items-end">
              <div className="h-4 w-16 bg-[#EEE4DA]"></div>
              <div className="h-7 w-28 bg-[#EEE4DA]"></div>
            </div>
            <div className="bg-[#EEE4DA]-600 h-[40px] w-[40px] hidden sm:block"></div>
          </div>
          <div className="absolute bottom-1 right-1 bg-[#EEE4DA] h-[35px] w-[35px] xs:h-[40px] xs:w-[40px] rounded block sm:hidden"></div>
        </div>
      </section>

      <section
        className={` w-full sm:w-[43%] lg:w-[40%] h-fit shadow px-4 pb-4 rounded`}
      >
        <div className="border-b border-gray-500/40 pt-4 pb-2">
          <div className="h-9 sm:h-11 w-48 bg-[#EEE4DA]"></div>
        </div>
        <div className="py-4 space-y-2">
          <div className="h-4 sm:h-6 w-full bg-[#EEE4DA]"></div>
          <div className="h-4 sm:h-6 w-full bg-[#EEE4DA]"></div>
          <div className="h-4 sm:h-6 w-full bg-[#EEE4DA]"></div>
          <div className="h-4 sm:h-6 w-full bg-[#EEE4DA]"></div>
        </div>

        <div className="border-y border-gray-500/40 flex justify-between items-center py-6">
          <div className="h-8 sm:h-10 w-full bg-[#EEE4DA]"></div>
        </div>

        <div className=" h-10 sm:h-12 w-full bg-[#EEE4DA]"></div>
      </section>
    </div>
  );
};

export const CheckoutPageSkeleton = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between w-[90%] mx-auto gap-y-10 sm:gap-x-8 lg:gap-x-16">
      <section className="w-full lg:w-[50%]">
        <div className="space-y-4 py-2">
          <div className="relative flex gap-x-3">
            <div className="w-[4rem] sm:w-[5rem] bg-[#EEE4DA]"></div>
            <div className="flex flex-col justify-between gap-y-1.5">
              <div className="h-5 w-52 sm:w-64 bg-[#EEE4DA]"></div>
              <div className="h-4 w-28 sm:w-32 bg-[#EEE4DA]"></div>
              <div className="h-4 w-20 sm:w-24 bg-[#EEE4DA]"></div>
            </div>
          </div>
          <div className="relative flex gap-x-3">
            <div className="w-[4rem] sm:w-[5rem] bg-[#EEE4DA]"></div>
            <div className="flex flex-col justify-between gap-y-1.5">
              <div className="h-5 w-52 sm:w-64 bg-[#EEE4DA]"></div>
              <div className="h-4 w-28 sm:w-32 bg-[#EEE4DA]"></div>
              <div className="h-4 w-20 sm:w-24 bg-[#EEE4DA]"></div>
            </div>
          </div>
          <div className="relative flex gap-x-3">
            <div className="w-[4rem] sm:w-[5rem] bg-[#EEE4DA]"></div>
            <div className="flex flex-col justify-between gap-y-1.5">
              <div className="h-5 w-52 sm:w-64 bg-[#EEE4DA]"></div>
              <div className="h-4 w-28 sm:w-32 bg-[#EEE4DA]"></div>
              <div className="h-4 w-20 sm:w-24 bg-[#EEE4DA]"></div>
            </div>
          </div>
          <div className="relative flex gap-x-3">
            <div className="w-[4rem] sm:w-[5rem] bg-[#EEE4DA]"></div>
            <div className="flex flex-col justify-between gap-y-1.5">
              <div className="h-5 w-52 sm:w-64 bg-[#EEE4DA]"></div>
              <div className="h-4 w-28 sm:w-32 bg-[#EEE4DA]"></div>
              <div className="h-4 w-20 sm:w-24 bg-[#EEE4DA]"></div>
            </div>
          </div>
        </div>
        {/* <div className="py-4 flex justify-between border-t border-gray-300">
          <div className="h-8 w-24">Total</div>
          <div className="h-8 w-44 bg-[#EEE4DA]"></div>
        </div> */}
      </section>

      <section className="w-full lg:w-[50%] space-y-2 lg:space-y-4">
        <div className="flex justify-between items-end border-b border-gray-400 py-2 ">
          <div className="h-5 sm:h-6 w-28 sm:w-36 bg-[#EEE4DA]"></div>
          <div className="h-5 sm:h-6 w-24 sm:w-36 bg-[#EEE4DA]"></div>
        </div>
        <div className="shadow-sm p-4">
          <div className="h-6 sm:h-7 w-72 bg-[#EEE4DA]"></div>
          <div className="h-3 w-60 mt-1.5 sm:mt-1 bg-[#EEE4DA]"></div>
          <div className="h-3 w-48 mt-1.5 sm:mt-1 bg-[#EEE4DA]"></div>
          <div className="flex mt-2 space-x-4">
            <div className="h-6 w-6 bg-[#EEE4DA]"></div>
            <div className="h-6 w-6 bg-[#EEE4DA]"></div>
          </div>
        </div>
        <div className="shadow-sm p-4">
          <div className="h-7 w-72 bg-[#EEE4DA]"></div>
          <div className="h-3 w-60 mt-1 bg-[#EEE4DA]"></div>
          <div className="h-3 w-48 mt-1 bg-[#EEE4DA]"></div>
          <div className="flex mt-2 space-x-4">
            <div className="h-6 w-6 bg-[#EEE4DA]"></div>
            <div className="h-6 w-6 bg-[#EEE4DA]"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const AuthLoader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bars-5"></div>
    </div>
  );
};

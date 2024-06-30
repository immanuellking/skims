const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const ProductCardSkeletons = () => {
  return (
    <div className="relative w-[300px] space-y-2 group cursor-pointer">
      <div className={`${shimmer} relative w-[300px] h-[300px] overflow-hidden bg-gray-200`}></div>
      <div className="w-full space-y-3 flex flex-col items-center">
        <p className="h-4 w-full bg-gray-200"></p>
        <p className="h-4 w-16 bg-gray-200"></p>
      </div>
    </div>
  );
};

export const ProductsCardsSkeleton = () => {
  return (
    <div className=" w-[90%] mx-auto flex justify-between">
      <ProductCardSkeletons />
      <ProductCardSkeletons />
      <ProductCardSkeletons />
      <ProductCardSkeletons />
    </div>
  );
};

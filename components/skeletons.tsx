const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const ProductCardSkeletons = ({ className }: { className: string }) => {
  return (
    <div className="relative w-[300px] space-y-2 group cursor-pointer">
      <div
        className={`${shimmer} relative w-[300px] h-[300px] overflow-hidden bg-gray-200`}
      ></div>
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
      <div className="relative w-[140px] xs:w-[180px] sm:w-[240px] lg:w-[300px] space-y-2 group cursor-pointer">
        <div
          className={`${shimmer} relative w-full h-[220px] xs:h-[300px] overflow-hidden bg-[#f2ded4]`}
        ></div>
        <div className="w-full space-y-3 flex flex-col items-center">
          <p className="h-4 w-full bg-[#f2ded4]"></p>
          <p className="h-4 w-20 bg-[#f2ded4]"></p>
        </div>
      </div>
      <div className="relative w-[140px] xs:w-[180px] sm:w-[240px] lg:w-[300px] space-y-2 group cursor-pointer">
        <div
          className={`${shimmer} relative w-full h-[220px] xs:h-[300px] overflow-hidden bg-[#f2ded4]`}
        ></div>
        <div className="w-full space-y-3 flex flex-col items-center">
          <p className="h-4 w-full bg-[#f2ded4]"></p>
          <p className="h-4 w-20 bg-[#f2ded4]"></p>
        </div>
      </div>
      <div className="relative w-[200px] sm:w-[240px] lg:w-[300px] hidden sm:block space-y-2 group cursor-pointer">
        <div
          className={`${shimmer} relative w-full h-[300px] overflow-hidden bg-[#f2ded4]`}
        ></div>
        <div className="w-full space-y-3 flex flex-col items-center">
          <p className="h-4 w-full bg-[#f2ded4]"></p>
          <p className="h-4 w-20 bg-[#f2ded4]"></p>
        </div>
      </div>
      
      <div className="relative w-[200px] sm:w-[150px] lg:w-[300px] hidden lg:block space-y-2 group cursor-pointer">
        <div
          className={`${shimmer} relative w-full h-[300px] overflow-hidden bg-[#f2ded4]`}
        ></div>
        <div className="w-full space-y-3 flex flex-col items-center">
          <p className="h-4 w-full bg-[#f2ded4]"></p>
          <p className="h-4 w-16 bg-[#f2ded4]"></p>
        </div>
      </div>
    </div>
  );
};

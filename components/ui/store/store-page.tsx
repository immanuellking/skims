import Image from "next/image";
import Store from "./store";
import StoreProducts from "./store-products";

export default function StorePage({sort} : {sort: string}) {
  return (
    <main>
      <div className="relative w-full h-[45vh] sm:h-[40vh] lg:h-[60vh]">
        <Image
          src="/hero/hero-2.webp"
          alt="hero-img"
          fill
          className="object-cover object-center"
        />
        <div className="absolute left-2 xs:left-4 bottom-4 sm:bottom-0 sm:left-10 sm:inset-0 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-6xl text-white font-semibold uppercase">
            new arrivals
          </h1>
          <p className="text-sm sm:text-base text-white font-medium">
            shop the latest collections and must-have styles from SKIMS
          </p>
        </div>
      </div>

      <Store>
        <StoreProducts sort={sort} />
      </Store>
    </main>
  );
}

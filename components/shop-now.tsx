"use client";
import { shopNow } from "@/lib/data";
import { useRouter } from "next/navigation";

export default function ShopNow() {
  const router = useRouter();
  return (
    <section className="w-full flex-col lg:flex-row flex gap-6">
      {shopNow.map((cat, idx) => (
        <div
          key={idx}
          className="relative h-[55vh] xs:h-[45vh] sm:h-[70vh] lg:h-[85vh] w-full"
          style={{
            backgroundImage: `url(${cat.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute bottom-[1.5rem] xs:bottom-[2rem] sm:bottom-[3rem] left-[1rem] sm:left-[2rem] space-y-2 xs:space-y-4">
            <div className="w-64 xs:w-72 sm:w-96 lg:w-full sm:space-y-2">
              <h1 className="text-[22px] xs:text-2xl sm:text-3xl lg:text-[40px] text-white font-semibold uppercase p-0 m-0">
                {cat.title}
              </h1>
              <p className="text-sm text-white">{cat.text}</p>
            </div>
            <button
              onClick={() => router.push("/store")}
              className="w-56 xs:w-64 bg-[#EEE4DA] py-2 xs:py-3 rounded-md font-semibold transition-all duration-200 ease-in-out hover:text-white text-sm xs:text-base hover:bg-[#d9bb9e]"
            >
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

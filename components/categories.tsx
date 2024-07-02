import { categories } from "@/lib/data";
import Image from "next/image";

export default function Categories() {
  return (
    <section className="w-[90%] mx-auto lg:w-full flex justify-between gap-y-4 lg:gap-y-0 py-8 xs:py-10 sm:py-16 flex-wrap">
      {categories.map((cat, idx) => (
        <div className="space-y-2" key={idx}>
          <div className="relative w-[135px] h-[185px] xs:w-[180px] xs:h-[250px] sm:w-[320px] sm:h-[400px] group overflow-hidden">
            <Image
              src={cat.img}
              alt={cat.text}
              fill
              className="group-hover:scale-[1.03] duration-300 ease-in cursor-pointer object-fill"
            />
          </div>
          <h3 className="text-sm xs:text-base sm:text-lg underline uppercase text-center font-semibold">
            {cat.text}
          </h3>
        </div>
      ))}
    </section>
  );
}

import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/image";
import { JustIn } from "@/typing";
import Image from "next/image";

export default function ProductCard({ product }: { product: JustIn }) {
  return (
    <div className="relative w-full space-y-2 group cursor-pointer">
      <div className="relative w-[200px] sm:w-[300px] h-[300px] overflow-hidden">
        <Image
          src={urlForImage(product.images[0])}
          alt={product.name}
          // width={280}
          // height={280}
          fill
          className="object-contain group-hover:scale-105 transition-all duration-700 ease-in-out"
        />
      </div>
      {product.status !== "nil" && (
        <span
          className={cn(
            "absolute top-0 right-0 bg-green-500 text-xs w-20 py-[5px] capitalize text-white text-center rounded-sm",
            {
              "bg-red-500": product.status === "hot sale",
            }
          )}
        >
          {product.status}
        </span>
      )}
      <div className="w-full text-center text-[13px] uppercase font-semibold space-y-1 text-[#62554A]">
        <p>
          {product.tag}
          <br className="lg:hidden" />
          {product.name}
        </p>
        <p>&#8358; {product.price.toLocaleString()}</p>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/image";
import { JustIn } from "@/typing";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: JustIn }) {
  return (
    <Link
      href={`/store/${product._type}/${product.slug}`}
      className="relative w-full lg:w-[300px] space-y-2 cursor-pointer"
    >
      <div className="relative w-full h-[220px] lg:w-[300px] lg:h-[300px]">
        <Image
          src={urlForImage(product.image)}
          alt={product.name}
          // width={280}
          // height={280}
          fill
          className="object-contain object-center"
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
      <div className="w-full text-center text-xs sm:text-[13px] uppercase font-semibold space-y-1 text-[#62554A]">
        <p>
          {product.tag}
          <br className="lg:hidden" />
          {product.name}
        </p>
        <p>&#8358; {product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}

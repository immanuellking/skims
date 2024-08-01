import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/image";
import { JustIn } from "@/typing";
import Image from "next/image";
import Link from "next/link";

export default function Product({ product }: { product: JustIn }) {
  return (
    <Link
      href={`/store/${product._type}/${product.slug}`}
      className="relative col-span-6 sm:col-span-4 cursor-pointer"
    >
      <div className="relative w-full h-[180px] xs:h-[200px] sm:h-[280px]">
        <Image src={urlForImage(product.images[0])} alt={product.name} fill />
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
      <div className="flex flex-col items-center">
        <p className="text-xs capitalize text-gray-500 line-clamp-1">
          {product.tag}
        </p>
        <h4 className="font-semibold uppercase text-[13px] line-clamp-1">
          {product.name}
        </h4>
        <p className="text-sm font-semibold">
          &#8358;{product.price.toLocaleString()}
        </p>
        <div className="flex gap-1 mt-2">
          {product.colors?.map((color, idx) => (
            <div
              className="h-4 w-4 rounded-full"
              key={idx}
              style={{ backgroundColor: `#${color}` }}
            ></div>
          ))}
        </div>
      </div>
    </Link>
  );
}

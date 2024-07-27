import Cart from "@/components/ui/cart/cart";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-[95%] lg:w-[90%] mx-auto py-10 xs:py-16 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-[30px] sm:text-4xl lg:text-5xl font-medium text-[#62554a]">
          My Bag
        </h1>
        <Link href="/shop" className="text-sm sm:text-base font-medium text-[#62554a]">
          Continue Shopping...
        </Link>
      </div>

      <Cart />
    </div>
  );
}

import { Sort } from "./sort";
import Product from "./product";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../button";
import Filter from "./filter";
import { fetchAllProducts } from "@/lib/queries";

export default async function StoreProducts({ sort }: { sort: string }) {

  const priceFilter = sort
    ? `| order(price ${sort === "low-to-high" ? "asc" : "desc"})`
    : "";

  const productFilter = '*[_type in ["justIn", "trending", "fits"]]';

  const filter = `${productFilter} ${priceFilter}`;

  const { products, error } = await fetchAllProducts(filter);

  return (
    <section className="w-full lg:px-8">
      <div className="w-full flex flex-row-reverse justify-between lg:flex-row lg:justify-end">
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="bg-[#AB8F80] hover:bg-[#AB8F80]/80 text-white font-medium hover:text-white"
              >
                Open
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter</SheetTitle>
                <SheetDescription>
                  <Filter />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <Sort />
      </div>
      <div className="grid grid-cols-12 gap-y-10 gap-x-2 xs:gap-x-4 sm:gap-x-8 lg:gap-16 mt-10">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}

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
import Image from "next/image";

export default async function StoreProducts({
  sort,
  type,
  material,
  size,
}: {
  sort: string;
  type: string;
  material: string;
  size: string;
}) {
  const priceFilter = sort
    ? `| order(price ${sort === "low-to-high" ? "asc" : "desc"})`
    : "";

  const typeFilter = type ? `&& "${type}" in type` : "";
  const materialFilter = material ? `&& "${material}" in material` : "";
  const sizeFilter = size ? `&& "${size}" in size` : "";

  const productFilter = `*[_type in ["justIn", "trending", "fits"] ${typeFilter} ${materialFilter} ${sizeFilter}]`;

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
                Filter
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
      {products.length >= 1 ? (
        <div className="grid grid-cols-12 gap-y-10 gap-x-2 xs:gap-x-4 sm:gap-x-8 lg:gap-16 mt-10">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col items-center mt-5">
          <img src="/no-product.png" alt="no=product" className="w-[20rem]" />

          <h1>Sorry, No Products Found</h1>
        </div>
      )}
    </section>
  );
}

import { ProductDetailsPageSkeleton } from "@/components/skeletons";
import ProductDetailsPage from "@/components/ui/products/product-details-page";
import StorePage from "@/components/ui/store/store-page";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store",
};

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string[] };
  searchParams: { price: string; type: string; material: string; size: string };
}) {
  if (!params?.slug || params.slug.length === 0) {
    const sort = searchParams.price || "";
    const type = searchParams.type || "";
    const material = searchParams.material || "";
    const size = searchParams.size || "";
    return (
      <StorePage sort={sort} type={type} material={material} size={size} />
    );
  }

  const [type, slug] = params?.slug;

  return (
    <Suspense fallback={<ProductDetailsPageSkeleton />}>
      <ProductDetailsPage type={type} slug={slug} />
    </Suspense>
  );
}

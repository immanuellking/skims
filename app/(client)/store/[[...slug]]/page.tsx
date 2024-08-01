import { ProductDetailsPageSkeleton } from "@/components/skeletons";
import ProductDetailsPage from "@/components/ui/products/product-details-page";
import StorePage from "@/components/ui/store/store-page";
import { Suspense } from "react";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string[] };
  searchParams: { price: string };
}) {
  if (!params?.slug || params.slug.length === 0) {
    const sort = searchParams.price || "";
    return <StorePage sort={sort} />;
  }

  const [type, slug] = params?.slug;

  return (
    <Suspense fallback={<ProductDetailsPageSkeleton />}>
      <ProductDetailsPage type={type} slug={slug} />
    </Suspense>
  );
}

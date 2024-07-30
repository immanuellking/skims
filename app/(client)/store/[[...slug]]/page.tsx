import { ProductDetailsPageSkeleton } from "@/components/skeletons";
import ProductDetailsPage from "@/components/ui/products/product-details-page";
import StorePage from "@/components/ui/store/store-page";
import { Suspense } from "react";

export default async function Page({ params }: { params: { slug: string[] } }) {
  if (!params?.slug || params.slug.length === 0) {
    return <StorePage />;
  }

  const [type, slug] = params?.slug;

  return (
    <Suspense fallback={<ProductDetailsPageSkeleton />}>
      <ProductDetailsPage type={type} slug={slug} />
    </Suspense>
  );
}

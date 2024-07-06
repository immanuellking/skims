import { ReviewPostsCardsSkeleton } from "./skeletons";
import ReviewPosts from "./ui/products/review-posts";
import { Suspense } from "react";

export default function Reviews() {
  return (
    <section className="py-8 pt-10 xs:py-10 xs:pt-14 sm:py-16 sm:pt-20">
      <div className="w-full text-center text-[#62554A] text-2xl xs:text-3xl font-semibold mb-10 xs:mb-14">
        <h1 className="uppercase whitespace-nowrap">Our Customer Says...</h1>
      </div>

      <Suspense fallback={<ReviewPostsCardsSkeleton />}>
        <ReviewPosts />
      </Suspense>
    </section>
  );
}

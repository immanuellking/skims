import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { fetchReviews } from "@/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { HiStar } from "react-icons/hi";

export default async function ReviewPosts() {
  const { posts, error } = await fetchReviews();

  return (
    <div className="w-full">
      {!error && posts?.length ? (
        <Carousel
          opts={{ align: "start" }}
          className="w-[75%] sm:w-[80%] mx-auto"
        >
          <CarouselContent>
            {posts.map((post) => {
              return (
                <CarouselItem
                  className="basis-full sm:basis-1/3 lg:basis-1/4"
                  key={post.product._id}
                >
                  <div className="w-full lg:w-[280px]">
                    <div className="relative w-full lg:w-[280px] h-[280px] lg:h-[300px]">
                      <Image
                        src={urlForImage(post.product.image)}
                        alt="review image"
                        fill
                      />
                    </div>
                    <div className="my-2 sm:my-4">
                      <div className="flex items-center justify-between">
                        <h4 className="">{post.customer_name}</h4>
                        <div className="text-sm flex text-[#FDB813]">
                          <HiStar />
                          <HiStar />
                          <HiStar />
                          <HiStar />
                          <HiStar />
                        </div>
                      </div>
                      <p className="text-xs text-gray-700">{post.comment}</p>
                    </div>
                    <Link
                      href={`/store/${post.product._type}/${post.product.slug}`}
                      className="pt-4 font-medium uppercase underline text-sm"
                    >
                      Shop this style
                    </Link>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      ) : (
        <div className="w-[75%] sm:w-[80%] mx-auto h-[350px] flex items-center justify-center text-center">
          <p className="uppercase text-lg xs:text-xl sm:text-2xl">
            Failed to fetch Reviews for this section ❌
          </p>
        </div>
      )}
    </div>
  );
}

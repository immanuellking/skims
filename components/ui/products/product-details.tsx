"use client";

import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { useState } from "react";
import { HiStar } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import { useCart } from "@/context/cartContext";
import { ProductDetailsType } from "@/typing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";

export default function ProductDetails({ item }: { item: ProductDetailsType }) {
  const [current, setCurrent] = useState(0);
  const { addItemToCart } = useCart();
  const cartItem = {
    id: item._id,
    _type: item._type,
    tag: item.tag,
    name: item.name,
    slug: item.slug,
    price: item.price,
    image: item.images[0],
    quantity: 1,
    total: item.price * 1,
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex flex-col-reverse sm:flex-row gap-8 w-full lg:w-[50%]">
        <div className="flex flex-row sm:flex-col gap-2 sm:gap-4">
          {item?.images?.map((image, index) => {
            return (
              <div
                className={`relative w-[7rem] h-[6rem] sm:h-[8rem] border-[0.5px] border-gray-200 cursor-pointer ${
                  current === index ? "ring-black ring-[1.5px]" : "ring-0"
                }`}
                key={index}
                onClick={() => setCurrent(index)}
              >
                <Image
                  src={urlForImage(image)}
                  alt={item.name}
                  className=""
                  loading="lazy"
                  fill
                />
              </div>
            );
          })}
        </div>
        <div className="relative w-full h-[25rem] sm:h-[38rem] lg:h-[35rem] border-[0.5px] border-gray-200">
          {item?.images && (
            <Image
              src={urlForImage(item?.images[current])}
              alt={item.name}
              className=""
              loading="lazy"
              fill
            />
          )}
        </div>
      </div>

      <div className="w-full lg:w-[50%]">
        <div className="space-y-2">
          <h4 className="text-gray-400 uppercase text-sm sm:text-base">
            {item.tag}
          </h4>
          <div className="font-medium flex items-center gap-x-2">
            <h1 className="text-2xl sm:text-3xl uppercase">{item.name}</h1>
            <p className="text-[#B91C1C] text-xl sm:text-2xl">
              &#8358;{item.price.toLocaleString()}
            </p>
          </div>

          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-2">
              <div className="text-base space-x-0.5 flex text-[#AB8F80]">
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
              </div>
              <p className="text-base">45</p>
            </div>
            <span className="font-thin">|</span>
            <div className="text-sm">132 Reviews</div>
          </div>
        </div>

        <div className="mt-5 ">
          <div className="space-y-2">
            <h1 className="uppercase  font-medium">Colors:</h1>
            <div className="flex gap-x-2">
              {item.colors.map((color, idx) => (
                <div
                  className="h-7 w-7 rounded-full"
                  key={idx}
                  style={{ backgroundColor: `#${color}` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <div className="flex justify-between">
              <h1 className="uppercase font-medium">Sizes:</h1>
              <h1 className="uppercase font-medium underline">Size Guide</h1>
            </div>
            <div className="flex gap-x-2">
              {item.size.map((size, idx) => (
                <div
                  className="h-10 w-10 text-sm font-medium flex items-center justify-center border-[1.5px] border-gray-700 rounded-full"
                  key={idx}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={() => {
                addItemToCart(cartItem);
              }}
              className="bg-[#EEE4DA] text-[#62554A] font-semibold w-full py-3 hover:bg-[#62554A] hover:text-white transition-all duration-200 ease-in-out rounded-3xl"
            >
              ADD TO CART
            </button>
          </div>
        </div>

        <div className="mt-5">
          <Accordion type="multiple">
            <AccordionItem value="description" className="border-black">
              <AccordionTrigger className="text-gray-500 uppercase">
                Description
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-400">
                <div>
                  Discover the perfect blend of style and comfort with our
                  latest collection. Each piece is meticulously crafted to offer
                  a seamless fit, ensuring you look your best on every occasion.
                  Whether you&apos;re dressing up for a night out or keeping it
                  casual for a day at the office, our versatile designs are
                  tailored to meet your needs. Experience fashion like never
                  before with high-quality fabrics and attention to detail that
                  set our products apart.
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="fit-fabric" className="border-black">
              <AccordionTrigger className="text-gray-500 uppercase">
                Fits & Fabric
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-400 space-y-2">
                <div>
                  <h4 className="text-gray-500">Fits:</h4>
                  <ul className="ml-4 list-disc">
                    <li>
                      Designed to provide a flattering silhouette that
                      complements all body types.
                    </li>
                    <li>
                      Available in various sizes to ensure the perfect fit for
                      everyone.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-gray-500">Fabric:</h4>
                  <ul className="ml-4 list-disc">
                    <li>
                      Made from premium, breathable materials that offer
                      superior comfort and durability.
                    </li>
                    <li>
                      Easy-care fabrics that maintain their quality wash after
                      wash.
                    </li>
                    <li>
                      Composition: 60% Cotton, 40% Polyester for a soft yet
                      resilient feel.
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping-returns" className="border-black">
              <AccordionTrigger className="text-gray-500 uppercase">
                Shipping & Returns
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-400 space-y-2">
                <div>
                  <h4 className="text-gray-500">Shipping:</h4>
                  <ul className="ml-4 list-disc">
                    <li>Free standard shipping on all orders over $50.</li>
                    <li>
                      Express shipping options available at checkout for faster
                      delivery.
                    </li>
                    <li>
                      Orders are processed within 1-2 business days and
                      typically delivered within 5-7 business days.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-gray-500">Returns:</h4>
                  <ul className="ml-4 list-disc">
                    <li>Hassle-free returns within 30 days of purchase.</li>
                    <li>
                      Items must be in original condition with tags attached for
                      a full refund.
                    </li>
                    <li>Return shipping is free for all domestic orders.</li>
                    <li>
                      To initiate a return, please contact our customer service
                      team or visit our returns portal
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

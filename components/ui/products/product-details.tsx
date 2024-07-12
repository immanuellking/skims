"use client";
import { JustIn } from "@/typing";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { useState } from "react";
import { HiStar } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

export default function ProductDetails({ item }: { item: JustIn }) {
  const [current, setCurrent] = useState(0);

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
          <h4 className="text-gray-400 uppercase text-sm sm:text-base">{item.tag}</h4>
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
            <button className="bg-[#EEE4DA] text-[#62554A] font-semibold w-full py-3 hover:bg-[#62554A] hover:text-white transition-all duration-200 ease-in-out rounded-3xl">
              ADD TO CART
            </button>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex justify-between item-center border-b-[1px] border-black py-4">
            <p className="text-gray-600 uppercase">Description</p>
            <BsChevronDown />
          </div>
          <div className="flex justify-between item-center border-b-[1px] border-black py-4">
            <p className="text-gray-600 uppercase">Fit & Fabric</p>
            <BsChevronDown />
          </div>
          <div className="flex justify-between item-center border-b-[1px] border-black py-4">
            <p className="text-gray-600 uppercase">Shipping & Return</p>
            <BsChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
}

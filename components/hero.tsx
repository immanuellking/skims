"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { hero } from "@/lib/data";
import Image from "next/image";
import Button from "./button";

export default function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-[80vh] hidden lg:block"
      >
        {hero.map(({ img, subText, title }, idx) => (
          <SwiperSlide key={idx} className={`w-full h-full relative`}>
            <Image
              src={img}
              alt="hero-img"
              fill
              className="object-cover object-center"
            />
            <div className="absolute bottom-[5rem] left-[2rem] space-y-4">
              <div className="w-[30rem] space-y-2">
                <h1 className="text-[40px] text-white font-semibold tracking-wide leading-10">
                  {title}
                </h1>
                <p className="text-sm text-white">{subText}</p>
              </div>
              <button className="w-64 bg-[#EEE4DA] py-3 rounded-md font-semibold transition-all duration-200 ease-in-out hover:text-white hover:bg-[#d9bb9e]">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-[85vh] xs:h-[80vh] sm:h-[90vh] block lg:hidden"
      >
        {hero.map(({ subText, title, imgMobile }, idx) => (
          <SwiperSlide key={idx} className={`w-full h-full relative`}>
            <Image
              src={imgMobile}
              alt="hero-img"
              fill
              className="object-cover object-center"
            />
            <div className="absolute left-[1rem] bottom-[1rem] xs:bottom-[5rem] xs:left-[1rem] sm:left-[2rem] space-y-2 xs:space-y-4">
              <div className="w-[18rem] xs:w-[22rem] sm:w-[30rem] space-y-2">
                <h1 className="text-3xl sm:text-[40px] text-white font-semibold tracking-wide leading-8 xs:leading-10">
                  {title}
                </h1>
                <p className="w-[18rem] sm:w-[30rem] text-sm text-white">
                  {subText}
                </p>
              </div>
              <Button />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

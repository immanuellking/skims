"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/shadcn/hover-card";
import {
  HiArrowSmDown,
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiUserCircle,
  HiMenuAlt3,
  HiOutlineX,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { cn } from "@/lib/utils";
import { texts, dropdown } from "@/lib/data";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/cartContext";

export default function Header() {
  const { state } = useCart();
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header>
      <div className="w-full">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="w-full bg-[#AB8F80]"
        >
          {texts.map((text, index) => (
            <SwiperSlide
              key={index}
              className={cn(
                "w-full text-center py-1 text-white font-normal xs:font-medium text-[11px] xs:text-[13px] sm:text-sm"
              )}
            >
              {text}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full shadow-md py-2 sm:py-4">
        <div className="w-[95%] mx-auto flex justify-between items-center">
          <Link href="/" className="w-[65px] xs:w-[80px] lg:w-[100px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 108 24"
            >
              <g>
                <path
                  d="M87.76095,5.29748053 C87.4867587,8.51579823 86.8175879,11.6596636 85.9216864,14.7531444 C85.3445125,16.746711 84.7008715,18.7231827 84.0139312,20.6816599 C83.6779962,21.6390802 83.1530064,22.537456 82.1989601,23.0327548 C80.7161002,23.8026948 79.006622,23.0959605 78.3589322,21.4387788 C78.0736068,20.7084268 77.8625087,19.945797 77.6620949,19.1860914 C76.7697922,15.8049234 73.8255534,14.1348082 70.9151667,14.1510032 C67.3202015,14.1706847 64.8676625,15.8814001 63.2206028,18.9656587 C62.7183311,19.9059842 62.1867058,20.8367501 61.5895131,21.7183685 C60.7545679,22.9509923 59.5976336,23.6217375 58.051568,23.4451664 C56.5128126,23.2696075 55.515467,22.2633771 55.2781645,20.7263088 C55.0300652,19.1196242 55.2464492,17.546117 55.5827215,15.9886923 C56.4669266,11.8935922 57.3740748,7.80321572 58.3019166,3.71778769 C58.8306177,1.38986073 60.3036931,0.242710862 62.6741321,0.124172043 C65.4800381,-0.0159601852 67.3681118,1.44541877 68.9187885,3.56056068 C69.3937311,4.20825049 69.859339,4.8703359 70.4001864,5.46078069 C71.4461171,6.60241973 72.9557439,6.71151144 74.1990519,5.80053948 C75.7998883,4.62752252 77.3808182,3.42548941 79.0110082,2.29475953 C80.4729494,1.28076902 82.0478063,0.533322161 83.8985414,0.541532155 C86.1579767,0.5515416 87.566047,2.42555711 87.7565638,4.34309683 C87.7878293,4.65822565 87.76095,4.97920268 87.76095,5.29748053 Z M19.5147103,20.258924 C19.8034097,18.7049858 20.061181,17.1198946 20.3972284,15.5514483 C20.9923968,12.7738836 21.5645097,9.98822131 22.2814783,7.24124725 C22.7946592,5.27512235 23.4092841,3.31000965 24.6356098,1.63404619 C25.2565328,0.785492693 26.0112899,0.101588936 27.1908299,0.158271635 C27.9522225,0.194935445 28.5545886,0.529070959 29.0674321,1.05068675 C29.5783636,1.57027816 30.0106817,2.18265375 30.5753718,2.63105438 C31.8270023,3.6246886 33.6596304,3.54899921 35.073324,2.52994774 C35.8167221,1.99416128 36.5208696,1.39471924 37.3028435,0.923825471 C38.7421791,0.0568275983 40.5841419,0.51422549 41.4981505,1.919709 C42.2145568,3.02142274 42.1106385,4.14844124 41.3989557,5.18706173 C40.5012547,6.49717436 39.5093075,7.74239429 38.5886635,9.03743651 C37.4412887,10.6514314 37.2298532,12.3613595 38.1345271,14.1718319 C38.6697512,15.2430674 39.2186962,16.3111539 39.6801429,17.4146671 C40.303765,18.9060744 40.5697463,20.440556 39.7687658,21.9679523 C38.5851771,24.2252508 36.206753,24.6241666 34.3668146,22.8623918 C33.475974,22.0095646 32.6614976,21.0764369 31.7599728,20.2356436 C30.4001503,18.9674806 28.9430451,18.974566 27.5464463,20.2285582 C26.6033092,21.0755372 25.7392354,22.0142882 24.7649453,22.8217917 C23.1305942,24.1763283 20.7953569,23.6649469 19.872801,21.7716997 C19.6602409,21.3353329 19.6381976,20.8060695 19.5147103,20.258924 Z M95.1810414,23.9001126 C93.0762464,23.9743399 91.0126137,23.8313961 89.1907823,22.6266638 C88.0914304,21.8995732 87.2851639,20.9409158 87.2193715,19.539706 C87.1891183,18.8957275 87.4698326,18.2833519 88.0772597,17.789965 C88.918278,17.0747958 89.7500741,16.7714759 90.8480765,16.5639767 C91.6167793,16.4185586 92.3880689,16.2505349 93.1294426,16.0054722 C94.6779825,15.4931911 95.0450704,14.020678 93.9627008,12.7787196 C93.7173007,12.497218 93.4415349,12.2420334 93.1779153,11.9765019 C91.9761072,10.7659214 91.1220428,9.37539586 91.2060547,7.61047205 C91.2381074,6.937365 91.4044442,6.22185839 91.6995541,5.61848005 C93.1268559,2.69954598 95.5306972,1.05226127 98.6657903,0.317523028 C101.249914,-0.28810462 103.643409,0.0990022256 105.921176,1.38909596 C107.23455,2.13294392 107.877741,3.3648929 107.649773,4.6360924 C107.456782,5.71306368 106.510721,6.47063246 105.207694,6.55329473 C104.723416,6.58399786 104.233853,6.55903048 103.748114,6.53383817 C103.365618,6.51415667 102.961304,6.45972329 102.765389,6.87438422 C102.554966,7.31952336 102.667544,7.73069786 103.006066,8.10160965 C103.635873,8.79192395 104.308193,9.45580881 104.849265,10.2121405 C105.978421,11.7908211 106.679082,13.550684 106.410626,15.5272682 C106.119003,17.6742379 105.051816,19.4519827 103.385637,20.8128174 C101.405229,22.4305236 99.1175649,23.4206714 96.5794396,23.7957444 C96.1182179,23.8640111 95.6473241,23.8669352 95.1810414,23.9001126 Z M12.9192172,5.52660762e-05 C14.5058829,0.0259782642 16.2502255,0.441651391 17.8589344,1.38625058 C20.148848,2.73089016 20.2690738,5.33188378 18.0746436,6.82520298 C17.3810678,7.29710895 16.6140519,7.6612728 15.878189,8.07053538 C14.6751437,8.73959367 14.433455,9.5126827 15.1046501,10.7171901 C15.3952614,11.2385809 15.7164634,11.7571601 16.1039076,12.208035 C17.9348488,14.3389221 17.5123152,17.1366182 16.0694931,19.1755084 C14.413661,21.5155816 12.0402979,22.7563029 9.35180601,23.4732716 C7.58598248,23.9442778 5.78878103,24.2200437 3.97099835,23.7751295 C2.2612952,23.3566447 1.05453853,22.2777615 0.290334278,20.7255103 C-0.346896224,19.4312553 0.0768744311,18.1256413 1.44299496,17.2457099 C2.46317108,16.5886854 3.56679673,16.0624586 4.61059064,15.4397361 C5.23365046,15.0680371 5.85558564,14.6721579 6.40171894,14.1989024 C7.22373055,13.4866573 7.25825751,12.5628642 6.59797154,11.695304 C6.15609391,11.1145313 5.69880849,10.5432057 5.29190768,9.93836528 C3.89857046,7.86809717 3.988543,5.51385324 5.51335259,3.51590056 C7.20821028,1.29515338 9.8583514,-0.00978581976 12.9192172,5.52660762e-05 Z M50.4937848,0.124880577 C53.1187336,0.154796446 54.7924477,2.00103293 54.4079276,4.5015947 C54.0961727,6.52980065 53.6497965,8.53978715 53.2016208,10.5440379 C52.6507639,13.0069237 52.1147525,15.477682 51.4268,17.9037915 C50.7390724,20.3294512 49.2898397,22.2248352 46.8975824,23.2300533 C45.1821435,23.9508458 43.5664617,23.009958 43.3808933,21.1520251 C43.2797867,20.1396091 43.2768625,19.0810822 43.4559079,18.084074 C43.8984603,15.6208508 44.4643876,13.1795585 44.9941009,10.732193 C45.5078441,8.35826756 45.988185,5.97500748 46.5895389,3.6229004 C46.7917522,2.83181686 47.2313805,2.05906522 47.7202688,1.39383076 C48.4019233,0.466101428 49.4199625,0.0806815675 50.4937848,0.124880577 Z"
                  fill="#62554a"
                />
              </g>
            </svg>
          </Link>
          <ul className="hidden lg:flex gap-12">
            {dropdown.map((item, id) => (
              <li key={id}>
                <div>
                  <HoverCard>
                    <HoverCardTrigger>
                      <div className="flex items-center cursor-pointer">
                        <p className="text-xs font-medium">{item.title}</p>
                        {item.linksContent && <HiArrowSmDown />}
                      </div>
                    </HoverCardTrigger>
                    {item.linksContent && (
                      <HoverCardContent className="w-auto bg-white ml-28 mt-4">
                        <div className="p-4 flex gap-16">
                          <div className="flex gap-16">
                            {item.linksContent?.map((item, idx) => (
                              <div key={idx} className="space-y-2">
                                <h2 className="text-sm font-semibold">
                                  {item.tab}
                                </h2>
                                <div
                                  className={cn("space-y-3", {
                                    "space-y-2": idx === 0,
                                  })}
                                >
                                  {item.links.map((link, index) => (
                                    <p
                                      key={index}
                                      className={cn(
                                        "text-xs cursor-pointer hover:text-[#AB8F80]",
                                        {
                                          "text-sm font-semibold cursor-text hover:text-black":
                                            idx === 0 && id != 7,
                                        }
                                      )}
                                    >
                                      {link}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-4">
                            {item.imageContent.map(
                              (
                                item: {
                                  src: string;
                                  header: string;
                                  subText?: string;
                                },
                                idx
                              ) => (
                                <div className="space-y-2" key={idx}>
                                  <div>
                                    <Image
                                      src={item.src}
                                      alt="new-in-image"
                                      width={178}
                                      height={213}
                                    />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium text-center">
                                      {item.header}
                                    </h4>
                                    {item.subText ? (
                                      <p className="w-48 text-xs text-center text-gray-500">
                                        {item.subText}
                                      </p>
                                    ) : null}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </HoverCardContent>
                    )}
                  </HoverCard>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 lg:gap-6">
            <div>
              <HiOutlineHeart className="text-2xl  xs:text-[26px]" />
            </div>
            <Link href="/cart" className="relative">
              <HiOutlineShoppingBag className="text-2xl  xs:text-[26px]" />
              {isClient && state.cart.length > 1 && (
                <div className="absolute -top-1 -right-2 h-5 w-5 flex items-center justify-center rounded-full text-sm font-medium text-white bg-[#62554A]">
                  {state.cart.length}
                </div>
              )}
            </Link>
            <HiUserCircle className="text-[26px]  xs:text-[28px]" />
          </div>

          <div className="lg:hidden">
            <HiMenuAlt3
              className="text-3xl  xs:text-[32px]"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>
      <MobileNav open={open} setOpen={setOpen} />
    </header>
  );
}

const MobileNav = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) => {
  return (
    <div
      className={cn(
        "lg:hidden fixed top-0 bottom-0 right-[-1000px] w-full h-full bg-gray-100 z-50 px-5 py-8 space-y-8 sm:space-y-12 transition-all duration-300 ease-in",
        {
          "right-0": open,
        }
      )}
    >
      <div className="w-full flex justify-end">
        <HiOutlineX className="text-3xl" onClick={() => setOpen(false)} />
      </div>
      <div className="space-y-6 sm:space-y-4">
        {dropdown.map((item, index) => (
          <div
            className="flex justify-between border-b-2 border-black py-1 md:py-3"
            key={index}
          >
            <p className="text-base sm:text-lg">{item.title}</p>
            <HiOutlineChevronDown className="text-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

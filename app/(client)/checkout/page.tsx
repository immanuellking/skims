import Checkout from "@/components/ui/checkout/checkout";
import React from "react";

export default function Page() {
  return (
    <div className="w-[95%] lg:w-[90%] mx-auto py-10 xs:py-16 space-y-8 sm:space-y-16">
      <h1 className="text-[30px] sm:text-4xl lg:text-5xl font-medium text-[#62554a]">
        Checkout
      </h1>

      <Checkout />
    </div>
  );
}

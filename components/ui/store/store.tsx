import React from "react";
import Filter from "./filter";
import StoreProducts from "./store-products";

export default function Store() {
  return (
    <section className="w-[95%] sm:w-[90%] lg:w-[85%] mx-auto py-10 sm:py-16 flex flex-col lg:flex-row">
      <div className="hidden lg:basis-[25%] lg:block ">
        <Filter />
      </div>
      <StoreProducts />
    </section>
  );
}

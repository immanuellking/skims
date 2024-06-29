import React, { Suspense } from "react";
import Products from "./ui/products/products";

export default async function JustIN() {
  

  return (
    <div className="w-full">
      <div className="w-full text-center text-[#62554A] text-3xl font-semibold py-16">
        <h1>Just In</h1>
      </div>
      <Suspense fallback={<h1>Loading............</h1>}>
        <Products type="justIn" />
      </Suspense>
      <div className="w-full flex justify-center mt-10">
        <button className="py-2 uppercase w-72 bg-[#62554A] text-white font-semibold rounded-sm">
          Shop All New Arrivals
        </button>
      </div>
    </div>
  );
}

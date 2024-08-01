import React, { ReactNode } from "react";
import Filter from "./filter";

export default function Store({children} : {children: ReactNode}) {
  return (
    <section className="w-[95%] sm:w-[90%] lg:w-[85%] mx-auto py-10 sm:py-16 flex flex-col lg:flex-row">
      <div className="hidden lg:basis-[25%] lg:block ">
        <Filter />
      </div>
      {children}
    </section>
  );
}

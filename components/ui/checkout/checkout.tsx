"use client";
import { useCart } from "@/context/cartContext";
import { useEffect, useState } from "react";
import { Receipt } from "./checkout-receipt";
import { Address } from "./address";

export default function Checkout() {
  const { state, getTotal } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    getTotal();
  }, []);

  if (!isClient) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between w-[90%] mx-auto gap-x-16">
      <Receipt cart={state.cart} total={state.total} />
      <Address />
    </div>
  );
}



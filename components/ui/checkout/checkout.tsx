"use client";
import { useCart } from "@/context/cartContext";
import { useEffect, useState } from "react";
import { Receipt } from "./checkout-receipt";
import { Address } from "./address";
import { CheckoutPageSkeleton } from "@/components/skeletons";

export default function Checkout() {
  const { state, getTotal } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    getTotal();
  }, []);

  if (!isClient) {
    return <CheckoutPageSkeleton />;
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between w-[90%] mx-auto gap-y-10 sm:gap-x-8 lg:gap-x-16">
      <Receipt cart={state.cart} total={state.total} />
      <Address />
    </div>
  );
}

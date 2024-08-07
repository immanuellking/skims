"use client";
import { useCart } from "@/context/cartContext";
import { useEffect, useState } from "react";
import { Receipt } from "./checkout-receipt";
import { Address } from "./address";
import { CheckoutPageSkeleton } from "@/components/skeletons";
import EmptyCart from "../cart/empty-cart";

export default function Checkout() {
  const { state, getTotal } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    getTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isClient) {
    return <CheckoutPageSkeleton />;
  }

  if (!state.cart.length) {
    return <EmptyCart text="You Can't Checkout An Empty Cart " />;
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between w-[90%] mx-auto gap-y-8 sm:gap-y-10 sm:gap-x-8 lg:gap-x-16">
      <Receipt cart={state.cart} total={state.total} />
      <Address />
    </div>
  );
}

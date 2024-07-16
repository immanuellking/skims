"use client";
import { useCart } from "@/context/cartContext";
import { useEffect, useState } from "react";
import CartItems from "./cart-items";
import Checkout from "./checkout";

export default function Cart() {
  const { state, getTotal } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    getTotal();
  }, []);

  if (!isClient) {
    // Render a fallback or loading state during hydration
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between">
      <CartItems cart={state.cart} />
      <Checkout cart={state.cart} total={state.total} />
    </div>
  );
}

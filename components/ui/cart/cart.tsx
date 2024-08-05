"use client";
import { useCart } from "@/context/cartContext";
import { useEffect, useState } from "react";
import CartItems from "./cart-items";
import CartReceipt from "./cart-receipt";
import { CartPageSkeleton } from "@/components/skeletons";
import EmptyCart from "./empty-cart";

export default function Cart() {
  const { state, getTotal, increaseItem, decreaseItem, deleteItem } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    getTotal();
    
  }, [state.cart, getTotal]);

  if (!isClient) {
    // Render a fallback or loading state during hydration
    return <CartPageSkeleton />;
  }

  if (!state.cart.length) {
    return (
      <EmptyCart text="Your Cart Is Empty" />
    );
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between">
      <CartItems
        cart={state.cart}
        increaseItem={increaseItem}
        decreaseItem={decreaseItem}
        deleteItem={deleteItem}
      />
      <CartReceipt cart={state.cart} total={state.total} />
    </div>
  );
}

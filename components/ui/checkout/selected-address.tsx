import { useCart } from "@/context/cartContext";
import React from "react";

export default function SelectedAddress() {
  const { state } = useCart();
  return (
    <div className="text-[#62554a]">
      <p className="text-sm">
        Name:{" "}
        <span className="text-base capitalize font-medium">
          {state.selectedAddress?.name}
        </span>
      </p>
      <p>
        Address:{" "}
        <span className="text-base capitalize font-medium">
          {state.selectedAddress?.houseNo +
            ", " +
            state.selectedAddress?.street +
            ", " +
            state.selectedAddress?.city +
            ", " +
            state.selectedAddress?.state}
          .
        </span>
      </p>
      <p>
        Postal code:{" "}
        <span className="text-base capitalize font-medium">
          {state.selectedAddress?.postalCode}
        </span>
      </p>
      <p>
        Phone:{" "}
        <span className="text-base capitalize font-medium">
          {state.selectedAddress?.phoneNumber}
        </span>
      </p>
    </div>
  );
}

"use client";
import { useCart } from "@/context/cartContext";
import { useState } from "react";
import ChooseAddress from "./choose-address";
import SelectedAddress from "./selected-address";
import { AddressDialog } from "./address-dialog";

export function Address() {
  const [step, setStep] = useState(1);

  const { state, openDialog, setDialogStatus, clearSelectedAddress } =
    useCart();

  function addAddress() {
    clearSelectedAddress();
    setDialogStatus("new");
    openDialog();
  }

  return (
    <section className="w-full lg:w-[50%] space-y-2 lg:space-y-4">
      <div className="flex justify-between border-b border-gray-400 py-2 ">
        <h4 className="text-[#62554a] font-medium">
          {step === 1 ? "Choose Address" : "Confirm Address "}
        </h4>
        {step === 1 && (
          <p className="text-green-500 cursor-pointer" onClick={addAddress}>
            Add Address
          </p>
        )}
      </div>

      {state.addresses.length >= 1 ? (
        <div className="space-y-6 sm:space-y-8">
          {step === 1 && <ChooseAddress />}

          {step === 2 && <SelectedAddress />}

          <div className="w-full flex justify-end">
            <button
              className="h-10 w-40 bg-[#62554a] hover:bg-[#998676] text-sm text-white uppercase rounded-lg mt-5 transition-all duration-200 flex items-center justify-center"
              onClick={() => {
                if (!state.selectedAddress) {
                  alert("Choose an address");
                  return;
                }
                setStep((prev) => prev + 1);
              }}
            >
              Proceed
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>You have no addresses yet...</p>
        </div>
      )}
      <AddressDialog />
    </section>
  );
}

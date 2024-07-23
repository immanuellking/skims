"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AddressForm } from "./address-form";
import { useCart } from "@/context/cartContext";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

export function Address() {
  const { openDialog, state, deleteAddress } = useCart();
  return (
    <section className="w-full lg:w-[50%] space-y-2 lg:space-y-4">
      <div className="flex justify-between border-b border-gray-400 py-2 ">
        <h4 className="text-[#62554a] font-medium">Choose Address</h4>
        <p
          className="text-green-500 cursor-pointer"
          onClick={() => openDialog()}
        >
          Add Address
        </p>
        <AddressDialog />
      </div>

      {state.addresses.length >= 1 ? (
        <div className="space-y-4">
          {state.addresses.map((add) => (
            <div className="shadow-sm p-4" key={add.id}>
              <h3 className="text-xl font-semibold capitalize text-[#62554a]">
                {add.name}
              </h3>
              <p className="text-sm text-[#62554a]">
                {add.houseNo}, {add.street}, {add.city}, {add.state},{" "}
                {add.postalCode}
              </p>
              <p className="text-sm text-[#62554a]">{add.phoneNumber}</p>
              <div className="mt-2 space-x-4">
                <button>
                  <HiOutlinePencilSquare className="text-lg text-green-400" />
                </button>
                <button onClick={() => deleteAddress(add.id)}>
                  <HiOutlineTrash className="text-xl text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (<div>
        <p>You have no addresses yet...</p>
      </div>)}
    </section>
  );
}

function AddressDialog() {
  const { closeDialog, state } = useCart();
  return (
    <Dialog
      onOpenChange={closeDialog}
      open={state.isDialogOpen}
      modal
      defaultOpen={state.isDialogOpen}
    >
      <DialogContent className="bg-white lg:w-[40rem]">
        <DialogHeader>
          <DialogTitle className="mb-4">
            <div>
              <div className="text-[#62554a] text-xl ">Add new address</div>{" "}
              <div className="text-sm font-light text-[#ab8f80]">
                Fill in the form below to add new address.
              </div>
            </div>
          </DialogTitle>
          <DialogDescription>
            <AddressForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

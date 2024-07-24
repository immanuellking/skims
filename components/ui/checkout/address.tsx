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
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { cn } from "@/lib/utils";

export function Address() {

  const {
    state,
    openDialog,
    deleteAddress,
    setDialogStatus,
    setSelectedAddress,
    clearSelectedAddress,
  } = useCart();

  function addAddress() {
    clearSelectedAddress();
    setDialogStatus("new");
    openDialog();
  }

  function editAddress(id: string) {
    setSelectedAddress(id);
    setDialogStatus("edit");
    openDialog();
  }

  return (
    <section className="w-full lg:w-[50%] space-y-2 lg:space-y-4">
      <div className="flex justify-between border-b border-gray-400 py-2 ">
        <h4 className="text-[#62554a] font-medium">Choose Address</h4>
        <p className="text-green-500 cursor-pointer" onClick={addAddress}>
          Add Address
        </p>
      </div>

      {state.addresses.length >= 1 ? (
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4">
            {state.addresses.map((add) => (
              <div
                className={cn("shadow-sm p-4 relative", {
                  "bg-[#F3EEE5]":
                    state.selectedAddress?.id === add.id &&
                    !state.dialog.isOpen,
                })}
                key={add.id}
                onClick={() => setSelectedAddress(add.id)}
              >
                <h3 className="text-xl font-semibold capitalize text-[#62554a]">
                  {add.name}
                </h3>
                <p className="text-sm text-[#62554a]">
                  {add.houseNo}, {add.street}, {add.city}, {add.state},{" "}
                  {add.postalCode}
                </p>
                <p className="text-sm text-[#62554a]">{add.phoneNumber}</p>
                <div className="mt-2 space-x-4">
                  <button onClick={() => editAddress(add.id)}>
                    <HiOutlinePencilSquare className="text-lg text-green-400" />
                  </button>
                  <button onClick={() => deleteAddress(add.id)}>
                    <HiOutlineTrash className="text-xl text-red-500" />
                  </button>
                </div>
                <div className={cn("absolute top-4 right-4 text-lg hidden", {
                  "block": state.selectedAddress?.id === add.id &&
                  !state.dialog.isOpen,
                })}>
                  <MdOutlineCheckCircleOutline />
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-end">
            <button className="h-10 w-40 bg-[#62554a] hover:bg-[#998676] text-sm text-white uppercase rounded-lg mt-5 transition-all duration-200 flex items-center justify-center">
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

function AddressDialog() {
  const { closeDialog, state } = useCart();
  return (
    <Dialog
      onOpenChange={closeDialog}
      open={state.dialog.isOpen}
      modal
      defaultOpen={state.dialog.isOpen}
    >
      <DialogContent className="bg-white lg:w-[40rem]">
        <DialogHeader>
          <DialogTitle className="mb-4">
            <div>
              <div className="text-[#62554a] text-xl ">
                {state.dialog.status === "new" ? "Add new" : "Edit"} address
              </div>
              <div className="text-sm font-light text-[#ab8f80]">
                Fill in the form below to{" "}
                {state.dialog.status === "new" ? "add new" : "edit"} address.
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

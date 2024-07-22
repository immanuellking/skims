"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddressForm } from "./address-form";

export function Address() {
  return (
    <section className="w-[50%]">
      <div className="flex justify-between border-b border-gray-400 py-2 ">
        <h4 className="text-[#62554a] font-medium">Choose Address</h4>
        <Dialog>
          <DialogTrigger className="text-green-500">Add Address</DialogTrigger>
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
      </div>
    </section>
  );
}

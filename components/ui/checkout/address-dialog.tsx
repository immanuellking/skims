import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { AddressForm } from "./address-form";
  import { useCart } from "@/context/cartContext";

export function AddressDialog() {
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
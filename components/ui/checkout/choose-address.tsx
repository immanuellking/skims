import { useCart } from "@/context/cartContext";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

export default function ChooseAddress() {
  const { state, setSelectedAddress, setDialogStatus, openDialog } = useCart();

  function editAddress(id: string) {
    setSelectedAddress(id);
    setDialogStatus("edit");
    openDialog();
  }

  return (
    <div className="space-y-4">
      {state.addresses.map((add) => (
        <div
          className={cn("shadow-sm p-4 relative", {
            "bg-[#F3EEE5]":
              state.selectedAddress?.id === add.id && !state.dialog.isOpen,
            "hover:bg-[#f7f5f1]": state.selectedAddress?.id !== add.id,
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
            <button>
              <DeleteAlert id={add.id} />
            </button>
          </div>
          <div
            className={cn("absolute top-4 right-4 text-lg hidden", {
              block:
                state.selectedAddress?.id === add.id && !state.dialog.isOpen,
            })}
          >
            <MdOutlineCheckCircleOutline />
          </div>
        </div>
      ))}
    </div>
  );
}


function DeleteAlert({ id }: { id: string }) {
  const { deleteAddress } = useCart();
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <HiOutlineTrash className="text-xl text-red-500" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[#62554a]">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[#ab8f80]">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:bg-[#f7f5f1]">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-[#62554a] hover:bg-[#998676]"
            onClick={() => deleteAddress(id)}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

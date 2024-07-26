import { useCart } from "@/context/cartContext";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { PaystackButton } from "react-paystack";

export default function Payments() {
  const { user } = useUser();
  const { state, clearSelectedAddress, clearCart } = useCart();

  const publicKey: string = process.env
    .NEXT_PUBLIC_PAYSTACK_TEST_PUBLIC_KEY as string;

  const componentProps = {
    email: user?.primaryEmailAddress?.emailAddress || "",
    amount: state.total * 100,
    metadata: {
      name: state.selectedAddress?.name,
      phone: state.selectedAddress?.phoneNumber,
      custom_fields: [],
    },
    publicKey,
    onSuccess: () => {
      alert("Thanks for doing business with us! Come back soon!!");
      clearCart();
      clearSelectedAddress();
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <div className="">
      <h1 className="text-lg text-[#62554a] font-medium">Pay With</h1>
      <div className="flex flex-col items-center gap-y-8">
        <div className="relative w-[15rem] h-[11rem]">
          <Image src="/payment.png" alt="payment-image" fill />
        </div>
        <div className="w-full">
          <PaystackButton {...componentProps} className="w-full">
            <button className="bg-[#00C3F7] hover:bg-[rgb(0,195,247,0.8)] transition-all duration-200 ease-in w-full h-11 rounded-sm flex justify-center items-center">
              <img src="/paystack-2.svg" alt="paystack" className="w-28" />
            </button>
          </PaystackButton>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Succesful",
};

export default function Page() {
  return (
    <div className="w-full flex justify-center items-center h-[70vh] sm:h-[50vh] lg:h-[80vh]">
      <div className="flex flex-col items-center gap-8 sm:gap-10">
        <FaRegCircleCheck size={55} color="#52e248" />
        <div className="text-center space-y-2">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            Payment Successful!
          </h1>
          <p className="text-gray-600">Your payment has been completed</p>
        </div>
        <Link
          href="/"
          className="py-4 text-center w-72 bg-[#62554a] hover:bg-[#998676] text-sm text-white uppercase rounded-sm mt-2 transition-all duration-200"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

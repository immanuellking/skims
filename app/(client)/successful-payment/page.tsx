import { Metadata } from "next";
import SuccesfullPayment from "@/components/ui/checkout/succesfull-payment";

export const metadata: Metadata = {
  title: "Payment Succesful",
};

export default function Page() {
  return (
    <SuccesfullPayment />
  );
}

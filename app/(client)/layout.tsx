import type { Metadata } from "next";
import { poppins } from "@/components/ui/font";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { CartProvider } from "@/context/cartContext";
import { ClerkProvider } from "@clerk/nextjs";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: {
    template: "%s | Skims Commerce",
    default: "Skims Commerece",
  },
  description: "Skims clone/remake built with next.js & typescript by Ebube",
  metadataBase: new URL("hhttps://skims-remake.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <CartProvider>
          <body
            className={`${poppins.className} antialiased overflow-x-hidden w-full scroll-smooth`}
          >
            <Header />
            {children}
            <ToastContainer />
            <Footer />
          </body>
        </CartProvider>
      </ClerkProvider>
    </html>
  );
}

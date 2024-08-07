"use client";
import { AuthLoader } from "@/components/skeletons";
import { SignIn } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="flex justify-center items-center py-20 min-h-[85vh]">
      {!isClient ? (
        <AuthLoader />
      ) : (
        <SignIn path="/sign-in" signUpUrl="/sign-up" />
      )}
    </section>
  );
}

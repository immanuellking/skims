"use client";

import { AuthLoader } from "@/components/skeletons";
import { SignUp } from "@clerk/nextjs";
import { useState, useEffect } from "react";

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
        <SignUp path="/sign-up" signInUrl="/sign-in" />
      )}
    </section>
  );
}

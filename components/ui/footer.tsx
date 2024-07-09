"use client";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { BsChevronDown } from "react-icons/bs";
import { footer } from "@/lib/data";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <footer className="bg-[#F3EEE5] py-10 sm:py-16">
      <div className="w-[90%] lg:w-[80%] mx-auto lg:flex">
        <div className="lg:basis-[20%] hidden lg:flex flex-col items-center gap-y-4">
          <h1 className="text-[#62554a] text-2xl font-semibold uppercase">
            {footer.help.title}
          </h1>
          <ul className="text-[rgb(171,143,128)] flex flex-col items-center gap-y-2">
            {footer.help.links.map((link, idx) => (
              <li
                className="cursor-pointer hover:text-[rgb(131,96,78)]"
                key={idx}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:basis-[60%] flex flex-col items-center gap-y-4">
          <h1 className="text-[#62554a] text-xl sm:text-2xl font-semibold uppercase">
            STAY IN THE KNOW
          </h1>
          <div className="flex flex-col w-full sm:w-[90%] mx-auto items-center gap-y-4 sm:gap-y-6">
            <p className="text-[rgb(171,143,128)] text-center text-sm sm:text-base">
              Be the first one to receive new releases, special offers, and more
            </p>
            <div className="space-y-4">
              <div className="flex justify-center gap-x-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="h-10 w-[70%] sm:w-72 text-sm rounded-md px-4"
                />
                <button className="h-10 px-2 sm:px-4 bg-[#62554a] hover:bg-[#998676] text-sm text-white rounded-md">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-center text-[rgb(171,143,128)]">
                By signing up you agree to receive recurring automated marketing
                messages from SKIMS. View & Privacy
              </p>
            </div>
            <div className="text-center space-y-4">
              <h4 className="text-[rgb(171,143,128)]">
                Text <span className="text-[#62554a] font-semibold">SKIMS</span>{" "}
                to <span className="text-[#62554a] font-semibold">68805</span>{" "}
                to never miss a drop!
              </h4>
              <p className="text-xs text-[rgb(171,143,128)]">
                By signing up via text, you agree to receive recurring automated
                promotional and personalized marketing text messages (e.g. cart
                reminders) from SKIMS at the cell number used when signing up.
                Consent is not a condition of any purchase. Reply HELP for help
                and STOP to cancel. Msg frequency varies. Msg & data rates may
                apply. View Terms & Privacy.
              </p>
            </div>
            <div className="flex justify-center text-2xl gap-x-4 mt-4 text-[#62554a]">
              <FiFacebook />
              <FiInstagram />
              <FaXTwitter />
              <FiYoutube />
            </div>
          </div>
        </div>

        <div className="lg:basis-[20%] hidden lg:flex flex-col items-center gap-y-4">
          <h1 className="text-[#62554a] text-2xl font-semibold uppercase">
            {footer.more.title}
          </h1>
          <ul className="text-[rgb(171,143,128)] flex flex-col items-center gap-y-2">
            {footer.more.links.map((link, idx) => (
              <li
                className="cursor-pointer hover:text-[rgb(131,96,78)]"
                key={idx}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 lg:hidden space-y-4">
          <div className="border-b-[1px] py-2 border-black overflow-hidden space-y-2">
            <div
              className="flex justify-between items-center"
              onClick={() => setOpen(!open)}
            >
              <h1 className="text-[#62554a] uppercase">{footer.help.title}</h1>
              <BsChevronDown
                className={cn("text-base", { "rotate-180": open })}
              />
            </div>
            <ul
              className={cn(
                "text-[rgb(171,143,128)] flex flex-col items-center gap-y-2",
                { "h-0 opacity-0": !open, "h-auto opacity-100 py-2": open }
              )}
            >
              {footer.help.links.map((link, idx) => (
                <li
                  className="cursor-pointer hover:text-[rgb(131,96,78)]"
                  key={idx}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-b-[1px] py-2 border-black overflow-hidden space-y-2">
            <div
              className="flex justify-between items-center"
              onClick={() => setMoreOpen(!moreOpen)}
            >
              <h1 className="text-[#62554a] uppercase">{footer.more.title}</h1>
              <BsChevronDown
                className={cn("text-base", { "rotate-180": moreOpen })}
              />
            </div>
            <ul
              className={cn(
                "text-[rgb(171,143,128)] flex flex-col items-center gap-y-2",
                { "h-0 opacity-0": !moreOpen, "h-auto opacity-100 py-2": moreOpen }
              )}
            >
              {footer.more.links.map((link, idx) => (
                <li
                  className="cursor-pointer hover:text-[rgb(131,96,78)]"
                  key={idx}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

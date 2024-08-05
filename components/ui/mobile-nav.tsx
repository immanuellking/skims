import { dropdown } from "@/lib/data";
import { cn } from "@/lib/utils";
import { HiOutlineX } from "react-icons/hi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import Image from "next/image";

export const MobileNav = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) => {
  return (
    <div
      className={cn(
        "lg:hidden fixed top-0 bottom-0 right-[-1000px] w-full h-full bg-gray-100 z-50 px-5 py-8 space-y-8 sm:space-y-12 transition-all duration-300 ease-in",
        {
          "right-0": open,
        }
      )}
    >
      <div className="w-full flex justify-end">
        <HiOutlineX className="text-3xl" onClick={() => setOpen(false)} />
      </div>
      <div className="space-y-6 sm:space-y-4">
        {dropdown.map((item, index) =>
          item.linksContent ? (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value={`item-${index}`} className="border-black">
                <AccordionTrigger className="text-base sm:text-lg text-black">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="space-y-2 text-black">
                  <Accordion type="single" collapsible>
                    {item.linksContent.map((link, idx) => (
                      <AccordionItem
                        key={idx}
                        value={`sub-item-${index}-${idx}`}
                        className="border-black"
                      >
                        <AccordionTrigger className="text-sm text-black">
                          {link.tab}
                        </AccordionTrigger>
                        <AccordionContent className="space-y-2 text-black">
                          {link.links.map((subLink, subIndex) => (
                            <p
                              key={subIndex}
                              className="text-xs cursor-pointer hover:text-[#AB8F80]"
                            >
                              {subLink}
                            </p>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <div className="flex flex-col gap-4 py-4">
                    {item.imageContent &&
                      item.imageContent.map(
                        (
                          item: {
                            src: string;
                            header: string;
                            subText?: string;
                          },
                          idx
                        ) => (
                          <div className="gap-x-2 flex" key={idx}>
                            <div>
                              <Image
                                src={item.src}
                                alt="new-in-image"
                                width={200}
                                height={235}
                              />
                            </div>
                            <div>
                              <h4 className="text-base font-medium text-left">
                                {item.header}
                              </h4>
                              {item.subText ? (
                                <p className=" text-sm text-left text-gray-500">
                                  {item.subText}
                                </p>
                              ) : null}
                            </div>
                          </div>
                        )
                      )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <div key={index} className="border-black border-b py-4">
              <div className="text-base sm:text-lg text-black">
                {item.title}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

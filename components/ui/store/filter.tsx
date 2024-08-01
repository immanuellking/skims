"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { filterData } from "@/lib/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

const FormSchema = z.object({
  type: z.string().optional(),
  material: z.string().optional(),
  size: z.string().optional(),
});

export default function Filter() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: "",
      material: "",
      size: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    // alert("work")
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onChange={form.handleSubmit(onSubmit)} className="space-y-2">
          {filterData.map((filter, index) => (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value={`item-${index}`} className="border-black">
                <AccordionTrigger className="text-base text-black">
                  {filter.tab}
                </AccordionTrigger>
                <AccordionContent className="space-y-2 text-black">
                  {filter.checks.map((check, checkIndex) => (
                    <FormField
                      key={checkIndex}
                      control={form.control}
                      name={
                        filter.tab.toLowerCase() as "type" | "material" | "size"
                      } // This sets the name based on the tab type, material, or size
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value === check}
                              onCheckedChange={(value) =>
                                field.onChange(value ? check : "")
                              }
                            />
                          </FormControl>
                          <FormLabel className="text-sm">{check}</FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </form>
      </Form>
    </div>
  );
}

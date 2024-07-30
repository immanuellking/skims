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
  check: z.record(z.boolean()).optional(),
});

export default function Filter() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      check: {},
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
                      name={`check.${check}`}
                      render={({ field }) => (
                        <FormItem
                          key={checkIndex}
                          className="flex flex-row items-center space-x-2 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value || false}
                              onCheckedChange={(value) => field.onChange(value)}
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
          {/* <Button type="submit">Apply Filters</Button> */}
        </form>
      </Form>
    </div>
  );
}

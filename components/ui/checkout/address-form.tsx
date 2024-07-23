"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/cartContext";
import { getUID } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 5 characters.",
  }),
  houseNo: z.string().min(1, {
    message: "House No is required.",
  }),
  street: z.string().min(1, {
    message: "Street is required.",
  }),
  city: z.string().min(2, {
    message: "City is required.",
  }),
  state: z.string().min(2, {
    message: "State is required.",
  }),
  postalCode: z.string().min(4, {
    message: "Postal Code is required.",
  }),
  phoneNumber: z.string().min(8, {
    message: "Phone Number is required.",
  }),
});

export function AddressForm() {
  const { addAddress, closeDialog } = useCart();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      houseNo: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addAddress({ id: getUID(), ...values });
    form.reset();
    closeDialog();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <span className="grid grid-cols-1 gap-4 lg:gap-x-8 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#62554a]">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Name"
                    className="focus-visible:ring-[#62554a]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="houseNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#62554a]">House No</FormLabel>
                <FormControl>
                  <Input
                    placeholder="House No"
                    className="focus-visible:ring-[#62554a]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#62554a]">Street</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Street"
                    className="focus-visible:ring-[#62554a]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#62554a]">City</FormLabel>
                <FormControl>
                  <Input
                    placeholder="City"
                    className="focus-visible:ring-[#62554a]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#62554a]">State</FormLabel>
                <FormControl>
                  <Input
                    placeholder="State"
                    className="focus-visible:ring-[#62554a]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#62554a]">Postal Code</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Postal Code"
                    className="focus-visible:ring-[#62554a]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#62554a]">Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Phone Number"
                    className="focus-visible:ring-[#62554a]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </span>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

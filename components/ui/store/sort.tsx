"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function Sort() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("price", value);
      router.replace(`${pathname}?${params.toString()}`);
    } else {
      params.delete("price");
    }
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[100px] bg-[#AB8F80] hover:bg-[#AB8F80]/80 focus:outline-none focus:border-none focus:ring-0 text-white font-medium">
        <SelectValue placeholder="Sort" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort</SelectLabel>
          <SelectItem value="low-to-high">Price, Low to High</SelectItem>
          <SelectItem value="high-to-Low">Price, High to Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

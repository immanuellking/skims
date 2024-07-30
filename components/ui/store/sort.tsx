import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Sort() {
  return (
    <Select>
      <SelectTrigger className="w-[100px] bg-[#AB8F80] hover:bg-[#AB8F80]/80 focus:outline-none focus:border-none focus:ring-0 text-white font-medium">
        <SelectValue placeholder="Sort" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort</SelectLabel>
          <SelectItem value="low-to-high">Price, Low to High</SelectItem>
          <SelectItem value="High-to-Low">Price, High to Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

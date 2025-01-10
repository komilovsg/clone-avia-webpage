import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function PageLimits() {
  return (
    <div className="flex items-center gap-3 text-nowrap">
      <div>Элементов на странице</div>
      <Select>
        <SelectTrigger className="w-[90px]">
          <SelectValue placeholder="20" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default PageLimits;

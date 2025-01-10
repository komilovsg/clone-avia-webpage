import React from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"

const OrderFilter: React.FC = () => {
    const [date, setDate] = React.useState<Date>()

  return (
    <div className="bg-card rounded-lg shadow-md border p-4 text-sm">
      <h2 className="font-bold mb-4">Фильтр</h2>
      <div className="mb-4">
        <Input type="text" placeholder="Введите город, имя или локатор" className="border rounded w-full py-2 px-3 font-normal"/>
      </div>
      <div className="mb-4 font-normal flex flex-col gap-2">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms1" />
        <Label htmlFor="terms1">Забронирован</Label>
      </div>
        <div className="flex items-center space-x-2">
        <Checkbox id="terms2" />
        <Label htmlFor="terms2">Оплачен</Label>
      </div>
        <div className="flex items-center space-x-2">
        <Checkbox id="terms3" />
        <Label htmlFor="terms3">Выписан</Label>
      </div>
        <div className="flex items-center space-x-2">
        <Checkbox id="terms4" />
        <Label htmlFor="terms4">Отменён</Label>
      </div>
        <div className="flex items-center space-x-2">
        <Checkbox id="terms5" />
        <Label htmlFor="terms5">Возвращён</Label>
      </div>
      </div>
      <div className="mb-4 font-normal">
        <label className="block mb-1">Дата создание с</label>
        <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>дд.мм.гггг</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
      </div>
      <div className="mb-4 font-normal">
        <label className="block mb-1">Дата создание по</label>
        <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>дд.мм.гггг</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
      </div>
      <button className="bg-blue-500 text-white w-full py-2 rounded font-normal">Отфильтровать</button>
    </div>
  );
};

export default OrderFilter;

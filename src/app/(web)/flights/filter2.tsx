import {
  ChevronDownIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
  ThumbsUpIcon,
} from "lucide-react";
import { GiStaryu } from "react-icons/gi";
import { TbClockCheck } from "react-icons/tb";
import { Button } from "../../../components/ui/button";
import { cn } from "@/lib/utils";

const buttonsList = [
  {
    title: "Рекомендуемые",
    price: "4718 tjs",
    icon: <ThumbsUpIcon size={28} />,
  },
  {
    title: "Самый дешевый",
    price: "3140 tjs",
    icon: <SparklesIcon size={28} />,
  },
  { title: "Самый лучший", price: "5344 tjs", icon: <GiStaryu size={28} /> },
  {
    title: "Самый быстрый",
    price: "5976 tjs",
    icon: <TbClockCheck size={28} />,
  },
];
export default function FlightFilter2() {
  return (
    <div>
      <div className="grid grid-cols-4">
        {buttonsList.map((item, key) => (
          <Button
            variant="outline"
            key={key}
            className={cn([
              "ml-[-1px] h-[46px] gap-4 py-2",
              key == 0
                ? "rounded-none rounded-s-md"
                : key == buttonsList.length - 1
                  ? "rounded-none rounded-e-md"
                  : "rounded-none",
            ])}
          >
            <div className="opacity-40">{item.icon}</div>
            <div>
              <div className="text-sm font-light leading-tight">
                {item.title}
              </div>
              <div className="text-start  text-sm font-medium leading-tight">
                {item.price}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

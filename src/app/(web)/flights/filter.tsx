import {
  ChevronDownIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
  ThumbsUpIcon,
} from "lucide-react";
import { GiStaryu } from "react-icons/gi";
import { TbClockCheck } from "react-icons/tb";
import { Button } from "../../../components/ui/button";

const buttonsList = [
  {
    title: "Рекомендуемые",
    price: "4718 tjs",
    icon: <ThumbsUpIcon size={32} />,
  },
  {
    title: "Самый дешевый",
    price: "3140 tjs",
    icon: <SparklesIcon size={32} />,
  },
  { title: "Самый лучший", price: "5344 tjs", icon: <GiStaryu size={32} /> },
  {
    title: "Самый быстрый",
    price: "5976 tjs",
    icon: <TbClockCheck size={32} />,
  },
];
function FlightFilter() {
  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        <Button
          variant="outline"
          className="h-full w-full justify-center gap-4 text-sm font-normal"
        >
          <SlidersHorizontalIcon size={20} />
          <div>Фильтры</div>
          <ChevronDownIcon size={20} />
        </Button>
        {buttonsList.map((item, key) => (
          <Button
            variant="outline"
            key={key}
            className="flex h-[46px] flex-col items-start py-0"
          >
            {/* {item.icon} */}
            <div className="text-sm font-light leading-tight">{item.title}</div>
            <div className="text-sm  font-medium leading-tight">
              {item.price}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default FlightFilter;

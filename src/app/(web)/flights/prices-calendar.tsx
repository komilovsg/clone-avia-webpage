import { CalendarRangeIcon } from "lucide-react";
import React, { Fragment } from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const data = [
  { date: "17 апрель, ср", price: "894.7 TJS" },
  { date: "18 апрель, чт", price: "4428.3 TJS" },
  { date: "19 апрель, пт", price: "1782.7 TJS" },
  { date: "20 апрель, сб", price: "4207.62 TJS" },
  { date: "21 апрель, вс", price: "1699.7 TJS" },
  { date: "22 апрель, пн", price: "1427.7 TJS" },
  { date: "23 апрель, вт", price: "925.7 TJS" },
  // { date: "25 апрель, чт", price: "4077.71 TJS" },
];
function PricesCalendar() {
  return (
    <div className="mt-3 flex items-center justify-between">
      <div className="me-3 flex items-center gap-2 text-sm">
        <CalendarRangeIcon size={20} />
        <div>Календарь цен</div>
      </div>
      {data.map((item, key) => {
        return (
          <Fragment key={key}>
            <Button
              className="flex h-11 flex-col items-center justify-center px-2"
              variant="ghost"
            >
              <div className="text-xs text-muted-foreground">{item.date}</div>
              <div className="text-sm">{item.price}</div>
            </Button>
            {key < data.length - 1 && <Separator orientation="vertical" />}
          </Fragment>
        );
      })}
      <Button
        variant="outline"
        size="sm"
        className="ml-4 h-8 px-4 text-xs text-muted-foreground"
      >
        Ещё варианты
      </Button>
    </div>
  );
}

export default PricesCalendar;

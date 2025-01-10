import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import FlightBarcode from "./barCode";

const ticketData = [
  {
    routes: [
      {
        from: "DYU",
        from_city: "Душанбе",
        to: "VKO",
        to_city: "Москва, Внуково",
        date_from: "19 апр, пт",
        time_from: "08:00",
        date_to: "19 апрель, пт",
        time_to: "10:40",
        duration: "4ч 40м",
      },
    ],
    price: "3016.9",
    cashback: "114",
    currency: "TJS",
    airPlane: "Somon Air",
    airPlaneIcon: "",
  },
  {
    routes: [
      {
        from: "DYU",
        from_city: "Душанбе",
        to: "VKO",
        to_city: "Москва, Внуково",
        date_from: "19 апр, пт",
        time_from: "08:00",
        date_to: "19 апрель, пт",
        time_to: "10:40",
        duration: "4ч 40м",
      },
      {
        from: "VKO",
        from_city: "Москва, Внуково",
        to: "DYU",
        to_city: "Душанбе",
        date_from: "20 апр, сб",
        time_from: "12:00",
        date_to: "20 апрель, сб",
        time_to: "17:50",
        duration: "3ч 50м",
      },
    ],
    price: "3016.9",
    cashback: "",
    currency: "TJS",
    airPlane: "Somon Air",
    airPlaneIcon: "",
  },
  {
    routes: [
      {
        from: "DYU",
        from_city: "Душанбе",
        to: "VKO",
        to_city: "Москва, Внуково",
        date_from: "19 апр, пт",
        time_from: "08:00",
        date_to: "19 апрель, пт",
        time_to: "10:40",
        duration: "4ч 40м",
      },
    ],
    price: "3016.9",
    cashback: "",
    currency: "TJS",
    airPlane: "Somon Air",
    airPlaneIcon: "",
  },
];

function FlightList() {
  return (
    <div className="grid gap-6">
      {ticketData.map((item, key) => (
        <div key={key} className="relative">
          <div className="grid grid-cols-[auto_300px]">
            <div className=" flex min-h-60 flex-col justify-between overflow-hidden rounded-2xl bg-white">
              <div className="flex h-10 items-center gap-3 bg-yellow-400 px-4 font-semibold">
                <Image
                  src="/images/airplanes/somon-air2.svg"
                  alt=""
                  width={26}
                  height={26}
                  priority
                />
                {item.airPlane}
              </div>
              <div>
                <div className="grid">
                  {item.routes.map(
                    (
                      route: {
                        from: string;
                        from_city: string;
                        to: string;
                        to_city: string;
                        date_from: string;
                        time_from: string;
                        date_to: string;
                        time_to: string;
                        duration: string;
                      },
                      key: number,
                    ) => (
                      <div
                        key={key}
                        className={cn([
                          "relative grid",
                          item.routes.length > 1 && key > 0
                            ? "border-t border-dashed"
                            : "",
                        ])}
                      >
                        <div className="grid grid-cols-[auto_200px] py-5">
                          <div className="flex flex-col items-center justify-center">
                            <div className="grid w-full grid-cols-[33%_auto_33%]">
                              <div className="text-right text-sm opacity-75">
                                {route.date_from}
                              </div>
                              <div className="text-center text-sm opacity-60">
                                {route.duration}
                              </div>
                              <div className="text-sm opacity-75">
                                {route.date_to}
                              </div>
                            </div>
                            <div className="grid w-full grid-cols-[33%_auto_33%]">
                              <div className="text-right text-2xl font-bold">
                                {route.time_from}
                              </div>
                              <div className="relative text-center">
                                <ArrowRightIcon
                                  className="absolute right-1 top-[50%] mt-[-8px] text-foreground"
                                  size={15}
                                />
                                <div className="absolute left-2 top-[50%] mt-[-5px] h-2 w-2 rounded-full bg-foreground" />
                                <div className="absolute left-3 right-3 top-[50%] mt-[-1px] border-t border-dashed border-t-foreground" />
                              </div>
                              <div className="text-2xl font-bold">
                                {route.time_to}
                              </div>
                            </div>
                            <div className="grid w-full grid-cols-[33%_auto_33%]">
                              <div className="flex justify-end gap-2 font-medium">
                                {/* <PlaneTakeoffIcon size={20} /> */}
                                <div>
                                  {route.from_city}, {route.from}
                                </div>
                              </div>
                              <div className="text-center text-sm opacity-60">
                                Без пересадок
                              </div>
                              <div className="flex gap-2 font-medium">
                                <div>
                                  {route.to_city}, {route.to}
                                </div>
                                {/* <PlaneLandingIcon size={20} /> */}
                              </div>
                            </div>
                          </div>
                          <div className="ml-10 flex flex-col items-start justify-center text-sm">
                            <div>+9 мест</div>
                            <div>Багаж: 1 место</div>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="flex h-10 items-center bg-yellow-400 px-4 text-xs">
                {item.airPlane} валидирует перелёты
              </div>
            </div>
            <div className="relative flex flex-col justify-between  rounded-2xl bg-white">
              <div className="absolute bottom-3 left-0 top-3 ml-[-1px] border-l border-dashed border-gray-200" />
              <div className="flex h-10 items-center justify-center rounded-t-2xl bg-yellow-400 px-4 font-semibold">
                Эконом класс
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <div className="grid">
                  <div className="text-3xl font-bold">
                    {item.price} {item.currency}
                  </div>
                  <div className="flex justify-center">
                    {item.cashback !== "" && (
                      <div className="rounded-full bg-green-500 px-2 text-sm text-white">
                        <b>114 tjs</b> кешбэк
                      </div>
                    )}
                  </div>
                </div>
                <Button className="min-w-[140px]" variant="outline">
                  Выбрать
                </Button>
              </div>
              <div className="relative  flex h-10 items-center justify-center rounded-b-2xl bg-yellow-400 px-4 font-semibold">
                <FlightBarcode />
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-0 z-[-1] grid h-full w-full grid-cols-[auto_300px]">
            <div className="h-full w-full rounded-2xl shadow-lg" />
            <div className="h-full w-full rounded-2xl shadow-lg" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlightList;

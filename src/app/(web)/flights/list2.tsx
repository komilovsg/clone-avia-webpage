"use client";

import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import FlightBarcode from "./barCode";
import FlightDitailsDialog from "./flight-details-dialog";
import { useDialog } from "@/lib/useDialog";

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
    price: "2945.9",
    cashback: "114",
    currency: "TJS",
    airPlane: "Somon Air LLC",
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
    price: "2945.9",
    cashback: "114",
    currency: "TJS",
    airPlane: "Somon Air LLC",
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

function FlightList2() {
  const { onOpen, setData } = useDialog();
  return (
    <>
      <div className="grid gap-6">
        {ticketData.map((item, key) => (
          <div
            key={key}
            className="relative"
            onClick={() => {
              setData(item);
              onOpen();
            }}
          >
            <div className="grid cursor-pointer grid-cols-[auto_250px]">
              <div className=" flex min-h-60 flex-col justify-between overflow-hidden rounded-2xl bg-white dark:bg-card">
                <div className="flex h-10 items-center justify-between bg-yellow-400 px-3 dark:bg-accent">
                  <div className="flex items-center gap-2 font-semibold">
                    <Image
                      src="/images/airplanes/somon-air2.svg"
                      alt=""
                      width={24}
                      height={24}
                      priority
                    />
                    {item.airPlane}
                  </div>
                  {key == 0 && (
                    <div className="rounded-full bg-green-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                      Самый дешевый
                    </div>
                  )}
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
                          <div className="grid  py-5">
                            <div className="flex flex-col items-center justify-center">
                              <div className="grid w-full grid-cols-[33%_auto_33%]">
                                <div className="text-right text-sm opacity-60">
                                  {route.date_from}
                                </div>
                                <div className="text-center text-sm opacity-60">
                                  {route.duration}
                                </div>
                                <div className="text-sm opacity-60">
                                  {route.date_to}
                                </div>
                              </div>
                              <div className="grid w-full grid-cols-[33%_auto_33%]">
                                <div className="text-right text-2xl font-bold">
                                  {route.time_from}
                                </div>
                                <div className="relative text-center">
                                  {/* <ArrowRightIcon
                                  className="absolute right-1 top-[50%] mt-[-8px] text-foreground"
                                  size={15}
                                /> */}
                                  <div className="absolute left-2 top-[50%] mt-[-5px] h-2.5 w-2.5 rounded-full border-2 border-gray-300 bg-white dark:border-gray-500 dark:bg-card" />
                                  <div className="absolute left-[16px] right-3 top-[50%] mt-[-1px] h-[2px]  bg-gray-300 dark:bg-gray-500" />
                                  <div className="absolute right-2 top-[50%] mt-[-5px] h-2.5 w-2.5 rounded-full border-2 border-gray-300 bg-white dark:border-gray-500 dark:bg-card" />
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
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
                <div className="flex h-10 items-center justify-between bg-yellow-400 px-3 text-xs dark:bg-accent">
                  <div>{item.airPlane} валидирует перелёты</div>
                  <div className="ml-10 flex items-center gap-2 text-sm">
                    <div>+9 мест,</div>
                    <div>Багаж: 1 место</div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col justify-between  rounded-2xl bg-white dark:bg-card">
                <div className="absolute bottom-[15px] left-[0] top-[15px] z-10 ml-[-0.5px] border-l border-dashed border-gray-500" />
                <div className="flex h-10 items-center justify-center rounded-t-2xl bg-yellow-400 px-4 font-semibold dark:bg-accent">
                  Эконом класс
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                  <div className="grid">
                    <div className="text-2xl font-bold">
                      {item.price} {item.currency}
                    </div>
                    <div className="flex justify-center">
                      {item.cashback !== "" && (
                        <div className="rounded-full bg-green-600 px-2 py-[1px] text-sm text-white">
                          <b>114 tjs</b> кешбэк
                        </div>
                      )}
                    </div>
                  </div>
                  <Button className="min-w-[130px] text-sm" size="sm">
                    Выбрать
                  </Button>
                </div>
                <div className="relative  flex h-10 items-center justify-center rounded-b-2xl bg-yellow-400 px-4 dark:bg-accent">
                  <FlightBarcode />
                </div>
              </div>
            </div>
            <div className="absolute left-0 top-0 z-[-1] grid h-full w-full grid-cols-[auto_250px]">
              <div className="h-full w-full rounded-2xl shadow-md" />
              <div className="h-full w-full rounded-2xl shadow-md" />
            </div>
          </div>
        ))}
      </div>
      <FlightDitailsDialog />
    </>
  );
}

export default FlightList2;

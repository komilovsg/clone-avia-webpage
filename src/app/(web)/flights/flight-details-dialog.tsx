import { useDialog } from "@/lib/useDialog";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { IoAirplane } from "react-icons/io5";
import { Separator } from "../../../components/ui/separator";
import Image from "next/image";
import { GiftIcon } from "lucide-react";
import Link from "next/link";

function FlightDitailsDialog() {
  const { isOpen, onClose, data = {} } = useDialog();
  const { routes = [] } = data;
  console.log(data);
  return (
    <Dialog
      onOpenChange={onClose}
      open={isOpen}
      modal={true}
      defaultOpen={isOpen}
    >
      <DialogContent
        className={
          "max-h-screen overflow-y-auto  bg-card px-0 sm:min-w-[780px]"
        }
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {routes.length > 0 && (
          <div className="grid gap-6 px-9 py-4">
            {routes.map((item: any, key: number) => {
              return (
                <div key={key} className="overflow-hidden rounded-xl border">
                  <div className="p-6">
                    <div className="flex gap-3">
                      <IoAirplane className="mt-1" size={22} />
                      <div>
                        <div className="text-2xl font-bold">
                          {item?.from_city}
                          {" - "}
                          {item?.to_city}
                        </div>
                        <div className="text-muted-foreground">
                          {item?.date_to}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="m-6 flex gap-5">
                    <div className="relative px-3">
                      <div className="absolute bottom-4 left-3 top-4 w-0.5 bg-gray-300 dark:bg-gray-500" />
                      <div className="absolute left-2 top-4 h-2.5 w-2.5 rounded-full border-2 border-gray-300 bg-white dark:border-gray-500 dark:bg-card" />
                      <div className="absolute bottom-4 left-2  h-2.5 w-2.5 rounded-full border-2 border-gray-300 bg-white dark:border-gray-500 dark:bg-card" />
                    </div>
                    <div className="grid gap-6">
                      <div>
                        <div className="font-medium">{item?.time_from}</div>
                        <div className="text-sm text-muted-foreground">
                          {item?.date_from}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">{item?.time_to}</div>
                        <div className="text-sm text-muted-foreground">
                          {item?.date_to}
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-6">
                      <div>
                        <div className="font-medium">{item?.from_city}</div>
                        <div className="text-sm text-muted-foreground">
                          {item?.from_city} ({item?.from})
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">{item?.to_city}</div>
                        <div className="text-sm text-muted-foreground">
                          {item?.to_city} ({item?.to})
                        </div>
                      </div>
                    </div>
                    <div className="grid flex-1 gap-6 text-right">
                      <div>
                        <div className="flex justify-end gap-2">
                          <Image
                            src="/images/airplanes/somon-air2.svg"
                            alt=""
                            width={22}
                            height={22}
                            priority
                          />
                          <div className="font-medium">
                            Авиакомпания {data?.airPlane}
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Рейс SZ 215, Boeing 737-800
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">
                          в пути {item?.duration}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Эконом (O)
                        </div>
                        <div className="text-sm text-green-600">
                          Без пересадки
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between bg-accent p-4 text-sm">
                    <div>+9 мест, Багаж: 1 место</div>
                    <div className="text-xs text-muted-foreground">
                      Время вылета и прилета местное
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <DialogFooter className="items-center border-t px-9 pb-2 pt-9 sm:justify-between">
          <div className="flex items-center gap-2">
            <GiftIcon />
            <div className="text-xs text-muted-foreground">
              <div>купи билет онлайн</div>
              <div>получи кэшбек и бонус</div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-2xl font-semibold">
              {data?.price}
              {data?.currency}
            </div>
            <Button onClick={onClose} size="lg" asChild>
              <Link href="/booking">Оформить бронирование</Link>
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FlightDitailsDialog;

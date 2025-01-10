"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTheme } from "next-themes";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import * as React from "react";

export default function Reports() {
  const getTextColor = (balance: string) => {
    const numericBalance = parseFloat(
      balance.replace("TJS", "").replace(",", "").trim(),
    );

    return numericBalance >= 0
      ? "text-green-500 text-sm font-normal"
      : "text-red-500 text-sm font-normal";
  };

  const transactions = [
    {
      orderNumber: " ",
      date: "23.05.24",
      transaction: "1.0 TJS",
      balance: "6 126.1 TJS",
      description: "Пополнение баланса через Vasl",
    },
    {
      orderNumber: " ",
      date: "07.05.24",
      transaction: "1.0 TJS",
      balance: "6 125.1 TJS",
      description: "Комментарии добавлены, тестируем",
    },
    {
      orderNumber: "TJK-17142087629632",
      date: "03.05.24",
      transaction: "4 400.0 TJS",
      balance: "6 123.1 TJS",
      description: "Возврат средств после осуществления возврата заказа",
    },
    {
      orderNumber: "TJK-17142087629632",
      date: "27.04.24",
      transaction: "-4 400.0 TJS",
      balance: "1 723.1 TJS",
      description:
        "Душанбе (DYU) -> Тбилиси (TBS) -> Тбилиси (TBS) -> Душанбе (DYU)",
    },
    {
      orderNumber: "TJK-17107406325917",
      date: "27.03.24",
      transaction: "3 673.6 TJS",
      balance: "6 123.1 TJS",
      description: "Возврат средств после осуществления возврата заказа",
    },
    {
      orderNumber: " ",
      date: "25.03.24",
      transaction: "1.0 TJS",
      balance: "2 449.5 TJS",
      description: "Пополнение баланса через Vasl",
    },
    {
      orderNumber: " ",
      date: "25.03.24",
      transaction: "1.0 TJS",
      balance: "2 448.5 TJS",
      description: "Пополнение баланса через Vasl",
    },
    {
      orderNumber: " ",
      date: "25.03.24",
      transaction: "1.0 TJS",
      balance: "2 447.5 TJS",
      description: "Пополнение баланса через Vasl",
    },
    {
      orderNumber: " ",
      date: "25.03.24",
      transaction: "1.0 TJS",
      balance: "2 446.5 TJS",
      description: "Пополнение баланса через Vasl",
    },
    {
      orderNumber: "TJK-17107401838739",
      date: "18.03.24",
      transaction: "2 435.3 TJS",
      balance: "2 445.5 TJS",
      description: "Возврат средств после осуществления возврата заказа",
    },
    {
      orderNumber: " ",
      date: "18.03.24",
      transaction: "10.0 TJS",
      balance: "10.2 TJS",
      description: "Баланс пополнил админ - Admin",
    },
    {
      orderNumber: " ",
      date: "18.03.24",
      transaction: "50.0 TJS",
      balance: "0.2 TJS",
      description: "Баланс пополнил админ - Admin",
    },
    {
      orderNumber: "TJK-17107406325917",
      date: "18.03.24",
      transaction: "-3 673.6 TJS",
      balance: "-49.8 TJS",
      description: "Душанбе (DYU) -> Стамбул Международный Аэропорт (IST)",
    },
    {
      orderNumber: "TJK-17107401838739",
      date: "18.03.24",
      transaction: "-2 435.3 TJS",
      balance: "3 623.8 TJS",
      description: "Душанбе (DYU) -> Дубай (DXB)",
    },
    {
      orderNumber: " ",
      date: "18.03.24",
      transaction: "6 500.0 TJS",
      balance: "6 059.1 TJS",
      description: "Баланс пополнил админ - Admin",
    },
  ];
  const { theme } = useTheme();
  const [date, setDate] = React.useState<Date>();

  return (
    <section className="mt-52 md:mt-40">
      <div className="container mx-auto flex flex-wrap justify-center px-5">
        <div className="-m-4 flex w-full flex-wrap">
          <div className="w-full p-4 text-center lg:w-1/2">
            <h3>Отчетность</h3>
            <hr />
            <div className="flex items-center justify-between text-sm font-normal">
              <div
                className={`mt-5 flex flex-col gap-5 ${theme === "dark" ? "text-white" : "text-black"}`}
              >
                <button
                  className={`rounded-sm border px-11 py-2 hover:bg-orange-600  ${theme === "dark" ? "bg-orange-400 text-white" : "bg-gray-600 text-white"}`}
                >
                  Торанзакции
                </button>
                <button
                  className={`rounded-sm border px-11 py-2 hover:bg-gray-600 hover:text-white ${theme === "dark" ? "bg-card text-white" : "bg-white text-black"}`}
                >
                  Штрафы
                </button>
                <button
                  className={`rounded-sm border px-11 py-2 hover:bg-gray-600 hover:text-white ${theme === "dark" ? "bg-card text-white" : "bg-white text-black"}`}
                  disabled
                >
                  Кредитный лимит
                </button>
              </div>
              <div className="mt-5 flex flex-col gap-5">
                <p className="py-2 font-bold text-primary">6 126.1</p>
                <p className="py-2">0</p>
                <p className="py-2">2 800.0</p>
              </div>
            </div>
          </div>

          <div className="w-full p-4 text-center lg:w-1/2">
            <h3>Поиск операции</h3>
            <hr />
            <div className=" flex flex-col items-center justify-between gap-5 text-sm font-normal">
              <div className="flex w-full flex-col text-left">
                <label htmlFor="text" className="mt-3">
                  Дата с
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground",
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
                <label htmlFor="text" className="mt-5">
                  Дата по
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground",
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
                <label htmlFor="text" className="mt-5">
                  Номер заказа
                </label>
                <input type="text" className="rounded-sm border bg-card p-2" />
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-2 text-xs md:flex-row">
                <button className="w-full rounded-sm border bg-blue-500 py-2 text-white opacity-30">
                  Очистить
                </button>
                <button className="w-full rounded-sm border bg-orange-400 py-2 text-white">
                  Выгрузить отчёт
                </button>
                <button className="w-full rounded-sm border bg-orange-400 py-2 text-white">
                  Найти
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table className="container mx-auto mt-52 border bg-card md:mt-40">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] bg-primary text-white">
              Номер заказа
            </TableHead>
            <TableHead className="border-l bg-primary text-white">
              Дата
            </TableHead>
            <TableHead className="border-l bg-primary text-white">
              Транзакции
            </TableHead>
            <TableHead className="border-l bg-primary text-right text-white">
              Остаток
            </TableHead>
            <TableHead className="border-l bg-primary text-right text-white">
              Описание
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell className="w-[200px] font-bold">
                {transaction.orderNumber}
              </TableCell>
              <TableCell className="text-sm font-normal">
                {transaction.date}
              </TableCell>
              <TableCell className={getTextColor(transaction.balance)}>
                {transaction.transaction}
              </TableCell>
              <TableCell className="text-right text-sm font-normal">
                {transaction.balance}
              </TableCell>
              <TableCell className="text-right text-sm font-normal">
                {transaction.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

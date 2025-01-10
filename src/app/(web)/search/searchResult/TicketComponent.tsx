// TicketComponent.tsx
"use client";

import React, { useState } from "react";
import { PiArrowFatLinesUpBold } from "react-icons/pi";
import { RiExchangeDollarLine } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { LuDownload } from "react-icons/lu";
import { IoDocumentAttachOutline } from "react-icons/io5";
import LoadingComponent from "../loadingForSearch/LoadingComponent";

interface TicketProps {
  route: string;
  name: string;
  createdDate: string;
  price: string;
  status: string;
  isCancelled: boolean;
  isLoading: boolean;
}

const TicketComponent: React.FC<TicketProps> = ({
  route,
  name,
  createdDate,
  price,
  status,
  isCancelled,
  isLoading,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [theme, setTheme] = useState("light"); // Assuming you have a way to determine the theme

  const toggleExpansion = () => setExpanded(!expanded);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="mb-4 rounded-lg border bg-card p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-bold">{route}</h3>
          <p className="text-xs">{name}</p>
          <p className="text-xs text-gray-500">Создан: {createdDate}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold">{price} TJS</p>
          <p
            className={`text-sm ${isCancelled ? "text-red-500" : "text-green-500"}`}
          >
            {status}
          </p>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between border-t">
        <div className=""></div>
        <div className="relative">
          <button
            className="mt-2 text-lg focus:outline-none"
            onClick={toggleExpansion}
          >
            {expanded ? (
              <PiArrowFatLinesUpBold
                className={`h-6 w-6 ${theme === "dark" ? "text-green-600" : "text-green-400"}`}
              />
            ) : (
              <PiArrowFatLinesUpBold
                className={`h-6 w-6 rotate-180 ${theme === "dark" ? "text-green-600" : "text-green-400"}`}
              />
            )}
          </button>
        </div>
      </div>
      {expanded && (
        <div className="flex w-full flex-col items-center justify-around gap-1 p-2 text-xs font-normal md:flex-row">
          <button className="flex w-full items-center gap-2 rounded-lg border bg-[#0049ad] px-1 py-1 text-sm text-white focus:outline-none">
            <RiExchangeDollarLine
              size={30}
              className="border-r border-white pr-2"
            />
            Оплатить заказ
          </button>
          <button className="flex w-full items-center gap-2 rounded-lg border bg-[#ff6200] px-1 py-1 text-sm text-white focus:outline-none">
            <ImCancelCircle size={30} className="border-r border-white pr-2" />
            Отменить заказ
          </button>
          <button className="flex w-full items-center gap-2 rounded-lg border bg-[#00aa84] px-1 py-1 text-sm text-white focus:outline-none">
            <LuDownload size={30} className="border-r border-white pr-2" />
            Скачать квитанцию
          </button>
          <button className="flex w-full items-center gap-2 rounded-lg border bg-[#ff9f00] px-1 py-1 text-sm text-white focus:outline-none">
            <IoDocumentAttachOutline
              size={30}
              className="border-r border-white pr-2"
            />
            Перейти к заказу
          </button>
        </div>
      )}
    </div>
  );
};

export default TicketComponent;

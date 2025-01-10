"use client"
import React, { useState } from 'react';
// import { Skeleton } from "@/components/ui/skeleton";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { ImCancelCircle } from "react-icons/im";
import { RiExchangeDollarLine } from "react-icons/ri";
import { PiArrowFatLinesUpBold } from "react-icons/pi";
import { useTheme } from 'next-themes';

interface OrderCardProps {
  route: string;
  name: string;
  createdDate: string;
  departureDate: string;
  price: number;
  status: string;
  isCancelled: boolean;
}


const OrderCard: React.FC<OrderCardProps> = ({ route, name, createdDate, departureDate, price, status, isCancelled }) => {
    const [expanded, setExpanded] = useState(false);
    const { theme } = useTheme();

    const toggleExpansion = () => {
        setExpanded(!expanded);
      };

  return (
    <div className="bg-card rounded-lg shadow-md border p-4 mb-4">
      <div className="flex justify-between items-center">
        <div className='flex flex-col gap-2'>
          <h3 className="text-base font-bold">{route}</h3>
          <p className="text-xs">{name}</p>
          <p className="text-xs text-gray-500">Создан: {createdDate}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold">{price} TJS</p>
          <p className={`text-sm ${isCancelled ? 'text-red-500' : 'text-green-500'}`}>{status}</p>
        </div>
      </div>
      <div className='flex justify-between items-center border-t mt-5'>
        <div className=''></div>
        <div className='relative'>
          <button
            className="text-lg focus:outline-none mt-2"
            onClick={toggleExpansion}
          >
            {expanded ? <PiArrowFatLinesUpBold className={`h-6 w-6 ${theme === 'dark' ? 'text-green-600' : 'text-green-400'}`} /> : <PiArrowFatLinesUpBold className={`h-6 w-6 rotate-180 ${theme === 'dark' ? 'text-green-600' : 'text-green-400'}`} />}
          </button>
        </div>
      </div>
      {expanded && (
        <div className="p-2 w-full flex flex-col md:flex-row gap-1 justify-around items-center font-normal text-xs">
          <button className="w-full focus:outline-none flex items-center gap-2 border px-1 py-1 rounded-lg text-sm bg-[#0049ad] text-white">
            <RiExchangeDollarLine size={30} className='border-r pr-2 border-white'/>
            Оплатить заказ
          </button>
          <button className="w-full focus:outline-none flex items-center gap-2 border px-1 py-1 rounded-lg text-sm bg-[#ff6200] text-white">
            <ImCancelCircle size={30} className='border-r pr-2 border-white'/>
            Отменить заказ
          </button>
          <button className="w-full focus:outline-none flex items-center gap-2 border px-1 py-1 rounded-lg text-sm bg-[#00aa84] text-white">
            <LuDownload size={30} className={`border-r pr-2 border-white `} />
            Скачать квитанцию
          </button>
          <button className="w-full focus:outline-none flex items-center gap-2 border px-1 py-1 rounded-lg text-sm bg-[#ff9f00] text-white">
            <IoDocumentAttachOutline size={30} className='border-r pr-2 border-white'/>
            Перейти к заказу
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderCard;

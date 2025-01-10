import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { LuBadgePercent } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { useTheme } from "next-themes";

export default function Advantages() {
  const { theme } = useTheme();
  return (
    <section className="body-font mt-16 md:mt-24">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h1 className="title-font text-2xl font-medium sm:text-3xl">
            В ЧЕМ НАШЕ ПРЕИМУЩЕСТВО?
          </h1>
        </div>
        <div className="-m-4 flex flex-wrap">
          <div className="cursor-pointer p-4 md:w-1/3">
            <div
              className={`flex h-full flex-col rounded-lg p-8 shadow-xl ${theme === "dark" ? "bg-gray-800" : "bg-accent"}`}
            >
              <div className="mb-5 flex items-center">
                <div className="mr-3 inline-flex flex-shrink-0 items-center justify-center text-primary">
                  <AiOutlineLike className="h-14 w-14" />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="title-font text-lg font-medium">
                  Самые низкие цены на билеты
                </h2>
                <p className="text-base font-normal leading-relaxed">
                  Бронируйте билеты онлайн. Найдем самые низкие цены
                </p>
              </div>
            </div>
          </div>
          <div className="cursor-pointer p-4 md:w-1/3">
            <div
              className={`flex h-full flex-col rounded-lg p-8 shadow-xl ${theme === "dark" ? "bg-gray-800" : "bg-accent"}`}
            >
              <div className="mb-5 flex items-center">
                <div className="mr-3 inline-flex flex-shrink-0 items-center justify-center text-primary">
                  <LuBadgePercent className="h-14 w-14" />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="title-font text-lg font-medium">
                  Кэшбэк за билеты, отели и туры
                </h2>
                <p className="text-base font-normal leading-relaxed">
                  Вернем до 10% за покупки билетов через Fly.tj.
                </p>
              </div>
            </div>
          </div>
          <div className="cursor-pointer p-4 md:w-1/3">
            <div
              className={`flex h-full flex-col rounded-lg p-8 shadow-xl ${theme === "dark" ? "bg-gray-800" : "bg-accent"}`}
            >
              <div className="mb-5 flex items-center">
                <div className="mr-3 inline-flex flex-shrink-0 items-center justify-center text-primary">
                  <BiSupport className="h-14 w-14" />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="title-font text-lg font-medium">
                  Поддержка и сервис 24/7
                </h2>
                <p className="text-base font-normal leading-relaxed">
                  Мы всегда на связи и рады помочь Вам в чате приложения
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

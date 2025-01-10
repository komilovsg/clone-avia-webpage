"use client";

import { useTheme } from "next-themes";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp, FaFacebook, FaTelegram } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

export default function Footer() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <footer
      className={`${theme === "dark" ? "bg-card text-white" : "bg-muted text-black"} border-t shadow-md`}
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center justify-center gap-5 py-5 md:flex-row md:justify-between">
          <h1 className="text-base font-normal">Copyright © 2024</h1>
          <div className="flex flex-col items-center justify-center gap-5 text-base font-normal md:flex-row">
            <a
              href="tel:+992900559009"
              className="flex items-center justify-center gap-2 hover:underline"
            >
              <a>{t("contact_us")}</a>
              <a>(+992) 900 55 9009</a>
            </a>
            <a
              href="mailto:booking@fly.tj"
              className="flex items-center justify-center gap-2 border-l-0 border-gray-200 pl-0 text-center hover:underline md:border-l-2 md:pl-5"
            >
              <a>{t("technical_support")}</a>
              <a>booking@fly.tj</a>
            </a>
            <a
              href="tel:1133"
              className="flex items-center justify-center gap-2 border-l-0 border-gray-200 pl-0 hover:underline md:border-l-2 md:pl-5"
            >
              <a>{t("call_center_info")}</a>
              <a>1133</a>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="border-t border-gray-200">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-5 py-8">
          <div className="flex flex-wrap md:gap-10 gap-0 text-center text-sm font-normal md:text-left">
            <div className="w-full px-4 md:w-[250px]">
              <nav className="mb-10 list-none">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Полезная информация
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Заявление о возврате
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Публичная оферта
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-[250px]">
              <nav className="mb-10 list-none">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Регистрация
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">Вход</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Офисы продаж FLY.TJ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">О нас</a>
                </li>
              </nav>
            </div>
          </div>
          <span className="mt-6 inline-flex w-full justify-center md:w-auto md:justify-start lg:ml-auto lg:mt-0">
            <a
              href="https://www.facebook.com/systemflytj"
              className="text-gray-500 transition-all hover:scale-110"
            >
              <FaFacebook className="h-9 w-9 text-[#1877F2]" />
            </a>
            <a
              href="https://www.instagram.com/fly.tj"
              className="ml-3 text-gray-500 transition-all hover:scale-110"
            >
              <GrInstagram className="h-9 w-9 text-[#E1306C]" />
            </a>
            <a
              href="https://t.me/flytj"
              className="ml-3 text-gray-500 transition-all hover:scale-110"
            >
              <FaTelegram className="h-9 w-9 text-[#24A1DE]" />
            </a>
            <a
              href="https://wa.me/992900559009"
              className="ml-3 text-gray-500 transition-all hover:scale-110"
            >
              <FaWhatsapp className="h-9 w-9 text-[#25D366]" />
            </a>
          </span>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row border-t">
          <p className="text-center text-sm font-normal text-gray-500 sm:text-left">
            Услуга лицензирована и предоставляется ООО <strong>&#34;Fly.tj&#34;</strong>
            <br />© 2016 - 2024, Авторские права на содержание сайта защищены
          </p>
        </div>
      </div> */}
    </footer>
  );
}

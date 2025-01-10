import Image from "next/image";
import React from "react";
import interImgOage from "../../../../../public/images/bg-enter-page.png";
import planeImg from "../../../../../public/images/fliting-plane.png";
import analitics from "../../../../../public/images/analitcs_laptop.png";
import { useTranslation } from "react-i18next";
import { BsArrowUpRight } from "react-icons/bs";

export default function InfoPage() {
  const { t } = useTranslation();
  return (
    <section className="relative mt-9 h-screen w-screen overflow-hidden">
      {/* Фоновое изображение */}
      <Image
        src={interImgOage}
        alt="info-bg"
        width={800}
        height={900}
        // layout="fill"
        // objectFit="cover"
        className="absolute inset-0 -z-10"
      />
      <div className="container relative mx-auto grid h-full grid-cols-1 items-center justify-center gap-0 p-0 md:grid-cols-2">
        {/* Первый блок */}
        <div className="flex flex-col items-start justify-center p-8">
          <div className="relative mb-4 h-64 w-full">
            <Image
              src={planeImg}
              alt="plane_img"
              layout="fill"
              objectFit="contain"
              className="md:translate-x-[20%] md:translate-y-[-10%] md:transform"
            />
          </div>
          <h2 className="text-2xl font-bold">
            {t("manage_your_business_trips_online")}
          </h2>
          <p className="mt-2 text-base font-normal md:w-1/2">
            <span className="font-bold">
              {t("fly_business_informationsTytel")}
            </span>{" "}
            {t("corporate_modul_information")}
          </p>
          <div className="mt-4 flex gap-5">
            <div className="flex items-center justify-center gap-1 text-base text-blue-500">
              <BsArrowUpRight className="text-[30px]" />
              <button className="text-blue-500">{t("become_partner")}</button>
            </div>
            <a href="#" className=" rounded bg-blue-500 px-4 py-2 text-white">
              {t("log_in")}
            </a>
          </div>
        </div>

        {/* Второй блок */}
        <div className="relative flex w-[600px] flex-col items-center justify-center p-8 md:items-start">
          <Image
            src={analitics}
            alt="analitics"
            // layout="fill"
            // objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}

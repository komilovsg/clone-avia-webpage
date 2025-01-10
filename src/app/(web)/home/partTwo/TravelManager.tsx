import Image from "next/image";
import React from "react";
import supportImg from "../../../../../public/images/forCorporatePage/support24to7.svg";
import arrowImg from "../../../../../public/images/forCorporatePage/arrowToDown.svg";
import SliderToTravelPage from "./SliderToTravelPage";
import { useTranslation } from "react-i18next";

export default function TravelManager() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto my-10 rounded-md shadow-xl">
      <div>
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-lg font-semibold">
            <h1>{t("travel_managers")}</h1>
            <p>{t("operatorless_trips_and_errors_due_to_manual_entry")}</p>
          </div>
          <Image
            src={supportImg}
            alt="support"
            className="translate-y-[70%] transform"
          />
        </div>
        <Image
          src={arrowImg}
          alt="arrow"
          className="z-50 translate-x-[45%] transform"
        />
      </div>
      <div>
        <SliderToTravelPage />
      </div>
    </div>
  );
}

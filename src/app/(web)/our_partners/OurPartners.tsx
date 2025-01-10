"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import flyDubai from "../../../../public/images/our_part/fly-dubai.png";
import uzbekistanAir from "../../../../public/images/our_part/uzbekistan-air.png";
import s7Air from "../../../../public/images/our_part/s7-air.png";
import turkishAir from "../../../../public/images/our_part/turkish-air.png";
import belavia from "../../../../public/images/our_part/belavia.png";
import chinaSouthern from "../../../../public/images/our_part/china-southern.png";
import astanaAir from "../../../../public/images/our_part/astana-air.png";
import uralAir from "../../../../public/images/our_part/ural-air.png";
import { useTranslation } from "react-i18next";

const OurPartners = () => {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          cssEase: "ease-in-out",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          cssEase: "ease-in-out",
        },
      },
    ],
  };

  const partners = [
    { src: flyDubai, alt: "flyDubai" },
    { src: uzbekistanAir, alt: "Uzbekistan Air" },
    { src: s7Air, alt: "S7 Air" },
    { src: turkishAir, alt: "Turkish Air" },
    { src: belavia, alt: "Belavia" },
    { src: chinaSouthern, alt: "China Southern" },
    { src: astanaAir, alt: "Astana Air" },
    { src: uralAir, alt: "Ural Air" },
  ];

  return (
    <section className="body-font">
      <div className="mx-auto flex flex-col items-center justify-center px-5 py-14">
        <h1 className="mb-10 text-center font-normal">{t("we_are_trusted")}</h1>
        <p className="text-center text-lg">
          {t("five_customers_book_three")}{" "}
          <span className="font-normal">
            {t("tickets_and_hotels_every_month")}
          </span>
        </p>
        <Slider {...settings} className="w-full">
          {partners.map((partner, index) => (
            <div key={index} className="w-full p-4">
              <a className="relative block cursor-pointer overflow-hidden rounded-md p-5 transition-all hover:bg-slate-100">
                <Image
                  alt={partner.alt}
                  className="mx-auto w-56 object-cover object-center" // Set the desired width and height here
                  src={partner.src}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurPartners;

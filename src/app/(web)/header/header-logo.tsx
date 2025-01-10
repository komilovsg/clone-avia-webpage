"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../../public/images/logo/logo_web.svg";
import logoImg_white from "../../../../public/images/logo/logo-white.svg";
import iatoImg from "../../../../public/images/logo/iata-logo.png";
import iatoImg_white from "../../../../public/images/logo/iata-white.svg";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

function HeaderLogo() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const logoSrc = theme === "dark" ? logoImg_white : logoImg;
  const iatoSrc = theme === "dark" ? iatoImg_white : iatoImg;

  const businessInfo = t("fly_business_informations");

  const iatoInfo = t("iata_information", { returnObjects: true });

  return (
    <div className="title-font mb-4 flex items-center gap-3 font-medium text-gray-900 md:mb-0">
      <Link href="/" className="h-auto w-24">
        <Image src={logoSrc} alt="Logo img" width={100} height={100} />
      </Link>
      <p className="rounded-b-md rounded-t-md text-[#FFD700]">|</p>

      {/* Business Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <p
            className={`${theme === "dark" ? "text-[#ffffff]" : "text-[#352ec0]"} cursor-pointer  text-base font-extrabold uppercase shadow-[#beafe9]`}
          >
            for <br /> business
          </p>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle
              className={`${theme === "dark" ? "text-orange-400" : "text-primary"}`}
            >
              {t("fly_business_informationsTytel")}
            </DialogTitle>
            <DialogDescription>
              {t("fly_business_informations")}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* IATA Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Image
            src={iatoSrc}
            alt="IATO img"
            width={80}
            height={16}
            className={`cursor-pointer ${theme === "dark" ? "text-tw-invert filter" : "text-inherit"}`}
          />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle
              className={`${theme === "dark" ? "text-orange-400" : "text-primary"}`}
            >
              {t("IATA_informationTytel")}
            </DialogTitle>
            <DialogDescription>{t("IATA_information")}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default HeaderLogo;

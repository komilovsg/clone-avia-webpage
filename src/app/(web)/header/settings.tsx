"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SettingsIcon } from "lucide-react";
import { Button } from "../ui/button";
import React from "react";

function HeaderSettings() {
  const [currency, setCurrency] = React.useState("tjs");
  const [language, setLanguage] = React.useState("ru");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <SettingsIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Валюта</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={currency} onValueChange={setCurrency}>
          <DropdownMenuRadioItem value="tjs" className="justify-between">
            <div>Сомони</div>
            <div className="font-semibold">TJS</div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="rub" className="justify-between">
            <div>Рубль</div>
            <div className="font-semibold">RUB</div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="usd" className="justify-between">
            <div>Доллар</div>
            <div className="font-semibold">USD</div>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Язык</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
          <DropdownMenuRadioItem value="ru" className="justify-between">
            <div>Русский</div>
            <div className="font-semibold">RU</div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en" className="justify-between">
            <div>Английский</div>
            <div className="font-semibold">EN</div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="tj" className="justify-between">
            <div>Таджикский</div>
            <div className="font-semibold">TJ</div>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default HeaderSettings;

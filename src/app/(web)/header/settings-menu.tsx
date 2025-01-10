"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AiOutlineSetting } from "react-icons/ai";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";

export function SettingsMenu() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-opacity-0" asChild>
        <Button
          variant="outline"
          className="bg-background-list-none hover:bg-background-list-none border-0 transition-all"
        >
          <AiOutlineSetting size={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Язык</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <RadioGroup
            value={i18n.language}
            onValueChange={handleLanguageChange}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ru" id="r1" />
              <Label htmlFor="r1">Русский</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="tj" id="r2" />
              <Label htmlFor="r2">Таджикский</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="en" id="r3" />
              <Label htmlFor="r3">Английский</Label>
            </div>
          </RadioGroup>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Валюта</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <RadioGroup defaultValue="ruble">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ruble" id="p1" />
              <Label htmlFor="p1">Рубль</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="somoni" id="p2" />
              <Label htmlFor="p2">Самони</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dollar" id="p3" />
              <Label htmlFor="p3">Доллар</Label>
            </div>
          </RadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

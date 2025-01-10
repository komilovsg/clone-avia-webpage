"use client";

import React, { useState } from "react";
import { TbLayoutGridAdd } from "react-icons/tb";
import { PiAirplaneTakeoff } from "react-icons/pi";
import Link from "next/link"
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
 

import { useTheme } from "next-themes";
import { FaAssistiveListeningSystems } from "react-icons/fa";

export default function NavBar() {
  const { theme } = useTheme();

  const components: { title: string; href: string;}[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
    },
  ]

  return (
    <nav className="flex flex-wrap items-center justify-center text-base font-normal md:ml-auto md:mr-auto">
      <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <TbLayoutGridAdd className="h-5 w-5 mr-2" />Авиабилеты
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <PiAirplaneTakeoff className="h-6 w-6 mr-2" />Туры
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
              {components.map((component) => (
                <FaAssistiveListeningSystems
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                </FaAssistiveListeningSystems>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </nav>
  );
}

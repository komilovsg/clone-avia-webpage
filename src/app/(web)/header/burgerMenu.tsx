// "use client";

// import { useState } from "react";
// import { IoEnterOutline } from "react-icons/io5";
// import { MdOutlineSupportAgent } from "react-icons/md";
// import { LuSun, LuMoon } from "react-icons/lu";
// import { AiOutlineSetting } from "react-icons/ai";
// import { useTheme } from "next-themes";

// export default function BurgerMenu() {
//   const [isOpen, setIsOpen] = useState(true);
//   const { theme, setTheme } = useTheme();

//   return (
//     <div className="relative md:hidden">
//       <button onClick={() => setIsOpen(!isOpen)} className="p-2">
//         ☰
//       </button>
//       {isOpen && (
//         <div className="absolute right-0 top-16 z-50 rounded-lg bg-white p-5 shadow-lg">
//           <button className="block w-full items-center gap-2 p-2 text-left">
//             <IoEnterOutline /> Личный кабинет
//           </button>
//           <button className="block w-full items-center gap-2 p-2 text-left">
//             <MdOutlineSupportAgent /> Support
//           </button>
//           <button className="block w-full items-center gap-2 p-2 text-left">
//             <AiOutlineSetting /> Settings
//           </button>
//           <button
//             className="block w-full items-center gap-2 p-2 text-left"
//             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//           >
//             {theme === "light" ? <LuMoon /> : <LuSun />} Theme
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import * as React from "react";
// import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { IoEnterOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { LuSun, LuMoon } from "react-icons/lu";
import { AiOutlineSetting } from "react-icons/ai";
import MenuBar from "../menuBar/menuBar";

// type Checked = DropdownMenuCheckboxItemProps["checked"];

export function BurgerMenu() {
  // const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  // const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  // const [showPanel, setShowPanel] = React.useState<Checked>(false)\
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] =
    React.useState<string>("defaultSection");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full">
          ☰
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full max-w-full">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <button className="block w-full items-center gap-2 p-2 text-left">
          <IoEnterOutline /> Личный кабинет
        </button>
        <button className="block w-full items-center gap-2 p-2 text-left">
          <MdOutlineSupportAgent /> Support
        </button>
        <button className="block w-full items-center gap-2 p-2 text-left">
          <AiOutlineSetting /> Settings
        </button>
        <button
          className="block w-full items-center gap-2 p-2 text-left"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <LuMoon /> : <LuSun />} Theme
        </button>
        <MenuBar
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

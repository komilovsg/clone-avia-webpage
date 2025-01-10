"use client";

import { useTheme } from "next-themes";
import { LuSun, LuMoon } from "react-icons/lu";
import { AiOutlineSetting } from "react-icons/ai";
import { useEffect, useState } from "react";
import AvatarLogin from "./avatarLogin";
import { SettingsMenu } from "./settings-menu";
import Balance from "./balance";

export default function AppHeader() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex flex-wrap items-center gap-5">
      <Balance />
      <button
        className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <LuMoon /> : <LuSun />}
      </button>
      <button className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        <SettingsMenu />
      </button>
      <AvatarLogin />
    </div>
  );
}

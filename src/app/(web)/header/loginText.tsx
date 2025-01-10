"use client";

import { useTheme } from "next-themes";
import React from "react";
import { useTranslation } from "react-i18next";
import { IoLogInOutline } from "react-icons/io5";

interface LoginTextProps {
  onOpen: () => void;
}

export default function LoginText({ onOpen }: LoginTextProps) {
  const { theme } = useTheme();
  const { t } = useTranslation();
  return (
    <div className="group flex items-center justify-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-primary ring-offset-background transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:text-inherit">
      <button
        className="h-8 text-sm font-medium group-hover:text-accent-foreground"
        onClick={onOpen}
      >
        {t("login_title")}
      </button>

      <IoLogInOutline
        className={`${theme === "dark" ? "text-white" : "text-primary"} group-hover:text-accent-foreground`}
      />
    </div>
  );
}

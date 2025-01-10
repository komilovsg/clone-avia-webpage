"use client";

import { useTheme } from "next-themes";
// import Link from "next/link";
import { useTranslation } from "react-i18next";

interface MenuBarProps {
  setActiveSection: (section: string) => void;
  activeSection: string;
}

export default function MenuBar({
  setActiveSection,
  activeSection,
}: MenuBarProps) {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const getClassNames = (section: string) => {
    const baseClass = `${theme === "dark" ? "hover:text-orange-400 hover:bg-blue-600" : "hover:bg-blue-600 hover:text-white"} cursor-pointer px-5 w-full text-center rounded-sm`;
    const activeClass = "bg-blue-500 text-white";
    return activeSection === section
      ? `${baseClass} ${activeClass}`
      : baseClass;
  };

  return (
    <header
      className={`body-font fixed left-0 right-0 top-0 z-50 mt-20 w-full border-t-[0.5px] text-gray-600 opacity-95 shadow-md ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 text-base font-normal md:flex-row md:gap-0">
        <div
          // href="/search"
          onClick={() => setActiveSection("Search")}
          className={getClassNames("Search")}
        >
          {t("search")}
        </div>
        <div className="hidden md:block">|</div>
        <div
          // href="/reports"
          onClick={() => setActiveSection("Reports")}
          className={getClassNames("Reports")}
        >
          {t("reporting")}
        </div>
        <div className="hidden md:block">|</div>
        <div
          // href="/orders"
          onClick={() => setActiveSection("Orders")}
          className={getClassNames("Orders")}
        >
          {t("orders")}
        </div>
        <div className="hidden md:block">|</div>
        <div
          // href="/analytics"
          onClick={() => setActiveSection("Analytics")}
          className={getClassNames("Analytics")}
        >
          {t("analytics")}
        </div>
      </div>
    </header>
  );
}

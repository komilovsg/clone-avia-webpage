"use client";

import Search from "../search/flightSearch";
import Reports from "../reports/reports";
import Orders from "../orders/orders";
import Analytics from "@/app/(web)/analytics/page";
// import Advantages from "@/app/(web)/advantages/page";
// import OurPartners from "../our_partners/OurPartners";
import MenuBar from "../menuBar/menuBar";
import React, { useState } from "react";
// import InfoPage from "../home/partOne/InfoPage";
import HomePage from "../home/HomePage";

export default function MenuBarPage() {
  const [activeSection, setActiveSection] = useState("Advantages");

  const renderSection = () => {
    switch (activeSection) {
      case "Search":
        return <Search />;
      case "Reports":
        return <Reports />;
      case "Orders":
        return <Orders />;
      case "Analytics":
        return <Analytics />;
      default:
        return (
          <>
            <HomePage />
          </>
        );
    }
  };
  return (
    <div>
      <MenuBar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <main className="">{renderSection()}</main>
    </div>
  );
}

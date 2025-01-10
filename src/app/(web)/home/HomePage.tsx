import React from "react";
import InfoPage from "./partOne/InfoPage";
import TravelManager from "./partTwo/TravelManager";
import OurPartners from "../our_partners/OurPartners";

export default function HomePage() {
  return (
    <div>
      <InfoPage />
      <TravelManager />
      <OurPartners />
    </div>
  );
}

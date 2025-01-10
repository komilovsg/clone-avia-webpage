"use client";
import { useTheme } from "next-themes";
import Barcode from "react-barcode";

function FlightBarcode() {
  const { theme } = useTheme();
  return (
    <Barcode
      value="barcode"
      width={1.2}
      lineColor={theme == "light" ? "black" : "#cccccc"}
      background="transparent"
      height={26}
      margin={0}
      displayValue={false}
    />
  );
}

export default FlightBarcode;

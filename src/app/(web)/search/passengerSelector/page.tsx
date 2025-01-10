import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

interface PassengerSelectorProps {
  adults: number;
  children: number;
  infants: number;
  onChange: (adults: number, children: number, infants: number) => void;
}

const PassengerSelector: React.FC<PassengerSelectorProps> = ({
  adults,
  children,
  infants,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const handleIncrement = (type: "adults" | "children" | "infants") => {
    onChange(
      type === "adults" ? adults + 1 : adults,
      type === "children" ? children + 1 : children,
      type === "infants" ? infants + 1 : infants,
    );
  };

  const handleDecrement = (type: "adults" | "children" | "infants") => {
    onChange(
      type === "adults" && adults > 1 ? adults - 1 : adults,
      type === "children" && children > 0 ? children - 1 : children,
      type === "infants" && infants > 0 ? infants - 1 : infants,
    );
  };

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-md"
      >
        <div className="text-[15px] leading-[1.3]">
          <div>Взрослый (12 лет и старше): {adults}</div>
          <div>Ребенок (2-12 лет): {children}</div>
          <div>Младенец (до 2 лет, без места): {infants}</div>
        </div>
        <ChevronDownIcon size={20} />
      </div>
      {open && (
        <div className="absolute z-10 mt-1 w-full rounded border border-gray-300 bg-white shadow-lg">
          <div className="p-2">
            <div className="flex justify-between">
              <div>Взрослый (12 лет и старше)</div>
              <div>
                <button onClick={() => handleDecrement("adults")}>-</button>
                {adults}
                <button onClick={() => handleIncrement("adults")}>+</button>
              </div>
            </div>
            <div className="mt-2 flex justify-between">
              <div>Ребенок (2-12 лет)</div>
              <div>
                <button onClick={() => handleDecrement("children")}>-</button>
                {children}
                <button onClick={() => handleIncrement("children")}>+</button>
              </div>
            </div>
            <div className="mt-2 flex justify-between">
              <div>Младенец (до 2 лет, без места)</div>
              <div>
                <button onClick={() => handleDecrement("infants")}>-</button>
                {infants}
                <button onClick={() => handleIncrement("infants")}>+</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerSelector;

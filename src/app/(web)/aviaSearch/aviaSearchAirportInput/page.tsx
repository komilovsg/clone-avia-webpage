"use client";
import { useCallback, useEffect, useRef, useState, FC } from "react";

import classNames from "classnames";
import { useRouter } from "next/router";

import {
  fromInputDefaultAirports,
  toInputDefaultAirports,
} from "../../../../config";
import { getCities } from "../../../../protocols/index";
import { useAppConfigStore } from "../../../../store/useAppConfigStore";
import { useAirportStore } from "../../../../store/useAiroportStore";
import { debounce } from "../../../../utils/debounce";
import plusIcon from "../assets/icons/search/plusGrey.svg";
import Dropdown from "../../../../components/ui/Dropdown";
import Image from "next/image";

interface AviaSearchAirportInputProps {
  type: "from" | "to";
  flightType: string;
  onAirportSelect: (
    routeIndex: number,
    type: "from" | "to",
    airport: any,
  ) => void;
  onClearAirport: (routeIndex: number, type: "from" | "to") => void;
  routeIndex: number;
  isLastRoute?: boolean;
}

const AviaSearchAirportInput: FC<AviaSearchAirportInputProps> = ({
  type,
  flightType,
  onAirportSelect,
  onClearAirport,
  routeIndex,
  isLastRoute = false,
}) => {
  // const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  const { language, theme } = useAppConfigStore();
  const { airport, setAirport, clearAirport } = useAirportStore();

  const [value, setValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [airports, setAirports] = useState(
    type === "from" ? fromInputDefaultAirports : toInputDefaultAirports,
  );

  const router = useRouter();

  useEffect(() => {
    if (airport) {
      setValue(
        `${airport?.name?.[language]}, ${airport?.countryName?.[language]}` ||
          "",
      );
    } else {
      setValue("");
    }
  }, [airport, language]);

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  //   const handleGetCities = useCallback(
  //     debounce((val) => {
  //       getCities(val).then((response) => {
  //         if (!response) {
  //           return router.push("/info");
  //         }
  //         setAirports(response);
  //         if (!response.message && response.length) {
  //           setShowDropdown(true);
  //         }
  //       });
  //     }, 300),
  //     [],
  //   );

  //   const handleChangeInput = ({
  //     target,
  //   }: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(target.value);
  //     if (target.value.length > 0) {
  //       handleGetCities(target.value);
  //     }
  //     if (!target.value.length) {
  //       setAirports(
  //         type === "from" ? fromInputDefaultAirports : toInputDefaultAirports,
  //       );
  //     }
  //   };

  const handleFocusInput = () => {
    if (!airport || !value.length) {
      setShowDropdown(true);
    } else {
      inputRef.current?.select();
    }
  };

  const handleClickAirport = (code: string) => {
    onAirportSelect(routeIndex, type, code);
    setShowDropdown(false);
  };

  const handleClearAirport = () => {
    onClearAirport(routeIndex, type);
  };

  return (
    <div
      className={classNames(
        "relative h-[54px] w-full rounded-lg border border-gray-400 bg-white transition-colors duration-300",
        {
          "bg-red-100": !value.length,
          "rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-lg":
            isLastRoute,
          "rounded-tl-lg rounded-tr-lg": type === "from",
          "rounded-bl-lg rounded-br-lg": flightType === "CF",
          //   "rounded-tl-lg rounded-tr-lg": routeIndex === 0,
        },
      )}
    >
      <div
        className={classNames(
          "absolute left-0 top-0 px-4 py-1 text-sm text-gray-500 transition-all duration-200",
          {
            "px-5 pt-1 text-xs": value.length > 0,
          },
        )}
      >
        {/* {type === "from" ? t("route_from") : t("route_to")} */}
      </div>
      <form>
        <input
          ref={inputRef}
          value={value}
          //   onChange={handleChangeInput}
          onFocus={handleFocusInput}
          autoComplete="off"
          className="absolute left-0 top-0 h-full w-full border-none bg-transparent px-5 py-0 text-sm text-gray-800 focus:outline-none"
        />
      </form>
      {airport && (
        <div className="absolute right-2 top-1/2 flex -translate-y-1/2 transform items-center justify-center gap-1 bg-white p-1">
          <span className="text-sm text-gray-500">{airport.code}</span>
          <button
            type="button"
            onClick={handleClearAirport}
            className="flex border-none bg-transparent"
          >
            <Image
              src={plusIcon}
              alt="plus-icon"
              className="w-4.5 h-3.5 rotate-45 cursor-pointer"
            />
          </button>
        </div>
      )}
      {/* {showDropdown && airports.length && (
        <Dropdown
          show={showDropdown}
          onClickOutside={handleCloseDropdown}
          width="360px"
        >
          <div className="flex max-h-[550px] flex-col gap-1 overflow-y-auto">
            {airports.map((airportItem) => (
              <button
                key={airportItem.code}
                type="button"
                className={classNames(
                  "flex cursor-pointer items-center justify-between gap-1 border-none bg-transparent px-4 py-1 hover:bg-blue-100",
                  {
                    "py-1": airportItem.isMain,
                  },
                )}
                onClick={() => handleClickAirport(airportItem.code)}
              >
                <div
                  className={classNames(
                    "flex flex-wrap items-center justify-between gap-1 text-sm font-bold",
                    {
                      "text-white": theme === "dark",
                      "text-gray-800": theme === "light",
                    },
                  )}
                >
                  {airportItem?.name?.[language]}
                  {airportItem.isMain && (
                    <>
                      ,{" "}
                      <span className="text-gray-400">
                        {airportItem?.countryName?.[language]}
                      </span>
                    </>
                  )}
                </div>
                <span className="text-xs text-gray-400">
                  {airportItem.code}
                </span>
              </button>
            ))}
          </div>
        </Dropdown>
      )} */}
    </div>
  );
};

export default AviaSearchAirportInput;

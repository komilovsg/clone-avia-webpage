import { cn } from "@/lib/utils";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface SearchInputProps {
  label: string;
  value?: string;
  defaultValue?: string | number | readonly string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Ensure onChange is included
  parentClassName?: string;
  className?: string;
}

function SearchInput({
  label = "Заголовок",
  defaultValue,
  parentClassName,
  className,
  value,
}: {
  label: string;
  defaultValue?: string | number | readonly string[] | undefined;
  parentClassName?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div
      className={cn([
        "relative z-0 max-h-[54px] overflow-hidden bg-white dark:bg-input",
        parentClassName,
      ])}
    >
      <input
        type="text"
        defaultValue={defaultValue}
        className={cn([
          "peer block  h-[54px] w-full appearance-none border border-slate-300 bg-transparent pl-3 pt-4 text-[15px] text-gray-900 hover:border-slate-400 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:border-transparent dark:text-white dark:focus:border-blue-500",
          className,
        ])}
        placeholder=""
        value=""
      />
      <label className="absolute top-4 -z-10 origin-[0] -translate-y-3 translate-x-3 scale-[0.82]  transform text-[15px] text-gray-500 duration-300 peer-placeholder-shown:translate-x-3 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">
        {label}
      </label>
    </div>
  );
}

export default SearchInput;

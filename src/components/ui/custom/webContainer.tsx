import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

function WepContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: String;
}) {
  return (
    <div className={cn(["mx-auto w-[1180px]", className])}>{children}</div>
  );
}

export default WepContainer;

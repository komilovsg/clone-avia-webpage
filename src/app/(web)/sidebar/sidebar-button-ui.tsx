import React, { ReactNode } from "react";

function AppSideBarButton({
  icon = undefined,
  title,
}: {
  icon: ReactNode;
  title: String;
}) {
  return (
    <div className="flex h-[42px] flex-1 cursor-pointer items-center justify-between rounded-md px-3 text-[15px] transition-all hover:bg-white/5">
      <div className="flex items-center gap-3 ">
        {icon}
        {title}
      </div>
    </div>
  );
}

export default AppSideBarButton;

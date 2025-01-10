import { cn } from "@/lib/utils";
import { CheckIcon, Clock8Icon, Undo2Icon, XIcon } from "lucide-react";
import { HtmlHTMLAttributes, ReactHTMLElement } from "react";

const statusProps = {
  success: {
    title: "Успешно",
    icon: <CheckIcon size={16} />,
    color: "text-green-600 dark:text-green-500",
    fill: "bg-green-100 dark:bg-green-900",
  },
  canceled: {
    title: "Отмена",
    icon: <XIcon size={16} />,
    color: "text-red-500 dark:text-red-400",
    fill: "bg-red-100 dark:bg-red-900",
  },
  returned: {
    title: "Возврат",
    icon: <Undo2Icon size={16} />,
    color: "text-orange-500 dark:text-orange-400",
    fill: "bg-orange-100 dark:bg-orange-900",
  },
  inProgress: {
    title: "В процессе",
    icon: <Clock8Icon size={16} />,
    color: "text-orange-500 dark:text-orange-400",
    fill: "bg-orange-100 dark:bg-orange-900",
  },
};

type StatusT = {
  status: String;
  showIcon?: boolean | false;
  colored?: boolean | false;
  filled?: boolean | false;
  className?: string;
};

export default function StatusesUi(props: StatusT) {
  const status = statusProps[props.status as keyof typeof statusProps];
  return (
    <div
      className={cn([
        `inline-flex items-center justify-center gap-1 text-nowrap ${props.colored ? status.color : ""} ${props.filled ? `${status.fill} rounded-full  px-2 text-[13px]  dark:bg-opacity-30` : ""}`,
        props.className,
      ])}
    >
      {props.showIcon && status.icon}
      {status.title}
    </div>
  );
}

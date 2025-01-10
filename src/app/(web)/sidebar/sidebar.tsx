import AppSideBarHeader from "./sidebar-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bolt, Boxes, Home, LayoutPanelTop, Ticket } from "lucide-react";
import AppSideBarButton from "./sidebar-button-ui";
import { Separator } from "../ui/separator";

function AppSideBar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[250px] border-r bg-[#1e2d49] text-white dark:bg-transparent ">
      <AppSideBarHeader />
      <div className="grid gap-2 px-2 py-2 text-white text-opacity-70">
        <AppSideBarButton icon={<Home size={17} />} title="Главная" />
        {/* <div className="px-3 py-2 pt-4 text-xs font-medium uppercase text-[#596886]">
          Управление
        </div> */}
        <Accordion type="single" collapsible className="grid gap-2">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-3  font-normal">
                <Ticket size={17} />
                Заказы
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <AppSideBarButton title="Список заказов" icon={undefined} />
              <AppSideBarButton
                title="Список заявок на возврат"
                icon={undefined}
              />
              <Separator className="opacity-10" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex items-center gap-3  font-normal">
                <Boxes size={17} />
                Торговые точки
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <AppSideBarButton title="Проекты" icon={undefined} />
              <AppSideBarButton title="Партнеры" icon={undefined} />
              <AppSideBarButton title="Клиенты" icon={undefined} />
              <Separator className="opacity-10" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex items-center gap-3  font-normal">
                <Bolt size={17} />
                Управление
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <AppSideBarButton title="Пользователи" icon={undefined} />
              <AppSideBarButton title="Роли" icon={undefined} />
              <AppSideBarButton title="Доступы" icon={undefined} />
              <Separator className="opacity-10" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex items-center gap-3  font-normal">
                <LayoutPanelTop size={17} />
                Справочник
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <AppSideBarButton title="Страны" icon={undefined} />
              <AppSideBarButton title="Города" icon={undefined} />
              <AppSideBarButton title="Авиакомпании" icon={undefined} />
              <Separator className="opacity-10" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
}

export default AppSideBar;

"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { useTheme } from "next-themes";
// import { useAuthStore } from "@/store/authStore";

export default function Balance() {
  const { theme } = useTheme();
  // const { isAuthenticated } = useAuthStore(); // Используем состояние авторизации

  // Если пользователь не авторизован, возвращаем null или альтернативный контент
  // if (!isAuthenticated) {
  //   return null; // Можно вернуть альтернативный контент, если нужно
  // }

  return (
    <div>
      <Dialog>
        <DialogTrigger
          className={`${theme === "dark" ? "bg-white" : "bg-primary text-white"} border-1 rounded-sm px-2 py-1 text-sm font-normal text-black`}
        >
          6 126.1 | TJS
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="mx-5 flex items-center justify-between text-sm font-normal text-blue-400">
              <a href="#"></a>
              <a href="#">Пополнить баланс</a>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex items-center justify-between">
                  <p>Баланс:</p>
                  <p>6 126.1 TJS</p>
                </div>
                <Progress value={100} className="bg-green-400" />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p>Кредитный лимит:</p>
                  <p>2 800 TJS</p>
                </div>
                <Progress value={100} className="bg-red-400" />
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

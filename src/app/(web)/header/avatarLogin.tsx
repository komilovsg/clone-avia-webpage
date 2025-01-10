"use client";

// import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
// import { useAuthStore } from "@/store/authStore";
// import { Dialog } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import fly from "../../../../public/favicon.ico";
// import LoginForm from "../loginForm/LoginForm";
// import LoginText from "./loginText";

export default function AvatarLogin() {
  const { theme } = useTheme();
  // const { isAuthenticated, checkAuthStatus, setAuthenticated } = useAuthStore();
  // const [isLoginOpen, setIsLoginOpen] = useState(false);

  // useEffect(() => {
  //   const fetchAuthStatus = async () => {
  //     await checkAuthStatus();
  //   };
  //   fetchAuthStatus();
  // }, [checkAuthStatus]);

  // const handleLoginSuccess = () => {
  //   // setAuthenticated(true);
  //   // setIsLoginOpen(false);
  //   // window.location.href = "/dashboard"; // Перенаправление после успешного входа
  // };
  // const handleChangePart = (part: string) => {
  //   // Логика для обработки изменения части
  // };

  return (
    <div className="flex flex-wrap items-center gap-5">
      {/* {isAuthenticated ? ( */}
      <Avatar
        className={`${theme === "dark" ? "border-orange-400" : "border-primary"} cursor-pointer border-[1.5px]`}
      >
        <AvatarImage src={fly.src} alt="FlyTj" />
        <AvatarFallback>FlyTj</AvatarFallback>
      </Avatar>
      {/* ) : ( */}
      {/* <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
          <LoginText onOpen={() => setIsLoginOpen(true)} />
          <LoginForm
            onSuccess={handleLoginSuccess}
            // onClose={() => setIsLoginOpen(false)}
            // onChangePart={handleChangePart}
          />
        </Dialog>
      )} */}
    </div>
  );
}

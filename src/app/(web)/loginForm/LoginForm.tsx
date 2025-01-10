// components/LoginForm.tsx
import { useState, useCallback } from "react";
import { useFormik, FormikHelpers } from "formik";
import i18next from "i18next";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { getLoginFormValidationSchema } from "../../schemas";
import { apiUrl } from "../../config";
import useEventListener from "../../hooks/useEventListener";
import { AuthModalParts, AuthModalPart } from "../../constants/authModal"; // Правильный импорт

interface LoginFormProps {
  onSuccess: () => void;
  onClose: () => void;
  onChangePart: () => void; // Тип для `onChangePart`
}

interface LoginValues {
  login: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSuccess,
  onClose,
  onChangePart,
}) => {
  const { t } = i18next;
  const [showPassword, setShowPassword] = useState(false);
  const [incorrectUserData, setIncorrectUserData] = useState(false);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldError,
  } = useFormik<LoginValues>({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: getLoginFormValidationSchema(t),
    onSubmit: async (
      values: LoginValues,
      { setSubmitting }: FormikHelpers<LoginValues>,
    ) => {
      try {
        const response = await fetch(`${apiUrl}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          onSuccess();
        } else {
          const result = await response.json();
          setFieldError("login", result.message);
          setIncorrectUserData(true);
        }
      } catch (error) {
        console.error("Failed to login", error);
        setIncorrectUserData(true);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.keyCode === 13) {
        handleSubmit();
      }
    },
    [handleSubmit],
  );

  useEventListener<KeyboardEvent>("keypress", handleKeyPress);

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-lg font-bold">
          {t("login_text")}
        </DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="login" className="text-right">
            {t("email")}
          </Label>
          <Input
            id="login"
            type="email"
            placeholder={t("enter_email")}
            className="col-span-3"
            value={values.login}
            onChange={handleChange}
            onBlur={handleBlur}
            // error={touched.login ? errors.login : undefined}
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right">
            {t("password")}
          </Label>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder={t("enter_password")}
            className="col-span-3"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            // error={touched.password ? errors.password : undefined}
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="col-span-1"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {incorrectUserData && (
          <span className="text-red-500">{t("incorrect_user_data")}</span>
        )}
        <DialogFooter className="w-full">
          <Button type="submit" className="w-full">
            {t("login")}
          </Button>
        </DialogFooter>
        <div className="flex items-center justify-between text-sm">
          <a
            href="#"
            // onClick={() => onChangePart(AuthModalParts.REGISTRATION)}
          >
            {t("registration_text")}
          </a>
          <a
            href="#"
            // onClick={() => onChangePart(AuthModalParts.FORGET_PASSWORD)}
          >
            {t("forgot_password_text")}
          </a>
        </div>
      </form>
    </DialogContent>
  );
};

export default LoginForm;

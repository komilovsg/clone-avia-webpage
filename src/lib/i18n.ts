// lib/i18n.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { default as enTranslations } from "../translations/en";
import { default as ruTranslations } from "../translations/ru";
import { default as tjTranslations } from "../translations/tj";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    ru: { translation: ruTranslations },
    tj: { translation: tjTranslations },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

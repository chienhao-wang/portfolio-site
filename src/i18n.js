// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import zh from "./locales/zh.json";

i18n
  .use(initReactI18next)
  .init({
    lng: "en",          // 預設語言
    fallbackLng: "en",  // 沒有對應翻譯時用英文
    resources: {
      en: { translation: en },
      zh: { translation: zh },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

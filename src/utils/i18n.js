import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const languages = ["en", "am", "or"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    whitelist: languages,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: [
        "cookie",
        "localStorage",
        "sessionStorage",
        "querystring",
        "htmlTag",
      ],
      cache: ["cookie"],
    },
  });

export default i18n;

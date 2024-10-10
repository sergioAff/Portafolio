import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["es", "en"],
    react: {
      useSuspense: false,
      wait: true,
    },
    interpolation: {
      escapeValue: false,
    },
    debug: false,
    ns: [
      "404",
      "frases",
      "about",
      "contactos",
      "experiencias",
      "footer",
      "links",
      "order",
      "proyectos",
      "welcome",
    ],
    defaultNS: "common",
    ssr: true,
    initImmediate: false,
  });

export default i18n;

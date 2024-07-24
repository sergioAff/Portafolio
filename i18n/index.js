import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: esTranslations,
  },
  en: {
    translation: enTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Puedes cambiar el idioma predeterminado aquí
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;

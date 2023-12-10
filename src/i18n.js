import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import gerTranslation from "./locales/ger.json";
import { selectLanguage } from "../store/languageSlice";

const resources = {
  en: { translation: enTranslation },
  ger: { translation: gerTranslation },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: selectLanguage ? "ger" : "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

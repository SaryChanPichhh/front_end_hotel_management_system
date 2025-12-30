import { createI18n } from "vue-i18n";
import en from "./en";
import km from "./km";

export type MessageSchema = typeof en;
export type AvailableLocale = "en" | "km";

const savedLang = (localStorage.getItem("lang") as AvailableLocale) || "km";

const i18n = createI18n<[MessageSchema], AvailableLocale>({
  legacy: false,
  locale: savedLang,
  fallbackLocale: "en",
  messages: {
    en,
    km,
  },
});

export default i18n;

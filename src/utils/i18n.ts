import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const backend = new Backend(null, {
  loadPath: (lngs, namespaces) => {
    console.log(lngs);
    const [lng] = lngs;
    const [ns] = namespaces;

    if (ns !== "pastry") {
      return `http://localhost:3003/${ns}/${lng}`;
    }

    return `/locales/${lng}/${ns}.json`;
  },
});

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(backend)
  .init({
    debug: true,
    fallbackLng: "en",
    ns: ["blog", "pastry"],
  });

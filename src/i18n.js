import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations_hu from "./translations_hu.json"
import translations_en from "./translations_en.json"

i18n.use(initReactI18next)
    .init({
        resources: {
            hu: {
                translation: translations_hu
            },
            en: {
                translation: translations_en
            }
        },
        lng: navigator.language.split("-")[0],
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
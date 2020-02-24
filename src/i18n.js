import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import numeral from 'numeral';

// import translationEN from '../public/locales/en/translation.json';
// import translationGE from '../public/locales/ge/translation.json';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// const resources = {
//   en: {
//     translation: translationEN
//   },
//   ge: {
//       translation: translationGE
//   }
// };

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      
      format: (value, format, lng) => {
        if (format === 'English') {
          return new Intl.DateTimeFormat(lng).format(value);
        }
        else if (format === 'Indian') {
            return new Intl.DateTimeFormat('ind').format(value);
          }
        else if (format === 'Euros') {
            return new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'EUR' }).format(value);
          }
        else if (format === 'German') {
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'DEM' }).format(value);
          }
        return value;
      }
    },
  });

export default i18n;
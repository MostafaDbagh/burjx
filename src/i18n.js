import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'; 

i18n
  .use(Backend) 
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    ns: ['home'], // Your namespace
    defaultNS: 'home', // Set default namespace
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Correct path format
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage']
    },
    debug: true, // Enable to see loading details
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
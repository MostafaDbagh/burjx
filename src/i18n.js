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
    ns: ['home', 'common'], // Multiple namespaces
    defaultNS: 'home',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage']
    },
    debug: false, // Disable debug for production
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    }
  });

// Set initial document direction and language
const setDocumentDirection = (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
};

// Set direction on language change
i18n.on('languageChanged', setDocumentDirection);

// Set initial direction
setDocumentDirection(i18n.language);

export default i18n;
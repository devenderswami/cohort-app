import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations directly to ensure they're available immediately
import enTranslation from '../public/locales/en/translation.json';
import esTranslation from '../public/locales/es/translation.json';
import hiTranslation from '../public/locales/hi/translation.json';

const resources = {
  en: enTranslation,
  es: esTranslation,
  hi: hiTranslation,
};

i18n
  // Load translations from the /public/locales folder for dynamic loading
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Init i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    
    // Common namespaces across all loaded languages
    ns: ['translation'],
    defaultNS: 'translation',
    
    // Detect language from browser
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18n',
      lookupLocalStorage: 'i18next_lng',
      
      // Cache user language
      caches: ['localStorage', 'cookie'],
    },
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    react: {
      useSuspense: false, // Prevents issues during SSR
    },
  });

export default i18n;

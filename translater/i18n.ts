import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../translater/en.json';
import fr from '../translater/fr.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false, // React protects against XSS
  },
});

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define translation resources
const resources = {
  en: {
    translation: {
      // English translations go here
    }
  },
  // Add more languages and translations as needed
};

// Initialize i18next with React
i18n
  .use(initReactI18next) // Initialize i18next with React
  .init({
    resources, // Provide translation resources
    lng: 'en', // Set default language to English
    keySeparator: false, // Disable key separator for easier usage
    interpolation: {
      escapeValue: false // Disable escaping for interpolation
    }
  });

export default i18n; // Export initialized i18n instance

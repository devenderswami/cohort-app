import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

// Just include the languages we have translations for now
const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'hi', name: 'हिन्दी' }
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || 'en');
  
  const changeLanguage = useCallback((lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
    // Save to localStorage for persistence
    localStorage.setItem('i18nextLng', lng);
    // Force re-render of components using translations
    window.dispatchEvent(new Event('languageChanged'));
  }, [i18n]);
  
  useEffect(() => {
    // Set initial language from localStorage or browser
    const storedLang = localStorage.getItem('i18nextLng');
    if (storedLang && storedLang !== currentLang) {
      changeLanguage(storedLang);
    }
  }, [currentLang, changeLanguage]);

  const selectedLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '0.5rem', 
      cursor: 'pointer',
      position: 'relative',
      marginLeft: '1rem'
    }}>
      <select
        value={selectedLanguage.code}
        onChange={(e) => changeLanguage(e.target.value)}
        style={{
          padding: '0.4rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
          cursor: 'pointer',
          backgroundColor: 'white'
        }}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;

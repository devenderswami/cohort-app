import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'ja', name: '日本語' },
  { code: 'zh', name: '中文' }
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const selectedLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

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

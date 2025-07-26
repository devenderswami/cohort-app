// A small helper component to ensure i18n initialization is complete
import React, { useEffect, useState } from 'react';
import i18n from './i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initializeI18n = async () => {
      await i18n.init();
      setInitialized(true);
    };

    if (!initialized) {
      initializeI18n();
    }

    // Listen for language changes
    const handleLanguageChanged = () => {
      // Force re-render when language changes
      setInitialized(false);
      setTimeout(() => setInitialized(true), 0);
    };

    window.addEventListener('languageChanged', handleLanguageChanged);
    
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChanged);
    };
  }, [initialized]);

  if (!initialized) {
    return <div>Loading translations...</div>;
  }

  return <>{children}</>;
};

export default I18nProvider;

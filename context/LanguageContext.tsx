import React, { createContext, useContext, useEffect, useState } from 'react';
import i18n, { Language } from '@/i18n';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: React.PropsWithChildren<{}>) {
  const defaultLang = (i18n.locale.split('-')[0] as Language) === 'fr' ? 'fr' : 'en';
  const [language, setLanguageState] = useState<Language>(defaultLang);

  useEffect(() => {
    i18n.locale = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

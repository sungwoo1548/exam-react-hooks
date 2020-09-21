import React, { useState, createContext } from 'react';
import { languageOptions, dictionaryList } from './languages';

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: 'ko',
  dictionary: dictionaryList.ko,
  userLanguageChange: () => { }
});

// it provides the language context to app
export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState('ko');

  const store = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: selected => {
      const newLanguage = languageOptions[selected] ? selected : 'ko'
      setUserLanguage(newLanguage);
      console.log('[language]', newLanguage)
      window.localStorage.setItem('[language]', newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={store}>
      {children}
    </LanguageContext.Provider>
  );
};
import { useState, useEffect, createContext } from 'react';
import { en, de } from './translations';

export const TranslationContext = createContext();

export default function TranslationProvider({ children, router }) {
  const { locale } = router;

  const [t, setT] = useState(en);

  useEffect(() => {
    switch (locale) {
      case 'de': {
        setT(de);
        break;
      }
      case 'en': {
        setT(en);
        break;
      }
      default:
        setT(en);
    }
  }, [locale]);

  return (
    <TranslationContext.Provider value={{ t, setT }}>
      {children}
    </TranslationContext.Provider>
  );
}

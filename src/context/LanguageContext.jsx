import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../locales/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('kh');

  const toggleLanguage = () => setLang((prev) => (prev === 'kh' ? 'en' : 'kh'));
  
  const t = translations?.[lang] || translations?.kh || {};
  const isKhmer = lang === 'kh';

  // 🟢 ប្តូរ Font ស្វ័យប្រវត្តិតាមភាសា
  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    // លុប Class ចាស់
    htmlElement.classList.remove('font-khmer', 'font-english');
    bodyElement.classList.remove('font-khmer', 'font-english');
    
    // បន្ថែម Class ថ្មី
    if (isKhmer) {
      htmlElement.classList.add('font-khmer');
      bodyElement.classList.add('font-khmer');
    } else {
      htmlElement.classList.add('font-english');
      bodyElement.classList.add('font-english');
    }

    console.log('🟢 Language:', lang, '| Font:', isKhmer ? 'Kantumruy Pro (Khmer)' : 'Chewy (English)');

  }, [isKhmer, lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t, isKhmer }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return { 
      t: translations.kh, 
      lang: 'kh', 
      toggleLanguage: () => {}, 
      isKhmer: true 
    };
  }
  return context;
};
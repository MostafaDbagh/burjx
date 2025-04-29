import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

import EnglishFlag from '../../../assests/images/us.svg';
import ArabicFlag from  '../../../assests/images/sa.svg';

export function ChangeLanguage() {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

  useEffect(() => {
    setIsEnglish(i18n.language === 'en');
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = isEnglish ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <button 
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label={isEnglish ? 'Switch to Arabic' : 'Switch to English'}
    >
      <div className={`flag-container ${isEnglish ? '' : 'rtl-active'}`}>
        <img 
          src={EnglishFlag} 
          alt="English" 
          className={`flag ${isEnglish ? 'active' : ''}`}
          width={24}
          height={18}
        />
        <img 
          src={ArabicFlag} 
          alt="Arabic" 
          className={`flag ${!isEnglish ? 'active' : ''}`}
          width={24}
          height={18}
        />
      </div>
      <span className="language-text">
        {isEnglish ? 'EN' : 'AR'}
      </span>
    </button>
  );
}
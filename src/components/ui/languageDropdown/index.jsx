import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

import EnglishFlag from '../../../assests/images/usa-flag.svg';
import ArabicFlag from  '../../../assests/images/uae-flag.svg';

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
    <div className='d-flex justify-content-center align-items-center ml-auto my-auto'>
      <span style={{fontFamily:'lufga-bold',fontSize:'16px'}}>
      En
      </span>
   
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
   
    </button>
    <span style={{fontFamily:'lufga-bold',fontSize:'16px',}}>
      العربية
      </span>
    </div>

  );
}
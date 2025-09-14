import { useTranslation } from 'react-i18next';

export const useI18n = (namespace = 'home') => {
  const { t, i18n } = useTranslation(namespace);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  const currentLanguage = i18n.language || 'en';
  const isRTL = currentLanguage === 'ar';
  
  return {
    t,
    changeLanguage,
    currentLanguage,
    isRTL,
    i18n
  };
};

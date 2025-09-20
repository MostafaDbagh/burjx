"use client";
import React from "react";
import { useI18n } from "../hooks/useI18n";
import { FaSearch } from "react-icons/fa";

export default function Hero() {
  const { t, isRTL, i18n } = useI18n("hero");

  // لتجربة اللغة الإنجليزية مؤقتًا 
  React.useEffect(() => {
    i18n.changeLanguage("en"); 
  }, [i18n]);

  return (
    <section
      className="w-full min-h-[616px] bg-gradient-to-r from-[#376266] to-[#ACE5EA] flex items-center"
      aria-label="Hero"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className={`w-full max-w-4xl px-6 sm:px-12 md:px-16 text-white`}
        style={{
          textAlign: isRTL ? "right" : "left",
          marginLeft: isRTL ? "auto" : 0,
          marginRight: isRTL ? 0 : "auto",
        }}
      >
        {/* العنوان */}
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-[75.99px] font-bold leading-snug md:leading-[125%]">
            {t("hero.title")}
          </h1>
        </div>

        {/* الوصف */}
        <p className="mb-6 text-base sm:text-lg md:text-xl font-medium">
          {t("hero.description")}
        </p>

        {/* حقل البحث + زر البحث */}
        <div
          className={`flex flex-col sm:flex-row ${
            isRTL ? "sm:flex-row-reverse" : "sm:flex-row"
          } max-w-md shadow-lg rounded-lg overflow-hidden`}
        >
          {/* صندوق البحث */}
          <input
            type="text"
            placeholder={t("hero.searchPlaceholder")}
            className="flex-1 bg-white px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
          />

          {/* زر البحث */}
          <button className="bg-red-500 px-5 py-3 flex items-center justify-center sm:mt-0 ">
            <FaSearch className="text-white h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

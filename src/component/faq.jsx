import { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import FaqImage from "../assests/images/faq.png";
import { useI18n } from "../hooks/useI18n";

export default function Faq() {
  const { t, isRTL } = useI18n("faq");
  const [openIndex, setOpenIndex] = useState(null);

  const faqsRaw = t("items", { returnObjects: true });
  const faqs = Array.isArray(faqsRaw) ? faqsRaw : [];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-white p-8  ${
        isRTL ? "rtl" : "ltr"
      }`}
      dir={isRTL ? "rtl" : "ltr"} // هذا لضبط الاتجاه تلقائياً
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-center space-y-4">
          <img src={FaqImage} alt="FAQ Icon" className="w-35 h-30 " />
          <h1 className="text-2xl font-bold text-gray-800">{t("title1")}</h1>
          <h1 className="text-2xl font-bold text-gray-800">{t("title2")}</h1>
          <button className="bg-[#E34D38] text-white px-6 py-2 rounded-lg shadow hover:opacity-90 transition">
            {t("button")}
          </button>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          {faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 cursor-pointer shadow-sm"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-800">{faq.question}</h3>
                  {openIndex === index ? (
                    <FiChevronDown
                      className={`w-7 h-7 rounded-full bg-[#235A5E] text-white ${
                        isRTL ? "transform rotate-180" : ""
                      }`}
                    />
                  ) : (
                    <FiChevronRight
                      className={`w-7 h-7 rounded-full bg-gray-300 ${
                        isRTL ? "transform rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">{t("noItems", "No FAQs available")}</p>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useI18n } from "../hooks/useI18n"; 

import otherImg from "../assests/images/water.png";
import GrocerImg from "../assests/images/Grocer.png";
import burgerImg from "../assests/images/burger.png";
import waterImg from "../assests/images/pic.png";
import apple from "../assests/images/apple.png";
import tomato from "../assests/images/tomato.png";
import nuts from "../assests/images/nuts.png";
import spicies from "../assests/images/spicies.png";

export default function Slider() {
  const { t, isRTL } = useI18n('slider');

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const categories = [
    { id: 1, title: t("categories.offers"), image: waterImg },
    { id: 2, title: t("categories.fastFoods"), image: burgerImg },
    { id: 3, title: t("categories.groceries"), image: GrocerImg },
    { id: 4, title: t("categories.water"), image: otherImg },

  ];

  const products = [
    {
      id: 1,
      name: t("products.items.apple"),
      image: apple,
      price: "AED 45",
      oldPrice: "AED 65"
    },
    {
      id: 2,
      name: t("products.items.tomato"),
      image: tomato,
      price: "AED 45",
      oldPrice: "AED 55"
    },
    {
      id: 3,
      name: t("products.items.nuts"),
      image: nuts,
      price: "AED 45",
      oldPrice: "AED 50"
    },
    {
      id: 4,
      name: t("products.items.spices"),
      image: spicies,
      price: "AED 45",
      oldPrice: "AED 60"
    }
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateButtons = () => {
      setCanPrev(track.scrollLeft > 0);
      setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
    };

    updateButtons();
    track.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    return () => {
      track.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const scrollNext = () => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: track.clientWidth / 1.2, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: -track.clientWidth / 1.2, behavior: "smooth" });
  };

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full relative pl-6 pr-6">
        <div className="flex justify-between">
          <h2 className="text-xl pl-5 font-semibold mb-4">
            {t("categories.title")}
          </h2>
        </div>

        {/* Carousel track */}
        <div
          className="flex gap-4 overflow-x-auto px-8 snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none"
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="snap-start flex-shrink-0 w-[310px] p-2 relative"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md relative">
                {/* صورة الكارد */}
                <div className="h-36 sm:h-40 md:h-44 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* الشريط السفلي */}
                <div
                  className="flex items-center justify-between px-4 py-3"
                  style={{ backgroundColor: "#235A5E" }}
                >
                  <p className="text-white text-sm font-medium">{cat.title}</p>
                </div>

                {/* زر يطفو */}
                <div className="absolute bottom-4 right-4 z-10">
                  <button
                    aria-label={`open ${cat.title}`}
                    className="w-11 h-11 !mb-7 !rounded-full bg-[#E53935] flex items-center justify-center shadow-lg"
                  >
                    <FaArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* أزرار التنقل */}
        <div className="flex justify-end mt-4">
          <button
            onClick={scrollPrev}
            aria-label={t("navigation.previous")}
            disabled={!canPrev}
            className="bg-gray-100 shadow-md p-3 rounded-full disabled:opacity-40"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollNext}
            aria-label={t("navigation.next")}
            disabled={!canNext}
            className="bg-gray-100 shadow-md p-3 rounded-full disabled:opacity-40 ml-2"
          >
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="w-full px-6 mt-15 bg-[#F9F9F9]">
        {/* العنوان والرابط */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{t("products.sectionTitle")}</h2>
          <div className="flex items-center gap-2">
            <button className="text-[#E34D38] !text-3xl">
              {t("products.viewAll")}
            </button>
            <FaArrowRight className="h-4 text-[#E34D38]" />
          </div>
        </div>

        {/* البطاقات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col "
            >
              {/* صورة */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />

              {/* الاسم */}
              <h4 className="text-base mb-2">{product.name}</h4>

              {/* الأسعار */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#E53935] font-semibold">
                  {product.price}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  {product.oldPrice}
                </span>
              </div>

              {/* زر */}
              <button className="w-full py-2 rounded-md bg-[#235A5E] text-white font-medium hover:bg-[#1c474a] transition">
                {t("products.orderNow")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

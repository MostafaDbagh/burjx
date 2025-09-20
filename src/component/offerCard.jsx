"use client";
import React from "react";
import imageSide from "../assests/images/imageSide.png";
import { useI18n } from "../hooks/useI18n";

const OfferCard = () => {
  const { t, isRTL } = useI18n("offerCard");

  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Title */}
      <h2 className="text-[clamp(20px,4vw,32px)] font-bold leading-[150%] text-[#262626] mt-5 !mb-12">
        {t("offerCard.title")}
      </h2>

      {/* Main Section */}
      <div className="relative flex flex-row items-center justify-center w-full max-w-5xl rounded-2xl overflow-hidden scale-95 sm:scale-100">
        {/* Left side with Image */}
        <div
          className="relative z-10 flex bg-gradient-to-br from-[#B5DADB] to-[#EAECEE]
                     items-center justify-center -mr-[10px]
                     w-[clamp(250px,40vw,500px)] h-[clamp(280px,50vw,530px)] p-4 sm:p-6"
          style={{
            clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)"
          }}
        >
          <img
            src={imageSide}
            alt="Grocery Bag"
            className="w-[clamp(150px,40vw,280px)] h-[clamp(150px,40vw,280px)] object-contain"
          />
        </div>

        {/* Right side with Gradient Box */}
        <div
          className="relative z-0 bg-[#159DA0] p-6 sm:p-8 flex flex-col justify-center
                     w-[clamp(250px,60vw,660px)] h-[clamp(250px,50vw,450px)]"
          style={{
            paddingLeft: "clamp(60px,12vw,140px)",
            right: "clamp(30px,6vw,90px)"
          }}
        >
          <p className="leading-[150%] text-[clamp(18px,3vw,32px)] text-white">
            {t("sale")}
          </p>

          <h3 className="text-base sm:text-xl font-semibold mt-2 text-white">
            {t("offerCard.subtitlePrefix")}{" "}
            <span className="text-red-600">{t("offerCard.subtitleHighlight")}</span>{" "}
            {t("offerCard.subtitleSuffix")}
          </h3>

          <p className="text-white mt-2 text-xs sm:text-sm leading-relaxed">
            {t("offerCard.description")}
          </p>

          <button
            className=" mt-4 text-sm sm:text-base bg-red-500 hover:bg-red-600 text-white px-4 sm:px-5 py-2 rounded-lg shadow-md w-fit"
            style={{
              clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)"
            }}
          >
            {t("button")}
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-2 mt-6">
        <span className="w-6 sm:w-8 h-2 bg-teal-600 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
      </div>
    </div>
  );
};

export default OfferCard;

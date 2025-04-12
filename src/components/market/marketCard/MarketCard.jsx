import React, { useEffect, useRef, useMemo } from "react";
import { formatPrice } from "../../../utils/formatPrice";
import SparkLine from "../../Chart/sparkLine";
import "./style.css";

const MarketCard = ({
  symbol,
  name,
  currentPrice,
  image,
  priceChangePercentage24h,
  sparkline,
}) => {
  const isPositive = priceChangePercentage24h >= 0;
  const formattedPrice = formatPrice(currentPrice);
  const formattedChange = `${
    isPositive ? "+" : ""
  }${priceChangePercentage24h.toFixed(2)}%`;



  return (
    <div className="market-card">
      <div className="card-header">
        {image && (
          <img
            src={image}
            alt={name}
            className="coin-image"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        )}
        <div className="coin-info">
          <span className="coin-info-symbol">{symbol.toUpperCase()}</span>
          <span className="coin-info-name">{name}</span>
        </div>
      </div>

      <div className="sparkline-chart">
        <SparkLine data={sparkline} isPositive={isPositive} />
      </div>

      <div className="price-info">
        <span className="price">{formattedPrice}</span>
        <span className={`pirce-info-daily-change ${isPositive ? "up" : "down"}`}>
          {formattedChange}
        </span>
      </div>
    </div>
  );
};

export default React.memo(MarketCard);

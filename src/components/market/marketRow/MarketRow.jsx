import React from "react";
import "./style.css";
import { formatLargeNumber, formatPrice } from "../../../utils/formatPrice";
import SparkLine from "../../Chart/sparkLine";
import useWindowSize from "../../../hooks/useWindowSize";
const MarketRow = ({
  symbol,
  name,
  marketCap,
  tradingVolume,
  priceChangePercentage24h,
  onTrade,
  image,
  sparkline,
  currentPrice,
}) => {
  const isPositive = priceChangePercentage24h >= 0;
  const formattedPrice = formatPrice(currentPrice);
  const formattedChange = `${
    isPositive ? "+" : ""
  }${priceChangePercentage24h.toFixed(2)}%`;

  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;

  return (
    <div className="market-row">
      <div className="row-header">
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
      {!isMobile && (
        <>
          <div className="cell">
            <span className="price">{formatLargeNumber(marketCap)}</span>
          </div>

          <div className="cell">
            <span className="price">{formatLargeNumber(tradingVolume)}</span>
          </div>

          <div className="spark-line-container">
            <SparkLine data={sparkline} isPositive={isPositive} />
          </div>
        </>
      )}

      <div
        className="flex-between-center"
        style={{
          flexDirection: !isMobile ? "row" : "column",
          width: isMobile ? "40%" : "20%",
        }}
      >
        <div className="price">{formattedPrice}</div>
        <div style={{ textAlign: "end" }}>
          <span
            className={`pirce-info-daily-change ${isPositive ? "up" : "down"}`}
          >
            {formattedChange}
          </span>
        </div>
      </div>

      {!isMobile && (
        <button className="trade-button" onClick={onTrade}>
          Trade
        </button>
      )}
    </div>
  );
};

export default MarketRow;

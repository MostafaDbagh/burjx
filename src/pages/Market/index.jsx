import React, { useState, useMemo } from "react";
import MarketTabs from "../../components/market/marketTab/MarketTab";
import Spinner from "../../components/ui/spinner";
import logo from "../../assets/Logo.svg";
import useFetchData from "../../hooks/useFetchData";
import { headers } from "../../constant";
import info from "../../assets/icons/icon-info.svg";
import useWindowSize from "../../hooks/useWindowSize";
import AllCoinsTable from "../../components/market/allCoin";
import { AllCoinsUrl, ErrorMessage, MarketHeaderTabs } from "../../constant";
import "./style.css";
import CardsCarousel from "../../components/ui/carousel/cardsCarousel";

const Market = () => {
  const [activeTab, setActiveTab] = useState(MarketHeaderTabs[0].txt);
  const { apiData, loading, error } = useFetchData(AllCoinsUrl);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;

  const { featuredCoins, topGainers, topLosers } = useMemo(() => {
    if (!apiData?.data) return { featuredCoins: [], topGainers: [], topLosers: [] };
    const coins = [...apiData?.data];
    const sortedByChange = [...coins].sort((a, b) => 
      b.priceChangePercentage24h - a.priceChangePercentage24h
    );
    return {
      featuredCoins: coins.slice(0, 20), 
      topGainers: sortedByChange.slice(0, 20), 
      topLosers: sortedByChange.slice(-20).reverse(),
    };
  }, [apiData]);

  const currentData = useMemo(() => {
    switch(activeTab) {
      case MarketHeaderTabs[1].txt: return topGainers;
      case MarketHeaderTabs[2].txt: return topLosers;
      default: return featuredCoins;
    }
  }, [activeTab, featuredCoins, topGainers, topLosers]);

  if (loading) {
    return (
      <div className="market-container">
        <div className="loading-spinner-container">
          <Spinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="market-container error">{ErrorMessage}</div>
    );
  }

  return (
    <div className="market-container">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="market-logo" />
      </div>
      <div style={{ padding: isMobile ? "0 16px" : "0 48px" }}>
        <MarketTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-cards">
          <CardsCarousel coins={currentData} />
        </div>
        <AllCoinsTable
          isMobile={isMobile}
          headers={headers}
          coins={apiData?.data}
          infoIcon={info}
        />
      </div>
    </div>
  );
};

export default Market;
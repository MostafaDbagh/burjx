import React from "react";
import MarketTabs from "../../components/market/marketTab/MarketTab";
import Spinner from "../../components/ui/spinner";
import logo from "../../assets/Logo.svg";
import useFetchData from "../../hooks/useFetchData";
import { headers } from "../../constant";
import info from "../../assets/icons/icon-info.svg";
import useWindowSize from "../../hooks/useWindowSize";
import AllCoinsTable from "../../components/market/allCoin";
import { AllCoinsUrl,ErrorMessage } from "../../constant";
import "./style.css";
import CardsCarousel from "../../components/ui/carousel/cardsCarousel";
const Market = () => {
  
  const { apiData, loading, error } = useFetchData(AllCoinsUrl);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;

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
        <MarketTabs />
        <div className="flex-cards">
          <CardsCarousel coins={apiData?.data} />
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

import React from 'react';
import CryptoCard from "../../components/market/marketCard/MarketCard";
import MarketTabs from "../../components/market/marketTab/MarketTab";
import MarketRow from '../../components/market/marketRow/MarketRow';
import Spinner from '../../components/ui/spinner';
import logo from '../../assets/Logo.svg'; 
import useFetchData from '../../hooks/useFetchData';
import { headers } from '../../constant';
import info from '../../assets/icons/icon-info.svg'
import useWindowSize from '../../hooks/useWindowSize';
import { Market,AllCoins } from '../../constant';
import './style.css';
import CardsCarousel from '../../components/ui/carousel/cardsCarousel';
const Market = () => {
    const { apiData, loading, error } = useFetchData('coin-prices-all?currency=usd&page=1&pageSize=10'); 
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
        return <div className="market-container error">Error loading market data</div>;
    }

    return (
        <div className="market-container">
            <div className="logo-wrapper">
                <img src={logo} alt="Logo" className="market-logo" />
            </div>
            <div style={{padding : isMobile ? '0 16px' :'0 48px'}}>
                <p className="heading">{Market}</p>
                <MarketTabs />
                <div className="flex-cards">
                   <CardsCarousel  coins={apiData?.data}/>
                </div>
                <p className="heading">{AllCoins}</p>
                <div>
                  { !isMobile &&
                    <div className='flex-cards-tabs'>
                        {headers.map((header, idx) => (
                            <p key={idx} className='all-coin-header'>
                                {header.title}
                                {header.icon && <img className="icon-wrapper" src={info} alt='burgx-info-icon'></img>}
                            </p>
                        ))}
                    </div>
}
                    {apiData?.data?.map((coin, idx) => (
                        <MarketRow key={idx} {...coin} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Market;
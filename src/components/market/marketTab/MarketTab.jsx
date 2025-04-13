import React from 'react';
import './style.css';
import { MarketHeaderTabs } from '../../../constant';
import { MarketTitle } from '../../../constant';
function MarketTabs({activeTab,setActiveTab}) {

  return (
    <>
    <p className="heading">{MarketTitle}</p>
    <div className="market-tabs">
      {MarketHeaderTabs.map(item => (
        <div
          key={item.id}
          className={`tab  ${activeTab === item.txt ? `active tab-${item.id}` : ''}`}
          onClick={() => setActiveTab(item.txt)}
        >
          {item.txt}
        </div>
      ))}
    </div>
    </>
  );
}

export default MarketTabs;

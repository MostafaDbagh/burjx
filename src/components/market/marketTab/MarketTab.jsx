import React, { useState } from 'react';
import './style.css';
import { MarketHeaderTabs } from '../../../constant';

function MarketTabs() {
  const [activeTab, setActiveTab] = useState(MarketHeaderTabs[0].id);

  return (
    <div className="market-tabs">
      {MarketHeaderTabs.map(item => (
        <div
          key={item.id}
          className={`tab  ${activeTab === item.id ? `active tab-${item.id}` : ''}`}
          onClick={() => setActiveTab(item.id)}
        >
          {item.txt}
        </div>
      ))}
    </div>
  );
}

export default MarketTabs;

import React from 'react';
import MarketRow  from '../marketRow/MarketRow'
import { AllCoins } from '../../../constant';
const AllCoinsTable = ({ isMobile, headers, coins, infoIcon }) => {

  return (
    <>
    <p className="heading">{AllCoins}</p>
    { !isMobile &&
      <div className='flex-cards-tabs'>
          {headers.map((header, idx) => (
              <p key={idx} className='all-coin-header'>
                  {header.title}
                  {header.icon && <img className="icon-wrapper" src={infoIcon} alt='burgx-info-icon'></img>}
              </p>
          ))}
      </div>
    }
      {coins?.map((coin, idx) => (
          <MarketRow key={idx} {...coin} />
      ))}
  </>
  );
};



export default AllCoinsTable;
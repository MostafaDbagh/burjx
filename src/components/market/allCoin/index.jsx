import React, { useEffect, useRef, useState } from 'react';
import MarketRow from '../marketRow/MarketRow';
import { AllCoins } from '../../../constant';

const AllCoinsTable = ({ isMobile, headers, coins, infoIcon }) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 10); 
        }
      },
      {
        rootMargin: '100px',
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, []);

  const visibleCoins = coins?.slice(0, visibleCount) || [];

  return (
    <>
      <p className="heading">{AllCoins}</p>

      {!isMobile && (
        <div className="flex-cards-tabs">
          {headers.map((header, idx) => (
            <p key={idx} className="all-coin-header">
              {header.title}
              {header.icon && (
                <img
                  className="icon-wrapper"
                  src={infoIcon}
                  alt="burgx-info-icon"
                />
              )}
            </p>
          ))}
        </div>
      )}

      {visibleCoins.map((coin, idx) => (
        <MarketRow key={idx} {...coin} />
      ))}

      <div ref={loaderRef} style={{ height: '1px' }} />
    </>
  );
};

export default AllCoinsTable;

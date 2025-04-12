import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import MarketCard from '../../market/marketCard/MarketCard';

const CardsCarousel = ({ coins }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: Math.min(5, coins?.length || 1), 
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(4, coins?.length || 1),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, coins?.length || 1),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, coins?.length || 1),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  };

  if (!coins || coins.length === 0) {
    return <div>No coins to display</div>;
  }

  return (
    <div className="crypto-carousel-container">
      <Slider {...settings}>
        {coins.map((coin, idx) => (
          <div key={idx} className="carousel-slide">
            <MarketCard {...coin} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardsCarousel;
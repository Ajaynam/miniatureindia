import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './explore.css'; // Custom CSS for styling the slider

const Explore = () => {

  const slideData = [
    'travels/banner/tajmehal.jpg',
    'travels/banner/tajmehal.jpg',
    'travels/banner/tajmehal.jpg',
    'travels/banner/tajmehal.jpg',
    'travels/banner/tajmehal.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '80px', 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="silk-slider-container">
      <Slider {...settings}>
        {slideData.map((slide, index) => (
          <div key={index} className={index === Math.floor(slideData.length / 2) ? 'center-slide' : ''}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Explore;

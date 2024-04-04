import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './Slider.css'; // Custom CSS for slider styling

const images = [
    { id: 1, src: '/travels/tripgalery/trip2.jpg' },
    { id: 2, src:  '/travels/tripgalery/trip1.jpg' },
    { id: 3, src:  '/travels/tripgalery/trip3.jpg' },
    { id: 4, src:  '/travels/tripgalery/trip4.jpg' },
    { id: 4, src:  '/travels/tripgalery/trip5.jpg' },
    { id: 4, src:  '/travels/tripgalery/trip6.jpg' },
    { id: 4, src:  '/travels/tripgalery/trip7.jpg' },
];

const Clouser = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
      <div className='md:mr-8'>  
          <Slider {...settings}>
            {images.map(image => (
                <div key={image.id}>
                    <img src={image.src} className='rounded-xl w-auto md:h-[400px] md:w-[600px]' alt={`Slide ${image.id}`} />
                </div>
            ))}
        </Slider>
      </div>
    );
};

export default Clouser;

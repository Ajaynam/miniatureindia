import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './bannerClouser.css';

const images = [
    { id: 1, src: '/travels/banner/tajmehal.jpg' },

    { id: 2, src: '/travels/banner/banner1.jpeg' },
    { id: 3, src: '/travels/banner/banner3.jpg' },

    { id: 4, src: '/travels/explore/historical.jpg' },
    { id: 5, src: '/travels/explore/cultral.jpg' },
   
    { id: 7, src: '/travels/experties/mice.jpg' },
];

const BannerClouser = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    return (

        <div className='w-full md:mt-20 relative'>
            <Slider {...settings}>
                {images.map(image => (
                    <div key={image.id} className="relative w-full h-[700px]">
                        <div className="slide-background opacity-1" style={{ backgroundImage: `url(${image.src})` }}>
                            <div
                                class="absolute xs:bg-transparent xs:from-black/70 xs:to-white/10 ltr:xs:bg-gradient-to-r rtl:xs:bg-gradient-to-l inset-0 sm:bg-transparent sm:from-black/80 sm:to-white/10 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                            ></div>

                            <div className="relative xs:mt-10 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 slide-content">
                                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                                    <h1 className="text-4xl  font-semibold text-white libre-baskerville-regular sm:text-5xl">
                                        Discover Your Next
                                        <strong className="block md:font-normal libre-baskerville-regular md:pt-5 text-white text-rose-700"> Adventure </strong>
                                    </h1>

                                    <p className="mt-4  md:text-[15px] max-w-lg text-white sm:text-xl/relaxed">
                                        Explore the diverse culture and beauty of World with Miniature India. We specialize in creating unforgettable travel experiences that immerse you in the rich history.
                                    </p>


                                    <div className="mt-8  flex flex-wrap gap-4 text-center">
                                        <a
                                            href="#"
                                            className="w-full xs:mx-auto xs:w-1/2 rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white  hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                        >
                                            Get Started
                                        </a>

                                        <a
                                            href="#"
                                            className="md:block hidden w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600  hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>


    );
};

export default BannerClouser;

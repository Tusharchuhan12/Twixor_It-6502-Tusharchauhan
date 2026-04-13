import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import sliderImg_1 from "../images/slider/slide1.jpg";
import sliderImg_2 from "../images/slider/slide2.jpg";
import sliderImg_3 from "../images/slider/slide3.jpg";
import sliderImg_4 from "../images/slider/slide4.jpg";
import sliderImg_5 from "../images/slider/slide5.jpg";
import sliderImg_6 from "../images/slider/slide6.jpg";
import sliderImg_7 from "../images/slider/slide7.jpg";
import sliderImg_8 from "../images/slider/slide8.jpg";

const Baner = () => {
    const images = [
        sliderImg_1,
        sliderImg_2,
        sliderImg_3,
        sliderImg_4,
        sliderImg_5,
        sliderImg_6,
        sliderImg_7,
        sliderImg_8,
    ];

    return (
        <div className="mt-2 sm:mt-0 mb-2 sm:mb-0 relative w-full">

            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={3000}
                stopOnHover={false}
                swipeable
                emulateTouch
            >
                {images.map((img, index) => (
                    <div key={index} className="relative w-full px-5 sm:px-0">

                        <img
                            src={img}
                            alt="banner"
                            className="
                w-full
                h-[500px]
                sm:h-[320px]
                md:h-[300px]
                lg:h-[380px]
                object-cover
                rounded-lg
              "
                        />

                     
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-md shadow-lg text-center">

                            <p className="text-sm sm:text-base text-gray-800">
                                You are on amazon.com. You can also shop on Amazon India.
                            </p>

                          
                        </div>

                    </div>
                ))}
            </Carousel>

         
            <div className="absolute bottom-0 left-0 w-full h-20 sm:h-28 bg-gradient-to-t from-white to-transparent"></div>

        </div>
    );
};

export default Baner;
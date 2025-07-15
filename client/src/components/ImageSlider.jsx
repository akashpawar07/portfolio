import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import group2 from '../assets/group2.jpg'
import group4 from '../assets/group4.jpg'
import akashStudyImage from '../assets/akashStudy2.jpg'
import lastDayOfCollege1 from '../assets/lastDayOfCollege1.jpg'
import lastDayOfCollege2 from '../assets/lastDayOfCollege2.jpg'
import meAdiSandip from '../assets/me Adi Sandy photo.jpg'
import myCollegeLastDayphoto from '../assets/myCollegeLastDayphoto.jpg'
import akkiPose from '../assets/akshay kumar pose.jpg'
import gang from '../assets/gang.jpg'
import gang2 from '../assets/gang2.jpg'
import groupPhotoWithGirls from '../assets/group photo with girls.jpg'

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = React.useRef(null);

    const images = [
        { url: `${myCollegeLastDayphoto}`, alt: 'myCollegeLastDayphoto' },
        { url: `${meAdiSandip}`, alt: 'me Adi Sandip' },
        {
            url: 'https://img.freepik.com/free-vector/colorful-illustration-programmer-working_23-2148281409.jpg',
            alt: 'Programmer working illustration'
        },
        { url: `${group2}`, alt: 'Group 2' },
        { url: `${group4}`, alt: 'Group 4' },
        { url: `${lastDayOfCollege1}`, alt: 'last Day Of College 1 photo' },
        { url: `${lastDayOfCollege2}`, alt: 'last Day Of College 2 photo' },
        { url: `${gang}`, alt: 'gang' },
        { url: `${gang2}`, alt: 'gang2' },
        { url: `${groupPhotoWithGirls}`, alt: 'Group Photo with girls' },
        { url: `${akkiPose}`, alt: 'The unique akki pose' },
        {
            url: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg',
            alt: 'Programming laptop'
        },
        {
            url: 'https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169847.jpg',
            alt: 'UX Design'
        },
        { url: `${akashStudyImage}`, alt: 'whileStudying' },
        {
            url: 'https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg',
            alt: 'Night programming'
        },
        {
            url: 'https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3866.jpg',
            alt: 'Code typing'
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000, // Increased transition speed
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000, // Increased display time
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        arrows: false,
        draggable: true,
        touchThreshold: 20,
        cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)', // Smooth easing
        pauseOnHover: false, // Don't pause on hover for continuous feel
        pauseOnFocus: false, // Don't pause on focus
        pauseOnDotsHover: false, // Don't pause on dots hover
        fade: false, // Using slide instead of fade for continuous feel
        centerMode: true, // Enable center mode
        centerPadding: '0px', // No padding for center mode
        useCSS: true,
        useTransform: true,
    };

    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    return (
        <div className="flex flex-col gap-4">
            {/* Main Slider */}
            <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
                <Slider ref={sliderRef} {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="relative select-none">
                            <div className="relative w-full h-[250px] md:h-[380px] overflow-hidden">
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                                    draggable="false"
                                    style={{
                                        willChange: 'transform', // Optimize performance
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Navigation Dots - Made more subtle */}
            <div className="flex justify-center gap-1.5 mt-2 px-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-500 rounded-full ${currentSlide === index
                                ? 'w-6 h-1.5 bg-blue-500/70'
                                : 'w-1.5 h-1.5 bg-gray-300/50 hover:bg-gray-400/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
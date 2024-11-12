import React from 'react'
import { useState } from 'react'
import Slider from 'react-slick';
import ModelIamge3 from '../assets/hitesh choudhary.jpg'
import Group2 from '../assets/group2.jpg'
import Group4 from '../assets/group4.jpg'
import Studypic from '../assets/akashStudy2.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageSlider() {

    let model = 'https://img.freepik.com/free-photo/full-shot-man-suit-working-stairs_23-2148230807.jpg?ga=GA1.1.919035732.1724917926&semt=ais_hybrid';

    var settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <Slider {...settings}>
                {/* 1 */}
                <div>
                    <img src='https://img.freepik.com/free-vector/colorful-illustration-programmer-working_23-2148281409.jpg?ga=GA1.1.919035732.1724917926&semt=ais_hybrid' className='w-screen h-[250px] md:h-[380px] object-cover ' alt="model-3" />
                </div>
                {/* 2 */}
                <div>
                    <img src={Group2} className='w-screen h-[250px] md:h-[380px] object-fill' alt="model-3" />
                </div>
                {/* 3 */}
                <div>
                    <img src={Group4} className='w-screen h-[250px] md:h-[380px] object-fill ' alt="model-3" />
                </div>
                {/* 4 */}
                <div>
                    <img src='https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?ga=GA1.1.919035732.1724917926&semt=ais_hybrid' className='w-screen h-[250px] md:h-[380px] object-fill' alt="model-3" />
                </div>
                {/* 5 */}
                <div>
                    <img src={ModelIamge3} className='w-screen h-[250px] md:h-[380px] object-fill' alt="model-3" />
                </div>
                {/* 6 */}
                <div>
                <img src='https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169847.jpg?ga=GA1.1.919035732.1724917926&semt=ais_hybrid' className='w-screen h-[250px] md:h-[380px] object-fill' alt="model-3" />
                </div>
                {/* 7 */}
                <div>
                    <img src={Studypic} className='w-screen h-[250px] md:h-[380px] object-cover ' alt="model-3" />
                </div>
                {/* 8 */}
                <div>
                    <img src='https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?ga=GA1.1.919035732.1724917926&semt=ais_hybrid' className='w-screen h-[250px] md:h-[380px] object-cover ' alt="model-3" />
                </div>
                {/* 9 */}
                <div>
                    <img src='https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3866.jpg?size=626&ext=jpg&ga=GA1.1.919035732.1724917926&semt=ais_hybrid' className='w-screen h-[250px] md:h-[380px] object-cover ' alt="model-3" />
                </div>
                {/* 10 */}
                <div>
                    <img src='https://img.freepik.com/premium-photo/it-engineer-working-with-his-pc_1293807-141.jpg?size=626&ext=jpg&ga=GA1.1.919035732.1724917926&semt=ais_hybrid' className='w-screen h-[250px] md:h-[380px] object-cover ' alt="model-3" />
                </div>



            </Slider>
        </>
    )
}

export default ImageSlider

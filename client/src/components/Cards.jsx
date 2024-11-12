import React, { useState } from 'react';

import Oops from "../assets/oops.webp"
import Java from "../assets/java.webp"
import Js from "../assets/js2.jpg"

const CardsSection = () => {
  const [focusedCard, setFocusedCard] = useState(null);

  return (
    <div className="cards-container relative">
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Snap Scrolling */
        .snap-container {
          scroll-snap-type: x mandatory;
        }
        
        .snap-card {
          scroll-snap-align: center;
        }
      `}</style>

      {/* Container for cards */}
      <div className='
        /* Mobile styles */
        flex flex-row overflow-x-auto snap-container no-scrollbar
        w-full px-4 gap-4 pb-4
        /* Desktop styles */
        md:flex-wrap md:overflow-y-auto md:overflow-x-hidden
        md:h-[80vh] md:w-[55%] md:gap-6 md:justify-center
        md:content-start md:px-0
      '>
        {/* Java Card */}
        <div 
          className={`
            /* Mobile styles */
            flex-shrink-0 w-[80vw] snap-card
            /* Desktop styles */
            md:w-[45%] md:max-w-[400px]
            /* Common styles */
            h-auto flex flex-col rounded-lg
            border-2 border-indigo-400
            bg-[#d5d5d7cf] dark:bg-[#515153cf]
            transition-all duration-300
            ${focusedCard === 'java' ? 'scale-100 z-10' : 'scale-95 opacity-70'}
          `}
          onMouseEnter={() => setFocusedCard('java')}
          onMouseLeave={() => setFocusedCard(null)}
        >
          <div className='w-full h-[220px] md:h-[200px] bg-purple-950 overflow-hidden rounded-t-lg'>
            <img 
              src={Java} 
              alt="Java" 
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-125'
            />
          </div>
          <div className='p-4 h-[190px] overflow-y-auto no-scrollbar'>
            <p className='text-[15px] md:text-[14px] text-center'>
              Java's compiled code (bytecode) runs on any device supporting Java Virtual Machine (JVM), making it:
              - Write Once, Run Anywhere (WORA)
              - Independent of underlying hardware and OS
              - Highly portable and reusable
            </p>
          </div>
        </div>

        {/* JavaScript Card */}
        <div 
          className={`
            flex-shrink-0 w-[80vw] snap-card
            md:w-[45%] md:max-w-[400px]
            h-auto flex flex-col rounded-lg
            border-2 border-indigo-400
            bg-[#d5d5d7cf] dark:bg-[#515153cf]
            transition-all duration-300
            ${focusedCard === 'javascript' ? 'scale-100 z-10' : 'scale-95 opacity-70'}
          `}
          onMouseEnter={() => setFocusedCard('javascript')}
          onMouseLeave={() => setFocusedCard(null)}
        >
          <div className='w-full h-[220px] md:h-[200px] bg-purple-950 overflow-hidden rounded-t-lg'>
            <img 
              src={Js} 
              alt="JavaScript" 
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-125'
            />
          </div>
          <div className='p-4 h-[190px] overflow-y-auto no-scrollbar'>
            <p className='text-[15px] md:text-[14px] text-center'>
              "Versatility"
              JavaScript seamlessly adapts to:
              - Client-side scripting
              - Server-side programming (Node.js)
              - Mobile and desktop app development
              - Game development
              - IoT programming
            </p>
          </div>
        </div>

        {/* OOPS Card */}
        <div 
          className={`
            flex-shrink-0 w-[80vw] snap-card
            md:w-[45%] md:max-w-[400px]
            h-auto flex flex-col rounded-lg
            border-2 border-indigo-400
            bg-[#d5d5d7cf] dark:bg-[#515153cf]
            transition-all duration-300
            ${focusedCard === 'oops' ? 'scale-100 z-10' : 'scale-95 opacity-70'}
          `}
          onMouseEnter={() => setFocusedCard('oops')}
          onMouseLeave={() => setFocusedCard(null)}
        >
          <div className='w-full h-[220px] md:h-[200px] bg-purple-950 overflow-hidden rounded-t-lg'>
            <img 
              src={Oops} 
              alt="OOPS" 
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-125'
            />
          </div>
          <div className='p-4 h-[190px] overflow-y-auto no-scrollbar'>
            <p className='text-[15px] md:text-[14px] text-center'>
              OOPS used for design and develop scalable, and efficient software solutions. By embracing encapsulation, inheritance, and polymorphism, and maintainable code that simplifies complexity and drives innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
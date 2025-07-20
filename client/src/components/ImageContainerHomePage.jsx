import React, { useState, useEffect } from 'react';
import svg from '../assets/logo/mainModel.png';

const SvgHeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative flex items-center justify-center h-[50vh] md:h-[92vh] lg:h-[95vh] p-2">
            {/* Corner Accents - Alternating Pairs */}
            {/* Top Left */}
            <div className="absolute top-0 left-0 w-20 h-20 md:w-24 md:h-24">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent animate-corner-pair-1"></div>
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent animate-corner-pair-1"></div>
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400 animate-corner-pair-1"></div>
            </div>

            {/* Top Right */}
            <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24">
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-blue-500 to-transparent animate-corner-pair-2"></div>
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent animate-corner-pair-2"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-blue-400 animate-corner-pair-2"></div>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-0 left-0 w-20 h-20 md:w-24 md:h-24">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent animate-corner-pair-2"></div>
                <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-green-500 to-transparent animate-corner-pair-2"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-green-400 animate-corner-pair-2"></div>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-0 right-0 w-20 h-20 md:w-24 md:h-24">
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-orange-500 to-transparent animate-corner-pair-1"></div>
                <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-orange-500 to-transparent animate-corner-pair-1"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-orange-400 animate-corner-pair-1"></div>
            </div>

            {/* Main SVG */}
            <div className={`transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}>
                <img
                    src={svg}
                    alt="Homepage SVG"
                    className="w-96 h-96 md:w-[450px] md:h-[450px] lg:w-[530px] lg:h-[530px] object-contain hover:scale-105 transition-all duration-500 ease-in-out hover:rotate-1 animate-bounce-slow rounded-tl-3xl rounded-br-3xl"
                />
            </div>

            <style jsx>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s ease-in-out infinite;
                }
                
                @keyframes corner-pair-1 {
                    0%, 50% { 
                        opacity: 1; 
                        filter: brightness(1.5) drop-shadow(0 0 15px currentColor);
                        transform: scale(1);
                    }
                    51%, 100% { 
                        opacity: 0; 
                        filter: brightness(0) drop-shadow(0 0 0px currentColor);
                        transform: scale(0.8);
                    }
                }
                
                @keyframes corner-pair-2 {
                    0%, 50% { 
                        opacity: 0; 
                        filter: brightness(0) drop-shadow(0 0 0px currentColor);
                        transform: scale(0.8);
                    }
                    51%, 100% { 
                        opacity: 1; 
                        filter: brightness(1.5) drop-shadow(0 0 15px currentColor);
                        transform: scale(1);
                    }
                }
                
                .animate-corner-pair-1 {
                    animation: corner-pair-1 6s ease-in-out infinite;
                }
                
                .animate-corner-pair-2 {
                    animation: corner-pair-2 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default SvgHeroSection;
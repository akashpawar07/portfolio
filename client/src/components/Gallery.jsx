import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Download, GalleryHorizontal, LayoutGrid, Grid3x3, Grid2x2, List } from 'lucide-react';

import mineImage from '../assets/gang.jpg'
import minePicture from '../assets/me img.jpg'
import group2 from '../assets/group2.jpg'
import group4 from '../assets/group4.jpg'
import lastDayOfCollege1 from '../assets/lastDayOfCollege1.jpg'
import lastDayOfCollege2 from '../assets/lastDayOfCollege2.jpg'
import meAdiSandip from '../assets/me Adi Sandy photo.jpg'
import myCollegeLastDayphoto from '../assets/myCollegeLastDayphoto.jpg'
import akkiPose from '../assets/akshay kumar pose.jpg'
import gang from '../assets/gang.jpg'
import gang2 from '../assets/gang2.jpg'
import groupPhotoWithGirls from '../assets/group photo with girls.jpg'

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [viewMode, setViewMode] = useState('scroll'); // 'scroll' or 'grid'
    const [gridColumns, setGridColumns] = useState(4); // 3 or 4 columns for small devices
    const autoScrollTimerRef = useRef(null);
    const imageContainerRef = useRef(null);

    // Sample images for demo (replace with your actual images)
    const galleryItems = [
        {
            id: 1,
            src: myCollegeLastDayphoto,
            title: 'Me - collegeLastDayPicture',
            category: 'nature',
            description: 'Closing chapters with knowledge in hand 📚'
        },
        {
            id: 2,
            src: meAdiSandip,
            title: 'City Streets',
            category: 'urban',
            description: 'Busy city intersection at dusk'
        },
        {
            id: 3,
            src: minePicture,
            title: 'City Lights',
            category: 'urban',
            description: 'Stunning city skyline at night'
        },
        {
            id: 4,
            src: mineImage,
            title: 'Forest Path',
            category: 'nature',
            description: 'Peaceful walk through autumn forest'
        },
        {
            id: 5,
            src: gang2,
            title: 'Ocean Waves',
            category: 'nature',
            description: 'Dramatic ocean waves hitting the shore'
        },
        {
            id: 6,
            src: gang,
            title: 'Street Photography',
            category: 'urban',
            description: 'Candid moment captured in the city'
        },
        {
            id: 7,
            src: group2,
            title: 'Desert Sunset',
            category: 'nature',
            description: 'Golden hour in the desert landscape'
        },
        {
            id: 8,
            src: lastDayOfCollege1,
            title: 'Architecture',
            category: 'urban',
            description: 'Modern architectural details'
        },
        {
            id: 9,
            src: lastDayOfCollege2,
            title: 'Winter Wonderland',
            category: 'nature',
            description: 'Snow-covered mountain peaks'
        },
        {
            id: 10,
            src: akkiPose,
            title: 'Sunset Beach',
            category: 'nature',
            description: 'Golden sunset over the ocean'
        },
        {
            id: 11,
            src: groupPhotoWithGirls,
            title: 'Urban Reflection',
            category: 'urban',
            description: 'City buildings reflected in water'
        },
        {
            id: 12,
            src: group4,
            title: 'Mountain Lake',
            category: 'nature',
            description: 'Crystal clear mountain lake'
        },
    ]

    // Download function
    const downloadImage = (imageSrc, imageName) => {
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = `${imageName}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Auto-scroll functionality
    useEffect(() => {
        if (viewMode !== 'scroll') return;

        const scrollContainer = document.querySelector('.scroll-container');
        if (!scrollContainer) return;

        const getScrollSpeed = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1024) return 2;
            if (screenWidth >= 768) return 1.5;
            return 1;
        };

        const scrollInterval = 20;

        const startAutoScroll = () => {
            if (autoScrollTimerRef.current) {
                clearInterval(autoScrollTimerRef.current);
            }

            autoScrollTimerRef.current = setInterval(() => {
                const scrollSpeed = getScrollSpeed();
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += scrollSpeed;
                }
            }, scrollInterval);
        };

        const stopAutoScroll = () => {
            if (autoScrollTimerRef.current) {
                clearInterval(autoScrollTimerRef.current);
                autoScrollTimerRef.current = null;
            }
        };

        startAutoScroll();

        scrollContainer.addEventListener('mouseenter', stopAutoScroll);
        scrollContainer.addEventListener('mouseleave', startAutoScroll);
        scrollContainer.addEventListener('touchstart', stopAutoScroll);
        scrollContainer.addEventListener('touchend', () => {
            setTimeout(startAutoScroll, 1000);
        });

        const handleResize = () => {
            stopAutoScroll();
            startAutoScroll();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            stopAutoScroll();
            if (scrollContainer) {
                scrollContainer.removeEventListener('mouseenter', stopAutoScroll);
                scrollContainer.removeEventListener('mouseleave', startAutoScroll);
                scrollContainer.removeEventListener('touchstart', stopAutoScroll);
                scrollContainer.removeEventListener('touchend', startAutoScroll);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [viewMode]);

    const filteredItems = galleryItems;

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const openModal = (item, index) => {
        setSelectedImage(item);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(filteredItems[nextIndex]);
    };

    const prevImage = () => {
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(filteredItems[prevIndex]);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImage) {
                if (e.key === 'Escape') closeModal();
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, currentIndex, filteredItems.length]);

    // Get grid classes based on column selection
    const getGridClasses = () => {
        if (gridColumns === 3) {
            return 'grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5';
        } else {
            return 'grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5';
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white text-lg">Loading Gallery...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br bg-transparent flex justify-center items-center w-[95%] ml-[2.5%] lg:w-[98%] lg:ml-[1%]">
                <div className={`transition-all duration-500 w-full ${selectedImage ? 'blur-sm' : ''}`}>
                    <div className="py-6 sm:py-12 px-2 sm:px-4">
                        <div className="w-full max-w-full">
                            <div className="text-center mb-8 sm:mb-16 px-2">
                                <h1 className="text-2xl sm:text-3xl md:text-5xl text-gray-900 mb-4 sm:mb-6 font-extrabold bg-gradient-to-tr from-green-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    Photo Gallery
                                </h1>
                                <p className="text-lg sm:text-xl pl-4 sm:pl-8 italic dark:text-white/100 text-gray-900 mx-auto mb-6 sm:mb-8 max-w-[90%] sm:max-w-2/3">
                                    A photo album of my college journey, filled with memories that I'll cherish forever
                                </p>

                                {/* View Mode Toggle - Responsive */}
                                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
                                    <button
                                        onClick={() => setViewMode('scroll')}
                                        className={`flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 w-full sm:w-auto text-xs sm:text-base ${viewMode === 'scroll'
                                            ? 'bg-blue-500 text-white shadow-lg shadow-purple-500/25'
                                            : 'bg-gray-500 text-white hover:bg-white/20'
                                            }`}
                                    >
                                        <GalleryHorizontal className="w-3 h-3 sm:w-5 sm:h-5 flex-shrink-0" />
                                        <span className="truncate">Scroll View</span>
                                    </button>
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 w-full sm:w-auto text-xs sm:text-base ${viewMode === 'grid'
                                            ? 'bg-blue-500 text-white shadow-lg shadow-purple-500/25'
                                            : 'bg-gray-500 text-white hover:bg-white/20'
                                            }`}
                                    >
                                        <LayoutGrid className="w-3 h-3 sm:w-5 sm:h-5 flex-shrink-0" />
                                        <span className="truncate">All Photos</span>
                                    </button>
                                </div>

                                {/* Column Toggle for Grid View (Only visible on small devices when grid is active) */}
                                {viewMode === 'grid' && (
                                    <div className="flex sm:hidden justify-center items-center gap-2 mb-4 px-4">
                                        <span className="dark:text-slate-100 text-gray-900 text-[16px] font-medium flex items-center gap-2 py-2 ">
                                         View In : 
                                        </span>


                                        <button
                                            onClick={() => setGridColumns(3)}
                                            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 text-xs ${gridColumns === 3
                                                ? 'bg-blue-500 text-white shadow-lg shadow-purple-500/25'
                                                : 'bg-gray-500 text-white hover:bg-gray-300'
                                                }`}
                                        >
                                            <Grid3x3 className="w-3 h-3" />
                                            <span>3</span>
                                        </button>
                                        <button
                                            onClick={() => setGridColumns(4)}
                                            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 text-xs ${gridColumns === 4
                                                ? 'bg-blue-500 text-white shadow-lg shadow-purple-500/25'
                                                : 'bg-gray-500 text-white hover:bg-gray-300'
                                                }`}
                                        >
                                            <Grid2x2 className="w-3 h-3" />
                                            <span>4</span>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Scroll View */}
                            {viewMode === 'scroll' && (
                                <div className="relative">
                                    <div className="scroll-container flex gap-3 sm:gap-6 overflow-x-auto scrollbar-hide pb-4">
                                        {filteredItems.map((item, index) => (
                                            <div
                                                key={`original-${item.id}`}
                                                className="group relative flex-shrink-0 overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer w-64 h-80 sm:w-80 sm:h-96"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    openModal(item, index);
                                                }}
                                            >
                                                <img
                                                    src={item.src}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />

                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                                        <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{item.title}</h3>
                                                        <p className="text-gray-300 text-sm">{item.description}</p>
                                                    </div>

                                                    <div className="absolute top-4 right-4">
                                                        <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-80" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {filteredItems.map((item, index) => (
                                            <div
                                                key={`duplicate-${item.id}`}
                                                className="group relative flex-shrink-0 overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer w-64 h-80 sm:w-80 sm:h-96"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    openModal(item, index);
                                                }}
                                            >
                                                <img
                                                    src={item.src}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />

                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                                        <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{item.title}</h3>
                                                        <p className="text-gray-300 text-sm">{item.description}</p>
                                                    </div>

                                                    <div className="absolute top-4 right-4">
                                                        <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-80" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-center mt-4">
                                        <div className="text-gray-400 text-sm flex items-center gap-2">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                                            Auto-scrolling photos • Click to view
                                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Grid View */}
                            {viewMode === 'grid' && (
                                <div className={`grid ${getGridClasses()} gap-1 sm:gap-2 auto-rows-[120px]`}>
                                    {filteredItems.map((item, index) => (
                                        <div
                                            key={item.id}
                                            className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-0 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openModal(item, index);
                                            }}
                                        >
                                            <img
                                                src={item.src}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
                                                    <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base mb-1">{item.title}</h3>
                                                    <p className="text-gray-300 text-xs sm:text-sm hidden sm:block">{item.description}</p>
                                                </div>

                                                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4">
                                                    <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white opacity-80" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Modal with Touch Scrolling for Small Devices */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center animate-in fade-in duration-300">
                        {/* Mobile Touch Scrolling Layout (sm and below) */}
                        <div className="sm:hidden relative w-full h-full backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors z-30 bg-black/30 backdrop-blur-sm rounded-full p-2 hover:bg-black/50"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Download Button */}
                            <button
                                onClick={() => downloadImage(selectedImage.src, selectedImage.title)}
                                className="absolute top-4 right-16 text-white hover:text-purple-400 transition-colors z-30 bg-black/30 backdrop-blur-sm rounded-full p-2 hover:bg-black/50"
                            >
                                <Download className="w-5 h-5" />
                            </button>

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-purple-400 transition-colors z-20 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-purple-400 transition-colors z-20 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Scrollable Image Container */}
                            <div
                                ref={imageContainerRef}
                                className="flex flex-row h-full w-full overflow-x-auto overflow-y-hidden scrollbar-hide"
                            >
                                {/* Image Container - Allow horizontal scrolling */}
                                <div className="flex-shrink-0 min-w-full h-full flex items-center justify-start relative">
                                    <img
                                        src={selectedImage.src}
                                        alt={selectedImage.title}
                                        className="h-full w-auto object-contain min-w-full"
                                    />

                                    {/* Info Overlay - Bottom of image */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                                        <h3 className="text-white text-lg font-bold mb-1">{selectedImage.title}</h3>
                                        <p className="text-gray-300 text-sm mb-2">{selectedImage.description}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="px-2 py-1 bg-purple-500/20 backdrop-blur-sm text-purple-300 rounded-full text-xs border border-purple-400/20">
                                                {currentIndex + 1} / {galleryItems.length}
                                            </span>
                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop/Tablet Layout with Navigation (sm and above) */}
                        <div className="hidden sm:flex relative w-full h-full max-w-full max-h-full backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden flex-col">
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors z-30 bg-black/30 backdrop-blur-sm rounded-full p-2 hover:bg-black/50"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Download Button */}
                            <button
                                onClick={() => downloadImage(selectedImage.src, selectedImage.title)}
                                className="absolute top-4 right-16 text-white hover:text-purple-400 transition-colors z-30 bg-black/30 backdrop-blur-sm rounded-full p-2 hover:bg-black/50"
                            >
                                <Download className="w-6 h-6" />
                            </button>

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-purple-400 transition-colors z-20 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-purple-400 transition-colors z-20 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Vertical Layout for Desktop/Tablet */}
                            <div className="flex flex-col h-full w-full">
                                <div className="flex-1 flex items-center justify-center p-2 pt-16 min-h-0 overflow-hidden">
                                    <img
                                        src={selectedImage.src}
                                        alt={selectedImage.title}
                                        className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
                                    />
                                </div>

                                <div className="flex-shrink-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 border-t border-white/10">
                                    <div className="mx-auto max-w-4xl">
                                        <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
                                        <p className="text-gray-300 text-sm mb-4">{selectedImage.description}</p>
                                        <div className="flex items-center gap-4">
                                            <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm text-purple-300 rounded-full text-xs border border-purple-400/20">
                                                Photo {currentIndex + 1}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Counter */}
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-3rem] text-white text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                                {currentIndex + 1} / {galleryItems.length}
                            </div>
                        </div>
                    </div>
                )}

                {/* Custom Scrollbar Hide */}
                <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    
                    /* Hide scrollbar for modal image container on mobile */
                    div[style*="overflow-x-auto"]::-webkit-scrollbar {
                        display: none;
                    }
                    
                    /* Ensure smooth scrolling on touch devices */
                    @media (max-width: 640px) {
                        .modal-image-container {
                            -webkit-overflow-scrolling: touch;
                            scroll-behavior: smooth;
                        }
                    }
                `}</style>
            </div>
        </>
    );
};

export default Gallery;
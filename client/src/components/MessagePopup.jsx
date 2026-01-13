import React from "react";
// Make sure checkBtn is actually imported if it's a local file
// import checkBtn from '../assets/check.png'; 


export default function MessagePopup({ closeModal, userName }) {
    
    return (
        <>
            <div className="fixed inset-0 z-[50] flex items-center justify-center
                          bg-black/40 backdrop-blur-sm px-4">

                {/* Modal Card */}
                <div className="relative w-full max-w-md rounded-2xl
                            bg-white dark:bg-gray-900
                            shadow-2xl
                            animate-in fade-in zoom-in duration-300">

                    {/* Success Icon */}
                    <div className="flex justify-center -mt-12">
                        <div className="w-20 h-20 rounded-full bg-green-500
                                flex items-center justify-center shadow-lg">
                            {/* SVG fallback in case checkBtn is not defined */}
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="px-6 pt-6 pb-8 text-center">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-black">
                            Thank You, {userName || "Visitor"}!
                        </h1>

                        <p className="mt-3 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                            Thank you for reaching out. I truly appreciate your message and
                            will get back to you soon.
                        </p>

                        {/* Action */}
                        <button
                            type="button"
                            onClick={closeModal} // Now this will correctly call setShowModal(false)
                            className="mt-6 w-full rounded-lg bg-green-500 py-3 font-semibold text-white"
                        >
                            Okay
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default function MessagePopup({ closeModal, userName }) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            {/* Modal Card */}
            <div className="relative w-full max-w-sm rounded-3xl 
                            bg-white dark:bg-gray-900 
                            p-8 shadow-2xl animate-in fade-in zoom-in duration-300">

                {/* Success Icon */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                    <div className="w-24 h-24 rounded-full bg-[#22c55e] 
                                    flex items-center justify-center shadow-xl
                                    ring-8 ring-white dark:ring-gray-900">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                </div>

                {/* Content */}
                <div className="mt-8 text-center">
                    {/* Fixed: Specifically using gray-900 for light and white for dark */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-700">
                        Thank You, {userName || "Visitor"}!
                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-800 text-base leading-relaxed">
                        Thank you for reaching out. I truly appreciate your message and
                        will get back to you soon.
                    </p>

                    {/* Action Button */}
                    <button
                        type="button"
                        onClick={closeModal}
                        className="mt-8 w-full rounded-xl bg-[#22c55e] hover:bg-[#1da850] 
                                 py-4 font-bold text-white shadow-lg shadow-green-500/20
                                 transition-all active:scale-95"
                    >
                        Okay
                    </button>
                </div>
            </div>
        </div>
    );
}
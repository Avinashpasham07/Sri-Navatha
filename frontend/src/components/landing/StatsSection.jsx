import React from 'react';

const StatsSection = () => {
    const stats = [
        "Andhra Pradesh's #1 Interior Service",
        "5+ Years of Design Excellence",
        "480+ Luxury Projects Delivered",
        "100% Verified Premium Materials",
        "Direct-from-Source Logistics",
        "Certified Professional Installation"
    ];

    return (
        <section className="bg-amber-600 py-6 overflow-hidden border-y border-amber-700/20 relative shadow-2xl">
            {/* Glossy Overlay for Premium Look */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
            
            <div className="flex whitespace-nowrap animate-marquee">
                {/* Duplicate for infinite effect */}
                {[...stats, ...stats, ...stats].map((text, i) => (
                    <div key={i} className="flex items-center gap-8 mx-8">
                        <span className="text-white text-[11px] font-black uppercase tracking-[0.4em] italic drop-shadow-sm">{text}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-inner"></div>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default StatsSection;

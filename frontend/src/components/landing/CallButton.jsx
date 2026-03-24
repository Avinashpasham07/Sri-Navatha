import React from 'react';

const CallButton = () => {
    return (
        <a
            href="tel:+91-9248113699"
            className="fixed bottom-10 right-10 z-[150] group flex items-center"
        >
            {/* Label Reveal on Hover */}
            <div className="mr-4 bg-zinc-950 text-white px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-[.4em] transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 shadow-2xl pointer-events-none">
                Call Consultant
            </div>
            
            {/* The Main Button - NO PULSING OR GLOW */}
            <div className="relative w-16 h-16 bg-zinc-900 border border-white/10 hover:bg-zinc-800 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-amber-600">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            </div>
        </a>
    );
};

export default CallButton;

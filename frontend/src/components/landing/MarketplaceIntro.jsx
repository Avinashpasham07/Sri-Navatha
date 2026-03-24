import React, { useEffect, useRef, useState } from 'react';

const useInView = () => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, inView];
};

const deliverables = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        t: 'Marbles',
        price: 'Bespoke Estimates',
        d: 'Complete interior solutions for villas and apartments. From 2D/3D planning to final finishing.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
            </svg>
        ),
        t: 'Sheets',
        price: 'Bulk Pricing Available',
        d: 'Direct-from-source luxury marble sheets. Heat, water and fire resistant wall solutions.',
    },


];

const MarketplaceIntro = () => {
    const [ref, inView] = useInView();
    return (
        <section ref={ref} className="px-8 md:px-20 bg-[#fafafa] py-24 md:py-32 border-b border-zinc-200 relative overflow-hidden">
            {/* Luxurious subtle background dot pattern */}
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#000 0.8px, transparent 0.8px)', backgroundSize: '24px 24px' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side text with better typographic hierarchy */}
                    <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/20 px-3 py-1 rounded-full mb-8 shadow-sm">
                            <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
                            <span className="text-amber-700 text-[10px] font-black uppercase tracking-[0.2em]">Curated Marketplace</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter leading-[0.85] mb-8 uppercase italic transition-all">
                            Your Elite<br />Materials<br />Platform.
                        </h2>
                        <div className="w-16 h-1.5 bg-amber-600 rounded mb-8"></div>
                        <p className="text-zinc-600 text-lg font-light leading-relaxed mb-10 border-l-2 border-amber-600/30 pl-6">
                            Sri Navatha isn't just a design firm — it's a <strong className="text-zinc-900 font-semibold">centralized marketplace</strong> where homeowners and professionals access premium materials at direct business-level pricing.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="tel:+91-9248113699"
                                className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all shadow-2xl shadow-zinc-900/10 active:scale-95">
                                Partner With Us
                            </a>
                            <a href="#services"
                                className="border border-zinc-300 hover:border-amber-600 text-zinc-600 hover:text-amber-700 px-8 py-4 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all backdrop-blur-sm">
                                Explore Platform →
                            </a>
                        </div>
                    </div>

                    {/* Right side: Deliverables as card listings - NO HOVER SCALE */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {deliverables.map((item, i) => (
                            <div key={i}
                                className={`group p-8 bg-white border border-zinc-100 rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-200/50 hover:border-amber-500/20
                                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${i * 100}ms` }}>

                                <div className="text-[9px] font-bold text-amber-600 uppercase tracking-widest mb-4 opacity-70 italic">{item.price}</div>

                                <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-100 transition-colors">
                                    {item.icon}
                                </div>

                                <h4 className="text-[15px] font-black text-zinc-900 mb-2 uppercase tracking-tight italic leading-tight">
                                    {item.t}
                                </h4>
                                <p className="text-black text-[14px] leading-relaxed font-light mb-4">
                                    {item.d}
                                </p>

                                <div className="pt-4 border-t border-zinc-50 flex items-center justify-between">
                                    <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest">
                                        Learn More →
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketplaceIntro;

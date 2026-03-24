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

const materials = [
    { t: 'Tundra Marble', d: 'Cool gray with subtle white veining.', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80', badge: 'Popular' },
    { t: 'Travertino Luxe', d: 'Warm beige textures for organic depth.', img: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80', badge: 'New Arrival' },
    { t: 'Golden Onyx', d: 'Stunning translucent golden patterns.', img: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=800&q=80', badge: 'Limited' },
    { t: 'Black Statuario', d: 'Deep black with dramatic white contrast.', img: 'https://media.istockphoto.com/id/2197212547/photo/black-carrara-statuario-marble-texture-background-calacatta-glossy-marble-with-grey-streaks.webp?a=1&b=1&s=612x612&w=0&k=20&c=lHRcecRfuZ0H5Dzh46DVo11w58MRKgw-cBS4eNWbqho=', badge: 'Elite' },
];

const TrendingMaterials = () => {
    const [ref, inView] = useInView();

    return (
        <section id="materials" ref={ref} className="px-8 md:px-20 bg-zinc-100 py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
            {/* Cinematic Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-amber-600/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header - MARKET STANDARD PREMIUM */}
                <div className={`mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="text-amber-500 font-bold uppercase tracking-[0.6em] text-[10px] mb-4 block">The Collection</span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <h2 className="text-5xl md:text-8xl font-black text-zinc-900 leading-none uppercase tracking-tighter italic">Trending<br />Materials</h2>
                        <p className="text-zinc-600 text-[18px] font-medium leading-relaxed max-w-sm mb-2">
                            A curated selection of the season's most sought-after marble finishes and bespoke interior materials.
                        </p>
                    </div>
                </div>

                {/* Grid - NO HOVER SCALE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {materials.map((m, i) => (
                        <div key={i}
                            className={`group cursor-pointer transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            style={{ transitionDelay: `${i * 120}ms` }}>

                            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-zinc-900 mb-8 overflow-hidden group">
                                <img src={m.img} alt={m.t} className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-1000" />

                                {/* Shimmer shine on hover - REFINED */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-100"></div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

                                {/* Badge */}
                                <div className="absolute top-6 left-6 flex">
                                    <span className="bg-amber-600 text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg border border-amber-500/50 shadow-lg">
                                        {m.badge}
                                    </span>
                                </div>

                                {/* Content reveal on bottom */}
                                <div className="absolute bottom-8 left-8 right-8">
                                    <h4 className="text-lg font-black text-white uppercase tracking-tight italic mb-1">{m.t}</h4>
                                    <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{m.d}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <a href="#materials-full" className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-white/40 hover:text-amber-500 transition-all group">
                        View Entire Collection <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TrendingMaterials;

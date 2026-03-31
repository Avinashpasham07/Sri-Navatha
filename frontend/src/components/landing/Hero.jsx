import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

    return (
        <section className="relative h-screen min-h-[700px] w-full flex items-center justify-start overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80"
                    alt="Sri Navatha Luxury Interior"
                    className="w-full h-full object-cover"
                />
                {/* Rich warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Animated accent line */}
            <div className={`absolute left-0 top-0 w-1 bg-amber-500 transition-all duration-1000 ease-out ${visible ? 'h-full' : 'h-0'}`}></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 w-full">
                <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-flex items-center gap-2 text-amber-400 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
                        <span className="w-8 h-px bg-amber-400 inline-block"></span>
                        Andhra Pradesh’s Trusted Marble & Sheet Supplier
                    </span>
                </div>

                <h1 className={`text-white font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.88] mb-8 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Premium Marble & Sheet<br />
                    <span className="text-amber-400">Solutions</span> for<br />
                    Modern Spaces
                </h1>

                <p className={`text-zinc-300 text-lg font-light leading-relaxed max-w-lg mb-10 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    Sri Navatha supplies premium marble sheets and surface materials for residential and commercial projects across Andhra Pradesh. We ensure quality, durability, and competitive pricing for every requirement.
                </p>

                <div className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <a href="#Materials"
                        className="group bg-amber-600 hover:bg-amber-500 text-white text-xs px-6 py-3 font-black uppercase tracking-[0.3em] shadow-2xl shadow-amber-900/40 transition-all rounded flex items-center gap-3">
                        Explore Materials
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    <a href="#Collections"
                        className="border border-white/30 hover:border-amber-400 hover:text-amber-400 text-white text-xs px-6 py-3 font-black uppercase tracking-[0.3em] transition-all rounded backdrop-blur-sm">
                        View Collections
                    </a>
                </div>

                {/* Floating Stats */}
                <div className={`flex items-center mt-4 gap-5 border-t border-white/5 pt-8 transition-all duration-700 delay-[900ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    {[['5+', 'Years Experience'], ['480+', 'Projects Delivered'], ['100%', 'Client Satisfaction']].map(([n, t]) => (
                        <div key={t}>
                            <div className="text-2xl font-black text-white leading-none">{n}</div>
                            <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mt-1">{t}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 right-12 flex flex-col items-center gap-2 z-10">
                <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-[0.4em] rotate-90 origin-center mb-4">Scroll</span>
                <div className="w-px h-16 bg-gradient-to-b from-amber-500 to-transparent animate-pulse"></div>
            </div>
        </section>
    );
};

export default Hero;

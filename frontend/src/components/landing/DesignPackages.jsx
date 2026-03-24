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

const packages = [
    { tag: 'Classic Elegance', price: 'Essential Interior', d: 'Perfect for single rooms or office cabins needing refined marble finishes and basic layout planning.', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80' },
    { tag: 'Signature Luxury', price: 'Full Home Concept', d: 'Elite bedroom & living room designs featuring Tundra or Onyx marble sheets with custom lighting concepts.', img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=400&q=80' },
    { tag: 'Opulent Palace', price: 'Turnkey Renovation', d: 'Full-scale home or commercial transformation from 3D planning to final installation with verified logistics.', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80' },
];

const DesignPackages = () => {
    const [ref, inView] = useInView();

    return (
        <section id="services" ref={ref} className="px-8 md:px-20 bg-[#fafafa] py-24 md:py-32 border-b border-zinc-100 relative overflow-hidden">
            {/* Subtle background grain or pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 0.8px, transparent 0.8px)', backgroundSize: '32px 32px' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header - SOPHISTICATED SIDE-BY-SIDE */}
                <div className={`mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="text-amber-500 font-bold uppercase tracking-[0.6em] text-[10px] mb-4 block">Our Solutions</span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <h2 className="text-5xl md:text-8xl font-black text-zinc-900 leading-none uppercase tracking-tighter italic">Our<br />Works</h2>
                        <div className="max-w-md">
                            <p className="text-zinc-800 text-[15px] font-medium leading-relaxed border-l border-amber-600 pl-6 mb-2">
                                We've categorized our expertise into focused consultation tracks to help you choose the best investment for your space.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, idx) => (
                        <div key={idx}
                            className={`group bg-white rounded-[2.5rem] border border-zinc-100 overflow-hidden shadow-sm hover:shadow-2xl hover:border-amber-600/20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            style={{ transitionDelay: `${idx * 150}ms` }}>

                            {/* Card Image - NO HOVER SCALE */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={pkg.img}
                                    alt={pkg.tag}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Card Content */}
                            <div className="p-10">
                                <span className="text-amber-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block animate-slideIn">Exclusive Tier</span>
                                <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tighter italic mb-2 tracking-tight">{pkg.price}</h3>
                                <p className="text-zinc-400 text-[11px] leading-relaxed mb-8 italic">{pkg.d}</p>

                                <div className="w-10 h-0.5 bg-amber-600 mb-8 group-hover:w-full transition-all duration-700"></div>

                                <a href="tel:+91-9248113699" className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.4em] text-zinc-900 hover:text-amber-600 transition-colors">
                                    Call Specialst <span className="text-amber-600">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesignPackages;

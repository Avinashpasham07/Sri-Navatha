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
    { tag: 'Classic Elegance', price: 'PREMIUM MARBLE', d: 'Natural stone solutions for flooring, walls, and luxury interiors.', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faeaa6?auto=format&fit=crop&w=600&q=80' },
    { tag: 'Signature Luxury', price: 'Full Home Concept', d: 'Elite bedroom & living room designs featuring Tundra or Onyx marble sheets with custom lighting concepts.', img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=600&q=80' },
    { tag: 'Opulent Palace', price: 'Turnkey Renovation', d: 'Full-scale home or commercial transformation from 3D planning to final installation with verified logistics.', img: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&auto=format&fit=crop&q=80' },
    { tag: 'Modern Minimal', price: 'Sleek Concept', d: 'Minimalist approach focused on clean lines, functional geometry, and high-end natural materials.', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80' },
    { tag: 'Bohemian Chic', price: 'Eclectic Soul', d: 'A curated mix of textures and artistic elements for a warm, sophisticated, and deeply personal space.', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80' },
    { tag: 'Industrial Loft', price: 'Urban Edge', d: 'Raw architectural elements combined with modern luxury for a bold, sophisticated metropolitan feel.', img: 'https://images.unsplash.com/photo-1536376074402-e07d0d4ef462?auto=format&fit=crop&w=600&q=80' },
    { tag: 'French Provincial', price: 'Country Charm', d: 'Timeless elegance with rustic textures and vintage-inspired architectural details for a cozy, upscale feel.', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e15ca?auto=format&fit=crop&w=600&q=80' },
    { tag: 'Scandinavian', price: 'Nordic Calm', d: 'Light-filled spaces, clean lines, and natural wood accents for a serene and hyper-functional living experience.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
    { tag: 'Zen Sanctuary', price: 'Peaceful Oasis', d: 'Bespoke meditative spaces using organic materials and minimalist geometry to foster deep tranquility.', img: 'https://images.unsplash.com/photo-1544207613-030801c2311f?auto=format&fit=crop&w=600&q=80' },
];

const DesignPackages = () => {
    const [ref, inView] = useInView();
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = Math.ceil(packages.length / 3);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 15 * 60 * 1000); // 15 Minutes as requested
        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <section id="services" ref={ref} className="px-8 md:px-20 bg-[#fafafa] py-24 md:py-32 border-b border-zinc-100 relative overflow-hidden">
            {/* Subtle background grain or pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 0.8px, transparent 0.8px)', backgroundSize: '32px 32px' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header - SOPHISTICATED SIDE-BY-SIDE */}
                <div className={`mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="text-amber-500 font-bold uppercase tracking-[0.6em] text-[10px] mb-4 block">Our Solutions</span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <h2 className="text-5xl md:text-8xl font-black text-zinc-900 leading-none uppercase tracking-tighter italic whitespace-nowrap">Our<br />Works</h2>
                        <div className="max-w-md">
                            <p className="text-zinc-800 text-[15px] font-medium leading-relaxed border-l border-amber-600 pl-6 mb-2">
                                We offer a wide range of premium marble and sheet materials designed for residential and commercial applications.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Horizontal Carousel Viewport */}
                <div className="relative overflow-hidden group">
                    <div
                        className="flex transition-transform duration-[1500ms] ease-[cubic-bezier(0.85,0,0.15,1)]"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {[...Array(totalSlides)].map((_, i) => (
                            <div key={i} className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {packages.slice(i * 3, i * 3 + 3).map((pkg, idx) => (
                                    <div key={idx}
                                        className={`group/card bg-white rounded-[1.5rem] border border-zinc-100 overflow-hidden shadow-sm hover:shadow-2xl hover:border-amber-600/30 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                                        style={{ transitionDelay: `${idx * 150}ms` }}>

                                        {/* Card Image */}
                                        <div className="relative aspect-[10/5] overflow-hidden">
                                            <img
                                                src={pkg.img}
                                                alt={pkg.tag}
                                                className="w-full h-full object-cover transition-transform duration-1000"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-40 group-hover/card:opacity-60 transition-opacity"></div>
                                            <div className="absolute top-6 left-6">
                                                <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-zinc-900 shadow-xl">
                                                    Premium Package
                                                </span>
                                            </div>
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-8">
                                            <span className="text-amber-600 text-[9px] font-black uppercase tracking-[0.4em] mb-3 block">{pkg.tag}</span>
                                            <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tighter italic mb-3">{pkg.price}</h3>
                                            <p className="text-zinc-500 text-[11px] leading-relaxed mb-8 font-medium line-clamp-3">{pkg.d}</p>

                                            <div className="h-[1px] w-full bg-zinc-100 relative mb-8 overflow-hidden">
                                                <div className="absolute inset-0 bg-amber-500 -translate-x-full group-hover/card:translate-x-0 transition-transform duration-700"></div>
                                            </div>

                                            <a href="tel:+91-9248113699" className="flex items-center justify-between group/link">
                                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-900 group-hover/link:text-amber-600 transition-colors">
                                                    Request Quote
                                                </span>
                                                <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover/link:border-amber-500 group-hover/link:bg-amber-500 transition-all">
                                                    <span className="text-zinc-600 group-hover/link:text-black transition-colors">→</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-4 mt-16">
                        {[...Array(totalSlides)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className={`group relative h-1 transition-all duration-700 ${currentSlide === i ? 'w-24 bg-amber-500' : 'w-8 bg-zinc-300 hover:bg-zinc-400'}`}
                                aria-label={`Go to slide ${i + 1}`}
                            >
                                <span className={`absolute -top-6 left-0 text-[10px] font-black tracking-widest transition-opacity duration-500 ${currentSlide === i ? 'opacity-100 text-amber-600' : 'opacity-0'}`}>
                                    PART 0{i + 1}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default DesignPackages;

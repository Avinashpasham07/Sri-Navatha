import React, { useEffect, useState } from 'react';

const rooms = [
    {
        t: 'Platinum Suite', d: 'Luxury living defined by minimalist grandeur.',
        img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    },
    {
        t: 'Velvet Nest', d: 'Serene sanctuaries for ultra-premium rest.',
        img: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&auto=format&fit=crop&q=80',
    },
    {
        t: 'Marble Culinary', d: 'Bespoke precision for the gourmet chef.',
        img: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&auto=format&fit=crop&q=80',
    },
    {
        t: 'Nexus Workspace', d: 'Functional elegance for modern productivity.',
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    },
    {
        t: 'Azure Spa', d: 'Private botanical retreat with marble accents.',
        img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faeaa6?auto=format&fit=crop&w=600&q=80',
    },
    {
        t: 'Elite Lounge', d: 'Curated social spaces for premier hospitality.',
        img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=80',
    },
    {
        t: 'Royal Feast', d: 'Timeless dining architectures for legacy homes.',
        img: 'https://images.unsplash.com/photo-1534080564672-6809ea64f260?auto=format&fit=crop&w=600&q=80',
    },
    {
        t: 'Archive Sanctuary', d: 'Intellectual retreats focused on focus and calm.',
        img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=600&q=80',
    },
    {
        t: 'Glass Horizon', d: 'Bespoke modern living with panoramic views.',
        img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    },
];

const ProductCard = ({ room }) => (
    <div className="group relative w-full h-[400px] overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-700">
        <img
            src={room.img}
            alt={room.t}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-[1.02] group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/10 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700"></div>

        {/* Content with high-end typography */}
        <div className="absolute inset-0 flex flex-col justify-end p-10">
            <span className="w-fit bg-amber-500 text-black text-[9px] font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                Explore Collection
            </span>
            <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight mb-3">
                {room.t}
            </h4>
            <div className="h-[2px] w-12 bg-amber-500/50 mb-4 transition-all duration-700 group-hover:w-full group-hover:bg-amber-500"></div>
            <p className="text-zinc-400 text-xs font-medium uppercase tracking-[0.1em] opacity-80 group-hover:opacity-100 transition-all duration-500">
                {room.d}
            </p>
        </div>
    </div>
);

const PortfolioGrid = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = Math.ceil(rooms.length / 3);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 15000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <section id="portfolio" className="px-8 md:px-20 bg-black py-24 md:py-32 border-b border-zinc-900 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 animate-fade-in-up">
                    <div className="relative">
                        <span className="ml-5 text-amber-500 font-bold uppercase tracking-[0.6em] text-[10px] mb-6 block">Our Products Collection</span>
                        <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] uppercase tracking-tighter italic whitespace-nowrap">
                            Exclusive<br /><span className="text-zinc-600 ">Products</span>
                        </h2>
                    </div>

                    <a href="#marketplace"
                        className="group/btn relative inline-flex items-center gap-6 bg-white hover:bg-amber-500 text-black px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl transition-all shadow-2xl active:scale-95 whitespace-nowrap overflow-hidden mt-10 md:mt-0">
                        <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-black font-black">View All Products</span>
                        <span className="relative z-10 text-xl transition-transform duration-500 group-hover/btn:translate-x-2">→</span>
                    </a>
                </div>

                {/* Horizontal Carousel Viewport */}
                <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
                    <div
                        className="flex transition-transform duration-[1500ms] ease-[cubic-bezier(0.85,0,0.15,1)]"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {[...Array(totalSlides)].map((_, i) => (
                            <div key={i} className="w-full shrink-0 grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-2">
                                {rooms.slice(i * 3, i * 3 + 3).map((room, idx) => (
                                    <ProductCard key={idx} room={room} />
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Left/Right Subtle Navigation Arrows (Desktop) */}
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-20 hidden md:flex"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-20 hidden md:flex"
                    >
                        →
                    </button>
                </div>

                {/* Bottom Navigation & Progress */}
                <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Navigation Dots */}
                    <div className="flex gap-4 items-center order-2 md:order-1">
                        {[...Array(totalSlides)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className={`group relative h-1 transition-all duration-700 ${currentSlide === i ? 'w-24 bg-amber-500' : 'w-8 bg-zinc-800 hover:bg-zinc-700'}`}
                                aria-label={`Go to slide ${i + 1}`}
                            >
                                <span className={`absolute -top-6 left-0 text-[10px] font-black tracking-widest transition-opacity duration-500 ${currentSlide === i ? 'opacity-100 text-amber-500' : 'opacity-0'}`}>
                                    0{i + 1}
                                </span>
                            </button>
                        ))}
                    </div>


                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .outline-text {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.1);
                    color: transparent;
                    transition: all 0.7s cubic-bezier(0.85, 0, 0.15, 1);
                }
                .outline-text:hover {
                    -webkit-text-stroke: 1px rgba(245, 158, 11, 0.4);
                    color: rgba(245, 158, 11, 0.05);
                }
                @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s forwards;
                }
            `}} />
        </section>
    );
};

export default PortfolioGrid;

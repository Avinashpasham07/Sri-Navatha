import React, { useEffect, useRef, useState } from 'react';

const useInView = () => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.08 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, inView];
};

const rooms = [
    {
        t: 'Living Room', d: 'Luxury living for family and guests.',
        img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
        col: 'md:col-span-2', row: 'md:row-span-2', aspect: 'aspect-square md:aspect-auto'
    },
    {
        t: 'Bedroom', d: 'Serene sanctuaries for restful nights.',
        img: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
        col: 'md:col-span-1', row: 'md:row-span-1', aspect: 'aspect-video md:aspect-auto'
    },
    {
        t: 'Kitchen', d: 'Bespoke culinary spaces with marble finishes.',
        img: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D',
        col: 'md:col-span-1', row: 'md:row-span-1', aspect: 'aspect-video md:aspect-auto'
    },
    {
        t: 'Professional Office', d: 'Functional spaces for optimized workflows.',
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        col: 'md:col-span-2', row: 'md:row-span-1', aspect: 'aspect-video md:aspect-auto'
    },
    {
        t: 'Bathroom', d: 'Spa-like luxury with water-resistant marble.',
        img: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&auto=format&fit=crop&q=60',
        col: 'md:col-span-1', row: 'md:row-span-2', aspect: 'aspect-square md:aspect-auto'
    },
    {
        t: 'Hospitality', d: 'Premier designs for hotels and fine dining.',
        img: 'https://images.unsplash.com/photo-1589785277274-59448e840ac7?w=600&auto=format&fit=crop&q=60',
        col: 'md:col-span-2', row: 'md:row-span-1', aspect: 'aspect-video md:aspect-auto'
    },
];

const BentoCell = ({ room, inView, delay }) => (
    <div
        className={`${room.col} ${room.row} group relative overflow-hidden rounded-[2.5rem] bg-zinc-900 cursor-pointer min-h-[220px] transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${room.aspect}`}
        style={{ transitionDelay: `${delay}ms` }}
    >
        <img
            src={room.img}
            alt={room.t}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 brightness-90 group-hover:brightness-100"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
        {/* Soft amber highlight gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/0 via-transparent to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Content with high-end typography - NO HOVER SCALE */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
            <span className="w-fit bg-amber-600 text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                View Project
            </span>
            <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter italic leading-none mb-2">
                {room.t}
            </h4>
            <p className="text-zinc-400 text-[11px] font-medium uppercase tracking-widest max-h-0 overflow-hidden group-hover:max-h-12 transition-all duration-700 opacity-0 group-hover:opacity-100">
                {room.d}
            </p>
        </div>
    </div>
);

const PortfolioGrid = () => {
    const [ref, inView] = useInView();

    return (
        <section id="portfolio" className="px-8 md:px-20 bg-black py-24 md:py-32 border-b border-zinc-900">
            <div className="max-w-7xl mx-auto">
                {/* Header - SOPHISTICATED SIDE-BY-SIDE */}
                <div ref={ref} className={`flex flex-col md:flex-row justify-between md:items-end mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div>
                        <span className="text-amber-500 font-bold uppercase tracking-[0.6em] text-[10px] mb-4 block">Our Portfolio</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white leading-none uppercase tracking-tighter italic">Our<br />Products</h2>
                    </div>
                    <div className="mt-8 md:mt-0 max-w-sm">
                        <p className="text-zinc-100 text-base font-light leading-relaxed mb-6">
                            Explore our curated selection of premium interiors, where luxury meets functionality in every square foot.
                        </p>
                        <a href="#contact" className="inline-block text-[10px] font-black uppercase tracking-[0.5em] text-amber-600 border-b-2 border-amber-600/20 pb-1 hover:border-amber-600 transition-all">
                            View All Products
                        </a>
                    </div>
                </div>

                {/* TRUE PREMIUM BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6" style={{ gridAutoRows: '260px' }}>
                    {rooms.map((room, i) => (
                        <BentoCell key={i} room={room} inView={inView} delay={i * 120} />
                    ))}
                </div>

                {/* Aesthetic Footer CTA */}
                <div className={`text-center mt-20 transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <a href="#portfolio-full"
                        className="inline-flex items-center gap-4 bg-white hover:bg-zinc-100 text-black px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl transition-all shadow-2xl active:scale-95">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PortfolioGrid;

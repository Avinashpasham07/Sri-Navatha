import React, { useEffect, useRef, useState } from 'react';

const useInView = () => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, inView];
};

const features = [
    {
        n: '01',
        t: 'On-Time Delivery',
        d: 'Precise execution timelines with zero compromise. We respect your schedule and deliver every project on the promised date.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
    {
        n: '02',
        t: 'Superior Quality Materials',
        d: 'Hand-selected, luxury-grade Eshkha Marble sheets sourced from the finest quarries across India and globally.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
    },
    {
        n: '03',
        t: 'Customer Satisfaction Guaranteed',
        d: 'Measured purely by our clients\' happiness. Our team is dedicated to reflecting your vision and exceeding expectations.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
    },
];

const WhyChooseUs = () => {
    const [ref, inView] = useInView();
    return (
        <section id="why-us" ref={ref} className="relative px-8 md:px-20 text-white overflow-hidden py-24 md:py-32 border-b border-white/5">
            {/* Cinematic Background with Noise Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1920&q=80"
                    alt="Why Choose Us BG"
                    className="w-full h-full object-cover brightness-[0.2]"
                />
                <div className="absolute inset-0 bg-[#0c0c0c]/80 backdrop-blur-sm"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 blur-[130px] rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header - SOPHISTICATED SIDE-BY-SIDE */}
                <div className={`mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="text-amber-500 font-bold uppercase tracking-[0.6em] text-[10px] mb-4 block">Our Advantage</span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85]">
                            Why Choose<br />Us?
                        </h2>
                        <div className="max-w-sm">
                            <p className="text-zinc-100 text-[15px] font-light leading-relaxed border-l border-white/20 pl-6 mb-2">
                                Sri Navatha Interior Designs — bespoke craftsmen dedicated to excellence, reflecting your personality through premium materials.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feature Cards as floating elements - NO HOVER SCALE */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {features.map((f, idx) => (
                        <div key={idx}
                            className={`group p-10 bg-white/5 border border-white/10 rounded-[2.5rem] transition-all duration-1000 hover:border-amber-500/30 hover:bg-white/[0.07]
                            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            style={{ transitionDelay: inView ? `${idx * 150}ms` : '0ms' }}>
                            <div className="text-6xl font-black text-white/[0.03] absolute top-8 right-10 leading-none group-hover:text-amber-500/[0.08] transition-colors">{f.n}</div>

                            <div className="w-14 h-14 rounded-2xl bg-amber-600/10 border border-amber-600/20 flex items-center justify-center text-amber-500 mb-8 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                                {f.icon}
                            </div>
                            <div className="w-12 h-0.5 bg-amber-600 mb-6 group-hover:w-20 transition-all duration-500"></div>
                            <h3 className="font-black text-lg uppercase tracking-wide text-white leading-snug mb-3 drop-shadow-md">{f.t}</h3>
                            <p className="text-zinc-200 text-[15px] leading-relaxed font-light italic">{f.d}</p>
                        </div>
                    ))}
                </div>

                {/* Aesthetic Dark CTA Strip */}
                <div className={`p-10 rounded-[3rem] bg-zinc-900 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-1000 delay-500 shadow-2xl ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div>
                        <h4 className="text-2xl font-black text-white uppercase tracking-tight italic mb-1">Ready to start ?</h4>
                        <p className="text-zinc-200 text-[13px] font-light">Book your private consultation session today.</p>
                    </div>
                    <a href="tel:+91-9248113699"
                        className="flex-shrink-0 bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 font-black uppercase tracking-widest text-[11px] rounded-2xl transition-all shadow-2xl active:scale-95">
                        +91-9248113699
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

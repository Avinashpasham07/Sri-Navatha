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

const icons = {
    consultation: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l-3 3v-3z" />
        </svg>
    ),
    planning: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
        </svg>
    ),
    sourcing: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    ),
    execution: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
        </svg>
    ),
};

const steps = [
    { n: '01', key: 'consultation', t: 'Consultation', d: 'Personalized interior design consultation to understand your unique aspirations, style preferences, and project budget.' },
    { n: '02', key: 'planning', t: 'Planning', d: 'Bespoke design solutions tailored to transform your dream into a detailed, realistic action plan with clear timelines.' },
    { n: '03', key: 'sourcing', t: 'Sourcing', d: 'Selecting premium materials — Eshkha Marble sheets, fittings and finishes — for timeless elegance and long-term durability.' },
    { n: '04', key: 'execution', t: 'Execution', d: 'On-time delivery and flawless installation by our certified professional team. We don\'t leave until every detail is perfect.' },
];

const OurProcess = () => {
    const [ref, inView] = useInView();
    return (
        <section ref={ref} className="px-8 md:px-20 bg-zinc-950 text-white py-24 md:py-32 border-b border-white/5 overflow-hidden relative">
            {/* Glow */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-amber-600/8 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header: PREMIUM SIDE-BY-SIDE LAYOUT */}
                <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="text-amber-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">Our Approach</span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-none uppercase tracking-tighter italic">
                            Our Signature<br />Process
                        </h2>
                        <p className="text-zinc-100 text-base font-light leading-relaxed max-w-sm">
                            A proven 4-step process that takes your vision from a blank canvas to a beautifully finished space - on time, every time.
                        </p>
                    </div>
                </div>

                {/* Steps grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-0">
                    {/* Connecting line — desktop only, perfectly aligned with the circles */}


                    {steps.map((s, i) => (
                        <div key={i}
                            className={`group relative flex flex-col items-center md:items-start text-center md:text-left px-6 py-10 md:py-0 border-b md:border-b-0 border-white/5 last:border-0 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${i * 150 + 300}ms` }}>

                            {/* Step number circle — NO HOVER SCALE */}
                            <div className={`relative z-10 w-[52px] h-[52px] rounded-full border-2 flex items-center justify-center mb-8 text-sm font-black transition-all duration-500 ${inView ? 'border-amber-600 bg-amber-600 text-white' : 'border-zinc-700 bg-zinc-900 text-zinc-500'}`}>
                                {s.n}
                            </div>

                            {/* SVG Icon */}
                            <div className="text-amber-500 mb-4 group-hover:text-amber-400 transition-colors">
                                {icons[s.key]}
                            </div>

                            {/* Amber accent bar */}
                            <div className="w-8 h-0.5 bg-amber-600 mb-4 group-hover:w-14 transition-all duration-500"></div>

                            <h4 className="text-base font-black text-white uppercase tracking-tighter italic mb-3">{s.t}</h4>
                            <p className="text-zinc-200 text-sm leading-relaxed max-w-[200px] mx-auto md:mx-0">{s.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurProcess;

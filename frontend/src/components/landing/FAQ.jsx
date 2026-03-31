import React, { useState, useEffect, useRef } from 'react';

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

const FAQ = () => {
    const [ref, inView] = useInView();
    const [activeIndex, setActiveIndex] = useState(0);

    const questions = [
        {
            q: "What types of marble sheets do you offer?",
            a: "We provide a wide range of premium marble sheets including glossy, matte, textured, and designer finishes suitable for walls, flooring, and interiors."
        },
        {
            q: "Do you offer bulk pricing for builders or contractors?",
            a: "Yes, we offer competitive bulk pricing for builders, contractors, and commercial projects across Andhra Pradesh."
        },
        {
            q: "Are your marble sheets fire and water resistant?",
            a: "Yes, our marble sheets are engineered for durability — they are water-resistant, heat-resistant, and ideal for long-term interior applications."
        },
        {
            q: "Do you deliver materials across Andhra Pradesh?",
            a: "Absolutely. We provide fast and reliable delivery services across Vijayawada, Guntur, Amaravati, and other regions in Andhra Pradesh."
        },
        {
            q: "Can you help in selecting the right materials?",
            a: "Yes, our experts assist you in choosing the best materials based on your design needs, budget, and project requirements."
        }
    ];

    return (
        <section ref={ref} id="faq" className="px-8 md:px-20 bg-white py-24 md:py-32 border-b border-zinc-100 relative overflow-hidden">
            {/* Subtle radial glow */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header - SOPHISTICATED SIDE-BY-SIDE */}
                <div className={`mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="text-amber-500 font-bold uppercase tracking-[0.6em] text-[10px] mb-4 block">Information Hub</span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <h2 className="text-5xl md:text-8xl font-black text-zinc-900 leading-none uppercase tracking-tighter italic">Common<br />Queries</h2>
                        <div className="max-w-md">
                            <p className="text-zinc-700 text-base font-light leading-relaxed border-l border-amber-600/30 pl-6 mb-2 italic">
                                Transparency is key to our process. Here are the most frequent questions our clients ask.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left: Contact CTA */}
                    <div className={`lg:col-span-4 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="p-10 bg-zinc-950 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                            {/* Decorative background circle */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-600/20 blur-3xl rounded-full"></div>

                            <h4 className="text-2xl font-black uppercase tracking-tighter italic mb-4 leading-tight">Still have<br />questions?</h4>
                            <p className="text-zinc-500 text-sm font-light mb-10 leading-relaxed italic">Our material experts are ready to help you choose the best options.</p>

                            <div className="space-y-4">
                                <a href="mailto:contact@srinavatha.com" className="flex items-center gap-3 text-amber-500 hover:text-white transition-colors text-[11px] font-black uppercase tracking-widest">
                                    Email Us →
                                </a>
                                <a href="tel:+91-9248113699" className="flex items-center gap-3 text-amber-500 hover:text-white transition-colors text-[11px] font-black uppercase tracking-widest">
                                    Call Support →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: FAQ Accordion */}
                    <div className={`lg:col-span-8 transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="space-y-6">
                            {questions.map((q, i) => (
                                <div key={i} className={`border-b border-zinc-100 last:border-0 pb-6 group cursor-pointer`} onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}>
                                    <div className="flex items-center justify-between gap-6 mb-4">
                                        <h4 className={`text-lg font-black uppercase tracking-tight italic transition-colors leading-tight ${activeIndex === i ? 'text-amber-600' : 'text-zinc-900'}`}>
                                            {q.q}
                                        </h4>
                                        <span className={`text-2xl transition-transform duration-500 ${activeIndex === i ? 'rotate-180 text-amber-600' : 'text-zinc-300'}`}>
                                            ↓
                                        </span>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-500 ${activeIndex === i ? 'max-h-40' : 'max-h-0'}`}>
                                        <p className="text-zinc-500 text-[15px] font-light leading-relaxed border-l border-amber-600/20 pl-6 italic">
                                            {q.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

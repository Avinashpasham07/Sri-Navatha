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

const Testimonials = () => {
    const [ref, inView] = useInView();
    const [currentSlide, setCurrentSlide] = useState(0);

    const reviews = [
        {
            name: 'R. Krishna Prasad',
            role: 'Homeowner',
            initial: 'RK',
            text: "The marble quality is excellent and the finish looks premium. It completely enhanced the look of our home."
        },
        {
            name: 'Sravani Devi',
            role: 'Architect',
            initial: 'SD',
            text: "Their marble sheet quality is among the best in Andhra Pradesh. Perfect for high-end interior projects."
        },
        {
            name: 'Amar Nath',
            role: 'Business Owner',
            initial: 'AN',
            text: "Best pricing for premium materials. We sourced all our office materials from them without any issues."
        },
        {
            name: 'Vinay Kumar',
            role: 'Homeowner',
            initial: 'VK',
            text: "Wide range of marble options and very helpful guidance in choosing the right material."
        },
        {
            name: 'Priyanka Reddy',
            role: 'Customer',
            initial: 'PR',
            text: "Great variety of marble sheets and very reasonable pricing. The delivery was quick and hassle-free."
        },
        {
            name: 'Kiran Kumar',
            role: 'Builder',
            initial: 'KK',
            text: "Sri Navatha provides consistent quality materials. Perfect for bulk supply in our construction projects."
        },
        {
            name: 'Mahesh Babu',
            role: 'Customer',
            initial: 'MB',
            text: "Reliable supplier with high-quality materials. Very satisfied with the overall experience."
        },
        {
            name: 'Anitha Rao',
            role: 'Homeowner',
            initial: 'AR',
            text: "The marble sheets are durable, stylish, and easy to maintain. Highly recommended."
        },
        {
            name: 'Sanjay Gupta',
            role: 'Contractor',
            initial: 'SG',
            text: "Professional service and consistent supply. A trusted partner for all our material requirements."
        }
    ];
    const totalSlides = Math.ceil(reviews.length / 3);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 15000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <section ref={ref} className="px-8 md:px-20 bg-black py-24 md:py-32 border-b border-zinc-900 relative overflow-hidden">
            {/* Subtle background detail */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header - SOPHISTICATED SIDE-BY-SIDE */}
                <div className={`mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="text-amber-500 font-bold uppercase tracking-[0.6em] text-[10px] mb-4 block">Our Reputation</span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <h2 className="text-5xl md:text-8xl font-black text-white leading-none uppercase tracking-tighter italic whitespace-nowrap">Client<br />Words</h2>
                        <div className="max-w-md">
                            <p className="text-zinc-500 text-base font-light leading-relaxed border-l border-amber-600/30 pl-6 mb-2 italic">
                                We take pride in delivering high-quality materials and building long-term trust with our customers.
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
                            <div key={i} className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {reviews.slice(i * 3, i * 3 + 3).map((r, idx) => (
                                    <div key={idx}
                                        className={`group p-10 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] transition-all duration-1000 hover:shadow-2xl hover:border-amber-600/20
                                        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                                        style={{ transitionDelay: `${idx * 150}ms` }}>

                                        <div className="flex items-center gap-5 mb-8">
                                            <div className="w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center font-black text-lg italic shadow-xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                                {r.initial}
                                            </div>
                                            <div>
                                                <div className="text-sm font-black text-white uppercase tracking-tight italic">{r.name}</div>
                                                <div className="text-[10px] font-black text-amber-600 uppercase tracking-widest">{r.role}</div>
                                            </div>
                                        </div>

                                        <p className="text-zinc-400 text-base font-light leading-relaxed italic border-l border-zinc-800 pl-6 group-hover:border-amber-600/30 transition-colors">
                                            "{r.text}"
                                        </p>

                                        <div className="mt-8 flex gap-1 items-center">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <svg key={star} className="w-3 h-3 text-amber-600 fill-amber-600" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            ))}
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
                                className={`group relative h-1 transition-all duration-700 ${currentSlide === i ? 'w-24 bg-amber-500' : 'w-8 bg-zinc-800 hover:bg-zinc-700'}`}
                                aria-label={`Go to slide ${i + 1}`}
                            >
                                <span className={`absolute -top-6 left-0 text-[10px] font-black tracking-widest transition-opacity duration-500 ${currentSlide === i ? 'opacity-100 text-amber-500' : 'opacity-0'}`}>
                                    CLIENT 0{i + 1}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

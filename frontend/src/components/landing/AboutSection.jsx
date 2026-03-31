import React, { useEffect, useRef, useState } from 'react';

// Custom Animated Counter Hook to avoid dependency issues
const useAnimatedCounter = (end, duration = 2000, shouldStart = false) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    useEffect(() => {
        if (!shouldStart) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentCount = Math.floor(progress * end);
            setCount(currentCount);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration, shouldStart]);

    return count;
};

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

const AboutSection = () => {
    const [ref, inView] = useInView();

    // Custom counters
    const projectsCount = useAnimatedCounter(480, 2500, inView);
    const satisfactionCount = useAnimatedCounter(98, 2500, inView);

    return (
        <section id="about" ref={ref} className="px-8 md:px-20 bg-white py-24 md:py-32 border-b border-zinc-100 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Cinematic Image Composition */}
                    <div className={`relative transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl z-10 border border-zinc-100">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1773833960283-241a4bf303c1?w=1200&auto=format&fit=crop&q=80"
                                alt="Who We Are - Main"
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                        <div className="absolute -bottom-12 -right-12 w-2/3 aspect-square rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] z-20 border-4 border-black">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1773833960283-241a4bf303c1?w=1200&auto=format&fit=crop&q=80"
                                alt="Who We Are - Secondary"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-600/5 blur-3xl rounded-full"></div>
                    </div>

                    {/* Right: Content with Premium Typography */}
                    <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                        <span className="text-amber-500 font-bold uppercase tracking-[0.6em] text-[10px] mb-6 block font-black">Our Heritage</span>
                        <h2 className="text-5xl md:text-8xl font-black text-zinc-900 leading-[0.85] uppercase tracking-tighter italic mb-10 transition-all">
                            Strong <br />& Stylish <br />Materials
                        </h2>

                        <div className="space-y-6 mb-12">
                            <p className="text-zinc-800 text-lg font-light leading-relaxed border-l border-amber-600/30 pl-8">
                                Sri Navatha is a trusted supplier of premium marble and sheet materials across Andhra Pradesh, serving both residential and commercial projects.
                            </p>
                            <p className="text-zinc-700 text-base font-light italic leading-relaxed">
                                We provide high-quality marble sheets and surface materials sourced directly from reliable suppliers, ensuring durability, style, and competitive pricing.
                            </p>
                        </div>

                        {/* Custom Animated Counters */}
                        <div className="grid grid-cols-2 gap-10 py-10 border-y border-zinc-100 mb-12">
                            <div>
                                <div className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter italic flex items-center gap-2">
                                    {projectsCount}+
                                </div>
                                <div className="text-amber-600 text-[10px] font-black uppercase tracking-[0.3em] mt-2 italic">Projects Delivered</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter italic flex items-center gap-2">
                                    {satisfactionCount}%
                                </div>
                                <div className="text-amber-600 text-[10px] font-black uppercase tracking-[0.3em] mt-2 italic">Client Satisfaction</div>
                            </div>
                        </div>

                        <a href="#contact" className="inline-flex items-center gap-5 bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-5 text-[11px] font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl active:scale-95 group">
                            Our Full Story <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Our Portfolio', href: '#portfolio' },
        { name: 'Our Services', href: '#services' },
        { name: 'About Us', href: '#about' },
        { name: 'Contact Us', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-zinc-100 shadow-sm' : 'py-8 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-8 md:px-20 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-10 h-10 bg-amber-600 rounded flex items-center justify-center shadow-lg shadow-amber-600/20 group-hover:bg-amber-500 transition-colors">
                        <span className="text-white font-black text-xl italic">S</span>
                    </div>
                    <div>
                        <div className={`text-sm font-black uppercase tracking-tight transition-colors ${scrolled ? 'text-zinc-900' : 'text-white'}`}>Sri Navatha</div>
                        <div className="text-amber-500 text-[9px] font-bold uppercase tracking-[0.3em] -mt-1">Interior Design</div>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:text-amber-500 ${scrolled ? 'text-zinc-500' : 'text-zinc-200 hover:text-white'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="tel:+91-9248113699" className="bg-amber-600 hover:bg-amber-500 text-white px-7 py-3.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-amber-600/20 active:scale-95">
                        Book Consultation
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="lg:hidden p-2 rounded-lg"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <div className="space-y-1.5">
                        <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-zinc-900' : 'bg-white'}`}></div>
                        <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-zinc-900' : 'bg-white'}`}></div>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 bg-white z-[110] flex flex-col items-center justify-center gap-8 transition-transform duration-700 p-10 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <button 
                    className="absolute top-8 right-8 text-zinc-900 text-3xl font-light"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    ✕
                </button>
                {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href}
                        className="text-xl font-black uppercase tracking-[.3em] text-zinc-900"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
                <a 
                    href="tel:+91-9248113699" 
                    className="bg-amber-600 text-white px-10 py-5 text-sm font-black uppercase tracking-widest rounded-2xl shadow-2xl"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Book Free Consultation
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

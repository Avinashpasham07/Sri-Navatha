import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer id="contact" className="px-8 md:px-20 bg-zinc-950 text-white pt-24 pb-12 overflow-hidden relative">
            {/* Cinematic background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-8">
                            <img src={logo} alt="Sri Navatha Logo" className="w-12 h-12 object-contain" />
                            <div>
                                <div className="text-sm font-black uppercase tracking-tight text-white leading-none">Sri Navatha</div>
                                <div className="text-amber-500 text-[9px] font-bold uppercase tracking-[0.3em] mt-0.5">Interior Design</div>
                            </div>
                        </div>
                        <p className="text-zinc-500 text-sm font-light leading-relaxed mb-8 italic">
                            Crafting elite architectural transformations across Andhra Pradesh. Luxury interiors tailored to your vision.
                        </p>
                        <div className="flex gap-4">
                            {['FB', 'IG', 'TW', 'LI'].map(s => (
                                <a key={s} href="#" className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center text-[10px] font-black text-zinc-400 hover:text-amber-500 hover:border-amber-600 transition-all">
                                    {s}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links with refined typography */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white mb-10 block">Menu</h4>
                        <ul className="space-y-4">
                            {['Our Portfolio', 'Our Services', 'Marketplace', 'The Collection', 'Privacy Policy'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-zinc-500 text-[11px] font-black uppercase tracking-widest hover:text-amber-600 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info with custom icons */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white mb-10 block">Contact</h4>
                        <ul className="space-y-6">
                            <li className="flex flex-col gap-1">
                                <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest leading-none mb-1">Direct Line</span>
                                <a href="tel:+91-9248113699" className="text-zinc-400 text-base font-black italic hover:text-white transition-colors">
                                    +91-9248113699
                                </a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest leading-none mb-1">Inquiry Mail</span>
                                <a href="mailto:contact@srinavatha.com" className="text-zinc-400 text-sm font-light italic hover:text-white transition-colors">
                                    contact@srinavatha.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Location Hub */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white mb-10 block">Location</h4>
                        <p className="text-zinc-500 text-[11px] font-black leading-relaxed uppercase tracking-widest border-l border-amber-600/30 pl-6">
                            Opp. RTC Bus Stand,<br />
                            Governorpet,<br />
                            Vijayawada - 520002.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar with premium centering */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.3em]">
                        © {new Date().getFullYear()} SRI NAVATHA INTERIOR DESIGN. ALL RIGHTS RESERVED.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;

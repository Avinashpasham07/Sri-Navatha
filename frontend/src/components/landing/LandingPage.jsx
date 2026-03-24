import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import StatsSection from './StatsSection';
import MarketplaceIntro from './MarketplaceIntro';
import TrendingMaterials from './TrendingMaterials';
import PortfolioGrid from './PortfolioGrid';
import OurProcess from './OurProcess';
import DesignPackages from './DesignPackages';
import WhyChooseUs from './WhyChooseUs';
import AboutSection from './AboutSection';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Footer from './Footer';
import CallButton from './CallButton';

// Note: I'll use a wrapper div with a subtle grain texture to make it feel premium
const LandingPage = () => {
    return (
        <div className="bg-[#fcfcfc] text-zinc-900 font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden relative">
            {/* Global Grain Texture Overlay */}
            <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <Navbar />
            <Hero />
            <StatsSection />
            <MarketplaceIntro />
            <PortfolioGrid />
            <TrendingMaterials />
            <OurProcess />
            <DesignPackages />
            <WhyChooseUs />
            <AboutSection />
            <Testimonials />
            <FAQ />
            <Footer />
            <CallButton />
        </div>
    );
};

export default LandingPage;

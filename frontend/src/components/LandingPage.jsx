import React from 'react';
import Navbar from './landing/Navbar';
import Hero from './landing/Hero';
import StatsSection from './landing/StatsSection';
import MarketplaceIntro from './landing/MarketplaceIntro';
import TrendingMaterials from './landing/TrendingMaterials';
import PortfolioGrid from './landing/PortfolioGrid';
import OurProcess from './landing/OurProcess';
import DesignPackages from './landing/DesignPackages';
import WhyChooseUs from './landing/WhyChooseUs';
import AboutSection from './landing/AboutSection';
import Testimonials from './landing/Testimonials';
import FAQ from './landing/FAQ';
import Footer from './landing/Footer';
import CallButton from './landing/CallButton';

const LandingPage = () => {
    return (
        <div className="bg-[#fcfcfc] text-zinc-900 font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden relative">
            {/* Global Grain Texture Overlay - Premium Market Standard */}
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

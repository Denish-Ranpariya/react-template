import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import PortfolioSection from './PortfolioSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <PortfolioSection />
            <AboutSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;

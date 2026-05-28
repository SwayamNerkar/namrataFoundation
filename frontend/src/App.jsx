import React, { useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Initiatives from './components/Initiatives';
import Impact from './components/Impact';
import Leadership from './components/Leadership';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';

export default function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    const handlePreloaderComplete = () => {
        setIsLoaded(true);
    };

    return (
        <>
            {/* Custom Interactive cursor dot & ring */}
            <CustomCursor />

            {/* Global navigation menu */}
            <Navbar />

            {/* Preloader blocks entrance until completed */}
            {!isLoaded && <Preloader onComplete={handlePreloaderComplete} />}
            
            <main id="smooth-scroll-wrapper">
                {/* 1. Hero banner canvas */}
                <Hero isLoaded={isLoaded} />

                {/* 2. Timeline history story */}
                <Story />

                {/* 3. Focus cards initiatives */}
                <Initiatives />

                {/* 4. Draggable slider testimonials */}
                <Impact />

                {/* 5. Glass Profile leadership grids */}
                <Leadership />

                {/* 6. Photo Grid lightbox campaigns */}
                <Gallery />

                {/* 7. Coords Map beacon contacts */}
                <Contact />
            </main>

            {/* Global Footer registration desk */}
            <Footer />
        </>
    );
}

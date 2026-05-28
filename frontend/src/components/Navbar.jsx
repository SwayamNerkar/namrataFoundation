import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'story', 'initiatives', 'impact', 'leadership', 'gallery', 'contact'];
            const scrollPosition = window.scrollY + 120; // 120px offset for header height and layout spacing

            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Run once initially to highlight correct section
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (sectionId) => {
        setMenuActive(false);
        
        // Let scroll happen naturally or route to page
        setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <header className="main-header">
            <div className="nav-container">
                <a 
                    href="#" 
                    className="logo-link cursor-hover-target"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('hero');
                    }}
                >
                    <div className="logo">
                        <span className="logo-glow">NAMRATA</span>
                        <span className="logo-sub">FOUNDATION</span>
                    </div>
                </a>
                
                <nav className={`nav-menu ${menuActive ? 'active' : ''}`} id="nav-menu">
                    <ul className="nav-list">
                        <li>
                            <a 
                                href="#hero" 
                                className={`nav-item cursor-hover-target ${activeSection === 'hero' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick('hero');
                                }}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#story" 
                                className={`nav-item cursor-hover-target ${activeSection === 'story' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick('story');
                                }}
                            >
                                Story
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#initiatives" 
                                className={`nav-item cursor-hover-target ${activeSection === 'initiatives' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick('initiatives');
                                }}
                            >
                                Initiatives
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#impact" 
                                className={`nav-item cursor-hover-target ${activeSection === 'impact' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick('impact');
                                }}
                            >
                                Impact
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#leadership" 
                                className={`nav-item cursor-hover-target ${activeSection === 'leadership' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick('leadership');
                                }}
                            >
                                Leadership
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#gallery" 
                                className={`nav-item cursor-hover-target ${activeSection === 'gallery' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick('gallery');
                                }}
                            >
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                className={`nav-item cursor-hover-target ${activeSection === 'contact' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick('contact');
                                }}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="nav-actions">
                    <a 
                        href="#contact" 
                        className="btn btn-primary btn-nav cursor-hover-target"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('contact');
                        }}
                    >
                        <span>Get in Touch</span>
                    </a>
                    <button 
                        className={`menu-toggle cursor-hover-target ${menuActive ? 'active' : ''}`} 
                        id="menu-toggle" 
                        aria-label="Toggle Menu"
                        onClick={() => setMenuActive(!menuActive)}
                    >
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

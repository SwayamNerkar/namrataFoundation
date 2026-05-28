import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    const handleScrollClick = (e, targetId) => {
        e.preventDefault();
        setTimeout(() => {
            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="logo">
                            <span className="logo-glow">NAMRATA</span>
                            <span className="logo-sub">FOUNDATION</span>
                        </div>
                        <p className="brand-mission">Empowering rural lives, building self-reliant communities, and creating sustainable futures through targeted programs.</p>
                        
                        <div className="social-links">
                            <a href="#" className="social-btn cursor-hover-target" aria-label="Facebook"><Facebook size={18} /></a>
                            <a href="#" className="social-btn cursor-hover-target" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="#" className="social-btn cursor-hover-target" aria-label="Twitter"><Twitter size={18} /></a>
                            <a href="#" className="social-btn cursor-hover-target" aria-label="LinkedIn"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Explore Focus</h4>
                        <ul>
                            <li><a href="#initiatives" className="cursor-hover-target" onClick={(e) => handleScrollClick(e, 'initiatives')}>Agriculture Support</a></li>
                            <li><a href="#initiatives" className="cursor-hover-target" onClick={(e) => handleScrollClick(e, 'initiatives')}>Child Welfare Programs</a></li>
                            <li><a href="#initiatives" className="cursor-hover-target" onClick={(e) => handleScrollClick(e, 'initiatives')}>Women Empowerment</a></li>
                            <li><a href="#initiatives" className="cursor-hover-target" onClick={(e) => handleScrollClick(e, 'initiatives')}>Skill Development</a></li>
                            <li><a href="#initiatives" className="cursor-hover-target" onClick={(e) => handleScrollClick(e, 'initiatives')}>Rural Infrastructure</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Involved Desk</h4>
                        <ul>
                            <li><a href="#story" className="cursor-hover-target" onClick={(e) => handleScrollClick(e, 'story')}>Our Story</a></li>
                            <li><a href="#gallery" className="cursor-hover-target" onClick={(e) => handleScrollClick(e, 'gallery')}>Field Gallery</a></li>
                            <li><a href="#contact" className="cursor-hover-target" onClick={(e) => handleScrollClick(e, 'contact')}>Contact Desk</a></li>
                        </ul>
                    </div>

                    <div className="footer-reg-info">
                        <h4>NGO Credentials</h4>
                        <ul className="reg-list">
                            <li><span>Established:</span> 06 October 2022</li>
                            <li><span>NGO Darpan ID:</span> MH/2023/0350199</li>
                            <li><span>Registration:</span> NAGPUR/0000463/2022</li>
                            <li><span>Sub-Division:</span> Nagpur, Maharashtra</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Namrata Foundation. All Rights Reserved.</p>
                    <div className="footer-badges">
                        <span className="reg-badge">Govt Regd. NGO</span>
                        <span className="reg-badge">80G Approved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

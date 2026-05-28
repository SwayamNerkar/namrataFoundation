import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="section-ambient-glow"></div>
            <div className="container">
                <div className="contact-grid">
                    
                    {/* Left: Interactive details cards */}
                    <div className="contact-info-side">
                        <span className="section-subtitle">GET IN TOUCH</span>
                        <h2 className="section-title">Let's Co-create Social Impact</h2>
                        <p className="section-desc">Have queries about registrations, donations, or volunteering schedules? Reach out directly via our official desks.</p>

                        <div className="contact-cards-container">
                            {/* Location Card */}
                            <div className="contact-detail-card glass-panel scroll-reveal">
                                <div className="card-icon"><MapPin size={20} /></div>
                                <div>
                                    <h4>Headquarters</h4>
                                    <p>Nagpur, Maharashtra, India</p>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="contact-detail-card glass-panel scroll-reveal">
                                <div className="card-icon"><Mail size={20} /></div>
                                <div>
                                    <h4>Official Email</h4>
                                    <a href="mailto:namratafoundation1@gmail.com" className="contact-link cursor-hover-target">namratafoundation1@gmail.com</a>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="contact-detail-card glass-panel scroll-reveal">
                                <div className="card-icon"><Phone size={20} /></div>
                                <div>
                                    <h4>Mobile Desk</h4>
                                    <a href="tel:+917774035009" className="contact-link cursor-hover-target">+91 7774035009</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Digital Map Mockup Grid */}
                    <div className="contact-map-side scroll-reveal">
                        <div className="digital-map-container glass-panel">
                            <div className="digital-map-hud">
                                <div className="hud-tag">TARGET SYSTEM INITIATED</div>
                                <div className="hud-coordinates">LOC: NAGPUR [21.1458° N, 79.0882° E]</div>
                            </div>
                            
                            <div className="neon-map-canvas-container">
                                <div className="neon-map-graphic">
                                    <div className="map-grid-lines"></div>
                                    <div className="radar-ping">
                                        <div className="ping-circle"></div>
                                        <div className="ping-circle delay-1"></div>
                                        <div className="ping-circle delay-2"></div>
                                        <div className="ping-core"></div>
                                    </div>
                                    <div className="location-beacon-tag">
                                        <span>NAGPUR HQ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

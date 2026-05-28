import React, { useRef } from 'react';
import { UserCheck, UserCog, Wallet, Linkedin, Mail } from 'lucide-react';

export default function Leadership() {
    const cardRefs = useRef([]);

    const handleMouseMove = (e, index) => {
        const card = cardRefs.current[index];
        if (!card) return;
        
        const bounds = card.getBoundingClientRect();
        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;
        
        const xPercent = (mouseX / bounds.width) - 0.5;
        const yPercent = (mouseY / bounds.height) - 0.5;
        
        const maxTilt = 10;
        const rotateX = -yPercent * maxTilt;
        const rotateY = xPercent * maxTilt;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = (index) => {
        const card = cardRefs.current[index];
        if (!card) return;
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    };

    const leaders = [
        {
            role: "President",
            name: "NAMRATA PRASAD MACHAVE",
            desc: "Directs the foundation's strategic milestones, vision pathways, and coordinates policy actions with rural institutions.",
            icon: UserCheck
        },
        {
            role: "Secretary",
            name: "SUPRIYA AKASH HANWAT",
            desc: "Oversees operational schedules, volunteer organization, training workshops, and community campaign deliveries.",
            icon: UserCog
        },
        {
            role: "Treasurer",
            name: "PRASHANT S. BHASKARVAR",
            desc: "Manages financial transparency, donations accounts, capital allocation audits, and ensures regulatory compliance audits.",
            icon: Wallet
        }
    ];

    return (
        <section id="leadership" className="leadership-section">
            <div className="section-ambient-glow"></div>
            <div className="container">
                <div className="section-header center">
                    <span className="section-subtitle">OUR LEADERSHIP</span>
                    <h2 className="section-title">The Visionaries Behind the Movement</h2>
                    <p className="section-desc">A passionate board of trustees steering Namrata Foundation toward meaningful, transparent, and scalable social interventions.</p>
                </div>

                <div className="leadership-grid">
                    {leaders.map((leader, idx) => {
                        const IconComponent = leader.icon;
                        return (
                            <div 
                                key={idx}
                                ref={(el) => (cardRefs.current[idx] = el)}
                                className="leader-card glass-panel scroll-reveal"
                                onMouseMove={(e) => handleMouseMove(e, idx)}
                                onMouseLeave={() => handleMouseLeave(idx)}
                            >
                                <div className="leader-card-glow-border"></div>
                                <div className="leader-avatar-wrapper">
                                    <div className="leader-avatar">
                                        <IconComponent size={40} />
                                    </div>
                                    <span className="leader-glow-overlay"></span>
                                </div>
                                <div className="leader-info">
                                    <span className="leader-role">{leader.role}</span>
                                    <h3>{leader.name}</h3>
                                    <p>{leader.desc}</p>
                                </div>
                                <div className="leader-socials">
                                    <a href="#" className="social-icon cursor-hover-target"><Linkedin size={16} /></a>
                                    <a href="#" className="social-icon cursor-hover-target"><Mail size={16} /></a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

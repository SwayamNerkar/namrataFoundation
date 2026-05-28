import React, { useRef } from 'react';
import { Sprout, GraduationCap, Award, Briefcase, Home, HeartHandshake, ArrowUpRight } from 'lucide-react';

export default function Initiatives() {
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

    const initiativesData = [
        {
            title: "Agriculture Development",
            description: "Providing modern farming training, seeds support, and rainwater harvesting guidance to secure sustainable livelihoods for farmers.",
            icon: Sprout,
            colorClass: "color-emerald"
        },
        {
            title: "Child Welfare",
            description: "Supporting underprivileged children with academic sponsorships, learning kits, nutrition packs, and digital literacy camps.",
            icon: GraduationCap,
            colorClass: "color-blue"
        },
        {
            title: "Women Empowerment",
            description: "Fostering financial independence through sewing networks, small enterprise training, and self-help group programs.",
            icon: Award,
            colorClass: "color-gold"
        },
        {
            title: "Skill Development",
            description: "Offering vocational computer courses, craftsmanship modules, and professional skills training to secure employment paths.",
            icon: Briefcase,
            colorClass: "color-indigo"
        },
        {
            title: "Rural Development",
            description: "Building local infrastructure including drinking water units, village street lights, and hygienic community centers.",
            icon: Home,
            colorClass: "color-coral"
        },
        {
            title: "Poverty Alleviation",
            description: "Distributing monthly food rations, winter clothes, and emergency medical grants to families living below the poverty line.",
            icon: HeartHandshake,
            colorClass: "color-teal"
        }
    ];

    return (
        <section id="initiatives" className="initiatives-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">WHAT WE DO</span>
                    <h2 className="section-title">Core Initiatives & Focus Areas</h2>
                    <p className="section-desc">Delivering tailored, high-impact programs designed to drive sustainable change in communities.</p>
                </div>

                <div className="initiatives-grid">
                    {initiativesData.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                            <div 
                                key={idx}
                                ref={(el) => (cardRefs.current[idx] = el)}
                                className={`initiative-card glass-panel scroll-reveal ${item.colorClass}`}
                                onMouseMove={(e) => handleMouseMove(e, idx)}
                                onMouseLeave={() => handleMouseLeave(idx)}
                            >
                                <div className="card-glow"></div>
                                <div className="card-icon-box">
                                    <IconComponent size={28} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className="card-footer">
                                    <span className="card-link cursor-hover-target">
                                        Learn More <ArrowUpRight size={14} />
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

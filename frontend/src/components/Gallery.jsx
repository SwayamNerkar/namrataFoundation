import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import agricultureImg from '../assets/agriculture.png';
import womenEmpowermentImg from '../assets/women_empowerment.png';
import childWelfareImg from '../assets/child_welfare.png';
import heroBgImg from '../assets/hero_bg.png';

export default function Gallery() {
    const [filter, setFilter] = useState('all');
    const [lightbox, setLightbox] = useState({ active: false, src: '', caption: '' });

    const filterCategories = [
        { key: 'all', label: 'All Photos' },
        { key: 'agriculture', label: 'Agriculture' },
        { key: 'education', label: 'Child Education' },
        { key: 'welfare', label: 'Community Welfare' }
    ];

    const galleryData = [
        {
            src: agricultureImg,
            alt: "Agricultural Development Training",
            caption: "Organic Cultivation Camp",
            category: "agriculture"
        },
        {
            src: womenEmpowermentImg,
            alt: "Women Self Help Network",
            caption: "Vocational Craft Session",
            category: "welfare"
        },
        {
            src: childWelfareImg,
            alt: "Underprivileged Child Sponsorship Distribution",
            caption: "School Kits Distribution",
            category: "education"
        },
        {
            src: heroBgImg,
            alt: "Smart Drip Irrigation Site Setup",
            caption: "Smart Farming Site Visit",
            category: "agriculture"
        }
    ];

    const handlePhotoClick = (item) => {
        setLightbox({
            active: true,
            src: item.src,
            caption: item.caption
        });
    };

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">VISUAL ARCHIVE</span>
                    <h2 className="section-title">Moments of Transformation</h2>
                    <p className="section-desc">Glimpses of agricultural camps, training workshops, and distributions captured live during our fieldwork.</p>
                </div>

                {/* Gallery Categories Filter */}
                <div className="gallery-filters">
                    {filterCategories.map((cat) => (
                        <button 
                            key={cat.key}
                            className={`filter-btn cursor-hover-target ${filter === cat.key ? 'active' : ''}`}
                            onClick={() => setFilter(cat.key)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Masonry Gallery Grid */}
                <div className="gallery-grid">
                    {galleryData.map((item, idx) => {
                        const isMatch = filter === 'all' || item.category === filter;
                        if (!isMatch) return null;

                        return (
                            <div 
                                key={idx}
                                className="gallery-item scroll-reveal filter-item"
                                onClick={() => handlePhotoClick(item)}
                            >
                                <div className="gallery-img-box">
                                    <img src={item.src} alt={item.alt} />
                                    <div className="gallery-hover-overlay">
                                        <Maximize2 size={24} />
                                        <span>{item.caption}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Photo Lightbox Modal */}
            {lightbox.active && (
                <div 
                    id="lightbox-modal" 
                    className="modal-overlay active"
                    onClick={(e) => {
                        if (e.target.id === 'lightbox-modal' || e.target.closest('#close-lightbox')) {
                            setLightbox({ active: false, src: '', caption: '' });
                        }
                    }}
                >
                    <div className="lightbox-content">
                        <button className="modal-close cursor-hover-target" id="close-lightbox">
                            <X size={16} />
                        </button>
                        <img src={lightbox.src} className="lightbox-img" alt="Enlarged gallery photo" />
                        <p id="lightbox-caption" className="lightbox-caption">{lightbox.caption}</p>
                    </div>
                </div>
            )}
        </section>
    );
}

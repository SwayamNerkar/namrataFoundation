import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, User, ChevronsLeftRight } from 'lucide-react';
import agricultureImg from '../assets/agriculture.png';
import womenEmpowermentImg from '../assets/women_empowerment.png';

export default function Impact() {
    // Before After Slider States
    const [sliderPct, setSliderPct] = useState(50);
    const sliderRef = useRef(null);
    const isDragging = useRef(false);

    const handleMove = (clientX) => {
        const slider = sliderRef.current;
        if (!slider) return;
        
        const bounds = slider.getBoundingClientRect();
        let relativeX = clientX - bounds.left;
        
        if (relativeX < 0) relativeX = 0;
        if (relativeX > bounds.width) relativeX = bounds.width;
        
        const percentage = (relativeX / bounds.width) * 100;
        setSliderPct(percentage);
    };

    const handleMouseDown = (e) => {
        isDragging.current = true;
        e.preventDefault();
    };

    const handleTouchStart = (e) => {
        isDragging.current = true;
        e.preventDefault();
    };

    useEffect(() => {
        const handleMouseUp = () => {
            isDragging.current = false;
        };
        const handleMouseMove = (e) => {
            if (!isDragging.current) return;
            handleMove(e.clientX);
        };
        const handleTouchMove = (e) => {
            if (!isDragging.current) return;
            handleMove(e.touches[0].clientX);
        };

        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchend", handleMouseUp);
        window.addEventListener("touchmove", handleTouchMove);

        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchend", handleMouseUp);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    // Testimonial Carousel States
    const [activeSlide, setActiveSlide] = useState(0);
    const slidesData = [
        {
            quote: "Before joining the Namrata Foundation training group, I had no income. The vocational sewing course gave me the skills to start my own tailoring stall. Today, I support my children's school fees myself.",
            author: "Sunita Bai",
            role: "Nagpur Rural Resident"
        },
        {
            quote: "The sustainable farming workshop introduced me to soil rejuvenation and drip irrigation techniques. My crop output increased by 30% this year despite erratic monsoon rains.",
            author: "Ramesh Rao",
            role: "Local Farmer, Wardha Border"
        }
    ];

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % slidesData.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    };

    return (
        <section id="impact" className="impact-section">
            <div className="container-full">
                <div className="impact-split-container">
                    
                    {/* Left: Text content / Testimonial Carousel */}
                    <div className="impact-text-side">
                        <div className="impact-text-wrapper">
                            <span className="section-subtitle">IMPACT STORIES</span>
                            <h2 className="section-title">From Adversity to Self-Reliance</h2>
                            
                            <div className="impact-carousel">
                                {slidesData.map((slide, idx) => (
                                    <div 
                                        key={idx}
                                        className={`carousel-slide ${idx === activeSlide ? 'active' : ''}`}
                                    >
                                        <blockquote className="impact-quote">
                                            "{slide.quote}"
                                        </blockquote>
                                        <div className="quote-author">
                                            <div className="author-avatar">
                                                <User size={20} />
                                            </div>
                                            <div>
                                                <strong>{slide.author}</strong>
                                                <span>{slide.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="carousel-controls">
                                <button 
                                    className="carousel-btn prev-btn cursor-hover-target" 
                                    aria-label="Previous Slide"
                                    onClick={prevSlide}
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <div className="carousel-dots">
                                    {slidesData.map((_, idx) => (
                                        <span 
                                            key={idx}
                                            className={`dot ${idx === activeSlide ? 'active' : ''}`}
                                            onClick={() => setActiveSlide(idx)}
                                        ></span>
                                    ))}
                                </div>
                                <button 
                                    className="carousel-btn next-btn cursor-hover-target" 
                                    aria-label="Next Slide"
                                    onClick={nextSlide}
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual Parallax Image Slider */}
                    <div className="impact-image-side scroll-reveal">
                        <div ref={sliderRef} className="before-after-slider" id="before-after-slider">
                            <div className="slider-image before-image">
                                <img src={agricultureImg} alt="Before Intervention" />
                                <div className="image-label">SUSTAINABLE INITIATIVES</div>
                            </div>
                            <div 
                                className="slider-image after-image"
                                style={{ clipPath: `polygon(0 0, ${sliderPct}% 0, ${sliderPct}% 100%, 0 100%)` }}
                            >
                                <img src={womenEmpowermentImg} alt="After Intervention" />
                                <div className="image-label">EMPOWERED COMMUNITIES</div>
                            </div>
                            {/* Resize handle bar */}
                            <div 
                                className="slider-handle"
                                style={{ left: `${sliderPct}%` }}
                                onMouseDown={handleMouseDown}
                                onTouchStart={handleTouchStart}
                            >
                                <div className="handle-line"></div>
                                <div className="handle-button">
                                    <ChevronsLeftRight size={18} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React, { useEffect, useRef } from 'react';
import { Sparkles, Heart, Users, ArrowDown, ShieldCheck } from 'lucide-react';
import heroBg from '../assets/hero_bg.png';
import gsap from 'gsap';

export default function Hero({ isLoaded }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let particlesArray = [];
        let mouse = { x: null, y: null, radius: 100 };

        const resizeCanvas = () => {
            if (!canvas.parentElement) return;
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const heroSec = document.querySelector(".hero-section");
        const onMouseMove = (e) => {
            const bounds = canvas.getBoundingClientRect();
            mouse.x = e.clientX - bounds.left;
            mouse.y = e.clientY - bounds.top;
        };

        const onMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        if (heroSec) {
            heroSec.addEventListener("mousemove", onMouseMove);
            heroSec.addEventListener("mouseleave", onMouseLeave);
        }

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height + canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 0.8 - 0.4;
                this.speedY = -(Math.random() * 1.2 + 0.3);
                this.alpha = Math.random() * 0.5 + 0.2;
                this.color = Math.random() > 0.5 ? "16, 185, 129" : "37, 99, 235";
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (mouse.x != null && mouse.y != null) {
                    let dx = this.x - mouse.x;
                    let dy = this.y - mouse.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        let forceDirectionX = dx / distance;
                        let forceDirectionY = dy / distance;
                        let force = (mouse.radius - distance) / mouse.radius;
                        let directionX = forceDirectionX * force * 2;
                        let directionY = forceDirectionY * force * 2;
                        
                        this.x += directionX;
                        this.y += directionY;
                    }
                }

                if (this.y < 0 || this.x < 0 || this.x > canvas.width) {
                    this.x = Math.random() * canvas.width;
                    this.y = canvas.height + Math.random() * 20;
                    this.speedY = -(Math.random() * 1.2 + 0.3);
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
                ctx.shadowBlur = 8;
                ctx.shadowColor = `rgba(${this.color}, 0.5)`;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particlesArray = [];
            const quantity = Math.floor((canvas.width * canvas.height) / 10000);
            const cappedQuantity = Math.min(quantity, 80);
            for (let i = 0; i < cappedQuantity; i++) {
                particlesArray.push(new Particle());
            }
        };
        initParticles();

        let animationFrameId;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (heroSec) {
                heroSec.removeEventListener("mousemove", onMouseMove);
                heroSec.removeEventListener("mouseleave", onMouseLeave);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Staggered reveal animations once isLoaded is true
    useEffect(() => {
        if (!isLoaded) return;

        const heroTimeline = gsap.timeline();
        heroTimeline.fromTo(".hero-badge", 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(".hero-title", 
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 
            "-=0.5"
        )
        .fromTo(".hero-subtitle", 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
            "-=0.6"
        )
        .fromTo(".hero-ctas .btn", 
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" }, 
            "-=0.5"
        )
        .fromTo(".hero-floating-card", 
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, 
            "-=0.6"
        );
    }, [isLoaded]);

    const handleScrollClick = (e, targetId) => {
        e.preventDefault();
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg-wrapper">
                <img src={heroBg} alt="Namrata Foundation Background" className="hero-bg-img" />
                <div className="hero-gradient-overlay"></div>
            </div>
            
            <canvas ref={canvasRef} id="hero-particles" className="hero-particles-canvas"></canvas>

            <div className="hero-container">
                <div className="hero-tagline-wrap">
                    <span className="hero-badge" style={{ opacity: 0 }}>
                        <Sparkles size={14} className="emerald-glow-text" /> 
                        Empowering Lives, Building Communities
                    </span>
                </div>
                
                <h1 className="hero-title" style={{ opacity: 0 }}>
                    Together We Build <br />
                    <span className="gradient-text">Hope & Empower</span> Lives.
                </h1>
                
                <p className="hero-subtitle" style={{ opacity: 0 }}>
                    Creating sustainable social impact through empowerment, education, rural development, and community welfare programs.
                </p>

                <div className="hero-ctas">
                    <a 
                        href="#initiatives" 
                        className="btn btn-primary cursor-hover-target"
                        style={{ opacity: 0 }}
                        onClick={(e) => handleScrollClick(e, 'initiatives')}
                    >
                        <span>Explore Initiatives</span>
                        <Sparkles size={16} />
                    </a>
                    <a 
                        href="#contact" 
                        className="btn btn-secondary cursor-hover-target"
                        style={{ opacity: 0 }}
                        onClick={(e) => handleScrollClick(e, 'contact')}
                    >
                        <span>Get in Touch</span>
                        <Users size={16} />
                    </a>
                    <a 
                        href="#story" 
                        className="btn btn-text cursor-hover-target"
                        style={{ opacity: 0 }}
                        onClick={(e) => handleScrollClick(e, 'story')}
                    >
                        <span>Explore Mission</span>
                        <ArrowDown size={16} className="indicator-arrow" />
                    </a>
                </div>

                {/* Floating Info Card */}
                <div className="hero-floating-card glass-panel" style={{ opacity: 0 }}>
                    <div className="floating-card-icon">
                        <ShieldCheck size={24} className="emerald-glow-text" />
                    </div>
                    <div className="floating-card-info">
                        <h4>Registered NGO</h4>
                        <p>Govt. ID: MH/2023/0350199</p>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator-wrapper">
                <a 
                    href="#story" 
                    className="scroll-indicator cursor-hover-target"
                    onClick={(e) => handleScrollClick(e, 'story')}
                >
                    <span className="scroll-dot"></span>
                </a>
                <span className="scroll-text">SCROLL TO DISCOVER</span>
            </div>
        </section>
    );
}

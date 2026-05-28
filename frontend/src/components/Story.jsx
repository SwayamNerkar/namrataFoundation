import React, { useEffect, useRef } from 'react';
import { Calendar, FileText, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Story() {
    const timelineRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let gCtx = gsap.context(() => {
            // 1. Timeline Progress Line Animation
            gsap.to(progressRef.current, {
                height: "100%",
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: true
                }
            });

            // 2. Add Active classes on items during scroll
            const items = gsap.utils.toArray('.timeline-item');
            items.forEach((item) => {
                ScrollTrigger.create({
                    trigger: item,
                    start: "top 65%",
                    end: "bottom 45%",
                    onEnter: () => item.classList.add("active"),
                    onLeaveBack: () => item.classList.remove("active")
                });
            });

            // 3. Count Up Stats on entering viewport
            const stats = gsap.utils.toArray('.stat-number');
            stats.forEach((stat) => {
                const targetVal = parseInt(stat.getAttribute("data-target"), 10);
                gsap.fromTo(stat, 
                    { innerText: 0 },
                    {
                        innerText: targetVal,
                        duration: 2,
                        snap: { innerText: 1 },
                        scrollTrigger: {
                            trigger: stat,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            });

            // 4. Scroll reveals for timeline items
            const reveals = gsap.utils.toArray('.scroll-reveal');
            reveals.forEach((el) => {
                gsap.from(el, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%"
                    }
                });
            });
        }, timelineRef);

        return () => gCtx.revert();
    }, []);

    return (
        <section id="story" className="story-section">
            <div className="section-ambient-glow"></div>
            <div className="container" ref={timelineRef}>
                <div className="section-header center">
                    <span className="section-subtitle">OUR JOURNEY</span>
                    <h2 className="section-title">A Legacy of Hope & Action</h2>
                    <p className="section-desc">Established with a vision to uplift underprivileged societies, improve rural economies, and bring hope to lives.</p>
                </div>

                <div className="story-layout">
                    {/* Timeline columns */}
                    <div className="story-timeline-wrapper">
                        <div className="timeline-line">
                            <div ref={progressRef} className="timeline-line-progress"></div>
                        </div>

                        {/* Milestone 1 */}
                        <div className="timeline-item left scroll-reveal">
                            <div className="timeline-dot"><Calendar size={14} /></div>
                            <div className="timeline-card glass-panel">
                                <span className="timeline-date">06 October 2022</span>
                                <h3>The Foundation Stone</h3>
                                <p>Namrata Foundation was officially established with a core mandate to address poverty, agricultural distress, and lack of training in Nagpur district.</p>
                            </div>
                        </div>

                        {/* Milestone 2 */}
                        <div className="timeline-item right scroll-reveal">
                            <div className="timeline-dot"><FileText size={14} /></div>
                            <div className="timeline-card glass-panel">
                                <span className="timeline-date">Year 2023</span>
                                <h3>Official Registration</h3>
                                <p>Secured Government registration as a recognized non-profit organization. Registration Number: <strong>NAGPUR/0000463/2022</strong>. NGO ID: <strong>MH/2023/0350199</strong>.</p>
                            </div>
                        </div>

                        {/* Milestone 3 */}
                        <div className="timeline-item left scroll-reveal">
                            <div className="timeline-dot"><Globe size={14} /></div>
                            <div className="timeline-card glass-panel">
                                <span className="timeline-date">Present Day</span>
                                <h3>Expanding Horizons</h3>
                                <p>Actively running multi-sectoral projects including smart farming workshops, child education sponsorships, and women-oriented self-help networks.</p>
                            </div>
                        </div>
                    </div>

                    {/* Statistics grid */}
                    <div className="stats-grid">
                        <div className="stat-card glass-panel scroll-reveal">
                            <div className="stat-glow"></div>
                            <span className="stat-number" data-target="50">0</span><span className="stat-suffix">+</span>
                            <span class="stat-label">Villages Impacted</span>
                        </div>
                        <div class="stat-card glass-panel scroll-reveal">
                            <div class="stat-glow"></div>
                            <span class="stat-number" data-target="250">0</span><span class="stat-suffix">+</span>
                            <span class="stat-label">Active Volunteers</span>
                        </div>
                        <div class="stat-card glass-panel scroll-reveal">
                            <div class="stat-glow"></div>
                            <span class="stat-number" data-target="15">0</span><span class="stat-suffix">+</span>
                            <span class="stat-label">Completed Campaigns</span>
                        </div>
                        <div class="stat-card glass-panel scroll-reveal">
                            <div class="stat-glow"></div>
                            <span class="stat-number" data-target="1200">0</span><span class="stat-suffix">+</span>
                            <span class="stat-label">Lives Empowered</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

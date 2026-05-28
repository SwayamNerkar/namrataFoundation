import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [word, setWord] = useState("INITIATING");

    const loadingWords = [
        "INITIATING SYSTEMS",
        "CONNECTING TO DATABASE",
        "RURAL EMPOWERMENT",
        "AGRICULTURE FOCUS",
        "CHILD WELFARE MATCHING",
        "VOCATIONAL MODULES",
        "CREATING HOPE"
    ];

    useEffect(() => {
        let currentProgress = 0;
        const progressInterval = setInterval(() => {
            let increment = 1;
            if (currentProgress < 30) increment = Math.floor(Math.random() * 8) + 2;
            else if (currentProgress < 75) increment = Math.floor(Math.random() * 4) + 1;
            else if (currentProgress < 99) increment = Math.floor(Math.random() * 2) + 1;

            currentProgress += increment;
            if (currentProgress > 100) currentProgress = 100;

            setProgress(currentProgress);

            const wordIndex = Math.min(
                Math.floor((currentProgress / 100) * loadingWords.length),
                loadingWords.length - 1
            );
            setWord(loadingWords[wordIndex]);

            if (currentProgress >= 100) {
                clearInterval(progressInterval);
                
                // Animate fade out
                gsap.to("#preloader", {
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    onComplete: () => {
                        if (onComplete) onComplete();
                    }
                });
            }
        }, 45);

        return () => clearInterval(progressInterval);
    }, []);

    return (
        <div id="preloader" class="preloader">
            <div class="preloader-content">
                <div class="preloader-logo">
                    <span class="logo-accent">NAMRATA</span> FOUNDATION
                </div>
                <div class="preloader-progress-container">
                    <div class="preloader-progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
                <div class="preloader-status">
                    <span class="preloader-word">{word}</span>
                    <span class="preloader-percentage">{progress.toString().padStart(2, '0')}%</span>
                </div>
            </div>
            <div class="preloader-bg-overlay"></div>
        </div>
    );
}

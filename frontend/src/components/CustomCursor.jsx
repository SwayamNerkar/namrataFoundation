import React, { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const dotRef = useRef(null);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        let mouseX = 0, mouseY = 0;
        let ballX = 0, ballY = 0;
        const speed = 0.15; // damping lag

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (dotRef.current) {
                dotRef.current.style.left = `${mouseX}px`;
                dotRef.current.style.top = `${mouseY}px`;
            }
        };

        const animate = () => {
            let distX = mouseX - ballX;
            let distY = mouseY - ballY;
            
            ballX += distX * speed;
            ballY += distY * speed;

            if (cursorRef.current) {
                cursorRef.current.style.left = `${ballX}px`;
                cursorRef.current.style.top = `${ballY}px`;
            }

            requestAnimationFrame(animate);
        };

        // Attach mousemove listener
        window.addEventListener("mousemove", onMouseMove);
        const animationId = requestAnimationFrame(animate);

        // Event delegation for cursor hover styling
        const onMouseOver = (e) => {
            const target = e.target;
            if (!target) return;

            // Check if cursor hover targets are active
            const isHoverable = 
                target.closest('a') || 
                target.closest('button') || 
                target.closest('select') || 
                target.closest('input') || 
                target.closest('textarea') || 
                target.closest('.cursor-hover-target') || 
                target.closest('.gallery-item') || 
                target.closest('.tier-btn');

            setHovering(!!isHoverable);
        };

        window.addEventListener("mouseover", onMouseOver);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseover", onMouseOver);
            cancelAnimationFrame(animationId);
        };
    }, []);

    // Disable custom cursor on touch screens
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    useEffect(() => {
        const checkTouch = () => {
            setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
        };
        checkTouch();
        window.addEventListener("resize", checkTouch);
        return () => window.removeEventListener("resize", checkTouch);
    }, []);

    if (isTouchDevice) return null;

    return (
        <>
            <div 
                ref={cursorRef} 
                className={`custom-cursor ${hovering ? 'hovering' : ''}`}
            ></div>
            <div 
                ref={dotRef} 
                className={`custom-cursor-dot ${hovering ? 'hovering' : ''}`}
            ></div>
        </>
    );
}

"use client"; // This directive marks the component as a Client Component

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Initial fade-in animation for content
        const timer = setTimeout(() => setIsVisible(true), 300);

        // Mouse movement tracking for background effects
        const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
            // Calculate mouse position as a percentage of viewport width/height
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            setMousePosition({ x, y });
        };

        // Add event listener for mouse movement
        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup function for useEffect
        return () => {
            clearTimeout(timer); // Clear timeout if component unmounts early
            window.removeEventListener('mousemove', handleMouseMove); // Remove event listener
        };
    }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

    // Dynamically generate background style based on mouse position
    const getBackgroundStyle = () => {
        const { x, y } = mousePosition;

        // Simplified HSL for subtle, dynamic colors that shift with mouse movement
        // Colors will be less intense and fade more quickly to white.
        const hue = Math.floor(x * 3.6); // 0-360 based on X position
        const saturation = 50 + (y / 100) * 20; // 50-70% saturation
        const lightness = 70 + (y / 100) * 20; // 70-90% lightness

        return {
            background: `
                radial-gradient(circle at ${x}% ${y}%, 
                    hsl(${hue}, ${saturation}%, ${lightness}%) 0%,   /* Inner subtle color */
                    rgba(255, 255, 255, 0.9) 40%,           /* Fading to near white */
                    white 100%                              /* Ending in pure white */
                )
            `,
            transition: 'background 0.3s ease-out' // Smooth transition for background changes
        };
    };

    // Dynamically generate text shadow for subtle depth based on mouse position
    const getTextShadow = () => {
        const { x, y } = mousePosition;
        // Calculate small offsets for text shadow to follow mouse
        const offsetX = (x - 50) * 0.03; // Adjusted multiplier for even subtler movement
        const offsetY = (y - 50) * 0.03;

        return {
            textShadow: `${offsetX}px ${offsetY}px 15px rgba(0, 0, 0, 0.15)`, // Lighter, smaller shadow
            transition: 'text-shadow 0.3s ease-out' // Smooth transition for shadow changes
        };
    };

    return (
        <div
            className="relative min-h-screen overflow-hidden bg-white" // Base background is white for contrast
            style={getBackgroundStyle()} // Apply the dynamic background gradient
        >
            {/* Main Content Area */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-5 lg:px-20">
                {/* Content wrapper with fade-in and slide-up animation */}
                <div className={`text-center max-w-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                    {/* Main Heading: Targeted for Google */}
                    <h1
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight leading-none"
                        style={getTextShadow()} // Apply dynamic text shadow
                    >
                        Full-Stack Expertise Driving
                        <br />
                        <span className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700 font-bold">
                            End-to-End Solutions
                        </span>
                    </h1>

                    {/* Subtitle: Elaborating on expertise */}
                    <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-800 font-medium tracking-wide">
                            Translating intricate ideas into tangible, user-centric products at scale.
                        </p>
                    </div>

                    {/* Call to Action (CTA): Compelling and inviting */}
                    <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <a href="https://drive.google.com/file/d/1gG7kEdB1_0Jdv3LSwKbzLANJQOL7Nbdk/view?usp=drive_link" target="_blank" className="group relative inline-flex items-center gap-3 text-gray-900 text-xl font-semibold tracking-wide
                                           px-8 py-3 rounded-full border-2 border-gray-900
                                           hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in-out">
                            <span className="relative">
                                Download Resume
                                {/* Underline effect on hover */}
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                            </span>
                            {/* Arrow icon with subtle animation */}
                            <ArrowDown size={22} className="rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </div>
                </div>

                {/* Scroll indicator with bounce animation */}
                <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="animate-bounce">
                        <ArrowDown size={28} className="text-gray-500" />
                    </div>
                </div>
            </div>

            {/* Removed dynamic corner accents and the second overlay for simplification */}
        </div>
    );
};

export default HeroSection;

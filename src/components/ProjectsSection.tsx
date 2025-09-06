"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, ExternalLink, Code } from "lucide-react";

const ProjectsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [hoveredProject, setHoveredProject] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        // Parallax scroll effect
        const handleScroll = () => {
            if (sectionRef.current) {

                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                setScrollY(rate);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const projects = [
        {
            id: "aetheredge",
            title: "AetherEdge",
            subtitle: "Portfolio Management & Algo Trading Platform",
            description: "Ready to use, algo trading and investment management platform for retail traders, which powers their decision making as well as trading habits.",
            technologies: ["Java", "Spring Boot", "Spring Security", "Microservices", "ReactJS", "Kafka", "Redis", "PostgresSQL"],
            status: "Under Testing",
        },
        {
            id: "eventiq",
            title: "EventIQ",
            subtitle: "Intelligent User Analytics Tracking & Management",
            description: "Scalable event processing and analytics platform built with microservices architecture, featuring real-time data streaming and advanced monitoring capabilities.",
            technologies: ["Java", "Spring Boot", "Kafka", "Redis", "PostgresSQL", "React", "Cassandra"],
            status: "Active Development",
        }
    ];
    const handleProjectClick = (projectId: string) => {
        const urls: { [key in "aetheredge" | "eventiq"]: string } = {
            aetheredge: "https://github.com/sanketvy/AetherEdge",
            eventiq: "https://github.com/sanketvy/EventIQ"
        };
        const url = urls[projectId as "aetheredge" | "eventiq"];
        if (url) {
            window.open(url, "_blank");
        }
    };

    return (
        <section
            ref={sectionRef}
            id="projects-section"
            className="relative min-h-screen bg-white py-24 overflow-hidden"
        >
            {/* Parallax Background Elements */}
            <div
                className="absolute inset-0 opacity-5"
                style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
                <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-gray-300 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-gray-300 rounded-full"></div>
                <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-gray-300 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-20">
                {/* Section Header */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                        Featured Projects
                    </h2>
                    <div className="w-32 h-1 bg-gray-900 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                        Each project demonstrates scalable design patterns, cloud-native principles,
                        and enterprise-grade security implementations.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`
                                relative transition-all duration-1000 cursor-pointer group
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                            `}
                            style={{
                                transitionDelay: `${(index + 1) * 300}ms`,
                                transform: hoveredProject === index ? 'translateY(-8px)' : ''
                            }}
                            onClick={() => handleProjectClick(project.id)}
                            onMouseEnter={() => {
                                // @ts-ignore
                                setHoveredProject(index);
                            }}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Project Card */}
                            <div className={`
                                relative bg-white border-2 border-gray-200 p-12 lg:p-16
                                group-hover:border-gray-900 transition-all duration-500
                                ${hoveredProject === index ? 'shadow-2xl' : 'shadow-lg'}
                            `}>
                                {/* Project Header */}
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            <Code size={32} className="text-gray-900" />
                                            <div className="flex items-center gap-3">
                                                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                                                    {project.status}
                                                </span>
                                                <span className="px-3 py-1 bg-gray-900 text-white text-sm font-medium rounded-full">
                                                    {project.impact}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-xl text-gray-600 font-medium mb-6">
                                            {project.subtitle}
                                        </p>

                                        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Navigation Arrow */}
                                    <div className="flex-shrink-0">
                                        <div className={`
                                            w-16 h-16 border-2 border-gray-900 rounded-full 
                                            flex items-center justify-center
                                            group-hover:bg-gray-900 transition-all duration-300
                                            ${hoveredProject === index ? 'rotate-45' : ''}
                                        `}>
                                            <ArrowRight
                                                size={24}
                                                className="text-gray-900 group-hover:text-white transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={tech}
                                                className={`
                                                    px-4 py-2 border border-gray-300 text-gray-700 font-medium text-sm
                                                    group-hover:border-gray-700 group-hover:text-gray-900 
                                                    transition-all duration-300
                                                    ${hoveredProject === index ? 'bg-gray-50' : 'bg-white'}
                                                `}
                                                style={{
                                                    transitionDelay: `${techIndex * 50}ms`
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Call to Action */}
                                <div className="flex items-center gap-4 pt-8 border-t border-gray-200">
                                    <span className="text-gray-600 font-medium">View Project Details</span>
                                    <ExternalLink
                                        size={18}
                                        className={`
                                            text-gray-600 group-hover:text-gray-900 transition-all duration-300
                                            ${hoveredProject === index ? 'translate-x-1' : ''}
                                        `}
                                    />
                                </div>

                                {/* Hover Accent Line */}
                                <div className={`
                                    absolute bottom-0 left-0 h-1 bg-gray-900 transition-all duration-500
                                    ${hoveredProject === index ? 'w-full' : 'w-0'}
                                `} />
                            </div>

                            {/* Project Number */}
                            <div className={`
                                absolute -top-6 -left-6 w-16 h-16 bg-gray-900 text-white 
                                flex items-center justify-center font-bold text-xl
                                group-hover:scale-110 transition-transform duration-300
                                ${hoveredProject === index ? 'bg-gray-800' : ''}
                            `}>
                                {String(index + 1).padStart(2, '0')}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Parallax Accent Elements */}
            <div
                className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-10"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
                <div className="absolute top-1/3 left-10 w-px h-32 bg-gray-300"></div>
                <div className="absolute bottom-1/3 right-10 w-px h-24 bg-gray-300"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gray-300"></div>
            </div>
        </section>
    );
};

export default ProjectsSection;
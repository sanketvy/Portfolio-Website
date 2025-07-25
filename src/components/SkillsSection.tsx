"use client";

import { useEffect, useState } from "react";

const SkillsSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const section = document.getElementById('skills-section');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const skills = [
        {
            category: "Languages",
            items: ["Java", "JavaScript", "SQL", "HTML", "CSS"]
        },
        {
            category: "Frameworks",
            items: ["Spring Boot", "Spring Security", "ReactJS"]
        },
        {
            category: "Technologies",
            items: ["AWS Cloud Services", "Docker", "Kubernetes", "PostgreSQL", "Cassandra", "Redis", "Kafka", "Git", "Maven"]
        }
    ];

    return (
        <section
            id="skills-section"
            className="bg-white py-24"
        >
            <div className="max-w-6xl mx-auto px-5 lg:px-20">
                {/* Section Header */}
                <div className={`mb-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                        Technical Skills
                    </h2>
                    <div className="w-24 h-1 bg-gray-900 mt-6"></div>
                </div>

                {/* Skills Content */}
                <div className="space-y-16">
                    {skills.map((skillGroup, index) => (
                        <div
                            key={skillGroup.category}
                            className={`transition-all duration-800 ${
                                isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-6'
                            }`}
                            style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                        >
                            {/* Category Title */}
                            <div className="flex items-baseline gap-8 mb-6">
                                <h3 className="text-xl font-semibold text-gray-900 min-w-[140px]">
                                    {skillGroup.category}
                                </h3>
                                <div className="flex-1 h-px bg-gray-200"></div>
                            </div>

                            {/* Skills List */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ml-0 md:ml-[180px]">
                                {skillGroup.items.map((skill, skillIndex) => (
                                    <div
                                        key={skill}
                                        className={`
                                            group px-4 py-3 border border-gray-200 bg-white
                                            hover:border-gray-900 hover:bg-gray-50 hover:bg-yellow-200
                                            transition-all duration-300 cursor-default
                                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                                        `}
                                        style={{
                                            transitionDelay: `${(index + 1) * 200 + skillIndex * 50}ms`
                                        }}
                                    >
                                        <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900 transition-colors">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SkillsSection;
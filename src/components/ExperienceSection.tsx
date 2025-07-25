"use client";

import { useEffect, useState } from "react";
import { MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
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

        const section = document.getElementById('experience-section');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const achievements = [
        "Customized and supported Amdocs CRM software and AMSS (Amdocs Self-Serve) platform for Bell Canada, delivering tailored solutions that ensured seamless implementation and successful production deployments, impacting millions of customers.",
        "Led the migration of Bell Canada's Amdocs CRM system to AWS Cloud, implementing cloud-native best practices that significantly reduced infrastructure costs and accelerated deployment velocity while improving system scalability and resilience.",
        "Collaborated with sales and pre-sales teams to deliver a PoC of AWS infrastructure orchestration platform, showcasing automated AWS infrastructure provisioning for software firewall deployments. Enabled out-of-the-box setup with preconfigured VPCs, subnets, EC2 instances, and security groups — reducing manual setup effort by 80% and strengthening the sales pitch.",
        "Contributed to development of distributed network orchestration platform using Java and Spring Boot with 30+ microservices, implementing Kafka messaging and Redis caching to enhance system reliability and automated fault tolerance across the architecture."
    ];

    return (
        <section
            id="experience-section"
            className="bg-gray-50 py-24"
        >
            <div className="max-w-6xl mx-auto px-5 lg:px-20">
                {/* Section Header */}
                <div className={`mb-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                        Experience
                    </h2>
                    <div className="w-24 h-1 bg-gray-900 mt-6"></div>
                </div>

                {/* Experience Card */}
                <div className={`
                    transition-all duration-1000 delay-200
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}>
                    <div className="bg-white border border-gray-200 p-8 lg:p-12 hover:border-gray-300 transition-colors duration-300">
                        {/* Company & Role Header */}
                        <div className="mb-8">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                        Software Developer Advanced
                                    </h3>
                                    <p className="text-2xl font-semibold text-gray-700">
                                        Amdocs
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2 text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span className="font-medium">July 2021 – Present</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} />
                                        <span className="font-medium">Pune, Maharashtra</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-gray-200"></div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-6">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className={`
                                        flex gap-4 transition-all duration-800
                                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                                    `}
                                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                                >
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed font-medium">
                                        {achievement}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Key Metrics */}
                        <div className={`
                            mt-12 pt-8 border-t border-gray-200
                            transition-all duration-800 delay-1000
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900 mb-1">4+</div>
                                    <div className="text-gray-600 font-medium">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900 mb-1">3+</div>
                                    <div className="text-gray-600 font-medium">Projects</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
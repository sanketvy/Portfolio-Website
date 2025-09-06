"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode;
    label: string;
}

interface ContactInfo {
    type: string;
    value: string;
    icon: React.ReactNode;
    href?: string;
}

const Footer: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const footer = document.getElementById('footer-section');
        if (footer) observer.observe(footer);

        return () => observer.disconnect();
    }, []);

    const socialLinks: SocialLink[] = [
        {
            name: 'github',
            url: 'https://github.com/sanketvy',
            icon: <Github size={24} />,
            label: 'GitHub Profile'
        },
        {
            name: 'linkedin',
            url: 'https://linkedin.com/in/sanketvy',
            icon: <Linkedin size={24} />,
            label: 'LinkedIn Profile'
        },
        {
            name: 'email',
            url: 'mailto:srvyawahare18@gmail.com',
            icon: <Mail size={24} />,
            label: 'Send Email'
        }
    ];

    const contactInfo: ContactInfo[] = [
        {
            type: 'Email',
            value: 'srvyawahare18@gmail.com',
            icon: <Mail size={18} />,
            href: 'mailto:srvyawahare18@gmail.com'
        },
        {
            type: 'Phone',
            value: '+91 95116 46296',
            icon: <Phone size={18} />,
            href: 'tel:+919522646296'
        },
        {
            type: 'Location',
            value: 'Pune, Maharashtra, IN',
            icon: <MapPin size={18} />
        }
    ];

    const handleSocialClick = (url: string): void => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleContactClick = (href?: string): void => {
        if (href) {
            window.location.href = href;
        }
    };

    return (
        <footer
            id="footer-section"
            className="bg-gray-900 text-white py-16"
        >
            <div className="max-w-6xl mx-auto px-5 lg:px-20">
                {/* Main Footer Content */}
                <div className={`
                    grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12
                    transition-all duration-1000
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}>
                    {/* Brand & Description */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold mb-4 tracking-tight">
                            Software Developer
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Passionate about building scalable enterprise solutions and
                            sharing knowledge through technical writing and open source contributions.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <button
                                    key={social.name}
                                    onClick={() => handleSocialClick(social.url)}
                                    onMouseEnter={() => setHoveredItem(social.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    className={`
                                        group relative w-12 h-12 border-2 border-gray-700 rounded-full
                                        flex items-center justify-center
                                        hover:border-white hover:bg-white hover:text-gray-900
                                        transition-all duration-300
                                        ${hoveredItem === social.name ? 'scale-110' : ''}
                                    `}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                    aria-label={social.label}
                                >
                                    {social.icon}

                                    {/* Tooltip */}
                                    <div className={`
                                        absolute -top-12 left-1/2 transform -translate-x-1/2
                                        px-3 py-1 bg-white text-gray-900 text-sm font-medium rounded
                                        transition-all duration-200 pointer-events-none
                                        ${hoveredItem === social.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                                    `}>
                                        {social.label}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xl font-semibold mb-6">Get In Touch</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {contactInfo.map((contact, index) => (
                                <div
                                    key={contact.type}
                                    className={`
                                        group flex items-start gap-4 p-4 border border-gray-700 rounded-lg
                                        hover:border-gray-500 hover:bg-gray-800
                                        transition-all duration-300 cursor-pointer
                                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                                    `}
                                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                                    onClick={() => handleContactClick(contact.href)}
                                >
                                    <div className="flex-shrink-0 mt-1 text-gray-400 group-hover:text-white transition-colors">
                                        {contact.icon}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-gray-400 mb-1">
                                            {contact.type}
                                        </div>
                                        <div className="text-white font-medium group-hover:text-gray-100 transition-colors">
                                            {contact.value}
                                        </div>
                                        {contact.href && (
                                            <ExternalLink size={14} className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={`
                    border-t border-gray-700 pt-8
                    transition-all duration-1000 delay-500
                    ${isVisible ? 'opacity-100' : 'opacity-0'}
                `}>
                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="text-gray-400 text-sm">
                            <p>© {new Date().getFullYear()} Sanket Vyawahare. All rights reserved.</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 text-sm">
                            <span className="text-gray-400">
                                Built with React, TypeScript & Tailwind CSS
                            </span>
                            <div className="flex gap-4">
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </button>
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    Terms of Service
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll to Top Button */}
                <div className={`
                    absolute right-8 -top-6
                    transition-all duration-1000 delay-700
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                        aria-label="Scroll to top"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m18 15-6-6-6 6"/>
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
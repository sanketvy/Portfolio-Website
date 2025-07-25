"use client";

import { useEffect, useState, useRef } from "react";
import { Calendar, ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    category: string;
    image: string;
}

const BlogSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('blog-section');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "Scaling Microservices Architecture in Production",
            excerpt: "Deep dive into best practices for managing 30+ microservices at enterprise scale, covering service mesh implementation and monitoring strategies.",
            date: "2024-01-15",
            readTime: "8 min read",
            tags: ["Microservices", "Architecture", "DevOps"],
            category: "Engineering",
            image: "https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg"
        },
        {
            id: 2,
            title: "AWS Cloud Migration: Lessons from Bell Canada",
            excerpt: "Real-world insights from migrating enterprise CRM systems to AWS, including cost optimization strategies and security considerations.",
            date: "2023-12-08",
            readTime: "12 min read",
            tags: ["AWS", "Cloud Migration", "Enterprise"],
            category: "Cloud",
            image: "https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg"
        },
        {
            id: 3,
            title: "Building Resilient Kafka Streaming Pipelines",
            excerpt: "Comprehensive guide to implementing fault-tolerant event streaming architectures with Apache Kafka and consumer group management.",
            date: "2023-11-22",
            readTime: "10 min read",
            tags: ["Kafka", "Streaming", "Data Engineering"],
            category: "Data",
            image: "https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg"
        },
        {
            id: 4,
            title: "Spring Boot Performance Optimization Techniques",
            excerpt: "Advanced performance tuning strategies for Spring Boot applications, covering JVM optimization and caching implementation patterns.",
            date: "2023-10-14",
            readTime: "15 min read",
            tags: ["Spring Boot", "Performance", "Java"],
            category: "Development",
            image: "https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg"
        },
        {
            id: 5,
            title: "Container Orchestration with Kubernetes",
            excerpt: "Production-ready Kubernetes deployment strategies, including auto-scaling, service mesh integration, and monitoring best practices.",
            date: "2023-09-28",
            readTime: "11 min read",
            tags: ["Kubernetes", "Docker", "DevOps"],
            category: "Infrastructure",
            image: "https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg"
        }
    ];

    const formatDate = (dateString: String) => {
        // @ts-ignore
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleCardClick = (postId: number): void => {
        console.log(`Navigate to blog post ${postId}`);
    };

    const scrollToCard = (direction: 'left' | 'right'): void => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const cardWidth = 400; // Card width + gap
        const maxIndex = blogPosts.length - 1;

        let newIndex;
        if (direction === 'left') {
            newIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
        } else {
            newIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
        }

        setCurrentIndex(newIndex);
        container.scrollTo({
            left: newIndex * cardWidth,
            behavior: 'smooth'
        });
    };

    const canScrollLeft: boolean = currentIndex > 0;
    const canScrollRight: boolean = currentIndex < blogPosts.length - 1;

    return (
        <section
            id="blog-section"
            className="bg-gray-50 py-24 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-5 lg:px-20">
                {/* Section Header */}
                <div className={`mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div>
                            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                                Technical Insights
                            </h2>
                            <div className="w-24 h-1 bg-gray-900 mt-6 mb-8"></div>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl">
                                Sharing knowledge and experiences from enterprise software development,
                                cloud architecture, and modern engineering practices.
                            </p>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => scrollToCard('left')}
                                className={`
                                    w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center
                                    transition-all duration-300 hover:border-gray-900
                                    ${canScrollLeft ? 'text-gray-900 hover:bg-gray-900 hover:text-white' : 'text-gray-300 cursor-not-allowed'}
                                `}
                                disabled={!canScrollLeft}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scrollToCard('right')}
                                className={`
                                    w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center
                                    transition-all duration-300 hover:border-gray-900
                                    ${canScrollRight ? 'text-gray-900 hover:bg-gray-900 hover:text-white' : 'text-gray-300 cursor-not-allowed'}
                                `}
                                disabled={!canScrollRight}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Horizontal Scrolling Container */}
                <div className={`
                    relative transition-all duration-1000 delay-200
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}>
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-8 overflow-x-auto scrollbar-hide pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {blogPosts.map((post: BlogPost, index: number) => (
                            <div
                                key={post.id}
                                className={`
                                    group flex-none w-96 bg-white border border-gray-200 overflow-hidden cursor-pointer
                                    hover:border-gray-300 hover:shadow-xl transition-all duration-500
                                    ${hoveredCard === post.id ? 'transform -translate-y-2' : ''}
                                `}
                                onClick={() => handleCardClick(post.id)}
                                onMouseEnter={() => setHoveredCard(post.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Card Image */}
                                <div className="relative overflow-hidden aspect-[16/9]">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className={`
                                            w-full h-full object-cover transition-transform duration-700
                                            ${hoveredCard === post.id ? 'scale-110' : 'scale-100'}
                                        `}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-semibold rounded-full">
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Hover Overlay Arrow */}
                                    <div className={`
                                        absolute inset-0 flex items-center justify-center
                                        transition-opacity duration-300
                                        ${hoveredCard === post.id ? 'opacity-100' : 'opacity-0'}
                                    `}>
                                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                                            <ArrowRight size={24} className="text-gray-900" />
                                        </div>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-gray-500 text-sm font-medium mb-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            <span>{formatDate(post.date)}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-gray-800 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {post.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 border border-gray-200 text-gray-600 text-xs font-medium hover:border-gray-300 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read More */}
                                    <div className="flex items-center gap-2 text-gray-700 font-semibold group-hover:gap-3 group-hover:text-gray-900 transition-all duration-300">
                                        <a href="/blog/microservice-discovery">Read Article</a>
                                        <ArrowRight size={16} className="transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicators */}
                <div className={`
                    flex justify-center gap-2 mt-8 transition-all duration-1000 delay-400
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}>
                    {blogPosts.map((_: BlogPost, index: number) => (
                        <button
                            key={index}
                            className={`
                                w-2 h-2 rounded-full transition-all duration-300
                                ${index === currentIndex ? 'bg-gray-900 w-8' : 'bg-gray-300 hover:bg-gray-400'}
                            `}
                            onClick={() => {
                                setCurrentIndex(index);
                                scrollContainerRef.current?.scrollTo({
                                    left: index * 400,
                                    behavior: 'smooth'
                                });
                            }}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BlogSection;
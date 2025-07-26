"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from "lucide-react";

const BlogPostDetail = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [readingProgress, setReadingProgress] = useState(0);

    useEffect(() => {
        setIsVisible(true);

        // Reading progress tracking
        const handleScroll = () => {
            const article = document.getElementById('article-content');
            if (article) {
                const rect = article.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const articleHeight = article.offsetHeight;
                const scrolled = Math.max(0, -rect.top);
                const progress = Math.min(100, (scrolled / (articleHeight - windowHeight)) * 100);
                setReadingProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBackClick = () => {
        window.history.back();
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: "Scaling Microservices Architecture in Production",
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
        }
    };

    const formatDate = (dateString: string) => {
        // @ts-ignore
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
                <div
                    className="h-full bg-gray-900 transition-all duration-150"
                    style={{ width: `${readingProgress}%` }}
                />
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-40 p-6 lg:p-8">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <button
                        onClick={handleBackClick}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        <span>Back to Blog</span>
                    </button>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleShare}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <Share2 size={18} />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                            <Bookmark size={18} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Article Content */}
            <article id="article-content" className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
                {/* Article Header */}
                <header className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {["Microservices", "Architecture", "DevOps"].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Scaling Microservices Architecture in Production
                    </h1>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Deep dive into best practices for managing 30+ microservices at enterprise scale,
                        covering service mesh implementation and monitoring strategies.
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm">
                        <div className="flex items-center gap-2">
                            <User size={16} />
                            <span>John Doe</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{formatDate("2024-01-15")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>8 min read</span>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-200 mt-8"></div>
                </header>

                {/* Featured Image */}
                <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <img
                        src="https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg"
                        alt="Microservices Architecture"
                        className="w-full h-64 lg:h-96 object-cover rounded-lg"
                    />
                    <p className="text-sm text-gray-500 mt-3 text-center">
                        Modern microservices architecture with containerization and orchestration
                    </p>
                </div>

                {/* Article Body */}
                <div className={`prose prose-lg max-w-none transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Introduction</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        When we started our journey with microservices at scale, we had about 5 services running in production.
                        Fast forward two years, and we're now managing over 30 microservices across multiple environments,
                        serving millions of requests daily. This transformation didn't happen overnight, and it certainly
                        wasn't without its challenges.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        In this article, I'll share the lessons we learned, the architectural decisions we made, and the
                        tools that helped us scale our microservices architecture successfully. Whether you're just starting
                        your microservices journey or looking to optimize your existing setup, this guide will provide
                        practical insights you can apply immediately.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">The Challenge of Scale</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Scaling microservices isn't just about handling more traffic—it's about managing complexity.
                        As the number of services grows, so does the complexity of service-to-service communication,
                        data consistency, monitoring, and deployment orchestration.
                    </p>

                    <blockquote className="border-l-4 border-gray-900 pl-6 my-8 italic text-gray-600">
                        "The real challenge in microservices isn't building them—it's operating them at scale while
                        maintaining reliability and performance."
                    </blockquote>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Key Scaling Challenges</h3>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-gray-700">Service discovery and load balancing across dynamic environments</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-gray-700">Distributed tracing and monitoring across service boundaries</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-gray-700">Configuration management and secret distribution</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-gray-700">Database per service pattern and data consistency</span>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Service Mesh Implementation</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        One of the most impactful decisions we made was implementing a service mesh using Istio.
                        This provided us with a dedicated infrastructure layer for service-to-service communication,
                        handling concerns like load balancing, service discovery, encryption, and observability.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-8">
                        <h4 className="font-semibold text-gray-900 mb-3">Service Mesh Benefits</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h5 className="font-medium text-gray-900 mb-2">Traffic Management</h5>
                                <p className="text-sm text-gray-600">Intelligent routing, load balancing, and circuit breaking</p>
                            </div>
                            <div>
                                <h5 className="font-medium text-gray-900 mb-2">Security</h5>
                                <p className="text-sm text-gray-600">Automatic mTLS and policy enforcement</p>
                            </div>
                            <div>
                                <h5 className="font-medium text-gray-900 mb-2">Observability</h5>
                                <p className="text-sm text-gray-600">Distributed tracing and metrics collection</p>
                            </div>
                            <div>
                                <h5 className="font-medium text-gray-900 mb-2">Resilience</h5>
                                <p className="text-sm text-gray-600">Retries, timeouts, and failover strategies</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Monitoring and Observability</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        With 30+ services in production, traditional monitoring approaches quickly become inadequate.
                        We implemented the three pillars of observability: metrics, logs, and traces.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Our Observability Stack</h3>
                    <div className="space-y-4 mb-8">
                        <div className="border border-gray-200 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-2">Metrics: Prometheus + Grafana</h4>
                            <p className="text-gray-600 text-sm">
                                Real-time metrics collection with custom dashboards for each service and business KPIs
                            </p>
                        </div>
                        <div className="border border-gray-200 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-2">Logs: ELK Stack</h4>
                            <p className="text-gray-600 text-sm">
                                Centralized logging with structured JSON logs and correlation IDs for distributed tracing
                            </p>
                        </div>
                        <div className="border border-gray-200 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-2">Traces: Jaeger</h4>
                            <p className="text-gray-600 text-sm">
                                End-to-end request tracing across service boundaries with performance analysis
                            </p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Deployment Strategies</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Managing deployments across 30+ services requires sophisticated automation and rollback strategies.
                        We use GitOps with ArgoCD for continuous deployment and blue-green deployments for zero-downtime updates.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        Our deployment pipeline includes automated testing, security scanning, and gradual rollouts
                        with automatic rollback on failure detection. This approach has reduced our deployment time
                        from hours to minutes while improving reliability.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Key Takeaways</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Scaling microservices successfully requires more than just adding more services. It demands
                        a holistic approach to architecture, tooling, and operational practices.
                    </p>

                    <div className="bg-gray-900 text-white p-6 rounded-lg my-8">
                        <h4 className="font-semibold mb-4">Essential Success Factors</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• Invest in observability from day one</li>
                            <li>• Implement service mesh for cross-cutting concerns</li>
                            <li>• Automate everything: testing, deployment, and monitoring</li>
                            <li>• Design for failure with circuit breakers and retries</li>
                            <li>• Maintain service ownership and clear boundaries</li>
                        </ul>
                    </div>
                </div>


                {/* Author Bio */}
                <div className={`mt-12 pt-8 border-t border-gray-200 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-1">John Doe</h4>
                            <p className="text-gray-600 text-sm mb-3">
                                Senior Software Engineer specializing in distributed systems and cloud architecture.
                                Currently building scalable platforms at Enterprise Corp.
                            </p>
                            <div className="flex gap-4 text-sm text-gray-500">
                                <span>Published 15 articles</span>
                                <span>•</span>
                                <span>5 years experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPostDetail;
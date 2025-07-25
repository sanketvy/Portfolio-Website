"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Cloud, Server, Database, Shield, Zap, Globe, Github, ExternalLink, Play } from "lucide-react";

const ProjectAetherEdge = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleBackClick = () => {
        window.history.back();
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="p-6 lg:p-8 border-b border-gray-100">
                <button
                    onClick={handleBackClick}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft size={18} />
                    <span>Back to Projects</span>
                </button>
            </nav>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
                {/* Header */}
                <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="flex items-center gap-3 mb-6">
                        <Cloud size={32} className="text-gray-900" />
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                            Production Ready
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        AetherEdge
                    </h1>

                    <p className="text-xl text-gray-600 mb-8">
                        Cloud Infrastructure Orchestration Platform
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Enterprise-grade AWS infrastructure automation platform designed to streamline cloud operations,
                        optimize resource utilization, and accelerate deployment cycles by 80%. Built with modern DevOps
                        practices and cloud-native principles for maximum scalability and reliability.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://github.com/username/aetheredge"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            <Github size={18} />
                            View Code
                        </a>

                        <a
                            href="https://aetheredge-demo.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
                        >
                            <ExternalLink size={18} />
                            Live Demo
                        </a>

                        <button
                            onClick={() => document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth' })}
                            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Play size={18} />
                            Watch Demo
                        </button>
                    </div>
                </div>

                {/* Architecture Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Architecture Overview</h2>

                    <p className="text-lg text-gray-700 mb-12 leading-relaxed">
                        AetherEdge follows a microservices architecture pattern deployed on AWS infrastructure.
                        The system is designed for high availability, automatic scaling, and cost optimization
                        through intelligent resource management.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <div className="border border-gray-200 p-6 rounded-lg">
                            <Globe size={24} className="text-gray-900 mb-3" />
                            <h3 className="font-semibold text-gray-900 mb-2">Load Balancing</h3>
                            <p className="text-gray-600 text-sm">AWS Application Load Balancer with SSL termination and health checks</p>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-lg">
                            <Server size={24} className="text-gray-900 mb-3" />
                            <h3 className="font-semibold text-gray-900 mb-2">Container Orchestration</h3>
                            <p className="text-gray-600 text-sm">Kubernetes cluster with auto-scaling and rolling deployments</p>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-lg">
                            <Database size={24} className="text-gray-900 mb-3" />
                            <h3 className="font-semibold text-gray-900 mb-2">Data Layer</h3>
                            <p className="text-gray-600 text-sm">PostgreSQL with read replicas and Redis for caching</p>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-lg">
                            <Shield size={24} className="text-gray-900 mb-3" />
                            <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
                            <p className="text-gray-600 text-sm">WAF protection, IAM roles, and VPC network isolation</p>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-lg">
                            <Zap size={24} className="text-gray-900 mb-3" />
                            <h3 className="font-semibold text-gray-900 mb-2">Monitoring</h3>
                            <p className="text-gray-600 text-sm">Real-time monitoring with CloudWatch and Prometheus</p>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-lg">
                            <Cloud size={24} className="text-gray-900 mb-3" />
                            <h3 className="font-semibold text-gray-900 mb-2">Cloud Native</h3>
                            <p className="text-gray-600 text-sm">Fully containerized with infrastructure as code</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-4">Request Flow</h4>
                        <div className="flex flex-col space-y-2 text-gray-700">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                                <span>Client requests hit the AWS Application Load Balancer</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                                <span>Traffic is routed through API Gateway for rate limiting and authentication</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                                <span>Kubernetes service mesh distributes requests to Spring Boot microservices</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                                <span>Services query PostgreSQL or Redis based on data requirements</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Technology Stack</h2>

                    <p className="text-lg text-gray-700 mb-12 leading-relaxed">
                        Built using enterprise-grade technologies chosen for their reliability, scalability,
                        and strong ecosystem support. Every technology decision was made to optimize for
                        performance and maintainability.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud & Infrastructure</h3>
                            <div className="flex flex-wrap gap-2">
                                {["AWS EC2", "AWS RDS", "AWS S3", "Terraform", "Docker", "Kubernetes"].map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Java 17", "Spring Boot", "Spring Security", "Spring Data JPA", "Maven"].map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data & Caching</h3>
                            <div className="flex flex-wrap gap-2">
                                {["PostgreSQL", "Redis", "AWS ElastiCache", "H2 Testing"].map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">DevOps & Monitoring</h3>
                            <div className="flex flex-wrap gap-2">
                                {["GitHub Actions", "Prometheus", "Grafana", "CloudWatch", "SonarQube"].map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Philosophy</h2>

                    <p className="text-lg text-gray-700 mb-12 leading-relaxed">
                        AetherEdge was designed with four core principles that guide every architectural
                        decision and implementation detail. These principles ensure the platform remains
                        scalable, secure, and cost-effective.
                    </p>

                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Scalability First</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Every component is built to scale horizontally. Kubernetes orchestrates container
                                deployment across multiple availability zones, while auto-scaling groups adjust
                                resources based on real-time demand. This architecture has successfully handled
                                10x traffic spikes without manual intervention.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Microservices are designed to be stateless and independently deployable,
                                allowing teams to scale specific services based on their individual load patterns.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Security by Design</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Security isn't an afterthought—it's built into every layer. All communication
                                uses TLS encryption, IAM roles follow the principle of least privilege, and
                                network traffic is isolated using VPC subnets and security groups.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Regular security scanning is automated in the CI/CD pipeline using tools like
                                Trivy for container scanning and SonarQube for code quality and security analysis.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cost Optimization</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Intelligent resource management reduces operational costs by 60%. The platform
                                uses spot instances for non-critical workloads, implements aggressive caching
                                strategies, and automatically scales down resources during off-peak hours.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Detailed cost monitoring and alerting ensure teams stay within budget while
                                maintaining optimal performance.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">DevOps Integration</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Fully automated CI/CD pipelines enable deployments that are 80% faster than
                                traditional methods. Infrastructure as code using Terraform ensures consistent
                                environments across development, staging, and production.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Comprehensive monitoring and alerting provide real-time insights into system
                                health, enabling proactive issue resolution and maintaining 99.9% uptime.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Results */}
                <section className="border-t border-gray-200 pt-16 mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Results & Impact</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-gray-900 mb-2">80%</div>
                            <div className="text-gray-600">Faster Deployments</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
                            <div className="text-gray-600">System Uptime</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-gray-900 mb-2">60%</div>
                            <div className="text-gray-600">Cost Reduction</div>
                        </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        AetherEdge has transformed how our organization approaches cloud infrastructure.
                        The automated deployment pipeline has reduced deployment time from hours to minutes,
                        while the intelligent scaling mechanisms have significantly reduced operational costs
                        without compromising performance or reliability.
                    </p>
                </section>

                {/* Demo Video Section */}
                <section id="demo-video" className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Platform Demo</h2>

                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        Watch how AetherEdge simplifies cloud infrastructure management with its intuitive
                        interface and powerful automation capabilities. This demo showcases the deployment
                        pipeline, monitoring dashboard, and real-time scaling features.
                    </p>

                    <div className="bg-gray-100 rounded-lg p-8 border-2 border-dashed border-gray-300">
                        <div className="flex flex-col items-center justify-center py-16">
                            <Play size={64} className="text-gray-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Demo Video</h3>
                            <p className="text-gray-600 text-center mb-6">
                                5-minute walkthrough of AetherEdge's key features and capabilities
                            </p>
                            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                <Play size={18} />
                                Play Demo Video
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProjectAetherEdge;
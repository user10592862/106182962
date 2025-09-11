import React from 'react';
import { ChevronRight, Shield, Brain, Cloud, Users, Database, Lock, Code2, Network, Server, Rocket, Zap, Globe, Cpu, BarChart3 } from 'lucide-react';

const SolutionsPage = () => {
  const solutions = [
    {
      name: "Fang VPN",
      icon: Shield,
      description: "Advanced VPN solutions with high level encryption, zero-log policy, and global server network for the best privacy and security. It protects your online activity across all devices and networks to ensure a safe and uninterrupted access to your digital resources.",
      features: [
        "Military-grade AES-256 encryption",
        "Zero-log privacy policy",
        "Global server network (50+ countries)",
        "Kill switch protection",
        "Multi-device support",
        "Unlimited bandwidth"
      ],
      stats: "Protected Users: 44K+"
    },
    {
      name: "Fang AI",
      icon: Brain,
      description: "Advanced artificial intelligence platform offering machine learning, natural language processing, and predictive analytics solutions. It helps organizations automate processes, gain actionable insights, and make smarter, data-driven decisions in real time.",
      features: [
        "Custom AI model development",
        "Natural language processing",
        "Predictive analytics engine",
        "Computer vision capabilities",
        "Real-time data processing",
        "API integration suite"
      ],
      stats: "AI Models Deployed: 2K+"
    },
    {
      name: "Fang Cloud",
      icon: Cloud,
      description: "Comprehensive cloud infrastructure platform with scalable computing, storage, and networking solutions. It enables organizations to run applications seamlessly, manage data efficiently, and scale resources as needed with reliable and secure cloud services.",
      features: [
        "Scalable cloud computing",
        "Secure cloud storage",
        "Global CDN network",
        "Auto-scaling capabilities",
        "Disaster recovery",
        "24/7 monitoring"
      ],
      stats: "Service Uptime: 99.99%"
    },
    {
      name: "Fang Cybersecurity",
      icon: Lock,
      description: "Complete cybersecurity suite offering threat detection, vulnerability assessment, and real-time protection for digital assets. It safeguards your systems from potential risks, ensures compliance, and strengthens overall security posture.",
      features: [
        "Real-time threat detection",
        "Vulnerability assessment",
        "Incident response",
        "Security auditing",
        "Compliance management",
        "Penetration testing"
      ],
      stats: "Threats Blocked: 700K+"
    },
    {
      name: "Fang Data Analytics",
      icon: BarChart3,
      description: "Powerful data analytics platform that transforms raw data into actionable insights with advanced visualization and reporting tools. It empowers organizations to monitor trends, optimize performance, and make informed strategic decisions.",
      features: [
        "Real-time analytics",
        "Custom dashboards",
        "Predictive modeling",
        "Data visualization",
        "ETL pipelines",
        "Business intelligence"
      ],
      stats: "Data Processed: 50GB+"
    },
    {
      name: "Fang Blockchain",
      icon: Database,
      description: "Enterprise blockchain solutions offering secure transactions, smart contracts, and decentralized applications. It provides a reliable platform for digital transactions, tokenization, and building innovative decentralized solutions.",
      features: [
        "Smart contract development",
        "Tokenization services",
        "DeFi solutions",
        "NFT marketplace",
        "Cross-chain integration",
        "Consensus algorithms"
      ],
      stats: "Transactions Processed: 200K+"
    },
    {
      name: "Fang DevOps",
      icon: Code2,
      description: "Complete DevOps automation platform streamlining development, testing, and deployment processes. It accelerates software delivery, improves collaboration, and ensures reliable, scalable, and efficient operations.",
      features: [
        "CI/CD pipelines",
        "Container orchestration",
        "Infrastructure as code",
        "Microservices architecture",
        "Performance monitoring",
        "Automated testing"
      ],
      stats: "Deployments: 100K+"
    }
  ];

  const handleScheduleConsultation = () => {
    window.open('https://calendly.com/jasonfang102/fang-enterprises-solutions-consultation', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 pt-8 md:pt-20"> {/* Reduced top padding on mobile */}
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"> {/* Reduced padding on mobile */}
          <div className="text-center mb-8 md:mb-12"> {/* Reduced margin on mobile */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">Our Solutions</h1>
            <p className="hidden md:block text-xl text-gray-300 max-w-3xl mx-auto"> {/* Hide description on mobile */}
              Comprehensive technology solutions designed to optimize your operations
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid gap-6 md:gap-8"> {/* Reduced gap on mobile */}
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="p-6 md:p-8"> {/* Reduced padding on mobile */}
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 md:gap-8"> {/* Reduced gap on mobile */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center"> {/* Smaller icon on mobile */}
                          <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-gray-900" /> {/* Smaller icon on mobile */}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6"> {/* Reduced margin on mobile */}
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-0">{solution.name}</h3> {/* Smaller text on mobile */}
                          <div className="hidden md:block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium"> {/* Hide stats on mobile */}
                            {solution.stats}
                          </div>
                        </div>
                        <p className="hidden md:block text-gray-300 text-lg mb-6 md:mb-8 leading-relaxed">{solution.description}</p> {/* Hide description on mobile */}
                        <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8"> {/* Reduced gap on mobile */}
                          {solution.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-gray-300">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                              <span className="text-gray-300 text-sm md:text-base">{feature}</span> {/* Smaller text on mobile */}
                            </div>
                          ))}
                        </div>
                        <button 
                          onClick={handleScheduleConsultation}
                          className="btn-primary inline-flex items-center text-sm md:text-base" /* Smaller text on mobile */
                        >
                          Schedule Consultation
                          <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5" /> {/* Smaller icon on mobile */}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
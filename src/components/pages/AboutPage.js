import React, { useEffect, useState } from 'react';
import { 
  MapPin, Cpu, Brain, Shield, Cloud, Database, Code2,
  Network, Server, Lock, Key, Atom, Microscope, Rocket
} from 'lucide-react';

const AboutPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedTechLocation, setSelectedTechLocation] = useState(null);

  useEffect(() => {
    // Add intersection observers for animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Research locations across USA (10 locations)
  const researchLocations = [
    { id: 1, name: "San Francisco", state: "CA", focus: "AI Research", x: "12%", y: "42%", researchers: "150+", technologies: ["Machine Learning", "Neural Networks", "Computer Vision", "Natural Language Processing", "Predictive Analytics"] },
    { id: 2, name: "Boston", state: "MA", focus: "Quantum Computing", x: "85%", y: "25%", researchers: "85+", technologies: ["Quantum Algorithms", "Qubit Design", "Quantum Encryption", "Quantum Simulation", "Quantum Error Correction"] },
    { id: 3, name: "Austin", state: "TX", focus: "Cybersecurity", x: "45%", y: "65%", researchers: "120+", technologies: ["Threat Detection", "Network Security", "Zero Trust Architecture", "Incident Response", "Vulnerability Assessment"] },
    { id: 4, name: "Seattle", state: "WA", focus: "Cloud Infrastructure", x: "15%", y: "18%", researchers: "95+", technologies: ["Distributed Systems", "Edge Computing", "Cloud Security", "Containerization", "Serverless Architecture"] },
    { id: 5, name: "Research Triangle", state: "NC", focus: "Data Science", x: "72%", y: "48%", researchers: "65+", technologies: ["Big Data Analytics", "Predictive Modeling", "Data Visualization", "Statistical Analysis", "Data Mining"] },
    { id: 6, name: "Boulder", state: "CO", focus: "Quantum Encryption", x: "35%", y: "35%", researchers: "45+", technologies: ["Post-Quantum Crypto", "Quantum Key Distribution", "Encryption Protocols", "Cryptographic Analysis", "Key Management"] },
    { id: 7, name: "Atlanta", state: "GA", focus: "Network Security", x: "68%", y: "60%", researchers: "75+", technologies: ["Network Defense", "Intrusion Detection", "Firewall Management", "Network Monitoring", "Traffic Analysis"] },
    { id: 8, name: "Chicago", state: "IL", focus: "IoT Security", x: "58%", y: "32%", researchers: "60+", technologies: ["IoT Protocols", "Device Security", "Edge AI", "Sensor Networks", "IoT Authentication"] },
    { id: 9, name: "Phoenix", state: "AZ", focus: "Hardware Security", x: "25%", y: "58%", researchers: "40+", technologies: ["Hardware Encryption", "Secure Elements", "Hardware Trojans", "Side-channel Attacks", "Trusted Execution"] },
    { id: 10, name: "Salt Lake City", state: "UT", focus: "Cryptography", x: "30%", y: "30%", researchers: "55+", technologies: ["Cryptographic Protocols", "Homomorphic Encryption", "Blockchain Security", "Digital Signatures", "Cryptanalysis"] }
  ];

  const techDistributionPoints = [
    { id: 1, x: "43%", y: "77%", name: "Neural AI Platform", technologies: ["AI Research", "Machine Learning", "Deep Neural Networks", "Predictive Analytics", "Cognitive Computing"] },
    { id: 2, x: "29%", y: "60%", name: "Vision Image Processing", technologies: ["Neural Networks", "Computer Vision", "Image Recognition", "Pattern Analysis", "Visual Intelligence"] },
    { id: 3, x: "71%", y: "19%", name: "Plowest Cloud Infrastructure", technologies: ["Cloud Computing", "Edge AI", "Distributed Processing", "Real-time Analytics", "IoT Integration"] },
    { id: 4, x: "92%", y: "15%", name: "Data Analytics Suite", technologies: ["Data Analytics", "Predictive Modeling", "Statistical Analysis", "Business Intelligence", "Data Mining"] },
    { id: 5, x: "18%", y: "30%", name: "Crypto Encryption System", technologies: ["Cryptography", "Encryption", "Data Protection", "Secure Communications", "Privacy Engineering"] },
    { id: 6, x: "59%", y: "48%", name: "Quantum Computing Core", technologies: ["Quantum Computing", "Qubit Design", "Quantum Algorithms", "Quantum Simulation", "Quantum Optimization"] },
    { id: 7, x: "7%", y: "88%", name: "Net Guard Security Framework", technologies: ["Network Security", "Threat Detection", "Intrusion Prevention", "Firewall Management", "Traffic Analysis"] },
    { id: 8, x: "5%", y: "44%", name: "Sentinel Device Protection", technologies: ["IoT Security", "Device Protection", "Sensor Security", "Edge Protection", "IoT Authentication"] },
    { id: 9, x: "7%", y: "18%", name: "Hardware Security Module", technologies: ["Hardware Security", "Secure Elements", "Trusted Execution", "Hardware Encryption", "Side-channel Protection"] },
    { id: 10, x: "95%", y: "76%", name: "Block Chain Security Platform", technologies: ["Blockchain", "Smart Contracts", "Distributed Ledgers", "Tokenization", "Consensus Algorithms"] },
    { id: 11, x: "77%", y: "14%", name: "Privacy Guard Data Protection", technologies: ["Privacy Tech", "Data Anonymization", "Differential Privacy", "Consent Management", "Compliance Framework"] },
    { id: 12, x: "42%", y: "49%", name: "Auto Pilot Autonomous Systems", technologies: ["Autonomous Systems", "Robotics", "Machine Vision", "Motion Planning", "Sensor Fusion"] },
    { id: 13, x: "52%", y: "50%", name: "Medical Healthcare Intelligence", technologies: ["Healthcare AI", "Medical Imaging", "Drug Discovery", "Health Data Analytics", "Diagnostic Algorithms"] },
    { id: 14, x: "39%", y: "34%", name: "Bio Secure Identity Platform", technologies: ["Biometric Security", "Facial Recognition", "Behavioral Analytics", "Multi-factor Auth", "Identity Verification"] },
    { id: 15, x: "25%", y: "88%", name: "Naval Shield Maritime Security", technologies: ["Maritime Security", "Naval Systems", "Port Security", "Marine Communications", "Coastal Surveillance"] },
    { id: 16, x: "41%", y: "10%", name: "Quantum Forge Algorithm Suite", technologies: ["Quantum Algorithms", "Quantum Simulation", "Quantum Optimization", "Quantum Machine Learning", "Quantum Error Correction"] },
    { id: 17, x: "49%", y: "74%", name: "Cloud Forge Infrastructure", technologies: ["Serverless Architecture", "Containerization", "Microservices", "Cloud Orchestration", "DevOps Automation"] },
    { id: 18, x: "86%", y: "78%", name: "Zero Trust Security Framework", technologies: ["Zero Trust Architecture", "Incident Response", "Vulnerability Assessment", "Security Auditing", "Compliance Monitoring"] },
    { id: 19, x: "65%", y: "64%", name: "Cyber Shield Defense System", technologies: ["Vulnerability Assessment", "Network Defense", "Threat Intelligence", "Security Operations", "Risk Management"] },
    { id: 20, x: "72%", y: "86%", name: "Sensor Net Platform", technologies: ["Sensor Networks", "IoT Authentication", "Device Management", "Data Collection", "Edge Processing"] },
    { id: 21, x: "14%", y: "10%", name: "Hardware Sentinel Protection", technologies: ["Hardware Trojans", "Side-channel Protection", "Hardware Verification", "Secure Boot", "Firmware Protection"] },
    { id: 22, x: "81%", y: "19%", name: "Crypto Core Encryption Engine", technologies: ["Homomorphic Encryption", "Digital Signatures", "Post-Quantum Crypto", "Key Management", "Cryptographic Protocols"] },
    { id: 23, x: "85%", y: "27%", name: "Token Forge Blockchain Platform", technologies: ["Distributed Ledgers", "Tokenization", "Smart Contracts", "DeFi Protocols", "NFT Infrastructure"] },
    { id: 24, x: "19%", y: "58%", name: "Privacy First Data Framework", technologies: ["Differential Privacy", "Consent Management", "Data Governance", "Privacy Compliance", "Data Ethics"] },
    { id: 25, x: "15%", y: "68%", name: "Learn Core AI Training Platform", technologies: ["Reinforcement Learning", "Transfer Learning", "Neural Architecture", "Model Training", "AI Optimization"] },
    { id: 26, x: "24%", y: "65%", name: "Port Guard Maritime Systems", technologies: ["Port Security", "Marine Communications", "Naval Defense", "Coastal Monitoring", "Maritime Logistics"] },
    { id: 27, x: "22%", y: "25%", name: "Econ Chain Crypto Economics", technologies: ["Crypto Economics", "Consensus Algorithms", "Token Economics", "DeFi Protocols", "Blockchain Governance"] },
    { id: 28, x: "76%", y: "45%", name: "Health Forge Medical Research", technologies: ["Drug Discovery", "Health Data Analytics", "Genomic Analysis", "Medical Imaging", "Clinical Trial Optimization"] },
    { id: 29, x: "12%", y: "48%", name: "Identity Forge Authentication", technologies: ["Behavioral Analytics", "Multi-factor Auth", "Biometric Verification", "Identity Management", "Access Control"] },
    { id: 30, x: "79%", y: "38%", name: "Quantum Communication System", technologies: ["Quantum Communication", "Quantum Metrology", "Quantum Networking", "Quantum Cryptography", "Quantum Sensing"] }
  ];

  // Technology categories with icons
  const techCategories = [
    { icon: Brain, name: "AI/ML", color: "bg-blue-500" },
    { icon: Shield, name: "Security", color: "bg-green-500" },
    { icon: Cloud, name: "Cloud", color: "bg-purple-500" },
    { icon: Database, name: "Data", color: "bg-cyan-500" },
    { icon: Code2, name: "Development", color: "bg-orange-500" },
    { icon: Network, name: "Networking", color: "bg-pink-500" },
    { icon: Server, name: "Infrastructure", color: "bg-yellow-500" },
    { icon: Lock, name: "Encryption", color: "bg-red-500" },
    { icon: Atom, name: "Quantum", color: "bg-indigo-500" },
    { icon: Microscope, name: "Research", color: "bg-teal-500" }
  ];

  return (
    <div className="min-h-screen">
      {/* Background matching Home page */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

<div className="relative z-10 pt-8 md:pt-20"> {/* Reduced top padding on mobile */}
  {/* Hero Section */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"> {/* Reduced padding on mobile */}
    <div className="text-center mb-8 md:mb-12"> {/* Reduced margin on mobile */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Research Network</h1>
      <p className="hidden lg:block text-xl text-gray-400 max-w-3xl mx-auto">
        Revolutionizing the future of technology through distributed research and innovation
      </p>
    </div>

          {/* Research Network Map */}
          <div className="mb-20">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 mb-8">
              <div className="h-96 relative mb-6">
                {/* Enhanced USA Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg">
                  {/* Unified Map Background */}
                  <div className="absolute inset-4 bg-blue-500/5 border border-blue-400/10 rounded-xl"></div>

                  {/* Research Location Pins - Only 10 locations */}
                  {researchLocations.map((location) => (
                    <div
                      key={location.id}
                      className="absolute cursor-pointer group"
                      style={{ left: location.x, top: location.y }}
                      onClick={() => setSelectedLocation(selectedLocation === location.id ? null : location.id)}
                    >
                      <div className="w-4 h-4 bg-cyan-400 rounded-full border-2 border-white animate-pulse group-hover:scale-150 transition-transform duration-300">
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-cyan-400"></div>
                      </div>

                      {/* Location Tooltip */}
                      {selectedLocation === location.id && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-72 bg-gray-900/95 backdrop-blur-sm rounded-xl border border-cyan-400/30 p-4 z-50">
                          <h4 className="text-white font-semibold text-sm mb-2">{location.name}, {location.state}</h4>
                          <p className="text-cyan-400 text-xs mb-3">{location.focus}</p>
                          <div className="text-xs text-gray-300 mb-2">{location.researchers} researchers</div>
                          <div className="grid grid-cols-1 gap-1">
                            {location.technologies.map((tech, index) => (
                              <span key={index} className="text-xs bg-gray-800/50 text-cyan-300 px-2 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Animated Connection Lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    {researchLocations.slice(0, 10).map((location, index) => (
                      <div
                        key={index}
                        className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-pulse"
                        style={{
                          left: location.x,
                          top: location.y,
                          animation: `moveLine 4s ease-in-out infinite ${index * 0.2}s`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Location Grid - Single column on mobile, 5 columns on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
                {researchLocations.map((location) => (
                  <div key={location.id} className="text-center p-3 bg-gray-700/30 rounded-lg border border-gray-600/30 hover:border-cyan-400/50 transition-colors">
                    <MapPin className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                    <div className="text-white text-sm font-medium">{location.name}</div>
                    <div className="text-gray-400 text-xs">{location.state}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Distribution Map */}
          <div>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Technology Distribution</h1>
              <p className="hidden lg:block text-xl text-gray-400 max-w-3xl mx-auto">
                Advanced technologies developed across our research network
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
              <div className="h-96 relative mb-6">
                {/* Technology Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg">
                  {/* Unified Map Background */}
                  <div className="absolute inset-4 bg-purple-500/5 border border-purple-400/10 rounded-xl"></div>

                  {/* Technology Distribution Points - 30 points */}
                  {techDistributionPoints.map((point) => (
                    <div
                      key={point.id}
                      className="absolute cursor-pointer group transition-transform duration-300"
                      style={{ 
                        left: point.x, 
                        top: point.y,
                        transform: 'translate(-50%, -50%)',
                        zIndex: selectedTechLocation === point.id ? 50 : 10 // bring selected to front
                      }}
                      onClick={() => setSelectedTechLocation(selectedTechLocation === point.id ? null : point.id)}
                    >
                      <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-white/80 group-hover:scale-150 transition-transform duration-300">
                        {/* No number inside */}
                      </div>

                      {/* Technology Tooltip */}
                      {selectedTechLocation === point.id && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-80 bg-gray-900/95 backdrop-blur-sm rounded-xl border border-purple-400/30 p-4 z-50">
                          <h4 className="text-white font-semibold text-sm mb-1">{point.name}</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {point.technologies.map((tech, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                <span className="text-gray-300 text-xs">{tech}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Legend - Single column on mobile, 5 columns on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {techCategories.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg border border-gray-600/30 transition-colors duration-300 hover:border-cyan-400/50 cursor-default"
                    >
                      <div className={`w-3 h-3 ${tech.color} rounded-full`}></div>
                      <Icon className="w-4 h-4 text-gray-300" />
                      <span className="text-gray-300 text-sm">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes moveLine {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.7; }
          100% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, MapPin, Clock, BookOpen, Code2,
  Microscope, Shield, Database, ExternalLink, X
} from 'lucide-react';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  const jobCategories = [
    { id: 'All', name: 'All Positions', icon: BookOpen, count: 28 },
    { id: 'Engineering', name: 'Engineering', icon: Code2, count: 13 },
    { id: 'Research', name: 'Research', icon: Microscope, count: 8 },
    { id: 'Security', name: 'Security', icon: Shield, count: 4 },
    { id: 'Data', name: 'Data Science', icon: Database, count: 3 },
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      salary: "$150,000 - $200,000",
      description: "We're seeking a Senior AI Engineer to join our cutting-edge AI research team. You'll develop advanced machine learning models and implement them in production environments.",
      requirements: [
        "5+ years of experience in machine learning engineering",
        "Strong Python and TensorFlow/PyTorch skills",
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "MS or PhD in Computer Science or related field"
      ],
      responsibilities: [
        "Design and implement machine learning models",
        "Optimize AI algorithms for performance and scalability",
        "Collaborate with research scientists and product teams",
        "Mentor junior engineers and contribute to technical direction"
      ]
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      department: "Security",
      type: "Full-time",
      location: "Remote",
      salary: "$130,000 - $170,000",
      description: "We're looking for a Cybersecurity Specialist to protect our systems from emerging threats. You'll implement security measures and respond to security incidents.",
      requirements: [
        "3+ years of experience in cybersecurity",
        "Knowledge of network security and encryption protocols",
        "Experience with security tools and frameworks",
        "Relevant certifications (CISSP, CISM, or similar)"
      ],
      responsibilities: [
        "Monitor systems for security breaches",
        "Implement security measures and controls",
        "Conduct security assessments and audits",
        "Develop incident response plans"
      ]
    },
    {
      id: 3,
      title: "Data Scientist",
      department: "Data",
      type: "Full-time",
      location: "Remote",
      salary: "$120,000 - $160,000",
      description: "We're hiring a Data Scientist to analyze complex datasets and build predictive models. You'll drive business decisions through data-driven insights and machine learning.",
      requirements: [
        "3+ years of experience in data science",
        "Proficiency in Python, R, and SQL",
        "Experience with statistical analysis and machine learning",
        "Strong data visualization skills"
      ],
      responsibilities: [
        "Develop and implement machine learning models",
        "Analyze large datasets to extract insights",
        "Create data visualizations and reports",
        "Collaborate with engineering and product teams"
      ]
    },
    {
      id: 4,
      title: "Cloud Infrastructure Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      salary: "$140,000 - $190,000",
      description: "We're seeking a Cloud Infrastructure Engineer to design and maintain our cloud infrastructure. You'll ensure scalability, reliability, and security across our systems.",
      requirements: [
        "4+ years of cloud infrastructure experience",
        "Expertise in AWS, Azure, or GCP",
        "Knowledge of containerization and orchestration tools",
        "Experience with infrastructure as code"
      ],
      responsibilities: [
        "Design and implement cloud infrastructure",
        "Automate deployment and scaling processes",
        "Monitor system performance and optimize costs",
        "Ensure security and compliance standards"
      ]
    },
    {
      id: 5,
      title: "Quantum Computing Researcher",
      department: "Research",
      type: "Full-time",
      location: "Remote",
      salary: "$160,000 - $220,000",
      description: "We're looking for a Quantum Computing Researcher to explore quantum algorithms and applications. You'll join our team pushing the frontiers of quantum technology.",
      requirements: [
        "PhD in Quantum Computing, Physics, or related field",
        "Experience with quantum programming languages",
        "Strong publication record in quantum research",
        "Knowledge of quantum algorithms and complexity theory"
      ],
      responsibilities: [
        "Research and develop quantum algorithms",
        "Collaborate with academic and industry partners",
        "Publish research findings in top conferences",
        "Explore practical applications of quantum computing"
      ]
    },
    {
      id: 6,
      title: "Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      salary: "$110,000 - $150,000",
      description: "We're hiring a Frontend Developer to build beautiful, responsive user interfaces. You'll work with modern web technologies to create exceptional user experiences.",
      requirements: [
        "3+ years of frontend development experience",
        "Proficiency in React, Vue, or Angular",
        "Strong CSS and JavaScript skills",
        "Experience with responsive design"
      ],
      responsibilities: [
        "Develop and maintain user interfaces",
        "Collaborate with UX/UI designers",
        "Optimize applications for performance",
        "Implement responsive designs"
      ]
    },
    {
      id: 7,
      title: "DevOps Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      salary: "$130,000 - $170,000",
      description: "We're seeking a DevOps Engineer to implement and maintain our CI/CD pipelines. You'll automate infrastructure deployment and ensure system reliability.",
      requirements: [
        "3+ years of DevOps experience",
        "Experience with Docker, Kubernetes, and Jenkins",
        "Knowledge of infrastructure as code tools",
        "Scripting skills in Python or Bash"
      ],
      responsibilities: [
        "Design and maintain CI/CD pipelines",
        "Automate infrastructure deployment",
        "Monitor system performance and reliability",
        "Collaborate with development teams"
      ]
    },
    {
      id: 8,
      title: "AI Research Scientist",
      department: "Research",
      type: "Full-time",
      location: "Remote",
      salary: "$170,000 - $230,000",
      description: "We're looking for an AI Research Scientist to conduct cutting-edge research in artificial intelligence. You'll publish findings and collaborate with engineering teams.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "Strong publication record in top AI conferences",
        "Experience with deep learning frameworks",
        "Knowledge of recent advances in AI research"
      ],
      responsibilities: [
        "Conduct original research in AI/ML",
        "Publish findings in top-tier conferences",
        "Collaborate with engineering teams on implementation",
        "Mentor junior researchers"
      ]
    },
    {
      id: 9,
      title: "Security Analyst",
      department: "Security",
      type: "Full-time",
      location: "Remote",
      salary: "$100,000 - $140,000",
      description: "We’re hiring a Security Analyst to actively monitor, investigate, and analyze security events.  You'll protect our systems and data from potential security threats.",
      requirements: [
        "2+ years of security analysis experience",
        "Knowledge of security tools and techniques",
        "Understanding of network protocols and security",
        "Relevant certifications preferred"
      ],
      responsibilities: [
        "Monitor security events and alerts",
        "Analyze potential security threats",
        "Implement security controls and measures",
        "Document security incidents and responses"
      ]
    },
    {
      id: 10,
      title: "Backend Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      salary: "$120,000 - $160,000",
      description: "We're seeking a Backend Engineer to design and implement scalable backend systems. You'll develop APIs and ensure system reliability for our products.",
      requirements: [
        "3+ years of backend development experience",
        "Proficiency in Node.js, Python, or Java",
        "Experience with database design and optimization",
        "Knowledge of RESTful API design"
      ],
      responsibilities: [
        "Develop and maintain backend services",
        "Design and optimize databases",
        "Implement API endpoints",
        "Ensure system scalability and reliability"
      ]
    },
    {
      id: 11,
      title: "Machine Learning Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      salary: "$140,000 - $190,000",
      description: "We're hiring a Machine Learning Engineer to build and deploy machine learning models. You'll solve complex problems and optimize model performance.",
      requirements: [
        "3+ years of machine learning engineering experience",
        "Strong Python and ML framework skills",
        "Experience with model deployment and monitoring",
        "Knowledge of data preprocessing and feature engineering"
      ],
      responsibilities: [
        "Develop and train machine learning models",
        "Deploy models to production environments",
        "Monitor model performance and retrain as needed",
        "Collaborate with data scientists and engineers"
      ]
    },
    {
      id: 12,
      title: "Quantum Algorithm Developer",
      department: "Research",
      type: "Full-time",
      location: "Remote",
      salary: "$150,000 - $200,000",
      description: "We're looking for a Quantum Algorithm Developer to create and optimize quantum algorithms. You'll implement algorithms on quantum hardware and document findings.",
      requirements: [
        "MS or PhD in Quantum Computing, Physics, or related field",
        "Experience with quantum programming languages",
        "Knowledge of quantum algorithms and complexity",
        "Strong mathematical background"
      ],
      responsibilities: [
        "Develop and optimize quantum algorithms",
        "Implement algorithms on quantum hardware",
        "Collaborate with research team on experiments",
        "Document and present research findings"
      ]
    },
    {
      id: 13,
      title: "Cloud Security Engineer",
      department: "Security",
      type: "Full-time",
      location: "Remote",
      salary: "$140,000 - $180,000",
      description: "We're seeking a Cloud Security Engineer to ensure the security of our cloud infrastructure. You'll implement security controls and conduct security assessments.",
      requirements: [
        "4+ years of cloud security experience",
        "Expertise in AWS, Azure, or GCP security",
        "Knowledge of security best practices for cloud",
        "Relevant certifications preferred"
      ],
      responsibilities: [
        "Implement security controls for cloud infrastructure",
        "Conduct security assessments and audits",
        "Develop security policies and procedures",
        "Respond to security incidents in cloud environments"
      ]
    },
    {
      id: 14,
      title: "Data Engineer",
      department: "Data",
      type: "Full-time",
      location: "Remote",
      salary: "$130,000 - $170,000",
      description: "We're hiring a Data Engineer to design and build data pipelines for our analytics initiatives. You'll ensure data quality and optimize storage solutions.",
      requirements: [
        "3+ years of data engineering experience",
        "Proficiency in SQL and data modeling",
        "Experience with ETL tools and processes",
        "Knowledge of big data technologies"
      ],
      responsibilities: [
        "Design and build data pipelines",
        "Optimize data storage and retrieval",
        "Ensure data quality and integrity",
        "Collaborate with data scientists and analysts"
      ]
    },
    {
      id: 15,
      title: "UX/UI Designer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      salary: "$110,000 - $150,000",
      description: "We're seeking a UX/UI Designer to create intuitive and beautiful user experiences. You'll design interfaces and conduct user research for our products.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in design tools like Figma or Sketch",
        "Strong portfolio of design work",
        "Understanding of user-centered design principles"
      ],
      responsibilities: [
        "Design user interfaces and experiences",
        "Create wireframes, prototypes, and mockups",
        "Conduct user research and testing",
        "Collaborate with development teams"
      ]
    },
    {
      id: 16,
      title: "Blockchain Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      salary: "$130,000 - $180,000",
      description: "We're looking for a Blockchain Developer to create blockchain-based solutions and smart contracts. You'll ensure security and collaborate with product teams.",
      requirements: [
        "3+ years of blockchain development experience",
        "Experience with Solidity and Ethereum",
        "Knowledge of blockchain protocols and architectures",
        "Understanding of cryptography and security"
      ],
      responsibilities: [
        "Develop smart contracts and blockchain applications",
        "Design and implement blockchain architectures",
        "Ensure security of blockchain solutions",
        "Collaborate with product and research teams"
      ]
    },
    {
      id: 17,
      title: "AI Ethics Researcher",
      department: "Research",
      type: "Full-time",
      location: "Remote",
      salary: "$120,000 - $160,000",
      description: "We're hiring an AI Ethics Researcher to study the ethical implications of AI technologies. You'll develop frameworks for responsible AI development.",
      requirements: [
        "PhD in Ethics, Philosophy, Computer Science, or related field",
        "Knowledge of AI ethics principles and frameworks",
        "Experience with interdisciplinary research",
        "Strong publication record preferred"
      ],
      responsibilities: [
        "Research ethical implications of AI technologies",
        "Develop frameworks for responsible AI development",
        "Collaborate with AI researchers and engineers",
        "Publish research findings and recommendations"
      ]
    },
    {
      id: 18,
      title: "Network Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      salary: "$110,000 - $150,000",
      description: "We're seeking a Network Engineer to design and maintain our network infrastructure. You'll ensure reliability and implement security measures.",
      requirements: [
        "3+ years of network engineering experience",
        "Knowledge of network protocols and technologies",
        "Experience with network security tools",
        "Relevant certifications preferred"
      ],
      responsibilities: [
        "Design and implement network infrastructure",
        "Monitor network performance and security",
        "Troubleshoot network issues",
        "Implement network security measures"
      ]
    },
    {
      id: 19,
      title: "Bioinformatics Scientist",
      department: "Research",
      type: "Full-time",
      location: "Remote",
      salary: "$140,000 - $190,000",
      description: "We're looking for a Bioinformatics Scientist to apply computational methods to biological problems. You'll analyze genomic data and develop algorithms.",
      requirements: [
        "PhD in Bioinformatics, Computational Biology, or related field",
        "Experience with genomic data analysis",
        "Proficiency in Python/R and bioinformatics tools",
        "Strong statistical background"
      ],
      responsibilities: [
        "Analyze genomic and biological data",
        "Develop algorithms and tools for bioinformatics",
        "Collaborate with biologists and medical researchers",
        "Publish research findings"
      ]
    },
    {
      id: 20,
      title: "Product Manager",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      salary: "$140,000 - $190,000",
      description: "We're hiring a Product Manager to lead product development from conception to launch. You'll work with cross-functional teams and analyze market trends.",
      requirements: [
        "4+ years of product management experience",
        "Experience with agile development methodologies",
        "Strong analytical and problem-solving skills",
        "Technical background preferred"
      ],
      responsibilities: [
        "Define product vision and strategy",
        "Gather and prioritize product requirements",
        "Work with engineering, design, and marketing teams",
        "Analyze market trends and customer needs"
      ]
    },
    {
      id: 21,
      title: "Cryptography Researcher",
      department: "Research",
      type: "Full-time",
      location: "Remote",
      salary: "$150,000 - $200,000",
      description: "We're seeking a Cryptography Researcher to study advanced cryptographic techniques and protocols. You'll develop new protocols and analyze security systems.",
      requirements: [
        "PhD in Cryptography, Computer Science, or related field",
        "Strong background in mathematics and cryptography",
        "Experience with cryptographic protocols",
        "Publication record in cryptography research"
      ],
      responsibilities: [
        "Research advanced cryptographic techniques",
        "Develop new cryptographic protocols",
        "Analyze security of existing cryptographic systems",
        "Publish research findings"
      ]
    },
    {
      id: 22,
      title: "Site Reliability Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      salary: "$130,000 - $170,000",
      description: "We're hiring a Site Reliability Engineer to ensure system reliability and performance. You'll implement monitoring systems and automate operational processes.",
      requirements: [
        "3+ years of SRE or DevOps experience",
        "Experience with monitoring and alerting tools",
        "Knowledge of infrastructure as code",
        "Scripting skills in Python or Go"
      ],
      responsibilities: [
        "Ensure system reliability and performance",
        "Implement monitoring and alerting systems",
        "Automate operational processes",
        "Participate in on-call rotation"
      ]
    },
    {
      id: 23,
      title: "AI Product Manager",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      salary: "$150,000 - $200,000",
      description: "We're looking for an AI Product Manager to lead the development of AI-powered products. You'll identify AI opportunities and manage product lifecycles.",
      requirements: [
        "4+ years of product management experience",
        "Experience with AI/ML products and technologies",
        "Understanding of machine learning concepts",
        "Strong technical background"
      ],
      responsibilities: [
        "Define AI product vision and strategy",
        "Work with AI researchers and engineers",
        "Identify AI opportunities for business problems",
        "Manage AI product development lifecycle"
      ]
    },
    {
      id: 24,
      title: "Quantum Hardware Engineer",
      department: "Research",
      type: "Full-time",
      location: "Remote",
      salary: "$140,000 - $190,000",
      description: "We're seeking a Quantum Hardware Engineer to design hardware components for quantum computing systems. You'll conduct experiments and collaborate with researchers.",
      requirements: [
        "PhD in Physics, Electrical Engineering, or related field",
        "Experience with quantum hardware design",
        "Knowledge of cryogenics and low-temperature physics",
        "Experience with experimental physics"
      ],
      responsibilities: [
        "Design and develop quantum hardware components",
        "Conduct experiments with quantum systems",
        "Collaborate with theoretical researchers",
        "Document and present research findings"
      ]
    },
    {
      id: 25,
      title: "Security Operations Center Analyst",
      department: "Security",
      type: "Full-time",
      location: "Remote",
      salary: "$90,000 - $130,000",
      description: "We're hiring a Security Operations Center Analyst to monitor security events and respond to incidents. You'll investigate threats and follow response procedures.",
      requirements: [
        "2+ years of SOC experience",
        "Knowledge of SIEM tools and security monitoring",
        "Understanding of network security principles",
        "Relevant certifications preferred"
      ],
      responsibilities: [
        "Monitor security events and alerts",
        "Investigate potential security incidents",
        "Document and report security events",
        "Follow incident response procedures"
      ]
    },
    {
      id: 26,
      title: "Data Visualization Specialist",
      department: "Data",
      type: "Full-time",
      location: "Remote",
      salary: "$100,000 - $140,000",
      description: "We're seeking a Data Visualization Specialist to create compelling visualizations of complex data. You'll communicate insights through visual storytelling.",
      requirements: [
        "3+ years of data visualization experience",
        "Proficiency in visualization tools like Tableau or D3.js",
        "Strong design and storytelling skills",
        "Experience with data analysis"
      ],
      responsibilities: [
        "Create data visualizations and dashboards",
        "Work with data analysts and scientists",
        "Develop interactive visualization tools",
        "Communicate insights through visual storytelling"
      ]
    },
    {
      id: 27,
      title: "Technical Writer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      salary: "$80,000 - $120,000",
      description: "We're hiring a Technical Writer to create clear documentation for our products and technologies. You'll work with engineers to explain complex technical concepts.",
      requirements: [
        "3+ years of technical writing experience",
        "Ability to explain complex technical concepts",
        "Experience with documentation tools",
        "Technical background preferred"
      ],
      responsibilities: [
        "Create product documentation and user guides",
        "Work with engineers to understand technical details",
        "Maintain and update documentation",
        "Ensure documentation quality and accuracy"
      ]
    },
    {
      id: 28,
      title: "AI Ethics Program Manager",
      department: "Research",
      type: "Full-time",
      location: "Remote",
      salary: "$130,000 - $170,000",
      description: "We're seeking an AI Ethics Program Manager to develop and implement AI ethics programs. You'll create policies and train employees on ethical principles.",
      requirements: [
        "4+ years of program management experience",
        "Knowledge of AI ethics principles and frameworks",
        "Experience with policy development",
        "Strong communication and stakeholder management skills"
      ],
      responsibilities: [
        "Develop AI ethics policies and guidelines",
        "Implement ethics review processes",
        "Train employees on AI ethics principles",
        "Monitor compliance with ethics standards"
      ]
    }
  ];

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    setIsHeaderHidden(true); // Hide header when modal opens
    document.body.style.overflow = 'hidden';
    
    // Dispatch custom event to hide header
    window.dispatchEvent(new CustomEvent('hideHeader'));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setIsHeaderHidden(false); // Show header when modal closes
    document.body.style.overflow = 'auto';
    
    // Dispatch custom event to show header
    window.dispatchEvent(new CustomEvent('showHeader'));
  };

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  const filteredJobs = activeCategory === 'All' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className={`relative z-10 pt-8 md:pt-20 transition-opacity duration-300 ${isHeaderHidden ? 'opacity-0' : 'opacity-100'}`}>
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">Open Job Opportunities</h1>
            <p className="hidden md:block text-xl text-gray-300 max-w-3xl mx-auto">
              Join our team of innovators and help shape the future of technology
            </p>
          </div>

          {/* Job Categories - Hidden on mobile */}
          <div className="mb-8 md:mb-12 hidden md:block">
            <div className="flex flex-wrap justify-center gap-4 mb-8 md:mb-12">
              {jobCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-full border transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-blue-600 border-blue-500 text-white'
                        : 'bg-gray-800/30 border-gray-700/50 text-gray-300 hover:border-blue-400/50'
                    }`}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">{category.name}</span>
                    <span className="bg-gray-700/50 px-1 md:px-2 py-0.5 md:py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {filteredJobs.map((job) => (
              <div 
                key={job.id} 
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-700/50 p-4 md:p-6 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group"
                onClick={() => openModal(job)}
              >
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.title}</h3>
                  {/* Hide department badge on mobile */}
                  <span className="hidden md:block px-2 md:px-3 py-0.5 md:py-1 bg-blue-900/30 text-blue-300 text-xs md:text-sm rounded-full">
                    {job.department}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 md:gap-4 mb-3 md:mb-4">
                  <div className="flex items-center text-gray-300 text-xs md:text-sm">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-300 text-xs md:text-sm">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    {job.type}
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6 hidden md:block" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {job.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 text-xs md:text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View details</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </span>
                  <button 
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs md:text-sm transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open('https://forms.gle/FxN4hEBmuEnVYAfM7', '_blank');
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No jobs message */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-8 md:py-12">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-800/30 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <BookOpen className="w-8 h-8 md:w-12 md:h-12 text-gray-400" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">No positions available</h3>
              <p className="text-gray-300 text-sm md:text-base">There are currently no open positions in this category. Please check back later.</p>
            </div>
          )}
        </div>
      </div>

      {/* Job Detail Modal - Fixed for mobile */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-700 p-4 md:p-6 flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2 truncate">{selectedJob.title}</h2>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="px-2 md:px-3 py-0.5 md:py-1 bg-blue-900/30 text-blue-300 text-xs md:text-sm rounded-full">
                    {selectedJob.department}
                  </span>
                  <div className="flex items-center text-gray-300 text-xs md:text-sm">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    {selectedJob.location}
                  </div>
                  <div className="flex items-center text-gray-300 text-xs md:text-sm">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    {selectedJob.type}
                  </div>
                </div>
              </div>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700/50 transition-colors flex-shrink-0 ml-4"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            
            <div className="p-4 md:p-6">
              <div className="mb-4 md:mb-6">
                <h3 className="text-md md:text-lg font-semibold text-white mb-2 md:mb-3 border-b border-gray-700 pb-1 md:pb-2">Job Description</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{selectedJob.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <h3 className="text-md md:text-lg font-semibold text-white mb-2 md:mb-3 border-b border-gray-700 pb-1 md:pb-2">Requirements</h3>
                  <ul className="space-y-1 md:space-y-2">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm md:text-base">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-md md:text-lg font-semibold text-white mb-2 md:mb-3 border-b border-gray-700 pb-1 md:pb-2">Responsibilities</h3>
                  <ul className="space-y-1 md:space-y-2">
                    {selectedJob.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm md:text-base">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="sticky bottom-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-700 p-4">
              <button 
                className="flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 transition-colors px-4 md:px-6 py-3 md:py-3 rounded-lg text-sm md:text-base w-full"
                onClick={() => window.open('https://forms.gle/FxN4hEBmuEnVYAfM7', '_blank')}
              >
                Apply for this Position
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;
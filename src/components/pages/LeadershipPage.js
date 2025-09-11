import React, { useState, useEffect } from 'react';
import { Mail, X, ExternalLink } from 'lucide-react';

const LeadershipPage = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const leadershipTeam = [
    {
      name: "Jason Fang",
      position: "Founder & Chief Executive Officer",
      detailedDescription: "Jason Fang is the Founder and Chief Executive Officer (CEO) of Fang Enterprises. He is a visionary leader with over 5 years o technical experience and a passion for innovation. Jason has previously led product initiatives at several Fortune 500 companies and founded Fang Enterprises with a mission to transform industries through revolutionary technology solutions that deliver real-world impact.",
      expertise: ["Technology Innovation", "Business Strategy", "Product Development"],
      background: "Founder of Techtuality Global",
      education: "Senior at San Leandro High School",
      shortEducation: "Senior at San Leandro High School",
      image: "/images/Fang.png",
    },
    {
      name: "Gary Ma",
      position: "Chief Operating Officer",
      detailedDescription: "Gary Ma is the Chief Operating Officer (COO) at Fang Enterprises. He has over 10 years of experience and oversees the company’s day-to-day operations, ensuring efficiency, scalability, and cross-functional alignment. Gary has extensive experience building and optimizing operational workflows, streamlining processes, and implementing strategic initiatives that drive growth and reliability. He also mentors teams, fosters collaboration across departments, and bridges operational execution with business objectives to ensure consistent excellence across the organization.",
      expertise: ["Backend Development", "Cloud Architecture", "Machine Learning Integration"],
      background: "Artificial Intelligence and Machine Learning Researcher at University of Michigan.",
      education: "Doctorate in Computer Science from New York University",
      shortEducation: "PhD in CS from Harvard University",
      image: "/images/Gary.png",
    },
    {
      name: "Nolan Fey",
      position: "Chief Technology Officer",
      detailedDescription: "Nolan Fey is the Chief Technology Officer (CTO) at Fang Enterprises. He has over 7 years of experience and excels at designing scalable backend systems. Nolan has developed high-performance workflow engines, semantic search pipelines, and advanced conversational AI systems that enhance efficiency, reliability, and user experience. He combines deep technical expertise with practical implementation, ensuring solutions are both innovative and adoptable, particularly in healthcare and research-focused initiatives.",
      expertise: ["Backend Development", "Cloud Architecture", "Artificial Intelligence Integration"],
      background: "Researcher at MIT Computer Science and Artificial Intelligence Laboratory",
      education: "Doctorate in Electrical Engineering & Computer Science from Massachusetts Institute of Technology",
      shortEducation: "PhD in EECS from MIT",
      image: "/images/Nolan.png",
    },
    {
      name: "Zain Ahmed",
      position: "Senior Software Development Engineer",
      detailedDescription: "Zain Ahmed is the Senior Software Development Engineer at Fang Enterprises. He has over 7 years of experience in full-stack development and cloud architecture. He has worked extensively with AWS, GCP, and Azure, building scalable applications and high-performance software systems. Zain specializes in Python, Node.js, Java, and React, leading the development of robust backend systems, integrating AI-driven solutions, and optimizing cloud architectures for e-commerce and retail platforms. He excels at driving innovation through cross-functional collaboration and mentoring engineering teams.",
      expertise: ["Full-Stack Development", "Cloud Architecture", "Artificial Intelligence Integration"],
      background: "Senior Software Engineer at Meta",
      education: "Bachelor's in Computer Science from Princeton University",
      shortEducation: "BS in CS from Princeton University",
      image: "/images/Zain.png",
    },
    {
      name: "Grace Li",
      position: "Senior Machine Learning Engineer",
      detailedDescription: "Grace Li is the Senior Machine Learning Engineer at Fang Enterprises. She has over 5 years of experience and brings extensive experience in full-stack development, cloud architecture, and scalable enterprise systems. She has built secure, high-performance applications for financial and healthcare sectors, with expertise spanning Java, Python, React.js, Spring Boot, and cloud-native deployments. Grace previously led projects at Accio and Apple, architecting microservices, optimizing databases, and deploying applications.",
      expertise: ["Full Stack Development", "Cloud Architecture", "Secure Systems Infrastructure"],
      background: "Machine Learning Reseracher at Harvard John A. Paulson School Of Engineering And Applied Sciences",
      education: "Master's in Computer Science from Harvard University",
      shortEducation: "MS in CS from Harvard University",
      image: "/images/Grace.png",
    },
    {
      name: "Anouck Rietveld",
      position: "Senior Autonomous Systems Engineer",
      detailedDescription: "Anouck Rietveld is the Senior Autonomous Systems Engineer at Fang Enterprises. She has over 10 years of experience in full-stack development, building dynamic applications and modernizing systems at companies like Amazon and Microsoft. She has a strong track record of improving system performance, reducing latency, integrating AI for better user engagement, and mentoring teams to deliver impactful results. Anouck excels at tackling real-world technical challenges with hands-on coding and practical solutions.",
      expertise: ["Full-Stack Development", "Backend & Frontend Optimization", "Cloud Development Services"],
      background: "Senior Data Scientist at Uber",
      education: "Bachelor's in Data Science from Columbia University",
      shortEducation: "BS in CS from Columbia University",
      image: "/images/Anouck.png",
    },
    {
      name: "Sophie Suo",
      position: "Senior Cloud Development Engineer",
      detailedDescription: "Sophie Suo is the Senior Cloud Development Engineer at Fang Enterprises. She has over 5 years of experience focused on Python and AI. She has made great contributions to AI infrastructure and the construction of scalable systems. Sophie specializes in developing AI solutions using AWS Vector Storage, Lambda, and Bedrock, and brings startup experience to support growth strategy and engineering initiatives within Fang Enterprises.",
      expertise: ["Artificial Intelligence Infrastructure", "Serverless Architecture", "Startup Engineering"],
      background: "Quantitiatve Developer at Millennium Management",
      education: "Bachelor's in Computer Science from Massachusetts Institute of Technology",
      shortEducation: "BS in CS from MIT",
      image: "/images/Sophie.png",
    },
    {
      name: "James Kim",
      position: "Senior DevOps Development Engineer",
      detailedDescription: "James Kim is the Senior DevOps at Fang Enterprises. He has over 5 years of experience in cloud software engineering, AI/ML infrastructure, and large-scale backend systems. He formerly led the rollout of a container-based AI platform supporting 25+ GenAI models on GPUs and Gaudi accelerators to enable secure multi-tenant workloads for 500+ users. James has expertise in Kubernetes, Docker, AWS, and Azure, and has designed microservices, REST APIs, and scalable databases. He also modernized financial systems at TCS, migrating monolithic architectures to microservices, and developed AI-powered health tech applications during his graduate research.",
      expertise: ["Cloud Architecture", "Full Stack Development", "Distributed Systems"],
      background: "Research Assistant so i hat Cornell Sun Lab",
      education: "Master's in Computer Science from Cornell lUniversity",
      shortEducation: "MS in CS from Cornell University",
      image: "/images/James.png",
    },
    {
      name: "Brendan Kondracki",
      position: "Senior Infrastructure Development Engineer",
      detailedDescription: "Brendan Kondracki is the Senior Infrastructure Development Engineer at Fang Enterprises. He has over 10 years of experience specializes in end-to-end development of data-heavy applications and services. His recent projects include GNV Transit, a mobile-first bus tracker, and a lightweight mapping library maintained on GitHub. He has built secure research software for a variety of universities and labs as well. Brendan excels at owning delivery from schema and APIs to CI/CD and observability, creating performant, reliable, and user-friendly systems.",
      expertise: ["Full-Stack Development", "Data Analyzation Pipelines", "API Design"],
      background: "Senior Data Scientist at IBM",
      education: "Master's in Computer Science from Columbia University",
      shortEducation: "MS in CS from Columbia University",
      image: "/images/Brendan.png",
    },
    {
      name: "Jesse Zhu",
      position: "Senior Security Development Engineer",
      detailedDescription: "Jesse Zhu is the Senior Security Development Engineer at Fang Enterprises. He has over 5 years of experience in frontend, backend, and cloud infrastructure. He is proficient in architecting scalable, high-performance applications and has a decade of leadership experience across sectors including cybersecurity, engineering, telecommunications, and logistics. Jesse excels at hands-on development, problem-solving, and mentoring engineering teams, with specialization in Ad-Tech, SaaS solutions, and security automation.",
      expertise: ["Full-Stack Development", "Cloud Infrastructure", "Software Architecture"],
      background: "Senior Software Engineer at Microsoft",
      education: "Master's in Computer Science from Cornell University",
      shortEducation: "MS in CS from Cornell University",
      image: "/images/Jesse.png",
    },
    {
      name: "Lily Yang",
      position: "Senior Data Analytics Engineer",
      detailedDescription: "Lily Yang is the Senior Data Analytics Engineer at Fang Enterprises. She has over 10 years of experience and specializes in full-stack development with React front-ends and Node/TypeScript APIs. She focuses on building customer-centric, high-quality software with attention to performance, accessibility, observability, and clean architecture. Lily has experience taking features from discovery to design, implementing reliable backend services, and mentoring junior engineers while ensuring cross-functional alignment between engineering, design, and business outcomes.",
      expertise: ["Full-Stack Development", "Security Automation", "Performance Optimization"],
      background: "Researcher at Cornell Ann S. Bowers College of Computing and Information",
      education: "Master's's in Data Science from Cornell University",
      shortEducation: "MS in DS from Cornell University",
      image: "/images/Lily.png",
    },
    {
      name: "Weiyue Lin",
      position: "Senior Robotics Development Engineer",
      detailedDescription: "Weiyue Lin is the Senior Robotics Engineer at Fang Enterprises. He has over 5 years of professional software engineering experience and built and scaled cloud-native microservices, full-stack applications, and AI/ML pipelines. Weiyue specializes in Java, Python, TypeScript, React.js, Spring Boot, and FastAPI, along with AWS, Kubernetes, and Terraform for cloud and DevOps. He has led projects improving system performance by 25–50%, automated CI/CD pipelines to accelerate release cycles by 40%, and delivered large-scale APIs supporting 10,000+ concurrent users. He focuses on trustworthy and efficient AI systems and aims to revolutionize the world through technology.",
      expertise: ["Full-Stack Development", "Cloud & DevOps", "Performance Optimization"],
      background: "Researcher at MIT Computer Science and Artificial Intelligence Laboratory",
      education: "Master's Degree in Data Science from Harvard University",
      shortEducation: "MS in DS from Harvard University",
      image: "/images/Weiyue.png",
    },
  ];

  const openModal = (leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLeader(null);
    document.body.style.overflow = 'auto';
  };

  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const handleClickOutside = (e) => {
      if (isModalOpen && e.target.classList.contains('modal-backdrop')) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

<div className="relative z-10 pt-8 md:pt-20"> {/* Reduced top padding on mobile */}
  {/* Hero Section */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"> {/* Adjusted padding for better spacing */}
    <div className="text-center mb-8 md:mb-12"> {/* Reduced margin on mobile */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Leadership Team</h1>
            <p className="hidden md:block text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionary leaders that drive our innovation and excellence
            </p>
          </div>

          {/* Leadership Grid - All members in a single section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipTeam.map((leader, index) => (
              <div 
                key={index} 
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-5 text-center hover:border-blue-400/50 transition-all duration-300 cursor-pointer group"
                onClick={() => openModal(leader)}
              >
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <div className="w-full h-full rounded-full bg-blue-600 p-1 flex items-center justify-center">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center hidden">
                        <span className="text-2xl font-bold text-white">{leader.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{leader.name}</h3>
                <p className="text-blue-400 font-semibold mb-3 text-sm">{leader.position}</p>
                <p className="text-gray-300 text-xs mb-3">{leader.shortEducation}</p>
                <div className="mt-3 text-cyan-400 text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View full profile</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Popup - Updated to match footer style exactly */}
      {isModalOpen && selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm modal-backdrop">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-700 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-blue-600 rounded-full p-1 flex items-center justify-center mr-4">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={selectedLeader.image} 
                      alt={selectedLeader.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center hidden">
                      <span className="text-xl font-bold text-white">
                        {selectedLeader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedLeader.name}</h3>
                  <p className="text-blue-400 font-semibold">{selectedLeader.position}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="prose prose-invert prose-gray max-w-none">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3 border-b border-gray-700 pb-2">Profile</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{selectedLeader.detailedDescription}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 border-b border-gray-700 pb-2">Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedLeader.expertise.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 border-b border-gray-700 pb-2">Background</h3>
                    <p className="text-gray-300">{selectedLeader.background}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3 border-b border-gray-700 pb-2">Education</h3>
                  <p className="text-gray-300">{selectedLeader.education}</p>
                </div>
              </div>
            </div>
            
            <div className="sticky bottom-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-700 p-4">
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                onClick={() => {
                  const emailName = selectedLeader.name.toLowerCase().replace(/\s+/g, '');
                  window.location.href = `mailto:${emailName}@fangenterprises.com`;
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email {selectedLeader.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadershipPage;
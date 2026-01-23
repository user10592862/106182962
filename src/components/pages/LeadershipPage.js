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

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, X, Shield, FileText, Instagram } from 'lucide-react';

const Footer = ({ onPageChange, navItems }) => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  const modalContent = {
    privacy: {
  title: "Privacy Policy",
  icon: <Shield className="w-6 h-6 text-blue-400" />,
  content: `Your privacy is our priority. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.

We collect various types of information. Personal Information includes your name, email address, phone number, billing information, and any other data you provide voluntarily. Technical Data encompasses your IP address, browser type, operating system, device identifiers, and location data. Usage Data refers to information about your interactions with our services, pages visited, and time spent on the site. We also collect information via cookies and similar technologies to improve your experience.

Your information is used to provide, maintain, and improve our services. We personalize your experience and deliver relevant content. We communicate important updates, promotions, and announcements. We ensure the security of our services and prevent unauthorized activity. Additionally, we comply with legal obligations and resolve disputes.

We may share your information with trusted service providers who support our operations. We may disclose information to comply with laws or protect rights. Information may be transferred in case of mergers, acquisitions, or asset sales.

We implement industry-standard security measures such as encryption, firewalls, and access controls to protect your data. However, no method of transmission over the Internet or electronic storage is 100% secure.

You have rights to access, correct, or delete your personal information. You may opt out of marketing communications and withdraw consent where applicable.

We retain personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy or comply with legal obligations.`
},

terms: {
  title: "Terms of Service",
  icon: <FileText className="w-6 h-6 text-blue-400" />,
  content: `Please read our terms of services carefully.

You may not use our services for any unlawful, fraudulent, or harmful purposes. Interfering with or compromising our systems or servers is prohibited. You may not infringe on intellectual property or other rights of third parties.

All content, software, designs, trademarks, and technology on our platform are owned by Fang Enterprises & Co. or its licensors and are protected under applicable intellectual property laws. You may not use, copy, or distribute any materials without prior written consent.

We reserve the right to suspend or terminate accounts for violations of these terms or for any activity deemed harmful to our services or users.

Our services are provided "as is" and we disclaim warranties of any kind. We are not liable for damages arising from use of our services, including loss of data, revenue, or goodwill.

We may update these Terms of Service at any time. Continued use of our services constitutes acceptance of the revised terms.`
}
  }
  return (
    <>
      <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src="/images/Logo.png" 
                    alt="Fang Enterprises Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-2xl font-bold text-white">
                  <span className="hidden md:inline">Fang Enterprises & Co.</span>
                  <span className="md:hidden">Fang Enterprises</span>
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md text-lg">
                Building the future across technology, healthcare, research, and beyond with solutions that transform industries and redefine what's possible.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/fangenterprises/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 bg-gray-800/50 rounded-lg hover:bg-blue-500/20" target="_blank">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/fangenterprises/?viewAsMember=true" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 bg-gray-800/50 rounded-lg hover:bg-blue-500/20" target="_blank">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Solutions
              </h3>
              <ul className="space-y-3">
                <li><button onClick={() => onPageChange('solutions')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Fang VPN
                </button></li>
                <li><button onClick={() => onPageChange('solutions')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Fang AI
                </button></li>
                <li><button onClick={() => onPageChange('solutions')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Fang Cloud
                </button></li>
                <li><button onClick={() => onPageChange('solutions')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Fang Consulting
                </button></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-3">
                {navItems.filter(item => item.id !== 'home').map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => onPageChange(item.id)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">info@fangenterprises.com</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                  <span className="text-gray-300">+1 (510) 501-1990</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                  <span className="text-gray-300">San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-0 md:mb-0">
            © {currentYear} <span className="hidden md:inline">Fang Enterprises & Co.</span>
            <span className="md:hidden">Fang Enterprises</span>
          </p>
            
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-400">
              <button onClick={() => openModal('privacy')} className="hover:text-blue-400 transition-colors flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Privacy Policy
              </button>
              <button onClick={() => openModal('terms')} className="hover:text-blue-400 transition-colors flex items-center">
                <FileText className="w-4 h-4 mr-1" />
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-700 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {modalContent[activeModal].icon}
                <h3 className="text-xl font-bold text-white">{modalContent[activeModal].title}</h3>
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
                {modalContent[activeModal].content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Last updated: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
            
            <div className="sticky bottom-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-700 p-4">
              <button
                onClick={closeModal}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
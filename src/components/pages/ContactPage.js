import React, { useState } from 'react';
import { Send, MessageSquare, User, Globe, Mail } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xzzaykry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Updated to match the reference exactly for mobile */}
      <div className="relative z-10 pt-8 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Hero Section - Updated to match reference exactly */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">Get in Touch</h1>
            <p className="hidden md:block text-xl text-gray-300 max-w-3xl mx-auto">
              Send us a message to see how we can work together to advance technology
            </p>
          </div>

          {/* Contact Form - Centered and larger */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 md:p-10">
            <div className="flex items-center justify-center mb-8 md:mb-10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mr-4 md:mr-5">
                <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-gray-900" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Send Message</h2>
            </div>
            
            {isSubmitted ? (
              <div className="text-center py-12 md:py-16">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">Message Sent!</h3>
                <p className="text-gray-300 md:text-lg">Thank you for your message. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label htmlFor="name" className="block text-base md:text-lg font-medium text-gray-300 mb-2 md:mb-3">
                      <User className="w-4 h-4 md:w-5 md:h-5 inline mr-2" />
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 backdrop-blur-sm text-base md:text-lg"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base md:text-lg font-medium text-gray-300 mb-2 md:mb-3">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 backdrop-blur-sm text-base md:text-lg"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-base md:text-lg font-medium text-gray-300 mb-2 md:mb-3">
                    <Globe className="w-4 h-4 md:w-5 md:h-5 inline mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 backdrop-blur-sm text-base md:text-lg"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-base md:text-lg font-medium text-gray-300 mb-2 md:mb-3">
                    <MessageSquare className="w-4 h-4 md:w-5 md:h-5 inline mr-2" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm text-base md:text-lg"
                    placeholder="Tell us about your project or question..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 md:px-8 md:py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-base md:text-lg rounded-xl transition-all duration-300 hover:from-blue-700 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center group mt-4 md:mt-6"
                >
                  Send Message
                  <Send className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const resources = [
    { label: 'Resume', href: '/resume.pdf' },
    { label: 'Blog', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Certifications', href: '#achievements' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Jaspal Singh Rajput</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              B.Tech Computer Science Engineering student passionate about creating innovative 
              solutions through code. Always learning, always building, always growing.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/jaspal-s-rajput"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="http://www.linkedin.com/in/jaspal-singh-rajput-a63321214"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rajputjaspalsingh12@gmail.com"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    <span>{resource.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get notified about new projects and blog posts
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
              <span>&copy; {currentYear} Jaspal Singh Rajput. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>in India</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-110 flex items-center justify-center z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;
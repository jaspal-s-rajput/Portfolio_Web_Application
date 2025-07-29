import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import profilePic from "../media/profilePic.png" ;

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="relative group">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white font-bold text-sm">B.Tech</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Jaspal Singh Rajput
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
                B.Tech Computer Science Engineering Student
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Final Year • Passionate Full-Stack Developer
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Aspiring developer with hands-on experience in building responsive web and mobile applications. Skilled in Java EE, MySQL, React and UI/UX design. Thrive in fast-paced environments and love transforming ideas into impactful solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 shadow-lg">
                <Download className="w-5 h-5 inline mr-2" />
                Download Resume
              </button>
              <button 
                onClick={scrollToAbout}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-200"
              >
                Learn More
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="https://github.com/jaspal-s-rajput" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform transition-all duration-200 hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/jaspal-s-rajput-a63321214/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform transition-all duration-200 hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:rajputjaspalsingh12@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform transition-all duration-200 hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
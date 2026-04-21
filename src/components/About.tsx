import React from 'react';
import { GraduationCap, MapPin, Calendar, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get to know me!
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Computer Science graduate with hands-on experience in QA automation and backend development, focused on building reliable and scalable web applications. Skilled in Playwright for end-to-end testing, with practical exposure to designing test flows, validating UI behavior, and improving application quality through automation.            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Strong foundation in Java, Spring Boot, Hibernate, and MySQL, combined with knowledge of Selenium and API testing. Experienced in applying POM design, debugging test failures, and working within Agile development environments. Focused on delivering reliable, high-quality software through efficient and scalable test automation.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Contributed to real-world projects including a smart city grievance system, sports tournament manager, and blood donation platform—focusing on API development, system performance, and test reliability.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Actively seeking opportunities as an SDET or QA Automation Engineer to deliver high-quality software through efficient, scalable, and modern testing practices.
            </p>

            {/* Personal Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">B.Tech • Computer Science & Engineering </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">Indore, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">Graduation Year: 2025</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">Open to opportunities</span>
              </div>
            </div>
          </div>

          {/* Education & Stats */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">Bachelor of Technology</h5>
                  <p className="text-gray-600 dark:text-gray-300">Computer Science Engineering</p>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-400">Shri Vaishnav Vidyapeeth Vishwavidyalaya • 2021-2025</p> */}
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">Shri Vaishnav Vidyapeeth Vishwavidyalaya • 2021-2025</p>
                  {/* <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">CGPA: 8.15/10</p> */}
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">Higher Secondary Certificate</h5>
                  <p className="text-gray-600 dark:text-gray-300">Science Stream (PCM)</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">CBSE : Modern International School • 2021</p>
                  
                  {/* <p className="text-sm text-gray-500 dark:text-gray-400">CBSE : Modern International School • 2021</p> */}
                  {/* <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">Percentage: 72%</p> */}
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">Secondary School Certificate</h5>
                  <p className="text-gray-600 dark:text-gray-300">Science Stream (PCM)</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">CBSE : Kendriya Vidyalaya Sangathan • 2019</p>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-400">CBSE : Kendriya Vidyalaya Sangathan • 2019</p> */}
                  {/* <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">Percentage: 76.2%</p> */}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
                <div className="text-gray-600 dark:text-gray-300">Year of Experience</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">20+</div>
                <div className="text-gray-600 dark:text-gray-300">Technologies</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                <div className="text-gray-600 dark:text-gray-300">Internships</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
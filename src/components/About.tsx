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
              I'm a final-year B.Tech Computer Science Engineering student with a passion for creating 
              innovative digital solutions. My journey in technology began with curiosity about how 
              things work and has evolved into a deep love for problem-solving through code.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Throughout my academic journey, I've maintained a strong focus on both theoretical knowledge 
              and practical application. I believe in continuous learning and staying updated with the 
              latest technological trends and industry best practices.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              So far, I've built and contributed to projects in web and mobile development.
              From sports management systems to healthcare service platforms, I've consistently aimed to create impactful solutions. 
              I look forward to exploring new challenges that push me to expand my skills, collaborate with talented teams, and make a difference through technology.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I'm actively seeking internship opportunities where I can contribute to meaningful projects 
              while continuing to grow as a developer and technology professional.
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
                  <p className="text-sm text-gray-500 dark:text-gray-400">Shri Vaishnav Vidyapeeth Vishwavidyalaya • 2021-2025</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">CGPA: 8.15/10</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">Higher Secondary Certificate</h5>
                  <p className="text-gray-600 dark:text-gray-300">Science Stream (PCM)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CBSE : Modern International School • 2021</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">Percentage: 72%</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">Secondary School Certificate</h5>
                  <p className="text-gray-600 dark:text-gray-300">Science Stream (PCM)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CBSE : Kendriya Vidyalaya Sangathan • 2019</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">Percentage: 76.2%</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
                <div className="text-gray-600 dark:text-gray-300">Technologies</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">2</div>
                <div className="text-gray-600 dark:text-gray-300">Internships</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Achievements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
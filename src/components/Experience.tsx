import React from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import Byshrium from "../media/byshLogo.png";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "FlutterFlow Developer Intern",
      company: "Byshrium Enterprises Pvt. Ltd.",
      location: "Bhopal, India",
      duration: "20 Feb 2025 - 22 May 2025",
      type: "Internship",
      logo: Byshrium,
      achievements: [
        "Designed and developed responsive UI components for an Automotive e-com using FlutterFlow",
        "Collaborated with cross-functional team of developers & designers following Agile methodology",
        "Integrated APIs to ensure seamless frontend-backend interaction",
        "Contributed to optimizing UI/UX workflows, improving UX & consistency across devices",
        "Developed cross-platorm applicaxtion for both Desktop & Mobile using Flutter"
      ],
      technologies: ["FlutterFlow", "Dart", "Firebase", "Git", "Canva"],
      current: false
    },
    {
      title: "Java Developer Intern",
      company: "Zangoh IT Solution Pvt. Ltd.",
      location: "Remote",
      duration: "Jun 2025 - Current",
      type: "Part-time",
      logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100",
      achievements: [
        "Built responsive user interfaces for 2 mobile-first web applications",
        "Optimized application performance resulting in 60% faster load times",
        "Integrated third-party APIs including payment gateways and social media",
        // "Mentored 2 junior developers and conducted technical workshops"
      ],
      technologies: ["Java EE", "Spring", "Tailwind CSS", "MySQL"],
      current: true
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey through internships and professional roles, building real-world experience in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center relative z-10">
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>

                {/* Content Card */}
                <div className="flex-1 ml-8 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        <span>{experience.company}</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        experience.type === 'Internship' 
                          ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                          : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                      }`}>
                        {experience.type}
                      </span>
                      {experience.current && (
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-6 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Experience Summary
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                <div className="text-gray-600 dark:text-gray-300">Months of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">2</div>
                <div className="text-gray-600 dark:text-gray-300">Companies Worked With</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
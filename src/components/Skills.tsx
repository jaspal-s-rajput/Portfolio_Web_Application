import React from 'react';
import { Code, Database, Globe, Smartphone, Shield, Coffee } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "Java", level: 88 },
        { name: "Python", level: 75 },
        { name: "JavaScript", level: 67 },
        { name: "TypeScript", level: 62 },
        // { name: "C++", level: 75 },
        { name: "C", level: 65 }
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "HTML5/CSS3", level: 92 },
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 70 },
        { name: "BootStrap", level: 80 },
        { name: "Tailwind CSS", level: 75 },
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Databases",
      color: "from-teal-500 to-teal-600",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 65 },
        { name: "Firebase", level: 60 },
        // { name: "Redis", level: 70 },
        // { name: "SQLite", level: 82 }
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      color: "from-orange-500 to-orange-600",
      skills: [
        // { name: "React Native", level: 80 },
        { name: "FlutterFlow", level: 75 },
        { name: "Android (Java)", level: 55 },
        // { name: "Ionic", level: 65 }
      ]
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Java EE Technologies",
      color: "from-pink-500 to-pink-600",
      skills: [
        { name: "Enterprise Edition", level: 75 },
        { name: "Spring Core", level: 82 },
        { name: "Spring MVC", level: 80 },
        { name: "Spring Boot", level: 83 },
        { name: "Maven", level: 75 },
        // { name: "OpenCV", level: 70 }
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "DevOps & Cloud",
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Git/GitHub", level: 80 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 70 },
        { name: "Linux", level: 85 },
        // { name: "CI/CD", level: 72 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color} text-white mb-6`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Agile/Scrum", "RESTful APIs", "Object Oriented Development", "Microservices", "SDLC",
              "UI/UX Design", "Problem Solving", "Team Leadership", "Technical Writing", "Code Review"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
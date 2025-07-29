import React from 'react';
import { Monitor, Smartphone, Cloud, GitBranch, Palette, Terminal } from 'lucide-react';

const Tools: React.FC = () => {
  const toolCategories = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Development IDEs",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      tools: ["Eclipse IDE","MySQL Workbench", "IntelliJ IDEA", "FlutterFlow", "Visual Studio Code", "Sublime Text"]
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Version Control",
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
      tools: ["Git", "GitHub", "GitHub Desktop"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Platforms",
      color: "bg-gradient-to-r from-teal-500 to-teal-600",
      tools: ["AWS"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design Tools",
      color: "bg-gradient-to-r from-pink-500 to-pink-600",
      tools: ["Figma", "Canva"]
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Development Tools",
      color: "bg-gradient-to-r from-orange-500 to-orange-600",
      tools: ["Docker", "Webpack", "Babel"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Testing & Debug",
      color: "bg-gradient-to-r from-green-500 to-green-600",
      tools: ["Chrome DevTools","Selenium", "JUnit"]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tools & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional development tools and platforms I use to build, test, and deploy applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Software Proficiency */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Software Proficiency
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Microsoft Office Suite", level: 88, color: "from-blue-500 to-blue-600" },
              { name: "Windows OS", level: 75, color: "from-purple-500 to-purple-600" },
              { name: "Linux/Unix Systems", level: 81, color: "from-teal-500 to-teal-600" },
              { name: "Database Management", level: 88, color: "from-orange-500 to-orange-600" }
            ].map((software, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200 dark:text-gray-700"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2.51 * software.level} 251`}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {software.level}%
                    </span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {software.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
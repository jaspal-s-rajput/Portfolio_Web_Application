import React from 'react';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';
import HindNational from "../media/hnbProject.png";
import RgpvSports from "../media/RgpvSports.png";
import YaarsSociety from "../media/yaarsPrjct.png";
import PortfolioApp from "../media/portfolioProject.png";
// import CapyArena from "../media/hnbProject.png";
import Shrium from "../media/shriumPrjct.png";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "SHRIUM - Automotive E-Com. Platform",
      description: "Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration using Stripe API.",
      image: Shrium,
      technologies: ["FlutterFlow", "Dart", "Firebase", "Canva"],
      category: "Cross Platform",
      featured: true,
      liveUrl: "https://byshrium.com/",
      githubUrl: "#",
      stats: { stars: 45, views: 1200 }
    },
    {
      title: "RGPV - SportsConnect",
      description: " Developed web-based sports management system to enhance player & tournament tracking. Implemented player data management, ranking algorithms, & real-time performance tracking.",
      image: RgpvSports,
      technologies: ["Java", "Jakarta EE", "MySQL", "Tomcat 10.1"],
      category: "Full Stack",
      featured: true,
      liveUrl: "#",
      githubUrl: "#",
      stats: { stars: 52, views: 1850 }
    },
    {
      title: "YAARS SOCIETY : NGO Blood Bank Management",
      description: " Built healthcare & community service platform for blood donation & Thalassemia support.",
      image: YaarsSociety,
      technologies: ["React.js", "Typescript", "Spring Boot", "MySQL"],
      category: "Full Stack",
      featured: true,
      liveUrl: "#",
      githubUrl: "#",
      stats: { stars: 63, views: 1200 }
    },
    {
      title: "Hind National E-Banking",
      description: "Built responsive e-banking application, enabling users to manage accounts, transactions, & support requests. Integrated user authentication, dynamic forms, & RBI guideline modules to ensure secure & regulation-compliant banking operations",
      image: HindNational,
      technologies: ["React.js", "CSS3", "Bootstrap", "Node.js", "MongoDB"],
      category: "Web App",
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
      stats: { stars: 42, views: 650 }
    },
    {
      title: "CapyArena : Wildlife Reserve App",
      description: "Developed static website to promote wildlife conservation through curated blogs, educational articles, and awareness campaigns. Designed clean, responsive layouts to ensure accessibility & readability across all devices.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML5 / CSS3", "Bootstrap", "Java", "MySQL"],
      category: "Web App",
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
      stats: { stars: 23, views: 460 }
    },
    {
      title: "Personal Portfolio Appication",
      description: "Created responsive & visually appealing portfolio website to showcase projects, skills, & achievements. Built with clean routing & component-based architecture.",
      image: PortfolioApp,
      technologies: ["React.js", "Tailwind CSS", "TypeScript", "Node.js"],
      category: "Web App",
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
      stats: { stars: 51, views: 960 }
    }
  ];

  const categories = ["All", "Full Stack", "Web App", "Cross Platform", "Machine Learning"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A showcase of my technical projects demonstrating full-stack development, problem-solving skills, and modern technologies
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className={`group relative ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{project.stats.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/jaspal-s-rajput"
            className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
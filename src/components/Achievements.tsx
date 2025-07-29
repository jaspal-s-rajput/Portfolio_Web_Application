import React from 'react';
import { Trophy, Award, Star, Users, BookOpen, Target, Coffee, CrownIcon } from 'lucide-react';
import SportsID from "../media/spId.png";
import SumIntern from "../media/summerIntern.png";
import StateHandball from "../media/stateHand.png";

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Summer Internship 2025",
      subtitle: "FlutterFlow Development",
      description: "Worked with team of 6 developers to create Automotive Spare & Decore Ecom Platform, at Start-Up and collaborated on cross-platform development.",
      date: "May 2025",
      category: "Summer-Intern",
      color: "from-yellow-500 to-orange-500",
      image: SumIntern
    },
    {
      icon: <CrownIcon className="w-8 h-8" />,
      title: "1st Position in State Handball Championship ",
      subtitle: "Indore District",
      description: "Secured 1st position at 45th Junior Boys State Handball Championship 2023. Led team with coordination, strategy, & fostering strong team spirit & discipline.",
      date: "Feb 2023",
      category: "Sports",
      color: "from-orange-500 to-red-500",
      image: StateHandball
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Industrial Training : Cloud Based FullStack ",
      subtitle: "Ardent Computech Pvt. Ltd.",
      description: "Industrial training on 'Cloud-Based Full Stack Development', gaining hands-on experience with cloud deployment, and modern development workflows.",
      date: "Aug 2024",
      category: "Training",
      color: "from-teal-500 to-blue-500",
      image: "https://media.licdn.com/dms/image/v2/D562DAQFvJgo3LJdXdg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1728275425944?e=1754301600&v=beta&t=mYp53Mgb0Lj24-6zCw7KWe8vBydACyx_xJ2NEA5HPbg"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Certified in Agile Project Management",
      subtitle: "Issued by Hp",
      description: "Analyzed the Agile project management tools like Scrum & Kanban, and applied agile ways of working to project management & product development across teams.",
      date: "May 2025",
      category: "Project Management",
      color: "from-green-500 to-teal-500",
      image: "https://media.licdn.com/dms/image/v2/D562DAQHWoKOg9XGh3w/profile-treasury-image-shrink_800_800/B56ZaUEehEHgAc-/0/1746240926566?e=1754301600&v=beta&t=SZcD08hx1glyv1ZMwObLA_3SKxS7rYP8_bNTC1y2hj4"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Open Source Contributor",
      subtitle: "Spring",
      description: "Contributed to multiple open-source projects with 50+ merged pull requests and code preserved in Spring and still ongoing.",
      date: "Ongoing",
      category: "Open Source",
      color: "from-purple-500 to-pink-500",
      image: "https://download.logo.wine/logo/Spring_Framework/Spring_Framework-Logo.wine.png"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "University Handball Team Captain",
      subtitle: "From 2022 to 2024",
      description: "Led university handball team in various inter-college & regional tournaments. Responsible for team coordination, strategy, & fostering strong team spirit and discipline.",
      date: "Aug 2022",
      category: "Sports",
      color: "from-blue-500 to-purple-500",
      image: SportsID
    }
  ];

  const certifications = [
    { name: "Cloud Infrastructure Associate", issuer: "Oracle", date: "2025", logo: Coffee },
    { name: "Java Foundation Certification", issuer: "Infosys", date: "2025", logo: Coffee },
    { name: "Data Structure Using Java", issuer: "NPTEL", date: "2024", logo: Coffee },
    { name: "Front-End Developer", issuer: "Meta", date: "2023", logo: Coffee },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Milestones and recognitions that mark my journey in technology and academic excellence
          </p>
        </div>

        {/* Main Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="group">
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Achievement Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 text-white text-sm">
                    {achievement.date}
                  </div>
                </div>

                {/* Achievement Content */}
                <div className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                    {achievement.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {achievement.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  {cert.name.charAt(0)}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Achievement Highlights</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Awards & Recognition</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8+</div>
              <div className="text-blue-100">Professional Certifications</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">N/A</div>
              <div className="text-blue-100">Open Source Contributions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8.7</div>
              <div className="text-blue-100">Graduation CGPA</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to learn more about my achievements?
          </p>
          <a href='http://www.linkedin.com/in/jaspal-singh-rajput-a63321214'>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 shadow-lg">
              View Complete Portfolio
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
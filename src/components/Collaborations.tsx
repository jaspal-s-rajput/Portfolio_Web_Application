// import React from 'react';
// import { Users, GitBranch, Globe, Heart, Star, ExternalLink } from 'lucide-react';

// const Collaborations: React.FC = () => {
//   const collaborations = [
//     {
//       title: "Open Source Library - ReactFlow Pro",
//       type: "Open Source",
//       role: "Core Contributor",
//       collaborators: ["Sarah Chen", "Mike Rodriguez", "Priya Patel"],
//       description: "Contributing to a popular React library for building interactive flow charts and diagrams, used by 10k+ developers worldwide.",
//       contributions: [
//         "Implemented drag-and-drop functionality for custom nodes",
//         "Fixed critical performance issues with large datasets",
//         "Added TypeScript support and comprehensive documentation",
//         "Mentored 5 new contributors through their first PRs"
//       ],
//       technologies: ["React", "TypeScript", "D3.js", "WebGL"],
//       impact: "10k+ weekly downloads, 2.5k GitHub stars",
//       duration: "Jan 2023 - Present",
//       image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
//       githubUrl: "#",
//       websiteUrl: "#"
//     },
//     {
//       title: "EcoTrack - Environmental Monitoring App",
//       type: "Team Project",
//       role: "Full-Stack Developer",
//       collaborators: ["Alex Johnson", "Maria Garcia", "David Kim", "Lisa Wang"],
//       description: "Collaborative project to build a mobile app for tracking environmental data and promoting sustainable practices in local communities.",
//       contributions: [
//         "Developed RESTful APIs for data collection and analysis",
//         "Built responsive web dashboard with real-time analytics",
//         "Integrated IoT sensors for air quality monitoring",
//         "Implemented user gamification features"
//       ],
//       technologies: ["React Native", "Node.js", "MongoDB", "AWS IoT"],
//       impact: "Used by 3 environmental NGOs, 500+ active users",
//       duration: "Aug 2022 - Dec 2022",
//       image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400",
//       githubUrl: "#",
//       websiteUrl: "#"
//     },
//     {
//       title: "DevCommunity Hub",
//       type: "Community Initiative",
//       role: "Technical Lead",
//       collaborators: ["Tech enthusiasts from 15+ countries"],
//       description: "Leading a global community of developers focused on knowledge sharing, mentorship, and collaborative learning through workshops and hackathons.",
//       contributions: [
//         "Organized 12+ virtual workshops with 200+ attendees",
//         "Built community platform with learning resources",
//         "Mentored 20+ junior developers in their career journey",
//         "Coordinated international hackathon with $10k prize pool"
//       ],
//       technologies: ["Discord.js", "Next.js", "Firebase", "Zoom API"],
//       impact: "1.5k+ community members, 50+ success stories",
//       duration: "Jun 2022 - Present",
//       image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
//       githubUrl: "#",
//       websiteUrl: "#"
//     },
//     {
//       title: "AI Research Paper - Neural Style Transfer",
//       type: "Academic Research",
//       role: "Co-Researcher",
//       collaborators: ["Dr. Emily Roberts", "Raj Patel", "Anna Kowalski"],
//       description: "Collaborative research on improving neural style transfer algorithms for real-time video processing, published in IEEE conference proceedings.",
//       contributions: [
//         "Developed optimized CNN architecture for mobile devices",
//         "Conducted extensive experiments on style transfer quality",
//         "Co-authored research paper with detailed findings",
//         "Presented findings at International AI Conference"
//       ],
//       technologies: ["Python", "TensorFlow", "OpenCV", "CUDA"],
//       impact: "50+ citations, presented at 3 conferences",
//       duration: "Mar 2023 - Aug 2023",
//       image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
//       githubUrl: "#",
//       websiteUrl: "#"
//     }
//   ];

//   const partnerOrganizations = [
//     { name: "Mozilla Foundation", logo: "M", contribution: "Firefox Developer Tools" },
//     { name: "Apache Foundation", logo: "A", contribution: "Open Source Libraries" },
//     { name: "Google Summer of Code", logo: "G", contribution: "Student Developer" },
//     { name: "Hacktoberfest", logo: "H", contribution: "Active Contributor" }
//   ];

//   return (
//     <section id="collaborations" className="py-20 bg-gray-50 dark:bg-gray-800">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Collaborations & Partnerships
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Working together with talented individuals and organizations to create meaningful impact through technology
//           </p>
//         </div>

//         {/* Main Collaborations */}
//         <div className="space-y-12 mb-16">
//           {collaborations.map((collab, index) => (
//             <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="grid lg:grid-cols-3 gap-8">
//                 {/* Project Image */}
//                 <div className="lg:col-span-1">
//                   <div className="relative h-64 lg:h-full rounded-xl overflow-hidden">
//                     <img
//                       src={collab.image}
//                       alt={collab.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                     <div className="absolute bottom-4 left-4">
//                       <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
//                         {collab.type}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Project Details */}
//                 <div className="lg:col-span-2">
//                   <div className="flex flex-col h-full">
//                     <div className="flex-1">
//                       <div className="flex items-start justify-between mb-4">
//                         <div>
//                           <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//                             {collab.title}
//                           </h3>
//                           <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
//                             <span className="flex items-center space-x-1">
//                               <Users className="w-4 h-4" />
//                               <span>{collab.role}</span>
//                             </span>
//                             <span>{collab.duration}</span>
//                           </div>
//                         </div>
//                         <div className="flex space-x-2">
//                           <a href={collab.githubUrl} className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
//                             <GitBranch className="w-5 h-5" />
//                           </a>
//                           <a href={collab.websiteUrl} className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
//                             <ExternalLink className="w-5 h-5" />
//                           </a>
//                         </div>
//                       </div>

//                       <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
//                         {collab.description}
//                       </p>

//                       {/* Collaborators */}
//                       <div className="mb-6">
//                         <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
//                           Key Collaborators:
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                           {collab.collaborators.map((collaborator, collabIndex) => (
//                             <span
//                               key={collabIndex}
//                               className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm"
//                             >
//                               <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
//                                 {collaborator.split(' ').map(n => n[0]).join('')}
//                               </div>
//                               <span>{collaborator}</span>
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Contributions */}
//                       <div className="mb-6">
//                         <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
//                           My Contributions:
//                         </h4>
//                         <ul className="space-y-2">
//                           {collab.contributions.map((contribution, contribIndex) => (
//                             <li key={contribIndex} className="flex items-start space-x-3">
//                               <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
//                               <span className="text-gray-700 dark:text-gray-300 text-sm">
//                                 {contribution}
//                               </span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>

//                     {/* Bottom Section */}
//                     <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
//                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//                         {/* Technologies */}
//                         <div className="flex flex-wrap gap-2">
//                           {collab.technologies.map((tech, techIndex) => (
//                             <span
//                               key={techIndex}
//                               className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>

//                         {/* Impact */}
//                         <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
//                           <Star className="w-4 h-4 text-yellow-500" />
//                           <span>{collab.impact}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Partner Organizations */}
//         <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
//           <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
//             Partner Organizations
//           </h3>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {partnerOrganizations.map((org, index) => (
//               <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-200">
//                 <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
//                   {org.logo}
//                 </div>
//                 <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
//                   {org.name}
//                 </h4>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">
//                   {org.contribution}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Collaboration Stats */}
//         <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
//           <h3 className="text-2xl font-bold text-center mb-8">Collaboration Impact</h3>
//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-4xl font-bold mb-2">25+</div>
//               <div className="text-blue-100">Active Collaborations</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold mb-2">15k+</div>
//               <div className="text-blue-100">Community Members</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold mb-2">100+</div>
//               <div className="text-blue-100">Open Source Contributions</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold mb-2">50+</div>
//               <div className="text-blue-100">Developers Mentored</div>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//             Let's Collaborate!
//           </h3>
//           <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
//             I'm always excited to work on meaningful projects with talented individuals and organizations. 
//             Let's create something amazing together!
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 shadow-lg">
//               <Heart className="w-5 h-5 inline mr-2" />
//               Start a Collaboration
//             </button>
//             <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-200">
//               <Globe className="w-5 h-5 inline mr-2" />
//               Join Our Community
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Collaborations;
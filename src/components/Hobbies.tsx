import React from 'react';
import { TrophyIcon, BookOpen, Code, Mountain, Crown , Palette, MountainIcon} from 'lucide-react';
import Art from "../media/art.png"
import Sports from "../media/sport.jpg"

const Hobbies: React.FC = () => {
  const hobbies = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Competitive Programming",
      description: "Participating in coding contests on CodeChef and LeetCode. Love solving algorithmic challenges and improving problem-solving skills.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-blue-500 to-cyan-500",
      stats: "250+ problems solved"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Chess",
      description: "Passionate chess player with a strong competitive background. Participated in multiple regional and national-level tournaments.",
      image: "https://wallpapers.com/images/featured/chess-background-na0c3ufv4kcfdcmk.jpg",
      color: "from-purple-500 to-pink-500",
      stats: "500+ proffesional matches"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Sketching Nature's & Cultural Portraits",
      description: "Drawing portraits inspired by nature and diverse cultures. Focused on capturing the essence of tradition, landscapes, and heritage through detailed, expressive artwork.",
      image: Art,
      color: "from-orange-500 to-red-500",
      stats: "50+ Sketches created"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Book Reading",
      description: "Reading personal development and productivity books such as Atomic Habits and The Power of Now to gain insights on mindset, discipline, & continuous growth.",
      image: "https://img.drz.lazcdn.com/static/np/p/4b5697a527a477f6de475c1c9c28cd3a.png_720x720q80.png",
      color: "from-green-500 to-teal-500",
      stats: "15+ Books"
    },
    {
      icon: <TrophyIcon className="w-8 h-8" />,
      title: "Sports",
      description: "Engaged in competitive sports including volleyball, kabaddi, badminton, and handball. Passionate about teamwork, strategy, and building resilience.",
      image: Sports,
      color: "from-indigo-500 to-purple-500",
      stats: "Love to play Outdoor Games"
    },
    {
      icon: <MountainIcon className="w-8 h-8" />,
      title: "Travel & Adventure",
      description: "Exploring new cultures and places, always seeking adventure and new experiences. Love trekking, hiking, and discovering hidden gems around the world.",
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-yellow-500 to-orange-500",
      stats: "12 cities visited"
    }
  ];

  const personalInterests = [
    { icon: <Crown className="w-5 h-5" />, name: "Chess Enthusiast", description: "Wizard of 4-In-Mate" },
    { icon: <Mountain className="w-5 h-5" />, name: "Hiking", description: "Weekend warrior" },
    { icon: <BookOpen className="w-5 h-5" />, name: "Reading", description: "Self Growth & Tech books" },
    { icon: <TrophyIcon className="w-5 h-5" />, name: "Outdoor Games", description: "Passionate about Sports" }
  ];

  return (
    <section id="hobbies" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hobbies & Interests
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Beyond coding, I'm passionate about creative pursuits and activities that inspire innovation and personal growth
          </p>
        </div>

        {/* Main Hobbies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {hobbies.map((hobby, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Hobby Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${hobby.color} text-white mb-2`}>
                      {hobby.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {hobby.stats}
                  </div>
                </div>

                {/* Hobby Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {hobby.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Interests */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Personal Interests
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInterests.map((interest, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {interest.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {interest.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hobby Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Creative Journey
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              <div className="space-y-12">
                {[
                  { year: "2020", milestone: "Started to know more about Web Development" },
                  { year: "2021", milestone: "Began Programming in Java" },
                  { year: "2022", milestone: "Learnt more about Java EE Technologies" },
                  { year: "2023", milestone: "Started Projects on Java based Web Application" },
                  { year: "2024", milestone: "Worked on Minor and Major Projects for fulfillment of B.Tech." },
                  { year: "2025", milestone: "Internship at Byshrium Ent. Pvt. Ltd. developed Cross-Platform Application (Desktop/IOS/Android)" },
                ].map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                        <p className="text-gray-700 dark:text-gray-300">{item.milestone}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Fun Facts About Me</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl mb-2">🎵</div>
              <p>Enjoy (Continental/Cultural/Spiritual) Songs and Music</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📸</div>
              <p>Captured sunrise from 5 different mountain peaks</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🤾🏻‍♂️</div>
              <p>Always ready for outdoor games [24/7]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
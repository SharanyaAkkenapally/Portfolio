'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Calendar, GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Master of Applied Computer Science',
    university: 'Concordia University',
    location: 'Montreal, Quebec, Canada',
    period: 'Sep 2022 - May 2024',
    gradient: 'from-indigo-600 to-purple-600',
    achievements: [
      'Specialized in AI and Machine Learning with focus on deep learning and neural networks',
      'Completed advanced coursework in Natural Language Processing and Computer Vision',
      'Research projects in transformer architectures and generative AI models',
    ],
  },
  {
    degree: 'B.Tech in Information Technology',
    university: 'Sreenidhi Institute of Science and Technology',
    location: 'Hyderabad, India',
    period: 'Aug 2018 - July 2022',
    gradient: 'from-orange-600 to-red-600',
    achievements: [
      'Graduated with focus on software engineering and data structures',
      'Completed projects in machine learning and data science',
      'Active participation in technical clubs and coding competitions',
    ],
  },
];

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-4 md:p-6">
        <motion.div
          className="flex justify-between items-center max-w-7xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <motion.div
              className="text-xl md:text-2xl font-bold text-white cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.div>
          </Link>
          <div className="flex gap-2 md:gap-4 lg:gap-6 flex-wrap justify-end">
            {['Projects', 'Experience', 'Education', 'Hobbies', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item === 'Experience' ? '/experience' : item === 'Projects' ? '/projects' : item === 'Education' ? '/education' : `/${item.toLowerCase()}`}
                  className={`relative text-gray-300 hover:text-purple-400 transition-colors duration-300 group text-sm md:text-base ${
                    item === 'Education' ? 'text-purple-400' : ''
                  }`}
                >
                  {item}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: '100%' }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 name-font"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="gradient-text">Education</span>
            </motion.h1>
          </motion.div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="group"
              >
                <div className={`glass rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden h-full`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg`}>
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Degree */}
                    <h3 className="text-2xl font-bold text-white mb-3">{edu.degree}</h3>
                    
                    {/* University */}
                    <p className="text-xl text-purple-300 font-semibold mb-6">{edu.university}</p>
                    
                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mt-6 pt-6 border-t border-purple-500/20">
                      <h4 className="text-sm font-semibold text-purple-300 mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                            <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}


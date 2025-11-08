'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { MapPin, Calendar, Briefcase, Menu, X } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'Draft & Goal',
    position: 'Data Scientist',
    location: 'Montreal, Quebec, Canada',
    type: 'Permanent Full-time',
    period: 'Feb 2025 - Present',
    duration: '10 mos',
    workType: 'Hybrid',
    description: [
      'Developing and implementing AI solutions to automate complex marketing workflows and content generation processes.',
      'Designing agentic systems that leverage machine learning algorithms to create scalable, data-driven automation solutions for enterprise clients.',
      'Building multi-agent workflows that optimize content creation, SEO strategies, and large-scale data processing tasks.',
      'Collaborating with cross-functional teams to transform traditional manual processes into autonomous AI-powered systems, delivering measurable improvements in efficiency and cost reduction.',
      'Contributing to the development of no-code platform that enable clients to deploy AI workflows without technical expertise.'
    ],
    gradient: 'from-purple-600 to-pink-600',
    isCurrent: true,
  },
  {
    id: 2,
    company: 'Cognizant',
    position: 'Data Science Intern',
    location: 'Hyderabad, India',
    type: 'Internship',
    period: 'Mar 2022 - June 2022',
    duration: '4 mos',
    workType: 'Remote',
    description: [
      'Collaborated cross-functionally with data engineering teams and product managers, ensuring scalable data pipelines for seamless integration, utilizing agile development methodologies.',
      'Developed end-to-end fraud detection systems using LSTM-based RNNs, improving detection accuracy by 15%.',
      'Designed scalable ML pipelines for large-scale dataset, automated data workflows using Python and SQL, reducing deployment time by 20%.',
      'Implemented ETL pipelines to extract, transform, and load data from diverse sources into cloud-based infrastructures to enhance data collection and validation processes.',
      'Managed infrastructure using containerization and orchestration tools such as Docker and Kubernetes, CI/CD pipelines, MLOps practices with model monitoring and retraining.',
      'Created Power BI dashboards to communicate actionable insights to technical and non-technical stakeholders for performance monitoring using KPIs.'
    ],
    gradient: 'from-blue-600 to-cyan-600',
    isCurrent: false,
  },
  {
    id: 3,
    company: 'Technocolabs Softwares Inc',
    position: 'Data Science Intern',
    location: 'Hyderabad, India',
    type: 'Internship',
    period: 'May 2021 - Aug 2021',
    duration: '4 mos',
    workType: 'Remote',
    description: [
      'Enhanced model accuracy by 15% through data augmentation techniques and temporal transformations.',
      'Utilized AWS Sagemaker to optimize ML workflows, leveraging cloud infrastructure for scalable data storage and distributed processing.',
      'Achieved 85% classification accuracy in time series forecasting for stock price prediction using Logistic Regression, SVM, and optimized models via Grid/Random Search.',
      'Utilized SQL for querying relational databases, data extraction, transformation, and performing aggregations.',
      'Utilized Python for data preprocessing, data wrangling, feature engineering, exploratory data analysis to identify trends, and statistical techniques.',
      'Built interactive dashboards with Tableau to support strategic decision-making and effectively communicate insights, built automated reports enhancing data accessibility and efficiency.'
    ],
    gradient: 'from-green-600 to-emerald-600',
    isCurrent: false,
  },
];

export default function ExperiencePage() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4 lg:gap-6">
            {['Projects', 'Experience', 'Education', 'Hobbies', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item === 'Experience' ? '/experience' : item === 'Projects' ? '/projects' : item === 'Education' ? '/education' : `/${item.toLowerCase()}`}
                  className={`relative text-gray-300 hover:text-purple-400 transition-colors duration-300 group text-base ${
                    item === 'Experience' ? 'text-purple-400' : ''
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="glass rounded-lg border border-purple-500/20 p-4 space-y-3">
                {['Projects', 'Experience', 'Education', 'Hobbies', 'Contact'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item === 'Experience' ? '/experience' : item === 'Projects' ? '/projects' : item === 'Education' ? '/education' : `/${item.toLowerCase()}`}
                      className={`block text-gray-300 hover:text-purple-400 transition-colors duration-300 py-2 text-base ${
                        item === 'Experience' ? 'text-purple-400' : ''
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
              <span className="gradient-text">Experience</span>
            </motion.h1>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Work Experience</h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Experience Items */}
              <div className="relative">
                {experiences.map((exp, index) => (
                  <div key={exp.id} className="relative mb-12 last:mb-0">
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
                    >
                      {/* Timeline Dot */}
                      <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${exp.gradient} border-4 border-black shadow-lg z-20 ${exp.isCurrent ? 'animate-pulse' : ''}`} style={{ top: '1.5rem' }} />
                      
                      {/* Connecting Line - Only in the gap between cards */}
                      {index < experiences.length - 1 && (
                        <div 
                          className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 opacity-30 z-0"
                          style={{ 
                            top: '100%',
                            height: '3rem',
                          }}
                        />
                      )}

                      {/* Content Card */}
                      <div className={`ml-20 md:ml-0 md:${index % 2 === 0 ? 'mr-[55%]' : 'ml-[55%]'} relative z-10`}>
                      <motion.div
                        className="glass rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                        onClick={() => setExpandedExperience(expandedExperience === exp.id ? null : exp.id)}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                        
                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                              <p className="text-xl text-purple-300 font-semibold mb-2">{exp.company}</p>
                            </div>
                            {exp.isCurrent && (
                              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                                Current
                              </span>
                            )}
                          </div>

                          {/* Meta Information */}
                          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              <span>{exp.type} · {exp.workType}</span>
                            </div>
                          </div>

                          {/* Description Preview */}
                          <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                            {exp.description[0]}
                          </p>

                          {/* Expandable Details */}
                          {expandedExperience === exp.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-purple-500/20 overflow-hidden"
                            >
                              <ul className="space-y-3">
                                {exp.description.map((desc, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                                    <span className={`text-purple-400 mt-1 flex-shrink-0`}>•</span>
                                    <span>{desc}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}

                          {/* Expand/Collapse Indicator */}
                          <div className="mt-4 text-purple-400 text-sm font-semibold flex items-center gap-2">
                            {expandedExperience === exp.id ? 'Show Less' : 'View Details'}
                            <motion.span
                              animate={{ rotate: expandedExperience === exp.id ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              ↓
                            </motion.span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}


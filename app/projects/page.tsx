'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X, Calendar, ChevronDown, ChevronUp, Menu } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Retrieval Augmented Generation with LangChain and ChromaDB',
    date: 'Nov, 2024',
    shortDescription: 'RAG system for semantic search and context-aware Q&A',
    fullDescription: [
      'Developed a Retrieval-Augmented Generation system using OpenAI embeddings and Chroma for Semantic Search.',
      'Preprocessed large documents into chunks, created vector embeddings, and retrieved context for user queries, achieving a query relevance score of 85%.',
      'Combined OpenAI\'s ChatGPT and embedding models to create a robust pipeline for generating detailed, context-aware answers.'
    ],
    technologies: ['LangChain', 'ChromaDB', 'OpenAI', 'Python', 'Vector Embeddings', 'RAG'],
    metrics: ['85% Query Relevance Score'],
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    id: 2,
    title: 'Taxi Demand Prediction',
    date: 'Oct, 2024',
    shortDescription: 'Ensemble ML model for hourly demand forecasting',
    fullDescription: [
      'Conducted EDA and engineered time-based and interaction features to capture temporal patterns.',
      'Built and optimized an ensemble model (XGBoost, LightGBM, Random Forest) using Bayesian Optimization for hyperparameter tuning to improve hourly demand forecasting, resulting in 18% decrease in MAE.',
      'Integrated time-series weather forecasts, including lagged features and seasonal adjustments, to account for real-time environmental factors in demand fluctuations.'
    ],
    technologies: ['XGBoost', 'LightGBM', 'Random Forest', 'Bayesian Optimization', 'Time Series', 'Python'],
    metrics: ['18% Decrease in MAE'],
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    id: 3,
    title: 'Transformer-based TTS System for Speech Synthesis',
    date: 'Feb - Apr, 2024',
    shortDescription: 'Advanced TTS model with SpeechBrain framework',
    fullDescription: [
      'Developed a Transformer-based Text-to-Speech (TTS) model with the LJSpeech dataset, improving speech quality and optimizing performance using the SpeechBrain framework.',
      'Accelerated training using CUDA, cuDNN, and parallel processing, improving computational efficiency by 25%, conducted model evaluation, and employed distributed training and GPU optimization to enhance model efficiency.',
      'Applied scaled positional encodings and dynamic batching, reducing Mel Error to 8.27e-02 and Stop Error by 10%.'
    ],
    technologies: ['Transformers', 'SpeechBrain', 'PyTorch', 'CUDA', 'LJSpeech', 'Deep Learning'],
    metrics: ['25% Efficiency Improvement', 'Mel Error: 8.27e-02', '10% Stop Error Reduction'],
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    id: 4,
    title: 'Dialogue Summarization: Fine-tuning LLM with PEFT',
    date: 'Dec 2023 - Jan 2024',
    shortDescription: 'Fine-tuned FLAN-T5 for dialogue summarization',
    fullDescription: [
      'Explored and Fine-tuned FLAN-T5 Language Model from Hugging Face for dialogue summarization using prompt engineering, instruction fine-tuning, and in-context learning pipelines to enhance response quality.',
      'Conducted model fine-tuning and parameter optimization (e.g., temperature settings, token limits) to improve text summarization and output quality.',
      'Applied PEFT (LoRA), updating just 2-12% of parameters, reducing model size for fine-tuning and optimization. Improved ROUGE-1 by 17.47% and ROUGE-2 by 8.73% over human baseline summaries, ensuring efficient accuracy of text summarization.'
    ],
    technologies: ['FLAN-T5', 'PEFT', 'LoRA', 'Hugging Face', 'Prompt Engineering', 'NLP'],
    metrics: ['17.47% ROUGE-1 Improvement', '8.73% ROUGE-2 Improvement', '2-12% Parameter Update'],
    gradient: 'from-orange-600 to-red-600',
  },
  {
    id: 5,
    title: 'Automated Retail Product Classification using CNN',
    date: 'Oct - Dec, 2022',
    shortDescription: 'CNN-based classification system for grocery products',
    fullDescription: [
      'Designed Convolutional Neural Networks architectures (ResNet-18, GoogleNet, AlexNet) to classify grocery products, addressing class imbalance with weighting and oversampling.',
      'Performed data augmentation, model scaling and utilized grid search for hyperparameter optimization, fine-tuning and implemented statistical methodologies for performance measurement.',
      'Leveraged transfer learning by fine-tuning ResNet-18 with pre-trained ImageNet weights, resulting in an 8% increase in classification accuracy.'
    ],
    technologies: ['ResNet-18', 'GoogleNet', 'AlexNet', 'Transfer Learning', 'CNN', 'Computer Vision'],
    metrics: ['8% Accuracy Increase'],
    gradient: 'from-indigo-600 to-purple-600',
  },
];

export default function ProjectsPage() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'gallery' | 'workflow'>('gallery');
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
                  href={item === 'Projects' ? '/projects' : item === 'Experience' ? '/experience' : item === 'Education' ? '/education' : `/${item.toLowerCase()}`}
                  className={`relative text-gray-300 hover:text-purple-400 transition-colors duration-300 group text-base ${
                    item === 'Projects' ? 'text-purple-400' : ''
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
                      href={item === 'Projects' ? '/projects' : item === 'Experience' ? '/experience' : item === 'Education' ? '/education' : `/${item.toLowerCase()}`}
                      className={`block text-gray-300 hover:text-purple-400 transition-colors duration-300 py-2 text-base ${
                        item === 'Projects' ? 'text-purple-400' : ''
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 name-font"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="gradient-text">Projects</span>
            </motion.h1>

            {/* View Mode Toggle */}
            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={() => setViewMode('gallery')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  viewMode === 'gallery'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                    : 'glass text-gray-300 hover:text-white border border-purple-500/30'
                }`}
              >
                Gallery
              </button>
              <button
                onClick={() => setViewMode('workflow')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  viewMode === 'workflow'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                    : 'glass text-gray-300 hover:text-white border border-purple-500/30'
                }`}
              >
                Workflow
              </button>
            </motion.div>
          </motion.div>

          {/* Gallery View */}
          <AnimatePresence mode="wait">
            {viewMode === 'gallery' && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative h-full glass rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />
                      <div className="relative p-6 h-full flex flex-col">
                        <div className="mb-3 flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{project.date}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-4">
                          {project.shortDescription}
                        </p>

                        {/* Expandable Content */}
                        <AnimatePresence>
                          {expandedProject === project.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 border-t border-purple-500/20 space-y-4">
                                <div>
                                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Details:</h4>
                                  <ul className="space-y-2 text-sm text-gray-400">
                                    {project.fullDescription.map((desc, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <span className="text-purple-500 mt-1">•</span>
                                        <span>{desc}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Technologies:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                      <span
                                        key={tech}
                                        className="px-2 py-1 text-xs rounded glass border border-purple-500/20 text-gray-400"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Metrics:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {project.metrics.map((metric, idx) => (
                                      <span
                                        key={idx}
                                        className={`px-3 py-1 text-xs rounded bg-gradient-to-r ${project.gradient} text-white font-semibold`}
                                      >
                                        {metric}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Expand/Collapse Button */}
                        <button
                          onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                          className="mt-4 flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors"
                        >
                          {expandedProject === project.id ? (
                            <>
                              <span>Show Less</span>
                              <ChevronUp className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              <span>View Details</span>
                              <ChevronDown className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Workflow View */}
            {viewMode === 'workflow' && (
              <motion.div
                key="workflow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                <div className="relative w-full min-h-[400px] md:min-h-[700px] py-12 overflow-visible">
                  {/* Workflow Container */}
                  <div className="relative flex justify-center items-center">
                    {/* Mobile: Vertical Layout, Desktop: Horizontal Layout */}
                    <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-4 justify-center">
                      {projects.map((project, index) => {
                        // Get short title for display
                        const shortTitle = project.title.length > 20 
                          ? project.title.substring(0, 20) + '...' 
                          : project.title;
                        
                        return (
                          <div key={project.id} className="relative flex flex-col md:flex-row items-center">
                            {/* Workflow Node */}
                            <motion.div
                              className="relative cursor-pointer z-10"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: index * 0.2,
                                type: "spring",
                                stiffness: 150
                              }}
                              onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                              whileHover={{ scale: 1.1, y: -5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {/* Node Container */}
                              <div className="relative">
                                <div
                                  className={`w-32 h-32 md:w-48 md:h-48 rounded-xl glass border-3 border-purple-500/60 flex flex-col items-center justify-center bg-gradient-to-br ${project.gradient} bg-opacity-25 hover:bg-opacity-40 transition-all duration-300 shadow-xl shadow-purple-500/30 p-3 md:p-4 relative overflow-hidden`}
                                >
                                  {/* Glow effect */}
                                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 hover:opacity-20 transition-opacity duration-300`} />
                                  
                                  {/* Node Content */}
                                  <div className="text-center w-full relative z-10">
                                    <div className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-3 drop-shadow-lg">
                                      {project.id}
                                    </div>
                                    <div className="text-xs md:text-sm text-purple-100 font-semibold leading-tight px-2 line-clamp-2">
                                      {shortTitle}
                                    </div>
                                  </div>
                                  
                                </div>
                                
                                {/* Hover Tooltip - Hidden on mobile */}
                                <motion.div
                                  className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 text-center pointer-events-none z-30"
                                  initial={{ opacity: 0, y: -10 }}
                                  whileHover={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <div className="glass rounded-lg p-4 border border-purple-500/40 shadow-xl">
                                    <div className="text-sm font-semibold text-white mb-2">
                                      {project.title}
                                    </div>
                                    <div className="text-xs text-gray-400">{project.date}</div>
                                    <div className="text-xs text-purple-300 mt-2">Click to view details</div>
                                  </div>
                                </motion.div>
                              </div>
                            </motion.div>

                            {/* Workflow Edge/Connection */}
                            {index < projects.length - 1 && (
                              <motion.div
                                className="relative flex items-center my-2 md:my-0 md:mx-4 z-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                              >
                                {/* Mobile: Vertical Line, Desktop: Horizontal Line */}
                                <div className="relative w-2 h-12 md:w-24 md:h-2 overflow-hidden">
                                  {/* Main gradient line with glow */}
                                  <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/70" />
                                  <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-full blur-sm opacity-50" />
                                  
                                  {/* Animated flow effect - Vertical on mobile, Horizontal on desktop */}
                                  <motion.div
                                    className="absolute top-0 left-0 w-full h-full"
                                    initial={{ y: '-100%', x: '-100%' }}
                                    animate={{ 
                                      y: ['-100%', '100%'],
                                      x: ['-100%', '100%']
                                    }}
                                    transition={{ 
                                      duration: 3, 
                                      repeat: Infinity,
                                      repeatDelay: 1,
                                      ease: "easeInOut",
                                      delay: index * 0.5
                                    }}
                                  >
                                    <div className="w-full h-full bg-gradient-to-b md:bg-gradient-to-r from-transparent via-white/90 to-transparent rounded-full" />
                                  </motion.div>
                                  
                                  {/* Arrow head - Vertical on mobile, Horizontal on desktop */}
                                  <div className="absolute bottom-0 md:bottom-auto md:right-0 left-1/2 md:left-auto md:top-1/2 transform -translate-x-1/2 md:translate-x-full md:-translate-y-1/2 translate-y-full md:translate-y-0">
                                    <div className="w-0 h-0 border-t-[10px] md:border-t-[5px] md:border-l-[10px] border-t-pink-500 md:border-l-pink-500 border-b-0 md:border-b-[5px] border-b-transparent md:border-b-transparent border-l-0 md:border-r-0 border-r-0 md:border-r-transparent drop-shadow-xl" />
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Expanded Project Details Modal */}
                <AnimatePresence>
                  {expandedProject && (
                    <motion.div
                      className="fixed inset-0 z-50 flex items-center justify-center p-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setExpandedProject(null)}
                    >
                      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                      <motion.div
                        className="relative glass rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {(() => {
                          const project = projects.find((p) => p.id === expandedProject);
                          if (!project) return null;
                          return (
                            <div className="p-8">
                              <button
                                onClick={() => setExpandedProject(null)}
                                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                              >
                                <X className="w-6 h-6" />
                              </button>

                              <div className="mb-6">
                                <div className="flex items-center gap-3 mb-4">
                                  <div
                                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl font-bold text-white`}
                                  >
                                    {project.id}
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                                      <Calendar className="w-4 h-4" />
                                      <span>{project.date}</span>
                                    </div>
                                  </div>
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                              </div>

                              <div className="mb-6">
                                <h3 className="text-lg font-semibold text-purple-300 mb-3">Description</h3>
                                <ul className="space-y-2 text-gray-300 leading-relaxed">
                                  {project.fullDescription.map((desc, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <span className="text-purple-500 mt-1">•</span>
                                      <span>{desc}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="mb-6">
                                <h3 className="text-lg font-semibold text-purple-300 mb-3">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                  {project.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-3 py-1 rounded-lg glass border border-purple-500/30 text-sm text-gray-300"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h3 className="text-lg font-semibold text-purple-300 mb-3">Key Metrics</h3>
                                <div className="flex flex-wrap gap-2">
                                  {project.metrics.map((metric, idx) => (
                                    <span
                                      key={idx}
                                      className={`px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-sm font-semibold text-white`}
                                    >
                                      {metric}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        })()}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

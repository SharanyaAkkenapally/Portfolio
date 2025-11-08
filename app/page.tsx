'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number }>>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return;

    try {
      const width = window.innerWidth || 1920;
      const height = window.innerHeight || 1080;

      // Initialize particles
      const initialParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));
      setParticles(initialParticles);

      // Mouse tracking
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);

      // Animate particles
      let animationId: number;
      const animate = () => {
        setParticles((prev) => {
          if (prev.length === 0) return prev;
          return prev.map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vx: p.x <= 0 || p.x >= width ? -p.vx : p.vx,
            vy: p.y <= 0 || p.y >= height ? -p.vy : p.vy,
          }));
        });
        animationId = requestAnimationFrame(animate);
        animationFrameRef.current = animationId;
      };
      animationId = requestAnimationFrame(animate);
      animationFrameRef.current = animationId;

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (animationFrameRef.current !== null) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    } catch (error) {
      console.error('Error in particle animation:', error);
    }
  }, []);

  const navItems = [
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Education', href: '/education' },
    { name: 'Hobbies', href: '/hobbies' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-500 rounded-full opacity-30"
            style={{
              left: particle.x,
              top: particle.y,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Mouse follower effect */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      />

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <motion.div
          className="flex justify-between items-center max-w-7xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.div>
          <div className="flex gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
                >
                  {item.name}
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

      {/* Hero Section */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Profile Picture */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
                <Image
                  src="/DnG_Sharanya.png"
                  alt="Sharanya Akkenapally"
                  width={224}
                  height={224}
                  className="object-cover w-full h-full"
                  priority
                  unoptimized
                />
              </div>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-5xl mb-10 name-font"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="gradient-text name-first font-bold">Sharanya</span>
              <br />
              <span className="text-white name-last font-bold">Akkenapally</span>
            </motion.h1>

            <motion.div
              className="flex gap-6 justify-center flex-wrap mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 text-sm bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white shadow-lg shadow-purple-500/50 inline-block"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                View Resume
              </motion.a>
              <Link href="/contact">
                <motion.button
                  className="px-12 py-5 text-sm glass rounded-lg font-semibold text-white border border-purple-500/50"
                  whileHover={{ scale: 1.05, borderColor: "rgba(147, 51, 234, 1)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>

            {/* Bio Section */}
            <motion.div
              className="max-w-4xl mx-auto mb-12 px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="glass rounded-xl p-8 border border-purple-500/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Hi, Welcome to my profile! My journey in the world of <span className="text-purple-400 font-semibold">Artificial Intelligence</span> began with a spark of curiosity. Ever since my first AI workshop, I've been on this exciting journey to explore the endless possibilities of AI.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a <span className="text-purple-400 font-semibold">Data Scientist</span> with a passion for building and deploying AI-driven solutions that solve complex, real-world problems. With a strong foundation in Machine Learning, Deep Learning, Natural Language Processing (NLP), and Generative AI, I specialize in transforming data into actionable insights that drive meaningful impact.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I excel at building end-to-end AI solutions, from designing scalable data pipelines to deploying machine learning models. I have a particular interest in developing automated workflows, fine-tuning LLMs, and leveraging cloud platforms to optimize data processing and model deployment.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Currently, I'm working at <span className="text-purple-400 font-semibold">Draft & Goal</span> as a Data Scientist, focusing on building AI agentic workflows to automate content marketing. This experience has deepened my appreciation for the power of AI-driven automation and the potential of intelligent agents to significantly boost operational efficiency and scalability.
                </p>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              className="max-w-6xl mx-auto mb-20 px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="glass rounded-xl p-8 border border-purple-500/20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                  <span className="gradient-text">Skills & Technologies</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Programming Languages & Databases */}
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">Programming Languages & Databases</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'SQL', 'R', 'Java', 'Data Structures', 'C', 'NoSQL'].map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-sm text-gray-300 hover:bg-purple-500/30 hover:border-purple-500/60 transition-all"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.5 + index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* AI/ML */}
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">AI/ML</h3>
                    <div className="flex flex-wrap gap-2">
                      {['PyTorch', 'Keras', 'TensorFlow', 'Hugging Face', 'Deep learning', 'Generative AI', 'Transformers', 'RAG', 'NLP', 'LLM Fine-Tuning', 'Langchain', 'Scikit-learn', 'EDA', 'AI agents'].map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-sm text-gray-300 hover:bg-purple-500/30 hover:border-purple-500/60 transition-all"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.5 + index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Data Visualization & Analysis */}
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                  >
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">Data Visualization & Analysis</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Tableau', 'Power BI', 'Microsoft Excel', 'Matplotlib', 'Seaborn', 'Pandas', 'NumPy'].map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-sm text-gray-300 hover:bg-purple-500/30 hover:border-purple-500/60 transition-all"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.7 + index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Cloud & DevOps */}
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                  >
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">Cloud & DevOps</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Azure ML', 'AWS Sagemaker', 'GCP', 'CI/CD pipelines', 'Git', 'Flask', 'Kubernetes', 'Docker'].map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-sm text-gray-300 hover:bg-purple-500/30 hover:border-purple-500/60 transition-all"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.7 + index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </main>

    </div>
  );
}


'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChefHat, Sunset, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const hobbies = [
  {
    id: 1,
    title: 'Cooking',
    icon: ChefHat,
    description: 'I really enjoy cooking! There\'s something therapeutic about creating delicious meals from scratch. Whether it\'s experimenting with new recipes or perfecting old favorites, the kitchen is where I find my creative flow.',
    gradient: 'from-orange-600 to-red-600',
    images: [
      { src: '/hobbies/IMG_0531.jpg', alt: 'Homemade dish' },
      { src: '/hobbies/IMG_0623.jpg', alt: 'Cooking preparation' },
      { src: '/hobbies/IMG_0673.jpg', alt: 'Finished meal' },
      { src: '/hobbies/IMG_0753.jpg', alt: 'Delicious creation' },
      { src: '/hobbies/IMG_4154.jpg', alt: 'Delicious food' },
      { src: '/hobbies/IMG_2108.jpg', alt: 'Culinary creation' },
      { src: '/hobbies/IMG_3244.jpg', alt: 'Home cooked meal' },
      { src: '/hobbies/IMG_4280.jpg', alt: 'Delicious food' },
      { src: '/hobbies/IMG_9603.jpg', alt: 'Culinary creation' },
      { src: '/hobbies/IMG_9777.jpg', alt: 'Home cooked meal' },
      { src: '/hobbies/2f9c83d6-bdf8-4b1a-8801-7c7c56cab0d9.JPG', alt: 'Delicious food' },
    ],
  },
  {
    id: 2,
    title: 'Exploring Sunsets',
    icon: Sunset,
    description: 'There\'s nothing quite like chasing sunsets. The way the sky transforms with vibrant colors is always mesmerizing. I love finding new spots to watch the day end and capture those beautiful moments.',
    gradient: 'from-pink-600 to-purple-600',
    images: [
      { src: '/hobbies/IMG_0280.jpg', alt: 'Sunset over water' },
      { src: '/hobbies/IMG_1835.jpg', alt: 'Dramatic sunset' },
      { src: '/hobbies/IMG_9925.jpg', alt: 'Evening colors' },
      { src: '/hobbies/0E0C91D8-908C-4CCA-BB81-7E66975AEBE5.JPG', alt: 'Sunset scene' },
    ],
  },
];

export default function HobbiesPage() {
  const [selectedHobby, setSelectedHobby] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (hobbyId: number) => {
    setSelectedHobby(hobbyId);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedHobby(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedHobby !== null) {
      const hobby = hobbies.find(h => h.id === selectedHobby);
      if (hobby) {
        setCurrentImageIndex((prev) => (prev + 1) % hobby.images.length);
      }
    }
  };

  const prevImage = () => {
    if (selectedHobby !== null) {
      const hobby = hobbies.find(h => h.id === selectedHobby);
      if (hobby) {
        setCurrentImageIndex((prev) => (prev - 1 + hobby.images.length) % hobby.images.length);
      }
    }
  };

  const selectedHobbyData = selectedHobby ? hobbies.find(h => h.id === selectedHobby) : null;

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
                  href={item === 'Experience' ? '/experience' : item === 'Projects' ? '/projects' : item === 'Education' ? '/education' : item === 'Hobbies' ? '/hobbies' : `/${item.toLowerCase()}`}
                  className={`relative text-gray-300 hover:text-purple-400 transition-colors duration-300 group text-sm md:text-base ${
                    item === 'Hobbies' ? 'text-purple-400' : ''
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
              <span className="gradient-text">Hobbies</span>
            </motion.h1>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A glimpse into what I enjoy doing in my free time
            </motion.p>
          </motion.div>

          {/* Hobbies Grid - Same layout as Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon;
              return (
                <motion.div
                  key={hobby.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className="group"
                >
                  <div className={`glass rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden h-full cursor-pointer`}
                    onClick={() => openGallery(hobby.id)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${hobby.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${hobby.gradient} flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3">{hobby.title}</h3>
                      
                      {/* Description */}
                      <p className="text-gray-300 text-base leading-relaxed mb-6">
                        {hobby.description}
                      </p>

                      {/* Image Preview Grid - Smaller images */}
                      <div className="grid grid-cols-3 gap-2">
                        {hobby.images.slice(0, 6).map((img, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            className="relative aspect-square rounded-lg overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover"
                              unoptimized
                              sizes="(max-width: 768px) 33vw, 150px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Click hint */}
                      <p className="text-purple-400 text-sm mt-4 text-center font-semibold">
                        Click to view gallery ({hobby.images.length} photos)
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedHobby !== null && selectedHobbyData && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
          >
            <motion.div
              className="relative max-w-6xl w-full max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute -top-12 right-0 text-white text-2xl hover:text-purple-400 transition-colors z-20"
                onClick={closeGallery}
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Arrows */}
              {selectedHobbyData.images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Main Image */}
              <div className="relative w-full max-h-[80vh] rounded-lg overflow-hidden bg-gray-900 flex items-center justify-center">
                <Image
                  src={selectedHobbyData.images[currentImageIndex].src}
                  alt={selectedHobbyData.images[currentImageIndex].alt}
                  width={1200}
                  height={800}
                  className="object-contain max-w-full max-h-[80vh] w-auto h-auto"
                  unoptimized
                />
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm z-20">
                {currentImageIndex + 1} / {selectedHobbyData.images.length}
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
                {selectedHobbyData.images.map((img, idx) => (
                  <motion.button
                    key={idx}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 ${
                      idx === currentImageIndex ? 'ring-2 ring-purple-500' : 'opacity-50 hover:opacity-75'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


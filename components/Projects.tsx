
import React, { useState } from 'react';
import { LocationMarkerIcon, CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Bethlehem School, Kimbo',
    location: 'Kimbo, Kenya',
    description: 'A comprehensive playground carpet installation creating a safe and comfortable play area for children.',
    details: [
      'Type: School playground',
      'Materials: Tuff carpets & underlays',
      'Focus: Durability and safety',
    ],
    image: '/playground.jpg',
  },
  {
    id: 2,
    title: 'Nairobi Fitness Hub',
    location: 'Westlands, Nairobi',
    description: 'High-performance tuff field installation for a modern fitness center, providing optimal grip and shock absorption.',
    details: [
        'Type: Commercial Gym',
        'Materials: High-density rubber flooring',
        'Focus: Performance and safety',
    ],
    image: '/gym room.png',
  },
  {
    id: 3,
    title: 'Riverside Corporate Balcony',
    location: 'Riverside, Nairobi',
    description: 'Elegant and durable carpet solution for an executive office balcony, creating a green and serene breakout area.',
    details: [
        'Type: Corporate Balcony',
        'Materials: All-weather turf carpet',
        'Focus: Aesthetics and durability',
    ],
    image: '/balcony.png',
  },
  {
    id: 4,
    title: 'KiddieCare Daycare Center',
    location: 'Lavington, Nairobi',
    description: 'Soft, non-toxic artificial grass installation for an indoor play area, ensuring a safe environment for toddlers.',
    details: [
        'Type: Indoor Play Area',
        'Materials: Soft-touch turf & foam underlay',
        'Focus: Child safety and comfort',
    ],
    image: '/children ground.jpg',
  },
];


const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-20 bg-brand-light overflow-hidden" id="projects">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Past Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Take a look at some of our recent wall to wall carpet and flooring projects across Nairobi and surrounding areas.</p>
        </motion.div>
        
        <div className="relative h-[660px] md:h-[550px] w-full max-w-6xl mx-auto flex items-center justify-center">
          {/* Carousel Cards */}
          <div 
            className="relative w-full h-full" 
            style={{ perspective: '1000px' }}
            role="region"
            aria-label="Project carousel"
          >
            {projectsData.map((project, index) => {
              const offset = index - currentIndex;
              const isVisible = Math.abs(offset) <= 2; // Show current, and 2 on each side
              const isActive = index === currentIndex;

              const style: React.CSSProperties = {
                transform: `
                  translateX(${offset * 25}%) 
                  scale(${1 - Math.abs(offset) * 0.15}) 
                  rotateY(${offset * -10}deg)
                `,
                zIndex: projectsData.length - Math.abs(offset),
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? 'auto' : 'none',
                transition: 'all 0.5s ease-out',
              };

              return (
                <div
                  key={project.id}
                  className="absolute top-0 left-0 w-full h-full"
                  style={style}
                  aria-hidden={!isActive}
                  role="group"
                  aria-label={`Project ${index + 1} of ${projectsData.length}: ${project.title}`}
                >
                  <div className="w-full md:w-3/4 lg:w-2/3 mx-auto h-full bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/2 h-64 md:h-full">
                       <img 
                         src={project.image} 
                         alt={project.title} 
                         className="object-cover w-full h-full"
                         width="600"
                         height="400"
                       />
                    </div>
                    <div className="md:w-1/2 p-6 pb-24 md:pb-6 lg:p-8 lg:pb-8 flex flex-col justify-center">
                      <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-2">{project.title}</h3>
                      <div className="flex items-center text-gray-500 mb-4 text-sm">
                        <LocationMarkerIcon className="h-4 w-4 mr-2" />
                        <span>{project.location}</span>
                      </div>
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">{project.description}</p>
                      <div className="space-y-2 text-gray-700 text-sm">
                        {project.details.map((detail, i) => (
                           <div key={i} className="flex items-center">
                             <CheckCircleIcon className="h-5 w-5 text-brand-green mr-2 flex-shrink-0" />
                             <span>{detail}</span>
                           </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={goToPrevious} 
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/70 hover:bg-white rounded-full p-2 shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none"
            aria-label="Previous Project"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                goToPrevious();
              }
            }}
          >
            <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8 text-brand-dark" />
          </button>
          <button 
            onClick={goToNext} 
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/70 hover:bg-white rounded-full p-2 shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none"
            aria-label="Next Project"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                goToNext();
              }
            }}
          >
            <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8 text-brand-dark" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

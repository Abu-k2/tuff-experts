import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from './AnimationUtils';

const Gallery: React.FC = () => {
  // List of images from the public directory
  const images = [
    { src: '/IMG-20251016-WA0005.jpg', alt: 'Wall to Wall Carpet 1' },
    { src: '/IMG-20251016-WA0006.jpg', alt: 'Wall to Wall Carpet 2' },
    { src: '/IMG-20251016-WA0007.jpg', alt: 'Wall to Wall Carpet 3' },
    { src: '/IMG-20251016-WA0009.jpg', alt: 'Wall to Wall Carpet 4' },
    { src: '/WhatsApp Image 2025-10-16 at 23.52.11_4d4c9a68.jpg', alt: 'Wall to Wall Carpet 5' },
    { src: '/WhatsApp Image 2025-10-16 at 23.52.12_faf30883.jpg', alt: 'Wall to Wall Carpet 6' },
    { src: '/background.jpg', alt: 'Background' },
    { src: '/balcony.png', alt: 'Balcony Installation' },
    { src: '/children ground.jpg', alt: 'Children Play Area' },
    { src: '/gym room.png', alt: 'Gym Installation' },
    { src: '/playground.jpg', alt: 'Playground' },
  ];

  return (
    <section className="py-20 bg-brand-light" id="gallery">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-brand-dark mb-4"
            variants={fadeIn}
          >
            Our Gallery
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            variants={fadeIn}
            transition={{ delay: 0.1 }}
          >
            Explore our portfolio of completed wall to wall carpet installations and tuff field projects across Nairobi and surrounding areas.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-lg"
              variants={fadeIn}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
                loading="lazy"
                width="300"
                height="256"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
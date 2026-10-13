import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './AnimationUtils';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-3xl font-bold text-brand-dark mb-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-brand-green mx-auto mb-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        ></motion.div>
        <motion.p 
          className="max-w-3xl mx-auto text-gray-600 leading-relaxed"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Tuff Experts is a Nairobi-based flooring and wall finishing company delivering quality wall to wall carpet flooring, tuff field installation, wall and floor tiling, wooden and laminate flooring, and painting services. From balconies and children's play areas to gyms and commercial spaces, we focus on durable, expertly fitted finishes that transform every room.
        </motion.p>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { BalconyIcon, PlaygroundIcon, GymIcon, TileIcon, WoodFloorIcon, PaintRollerIcon } from './Icons';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, AnimatedCard } from './AnimationUtils';

const servicesData = [
  {
    icon: <BalconyIcon className="h-12 w-12 text-brand-green mb-4" />,
    title: 'Balconies',
    description: 'Professional carpet installation for residential and commercial balconies.',
  },
  {
    icon: <PlaygroundIcon className="h-12 w-12 text-brand-green mb-4" />,
    title: "Children's Play Areas",
    description: 'Safe and durable carpet solutions for kids play zones and recreational areas.',
  },
  {
    icon: <GymIcon className="h-12 w-12 text-brand-green mb-4" />,
    title: 'Gyms',
    description: 'High-performance tuff field installations for fitness centers and sports facilities.',
  },
  {
    icon: <TileIcon className="h-12 w-12 text-brand-green mb-4" />,
    title: 'Wall & Floor Tiling',
    description: 'Precision laying of wall and floor tiles for kitchens, bathrooms, halls and exteriors.',
  },
  {
    icon: <WoodFloorIcon className="h-12 w-12 text-brand-green mb-4" />,
    title: 'Wooden & Laminate Flooring',
    description: 'Elegant parquet, laminate and wooden floor fitting and finishing for warm, premium interiors.',
  },
  {
    icon: <PaintRollerIcon className="h-12 w-12 text-brand-green mb-4" />,
    title: 'Painting & Wall Finishes',
    description: 'Interior and exterior painting, POP ceilings and smooth wall finishes that complete every space.',
  },
];

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay?: number }> = ({ icon, title, description, delay = 0 }) => (
  <AnimatedCard 
    className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
    delay={delay}
  >
    {icon}
    <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </AnimatedCard>
);

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
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
            Our Services
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-brand-green mx-auto mb-6"
            variants={fadeIn}
            transition={{ delay: 0.1 }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Complete floor and wall finishing services for homes, schools, gyms and commercial spaces across Nairobi.
          </motion.p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

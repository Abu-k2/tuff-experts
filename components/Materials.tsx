
import React from 'react';
import { CarpetIcon, UnderlayIcon, ChainLinkIcon } from './Icons';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, AnimatedCard } from './AnimationUtils';

const materialsData = [
  {
    icon: <CarpetIcon className="h-12 w-12 text-brand-green mb-4" />,
    title: 'Tuff Carpets',
    description: 'Durable and high-quality carpet materials.',
  },
  {
    icon: <UnderlayIcon className="h-12 w-12 text-brand-green mb-4" />,
    title: 'Underlays',
    description: 'Professional underlayment for optimal comfort.',
  },
  {
    icon: <ChainLinkIcon className="h-12 w-12 text-brand-green mb-4" />,
    title: 'Chain Links',
    description: 'Secure installation hardware and accessories.',
  },
];

const MaterialCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay?: number }> = ({ icon, title, description, delay = 0 }) => (
  <AnimatedCard 
    className="bg-white p-8 rounded-lg border border-gray-200 flex flex-col items-center text-center"
    delay={delay}
  >
    {icon}
    <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </AnimatedCard>
);

const Materials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
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
            Materials & Tools
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-brand-green mx-auto"
            variants={fadeIn}
            transition={{ delay: 0.1 }}
          ></motion.div>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {materialsData.map((material, index) => (
            <MaterialCard key={index} {...material} delay={index * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Materials;

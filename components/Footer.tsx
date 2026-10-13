
import React from 'react';
import { SparklesIcon, PhoneIcon, MailIcon, LocationMarkerIcon } from './Icons';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = ['Wall to Wall Carpet Flooring', 'Tuff Field Installation', 'Wall & Floor Tiling', 'Wooden & Laminate Flooring', 'Painting & Wall Finishes'];

  return (
    <motion.footer
      className="bg-brand-dark text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <SparklesIcon className="h-8 w-8 text-brand-green" />
              <span className="text-xl font-bold">Tuff Experts</span>
            </div>
            <p className="text-gray-400">
              Your one-stop team for flooring and wall finishing in Nairobi — wall to wall carpet flooring, tuff fields, tiles, wooden floors and painting. Quality workmanship, durable finishes, and reliable service, guaranteed.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-brand-green transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center min-w-0">
                <PhoneIcon className="h-5 w-5 mr-3 text-brand-green flex-shrink-0" />
                <a href="tel:0719543587" className="hover:text-white transition-colors break-words">0719 543587</a>
              </li>
              <li className="flex items-center min-w-0">
                <MailIcon className="h-5 w-5 mr-3 text-brand-green flex-shrink-0" />
                <a href="mailto:tuffexperts@gmail.com" className="hover:text-white transition-colors break-all">tuffexperts@gmail.com</a>
              </li>
              <li className="flex items-center min-w-0">
                <LocationMarkerIcon className="h-5 w-5 mr-3 text-brand-green flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="bg-black/20 py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Tuff Experts. All rights reserved.
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

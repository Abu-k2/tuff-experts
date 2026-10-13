import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Materials from './components/Materials';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PerformanceMonitor from './components/PerformanceMonitor';
import { motion, MotionConfig } from 'framer-motion';
import { staggerContainer, fadeIn } from './components/AnimationUtils';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const refs = { home: homeRef, about: aboutRef, gallery: galleryRef, projects: projectsRef, contact: contactRef };

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Check if we're in development mode
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <MotionConfig reducedMotion="user">
    <div className="bg-white text-brand-dark font-sans">
      <Header refs={refs} scrollToRef={scrollToRef} />
      <main>
        <div ref={homeRef} id="home">
          <Hero scrollToProjects={() => scrollToRef(projectsRef)} />
        </div>
        <div ref={aboutRef} id="about">
          <About />
        </div>
        <Services />
        <Materials />
        <div ref={galleryRef}>
          <Gallery />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
      {/* Floating WhatsApp chat button */}
      <a
        href="https://wa.me/254728614934?text=Hello%20Tuff%20Experts%2C%20I%27d%20like%20a%20quote%20for%20a%20wall%20to%20wall%20carpet%2Ftuff%20field%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Tuff Experts on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl transition-transform duration-300 hover:scale-110"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      {/* Show performance monitor only in development */}
      {isDev && <PerformanceMonitor />}
    </div>
    </MotionConfig>
  );
};

export default App;
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';


import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize AOS with INFINITE / EVERY TIME SCROLL configuration
    AOS.init({
      duration: 800,           // Animation duration
      once: false,            // 👈 FALSE = animate every time (INFINITE)
      mirror: true,           // 👈 Mirror animation when scrolling back up
      offset: 50,             // Offset from top to trigger animation
      delay: 0,               // No delay between animations
      easing: 'ease-in-out',  // Smooth easing
      anchorPlacement: 'top-bottom', // When element top hits bottom of viewport
    });
    
    // Refresh AOS on window resize
    window.addEventListener('resize', () => {
      AOS.refresh();
    });
    
    // Set dark mode as default
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    
    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
     
      
      <Contact />
      <Footer />
    </>
  );
}

export default App;
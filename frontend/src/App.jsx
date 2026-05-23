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
  const [darkMode, setDarkMode] = React.useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved === 'dark';
    } catch (e) {
      return true;
    }
  });

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
    
    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDark = () => setDarkMode(!darkMode);

  return (
    <>
      <Navbar darkMode={darkMode} toggleDark={toggleDark} />
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
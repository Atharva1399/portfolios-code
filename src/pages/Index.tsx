
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Implement scroll animation for elements
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animate');
        }
      });
    };
    
    // Implement parallax effect with reduced movement
    const handleParallax = (event: MouseEvent) => {
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach(element => {
        const depth = (element as HTMLElement).getAttribute('data-depth') || '0.05';
        // Reduce movement by dividing by 2 for a more subtle effect
        const moveX = (event.clientX - window.innerWidth / 2) * parseFloat(depth) / 2;
        const moveY = (event.clientY - window.innerHeight / 2) * parseFloat(depth) / 2;
        
        (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    // Run once after initial render
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Add mousemove event listener for parallax
    window.addEventListener('mousemove', handleParallax);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('mousemove', handleParallax);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

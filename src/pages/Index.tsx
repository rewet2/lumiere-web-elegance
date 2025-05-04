
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const Index = () => {
  // Add scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            // Fix: Cast target to HTMLElement to access style property
            if (entry.target instanceof HTMLElement) {
              entry.target.style.opacity = '1';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Target all sections for scroll animations
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

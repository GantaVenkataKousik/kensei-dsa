
import React, { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import Hero from './components/Hero';
import DPPatterns from './components/DPPatterns';
import Collection from './components/Collection';
import About from './components/About';
import Features from './components/Features';
import DesignSystem from './components/DesignSystem';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Smooth scroll behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen text-[#E5DCC2] relative selection:bg-[#B00906] selection:text-white">
      <Navbar />
      <Timer />
      <main>
        <Hero />
        <DPPatterns />
        <Collection />
        <About />
        <Features />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;

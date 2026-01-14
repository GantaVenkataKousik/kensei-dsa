
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-20 relative">
          <h2 className="text-[#E5DCC2]/10 font-serif text-6xl md:text-[140px] font-bold absolute top-0 left-1/2 -translate-x-1/2 select-none z-0 whitespace-nowrap">CREATOR</h2>
          <h3 className="text-[#FFD176] font-accent text-4xl md:text-6xl mb-4 relative z-10">About the Creator</h3>
          <p className="text-[#B5AD97] font-sans tracking-[0.3em] uppercase text-xs">The Lore • Vision • Philosophy</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-10">
              <div className="relative group">
                <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-[#B00906] group-hover:w-1 transition-all"></div>
                <h4 className="text-[#FFD176] font-accent text-2xl mb-2">What is Kensei DSA?</h4>
                <p className="text-[#B5AD97] font-sans leading-relaxed">
                  Kensei DSA is a curated collection of DSA patterns across all topics - not just Dynamic Programming, but Arrays, Trees, Graphs, Strings, and more. Each topic is divided into structured patterns with multiple sections, helping you systematically master concepts instead of randomly solving problems.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-[#B00906] group-hover:w-1 transition-all"></div>
                <h4 className="text-[#FFD176] font-accent text-2xl mb-2">The Puzzle Approach</h4>
                <p className="text-[#B5AD97] font-sans leading-relaxed">
                  Think of DSA as solving puzzles, not just writing code. Each pattern reveals a unique way to think about and solve related problems. Created by Ganta Venkata Kousik with love for structured learning in a Japanese-inspired theme.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative flex items-center justify-center">
              <div className="w-[80%] h-[80%] relative">
                <div className="absolute inset-0 border-2 border-[#FFD176]/30 rotate-6"></div>
                <div className="absolute inset-0 border-2 border-[#B00906]/30 -rotate-3"></div>
                <img
                  src="/about/gvk.png"
                  alt="Ganta Venkata Kousik"
                  className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Japanese text beside image - hidden on mobile */}
              <div className="hidden lg:block absolute -right-16 top-1/2 transform -translate-y-1/2 writing-mode-vertical-rl rotate-180">
                <span className="text-[#FFD176] font-accent text-4xl opacity-80 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>ガンタ ヴェンカタ コウシク</span>
              </div>
            </div>

            {/* Japanese text below image - visible on mobile */}
            <div className="lg:hidden text-center mt-6">
              <p className="text-[#FFD176] font-accent text-2xl opacity-80">ガンタ ヴェンカタ コウシク</p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-8">
              <a href="https://www.behance.net/venkatakousik/" target="_blank" rel="noopener noreferrer" className="p-3 border border-[#E5DCC2]/10 rounded-full text-[#E5DCC2] hover:bg-[#B00906] hover:border-[#B00906] transition-all">
                <i className="fa fa-behance" style={{ fontSize: '20px' }}></i>
              </a>
              <a href="https://www.linkedin.com/in/gantavenkatakousik/" target="_blank" rel="noopener noreferrer" className="p-3 border border-[#E5DCC2]/10 rounded-full text-[#E5DCC2] hover:bg-[#B00906] hover:border-[#B00906] transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/ganta_venkata_kousik/" target="_blank" rel="noopener noreferrer" className="p-3 border border-[#E5DCC2]/10 rounded-full text-[#E5DCC2] hover:bg-[#B00906] hover:border-[#B00906] transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

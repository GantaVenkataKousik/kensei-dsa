
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with cinematic overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://picsum.photos/seed/kurogami-hero/1920/1080?grayscale')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-left relative"
        >
          {/* Large background text like About/Collection */}
          <div className="absolute -left-4 md:-left-8 top-0 -z-10">
            <h1 className="text-white/10 font-serif text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] font-black tracking-tighter leading-none">
              PATTERNS
            </h1>
          </div>

          <h2 className="text-[#B00906] font-accent text-2xl md:text-4xl mb-2 tracking-widest">Master Code</h2>
          <h1 className="text-[#FFD176] font-accent text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-widest leading-tight mb-6 shadow-black drop-shadow-2xl whitespace-nowrap">
            MASTER ALL <br></br>PATTERNS
          </h1>
          <p className="text-[#E5DCC2] font-serif text-base md:text-xl max-w-lg mb-2 leading-relaxed font-medium">
            Solve DSA like Puzzles through Structured Patterns, <br></br>not Random Problems.
          </p>
          <p className="text-[#FFD176] font-serif italic text-base md:text-xl mb-8 md:mb-10">
            Created By Ganta Venkata Kousik
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6">
            <a href="https://github.com/GantaVenkataKousik/kensei-dsa/" target="_blank" rel="noopener noreferrer" className="group relative px-6 py-2.5 md:px-8 md:py-3 overflow-hidden rounded-sm bg-[#B00906] text-white font-bold text-sm md:text-base tracking-widest transition-all duration-300 text-center">
              <span className="relative z-10">GITHUB</span>
              <div className="absolute inset-0 bg-[#FFD176] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
            <a href="#contact" className="px-6 py-2.5 md:px-8 md:py-3 border border-[#FFD176]/40 text-[#FFD176] font-bold text-sm md:text-base tracking-widest hover:bg-[#FFD176] hover:text-black transition-all duration-300 rounded-sm text-center">
              CONTACT
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Main Character Foreground Placeholder */}
          <div className="relative group flex items-center justify-center">
            <div className="absolute inset-0 bg-[#B00906]/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
            <img
              src="/samurai/img3.jpg"
              alt="Kensei DSA"
              className="relative z-10 w-full h-auto object-contain max-h-[80vh] rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Japanese Text Accents */}
            <div className="absolute -right-8 top-2/4 transform translate-x-1/2 -rotate-90">
              <span className="text-[#B00906] font-accent text-7xl opacity-40" style={{ whiteSpace: 'nowrap' }}>剣聖DSAマスター</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[#7A7365] text-[10px] tracking-widest mb-2">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#B00906] to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { motion } from 'framer-motion';
import { CHARACTERS } from '../constants';

const Collection: React.FC = () => {
  return (
    <section id="collection" className="bg-[#0A0A0A] py-32 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-[#E5DCC2]/10 font-serif text-8xl md:text-[180px] font-bold absolute top-0 left-1/2 -translate-x-1/2 select-none z-0">MASTERY</h2>
          <h3 className="text-[#FFD176] font-accent text-5xl md:text-7xl mb-4 relative z-10">Consistency</h3>
          <p className="text-[#B5AD97] font-sans tracking-[0.3em] uppercase text-xs">Master • Practice • Inspire</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
          {CHARACTERS.map((char, index) => (
            <motion.div
              key={char.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group relative ${char.variant === 'Main' ? 'md:scale-110 z-20' : 'md:scale-90 opacity-80 hover:opacity-100 z-10'}`}
            >
              {/* Card Container */}
              <div className="relative overflow-hidden aspect-[4/5] w-[300px] md:w-full bg-black border border-[#E5DCC2]/10 group-hover:border-[#FFD176]/30 transition-all duration-500 shadow-2xl">
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />

                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Quote */}
                  {char.quote && (
                    <p className="text-[#E5DCC2]/80 text-sm italic mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      "{char.quote}"
                    </p>
                  )}
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[#B00906] text-xs font-bold tracking-widest">{char.rarity}</span>
                      <h4 className="text-[#E5DCC2] text-3xl font-serif mt-1">{char.name}</h4>
                    </div>
                    <div className="w-10 h-10 border border-[#FFD176]/50 rounded-full flex items-center justify-center group-hover:bg-[#FFD176] group-hover:text-black transition-colors">
                      <span className="text-lg">+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Japanese vertical text */}
              <div className={`absolute top-10 ${char.variant === 'Left' ? '-left-12' : '-right-12'} hidden lg:block`}>
                <span className="text-white/5 font-accent text-8xl writing-vertical-rl">スピリット</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;

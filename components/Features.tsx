
import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-20 relative">
          <h2 className="text-[#E5DCC2]/10 font-serif text-6xl md:text-[140px] font-bold absolute top-0 left-1/2 -translate-x-1/2 select-none z-0 whitespace-nowrap">DISCIPLINE</h2>
          <h3 className="text-[#FFD176] font-accent text-4xl md:text-6xl mb-4 relative z-10">Forged in Discipline</h3>
          <p className="text-[#B5AD97] font-sans tracking-[0.3em] uppercase text-xs">Excellence through Practice</p>
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 border border-[#E5DCC2]/5 hover:border-[#B00906]/30 bg-black/40 hover:bg-black transition-all duration-500 rounded-sm relative overflow-hidden"
            >
              {/* Brush stroke background highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B00906]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#B00906]/20 transition-colors"></div>

              <div className="relative z-10">
                <div className="w-12 h-1 bg-[#B00906] mb-8 group-hover:w-full transition-all duration-700"></div>
                <h4 className="text-[#E5DCC2] font-serif text-xl font-bold mb-4 group-hover:text-[#FFD176] transition-colors">{feature.title}</h4>
                <p className="text-[#7A7365] font-sans text-sm leading-relaxed group-hover:text-[#B5AD97] transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-black border-t border-[#E5DCC2]/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-white font-serif text-4xl md:text-7xl font-bold mb-8">FAQ</h2>
          <p className="text-[#B00906] font-accent text-2xl md:text-3xl mb-6">Ask and reveal all secrets</p>
          <p className="text-[#B5AD97] font-sans text-lg mb-10 max-w-md">
            Dive deeper into the Kensei DSA ecosystem. We value transparency and comprehensive learning.
          </p>

          <div className="relative inline-block mt-4">
            {/* Visual brush stroke under button */}
            <div className="absolute -bottom-2 -left-4 -right-4 h-12 bg-[#B00906]/20 blur-xl -z-0"></div>
          </div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#E5DCC2]/10 last:border-0"
            >
              <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-serif text-xl md:text-2xl transition-colors ${openIndex === index ? 'text-[#FFD176]' : 'text-[#E5DCC2]'}`}>
                  {faq.question}
                </span>
                <span className="text-[#FFD176]">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-[#7A7365] font-sans leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

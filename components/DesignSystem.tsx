
import React from 'react';
import { motion } from 'framer-motion';

const DesignSystem: React.FC = () => {
  const swatches = [
    { name: 'light golden', hex: '#E5DCC2', char: '曙' },
    { name: 'rich golden', hex: '#FFD176', char: '曙' },
    { name: 'vibrant red', hex: '#B00906', char: '曙' },
    { name: 'total black', hex: '#000000', char: '曙' }
  ];

  return (
    <section className="py-32 bg-black overflow-hidden border-y border-[#E5DCC2]/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-zinc-900/50 rounded-3xl overflow-hidden relative border border-white/5">
              <img
                src="https://picsum.photos/seed/design-showcase/1200/800?blur=10"
                className="w-full h-full object-cover opacity-30"
                alt="blurred bg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-serif text-[280px] font-bold opacity-10 leading-none select-none">Aa</span>
                <div className="absolute flex flex-col items-center">
                  <span className="text-[#E5DCC2] font-serif text-8xl font-bold tracking-tighter">Aa</span>
                  <span className="text-[#FFD176] font-accent text-3xl mt-4">日本のタイポグラフィ</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-12">
            <div>
              <h2 className="text-white font-serif text-5xl font-bold leading-tight mb-4 uppercase">
                DESIGN <br /> <span className="text-[#B00906]">PHILOSOPHY</span>
              </h2>
              <p className="text-[#7A7365] font-sans">A harmonious blend of Japanese aesthetics and modern learning.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {swatches.map((swatch) => (
                <div key={swatch.name} className="flex flex-col space-y-3">
                  <div
                    className="aspect-square rounded-2xl flex items-center justify-center border border-white/10"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    <span className={`text-4xl font-serif ${swatch.name === 'total black' ? 'text-white' : 'text-black'}`}>
                      {swatch.char}
                    </span>
                  </div>
                  <div className="px-1">
                    <p className="text-[#E5DCC2] text-[10px] font-bold uppercase tracking-wider">{swatch.name}</p>
                    <p className="text-[#7A7365] text-[10px] font-sans">{swatch.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSystem;

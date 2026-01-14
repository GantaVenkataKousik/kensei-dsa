
import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-[#E5DCC2]/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-2xl font-bold tracking-widest text-[#E5DCC2]">KENSEI DSA</span>
            </div>
            <p className="text-[#7A7365] text-xs font-sans tracking-[0.2em] text-center md:text-left">
              © 2026 KENSEI DSA. ALL RIGHTS RESERVED.
            </p>
          </div>

          <div className="flex space-x-12">
            <a href="#" className="text-[#B5AD97] hover:text-[#FFD176] transition-colors">CONCETRATE</a>
            <a href="#" className="text-[#B5AD97] hover:text-[#FFD176] transition-colors">FOCUS</a>
            <a href="#" className="text-[#B5AD97] hover:text-[#FFD176] transition-colors">MASTER</a>
            <a href="#" className="text-[#B5AD97] hover:text-[#FFD176] transition-colors">SHARE</a>
          </div>

          <div className="flex space-x-6">
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
        </div>

        <div className="mt-20 pt-10 border-t border-[#E5DCC2]/5 text-center">
          <p className="text-[#7A7365]/30 font-accent text-4xl select-none">Kousik Kensei Collection</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PATTERNS', href: '#patterns' },
    { name: 'ABOUT', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 py-4 backdrop-blur-sm border-b border-[#E5DCC2]/10' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-serif text-2xl font-bold tracking-widest text-[#E5DCC2]">KENSEI DSA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center mr-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#E5DCC2] hover:text-[#FFD176] font-sans text-sm font-medium tracking-widest transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          {/* Social Icons */}
          <div className="flex space-x-4 items-center">
            <a href="https://www.behance.net/venkatakousik/" target="_blank" rel="noopener noreferrer" className="text-[#E5DCC2] hover:text-[#FFD176] transition-colors">
              <i className="fa fa-behance" style={{ fontSize: '16px' }}></i>
            </a>
            <a href="https://www.linkedin.com/in/gantavenkatakousik/" target="_blank" rel="noopener noreferrer" className="text-[#E5DCC2] hover:text-[#FFD176] transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="https://www.instagram.com/ganta_venkata_kousik/" target="_blank" rel="noopener noreferrer" className="text-[#E5DCC2] hover:text-[#FFD176] transition-colors">
              <Instagram size={16} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#E5DCC2]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-[#E5DCC2]/10 md:hidden animate-fade-in-down">
          <div className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#E5DCC2] text-xl font-serif"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

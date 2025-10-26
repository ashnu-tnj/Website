
import React, { useState, useEffect } from 'react';
import { ICONS } from '../constants';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-obsidian/80 backdrop-blur-lg border-b border-champagne/10' : ''}`}>
        <div className={`container mx-auto px-6 lg:px-8 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
          <div className="flex justify-between items-center">
            <a href="#" className="font-serif text-3xl font-bold luxury-text tracking-wide" onClick={(e) => handleLinkClick(e, '#hero')}>
              aflatus
            </a>
            <nav className="hidden md:flex space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-platinum/80 hover:text-champagne transition-colors duration-300 font-light tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-champagne z-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? ICONS.CLOSE : ICONS.MENU}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-obsidian/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-3xl text-platinum/80 hover:text-champagne transition-colors font-light">
                      {link.label}
                  </a>
              ))}
          </div>
      </div>
    </>
  );
};

export default Header;

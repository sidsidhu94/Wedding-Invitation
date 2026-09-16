import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Calendar, MapPin, Users, Send } from 'lucide-react';
import weddingData from '../data/weddingData';

const Navbar = ({ onOpenRsvp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Invitation', href: '#invitation' },
    { label: 'The Couple', href: '#couple' },
    { label: 'Wedding', href: '#wedding' },
    { label: 'Reception', href: '#reception' },
    { label: 'Family', href: '#family' },
    { label: 'Venue', href: '#venue' },
    { label: 'RSVP', href: '#rsvp' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-bg-surface)]/90 backdrop-blur-md border-b border-[var(--color-gold-border)] shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-full border border-[#d4af37] flex items-center justify-center bg-[#0b4f6c]/40 group-hover:border-amber-300 transition-colors">
            <span className="font-cinzel text-amber-300 font-bold text-sm tracking-wider">S&A</span>
          </div>
          <span className="font-cinzel text-amber-200/90 text-sm hidden sm:inline-block tracking-widest uppercase">
            Sidharth <span className="text-amber-400">&</span> Anjusha
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs uppercase tracking-wider text-stone-300 hover:text-amber-300 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenRsvp}
            className="px-4 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 shadow-md hover:shadow-amber-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>RSVP</span>
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-amber-300 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-bg-surface)]/95 backdrop-blur-lg border-b border-[var(--color-gold-border)] px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm uppercase tracking-widest text-stone-200 hover:text-amber-300 py-2 border-b border-stone-800 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-amber-400 text-xs">✦</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

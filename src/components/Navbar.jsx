import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
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
    { label: 'Wedding', href: '#wedding' },
    { label: 'Reception', href: '#reception' },
    { label: 'Venue', href: '#venue' },
    { label: 'Blessings', href: '#blessings' },
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
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-full border border-[var(--color-gold-border)] flex items-center justify-center bg-[var(--color-bg-card)] group-hover:border-[var(--color-gold-mid)] transition-colors shadow-sm">
            <span className="font-cinzel text-[var(--color-gold-mid)] font-bold text-sm tracking-wider">A&S</span>
          </div>
          <span className="font-cinzel text-[var(--color-gold-light)]/90 text-sm hidden sm:inline-block tracking-widest uppercase">
            Anjusha <span className="text-[var(--color-gold-mid)]">&</span> Sidharth
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs uppercase tracking-wider text-stone-300 hover:text-[var(--color-gold-mid)] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--color-gold-mid)] hover:after:w-full after:transition-all after:duration-300 font-cinzel font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-[var(--color-gold-mid)] focus:outline-none cursor-pointer"
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
                className="text-sm uppercase tracking-widest text-stone-200 hover:text-[var(--color-gold-mid)] py-2 border-b border-stone-800 flex items-center justify-between font-cinzel"
              >
                <span>{item.label}</span>
                <span className="text-[var(--color-gold-mid)] text-xs">✦</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

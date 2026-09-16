import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = [
  {
    id: 'emerald',
    name: 'Royal Emerald & Gold',
    description: 'Traditional South Indian & Kerala Temple Aesthetic',
    badge: 'Kerala Traditional',
    swatches: ['#041a13', '#0c3529', '#e1be65'],
  },
  {
    id: 'burgundy',
    name: 'Regal Burgundy & Gold',
    description: 'Deep Royal Crimson Wine & Imperial Warm Gold',
    badge: 'Royal Romance',
    swatches: ['#18050e', '#3c0f24', '#e5be64'],
  },
  {
    id: 'sapphire',
    name: 'Midnight Sapphire & Gold',
    description: 'Celestial Midnight Blue & Star Champagne Gold',
    badge: 'Classic Night',
    swatches: ['#060b17', '#132244', '#e0c274'],
  },
  {
    id: 'plum',
    name: 'Imperial Plum & Gold',
    description: 'Royal Velvet Amethyst & Crown Gold',
    badge: 'Imperial Velvet',
    swatches: ['#12051b', '#311145', '#dfbd69'],
  },
  {
    id: 'ivory',
    name: 'Ivory Silk & Royal Gold',
    description: 'Luminous Pearl Ivory & Rich Metallic Bronze',
    badge: 'Luxury Card Light',
    swatches: ['#faf7f2', '#e8ded0', '#b88628'],
  },
];

export const FONTS = [
  {
    id: 'serif',
    name: 'Royal Heritage Serif',
    subtitle: 'Cinzel Decorative & Garamond',
    preview: 'Sidharth & Anjusha',
    className: 'font-cinzel-dec',
    badge: 'Recommended',
  },
  {
    id: 'script',
    name: 'Aristocratic Script',
    subtitle: 'Pinyon Script Luxury Calligraphy',
    preview: 'Sidharth & Anjusha',
    className: 'font-pinyon',
    badge: 'Ultra Elegant',
  },
  {
    id: 'modern',
    name: 'Haute Couture Serif',
    subtitle: 'Playfair Display Editorial Serif',
    preview: 'Sidharth & Anjusha',
    className: 'font-playfair',
    badge: 'Vogue Luxury',
  },
  {
    id: 'brush',
    name: 'Flourish Brush',
    subtitle: 'Alex Brush Romance Script',
    preview: 'Sidharth & Anjusha',
    className: 'font-calligraphy',
    badge: 'Romantic',
  },
];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('wedding-theme') || 'emerald';
  });

  const [font, setFont] = useState(() => {
    return localStorage.getItem('wedding-font') || 'serif';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('wedding-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-font', font);
    localStorage.setItem('wedding-font', font);
  }, [font]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, font, setFont, THEMES, FONTS }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

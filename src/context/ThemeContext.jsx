import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = [
  {
    id: 'emerald',
    name: 'Royal Emerald & Gold',
    description: 'Traditional South Indian & Kerala Temple Aesthetic',
    badge: 'Kerala Traditional',
    swatches: ['#041a13', '#0c3529', '#e1be65'],
  },
];

export const FONTS = [
  {
    id: 'brush',
    name: 'Romantic Flourish Brush',
    subtitle: 'Alex Brush Romance Script',
    preview: 'Sidharth & Anjusha',
    className: 'font-calligraphy',
    badge: 'Selected',
  },
];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('emerald');
  const [font, setFont] = useState('brush');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'emerald');
    localStorage.setItem('wedding-theme', 'emerald');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-font', 'brush');
    localStorage.setItem('wedding-font', 'brush');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, font, setFont, THEMES, FONTS }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

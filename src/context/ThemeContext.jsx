import React, { useState, useEffect } from 'react';
import { THEMES, FONTS, OPENING_CEREMONIES } from '../data/themeConstants';
import { ThemeContext } from './ThemeContextCore';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('wedding-theme-v4') || 'burgundy';
  });

  const [font, setFont] = useState(() => {
    return localStorage.getItem('wedding-font-v4') || 'brush';
  });

  const [ceremony, setCeremony] = useState(() => {
    return localStorage.getItem('wedding-ceremony-v4') || 'giftbox';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('wedding-theme-v4', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-font', font);
    localStorage.setItem('wedding-font-v4', font);
  }, [font]);

  useEffect(() => {
    localStorage.setItem('wedding-ceremony-v4', ceremony);
  }, [ceremony]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        font,
        setFont,
        ceremony,
        setCeremony,
        THEMES,
        FONTS,
        OPENING_CEREMONIES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};



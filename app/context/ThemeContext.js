'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, theme as baseTheme } from '../styles/theme';

const ThemeContext = createContext(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return { isDark: false, toggleTheme: function() {} };
  }
  return context;
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const initialized = useRef(false);

  useEffect(function initTheme() {
    if (initialized.current) return;
    initialized.current = true;

    var savedTheme = localStorage.getItem('theme');
    var initialDark;

    if (savedTheme === 'dark') {
      initialDark = true;
    } else if (savedTheme === 'light') {
      initialDark = false;
    } else {
      // Follow system preference by default
      initialDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    setIsDark(initialDark);
    setMounted(true);
  }, []);

  // Listen for system theme changes when no saved preference
  useEffect(function watchSystemTheme() {
    if (!mounted) return;
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) return; // User has explicit preference, don't override

    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    function handler(e) {
      setIsDark(e.matches);
    }
    mql.addEventListener('change', handler);
    return function() { mql.removeEventListener('change', handler); };
  }, [mounted]);

  function toggleTheme() {
    var newValue = !isDark;
    localStorage.setItem('theme', newValue ? 'dark' : 'light');
    setIsDark(newValue);
  }

  var themeConfig = {
    ...baseTheme,
    colors: isDark ? darkTheme.colors : lightTheme.colors,
    isDark: isDark,
  };

  var contextValue = {
    isDark: mounted ? isDark : false,
    toggleTheme: toggleTheme,
  };

  var defaultTheme = {
    ...baseTheme,
    colors: lightTheme.colors,
    isDark: false,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={mounted ? themeConfig : defaultTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

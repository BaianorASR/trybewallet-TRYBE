import React, { createContext, useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { dark, light } from '../../../styles/themes';

import type { Theme } from '../../../styles/themes/styled';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storageTheme = localStorage.getItem('theme');
    return storageTheme === 'dark' ? dark : light;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme.name);
  }, [theme.name]);

  const toggleTheme = useCallback(() => {
    setTheme(theme.name === 'dark' ? light : dark);
  }, [theme.name]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

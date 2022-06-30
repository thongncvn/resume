import {createContext, useState, useEffect} from 'react';
import React from 'react';
import {ThemeProvider as SCThemeProvider} from 'styled-components';

export const ThemeContext = createContext();

const LS_THEME_KEY = 'resume.thongncvn.com:theme';

const ThemeProvider = ({theme, children}) => {
  const [mode, setMode] = useState(localStorage.getItem(LS_THEME_KEY) || theme.getDefaultThemeName());

  useEffect(() => {
    localStorage.setItem(LS_THEME_KEY, mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{mode, setMode}}>
      <SCThemeProvider theme={theme.getVersion(mode)}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

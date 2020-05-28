import {createContext, useState} from 'react';
import React from 'react';
import {ThemeProvider as SCThemeProvider} from 'styled-components';

const ThemeContext = createContext();

const ThemeProvider = ({theme, children}) => {
  const [mode, setMode] = useState(theme.getDefaultThemeName());

  return (
    <ThemeContext.Provider value={{mode, setMode}}>
      <SCThemeProvider theme={theme.getVersion(mode)}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

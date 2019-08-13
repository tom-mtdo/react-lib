import React from 'react';

export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#666666',
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.dark // default value
  );
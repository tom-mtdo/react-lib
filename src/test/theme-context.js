import React from 'react';
import { EventEmitter2 } from 'eventemitter2';

export const event = new EventEmitter2({wildcard: false, maxListeners: 0});

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
    event // default value
);
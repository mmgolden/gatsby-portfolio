import 'typeface-open-sans';
import 'typeface-playfair-display';

export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    primary: '#3AC0C8',
    heading: '#333333',
  },
  fonts: {
    heading: ['serif', 'Playfair Display'],
    primary: ['sans-serif', 'Open Sans'],
  },
});

export type Theme = typeof theme;

import 'typeface-open-sans';
import 'typeface-playfair-display';
import 'typeface-fauna-one';

export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    primary: '#3AC0C8',
    heading: '#333333',
    primaryFont: '#777777',
  },
  fonts: {
    heading: ['serif', 'Playfair Display'],
    primary: ['sans-serif', 'Fauna One'],
  },
});

export type Theme = typeof theme;

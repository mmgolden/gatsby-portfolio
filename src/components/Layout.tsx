/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import './normalize.css';
import { ThemeProvider } from 'emotion-theming';
import { Navigation } from './Navigation';
import { theme } from '../base/theme';

export const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div css={styles.wrapper}>
        <Navigation />
        <main css={styles.main}>{children}</main>
      </div>
    </ThemeProvider>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    fontSize: '16px',
    '@media (min-width:767px)': {
      flexDirection: 'row',
    },
  } as const,
  main: {
    flex: 1,
  },
};

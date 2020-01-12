/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Navigation } from './Navigation';
import { theme } from '../base/theme';

export const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div css={styles.wrapper}>
        <Navigation />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    background: '#eeeeee',
  },
};

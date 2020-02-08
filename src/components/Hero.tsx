/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Theme } from '../base/theme';
import Logo from '../assets/logo-light.svg';

export const Hero: React.FC = () => {
  return (
    <div css={styles.hero}>
      <Logo css={styles.logo} />
      <div css={styles.content}>
        <h1 css={styles.heroTitle}>Hi! My name is Melinda Golden.</h1>
        <p css={styles.heroText}>
          I’m a Front-End Engineer. I bridge the gap between design and code.
        </p>
      </div>
    </div>
  );
};

const styles = {
  hero: (theme: Theme) =>
    ({
      display: 'flex',
      background: theme.colors.primary,
      height: '50vh',
      marginTop: '52px',
      padding: '12px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '@media (min-width:767px)': {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100vh',
        marginTop: 0,
        marginLeft: '72px',
        padding: '32px 62px',
      },
    } as const),
  logo: {
    display: 'none',
    '@media (min-width:767px)': {
      display: 'block',
      width: '40px',
      marginBottom: '150px',
    },
  },
  content: (theme: Theme) => ({
    color: theme.colors.white,
    '@media (min-width:767px)': {
      maxWidth: '540px',
    },
  }),
  heroTitle: (theme: Theme) =>
    ({
      fontFamily: theme.fonts.primary,
      margin: '0 0 16px 0',
      fontSize: '1rem',
      fontWeight: 'normal',
      '@media (min-width:767px)': {
        fontSize: '1.2rem',
      },
    } as const),
  heroText: (theme: Theme) => ({
    fontFamily: theme.fonts.heading,
    fontSize: '1.75rem',
    lineHeight: 1.4,
    margin: 0,
    '@media (min-width:767px)': {
      fontSize: '2.75rem',
    },
  }),
};

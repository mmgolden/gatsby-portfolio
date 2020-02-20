/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Theme } from '../base/theme';
import hero from '../images/hero.jpg';

export const Hero: React.FC = () => {
  return (
    <div css={styles.hero}>
      <div css={styles.content}>
        <h1 css={styles.heroTitle}>Hi! My name is Melinda Golden.</h1>
        <p css={styles.heroText}>
          I’m a Front-End Engineer. I bridge the gap between design and code.
        </p>
      </div>
      <img src={hero} alt="Coding on a laptop" css={styles.heroImage} />
    </div>
  );
};

const styles = {
  hero: (theme: Theme) =>
    ({
      display: 'flex',
      backgroundColor: theme.colors.primary,
      height: '100vh',
      marginTop: '3.25rem',
      padding: '0.75rem',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      '@media (min-width:767px)': {
        flexDirection: 'row',
        marginTop: 0,
        marginLeft: '4.5rem',
        padding: '2rem 3.875rem',
      },
    } as const),
  content: (theme: Theme) => ({
    color: theme.colors.white,
    '@media (min-width:767px)': {
      width: '390px',
      marginRight: 'auto',
      zIndex: 1,
    },
    '@media (min-width:992px)': {
      width: '540px',
    },
  }),
  heroTitle: (theme: Theme) =>
    ({
      fontFamily: theme.fonts.primary,
      margin: '0 0 1rem 0',
      fontSize: '1.2rem',
      fontWeight: 'normal',
    } as const),
  heroText: (theme: Theme) => ({
    fontFamily: theme.fonts.heading,
    fontSize: '1.8rem',
    lineHeight: 1.4,
    margin: 0,
    '@media (min-width:992px)': {
      fontSize: '2.75rem',
    },
  }),
  heroImage: {
    display: 'none',
    '@media (min-width:767px)': {
      display: 'block',
      position: 'absolute',
      right: 0,
      width: 600,
    },
    '@media (min-width:992px)': {
      width: 740,
    },
    '@media (min-width:1200px)': {
      width: 900,
    },
  } as const,
};

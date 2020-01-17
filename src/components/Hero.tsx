/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Theme } from '../base/theme';
import Logo from '../assets/logo-light.svg';

export const Hero: React.FC = () => {
  return (
    <div css={styles.hero}>
      <Logo css={styles.logo} />
      <div css={styles.intro}>
        <h1>Hi! My name is Melinda Golden.</h1>
        <p>
          I’m a Front-End Developer. I bridge the gap between design and code.
        </p>
      </div>
    </div>
  );
};

const styles = {
  hero: (theme: Theme) => ({
    display: 'flex',
    background: theme.colors.primary,
    height: '50vh',
    marginTop: '52px',
    padding: '12px',
    flexDirection: 'column' as const,
    justifyContent: 'center' as const,
    alignItems: 'center',
    '@media (min-width:767px)': {
      justifyContent: 'flex-start' as const,
      alignItems: 'flex-start',
      height: '100vh',
      marginTop: 0,
      marginLeft: '72px',
      padding: '32px 62px',
    },
  }),
  logo: {
    display: 'none',
    '@media (min-width:767px)': {
      display: 'block',
      width: '40px',
      marginBottom: '150px',
    },
  },
  intro: (theme: Theme) => ({
    color: theme.colors.white,
    '& h1': {
      fontFamily: theme.fonts.primary,
      margin: '0 0 16px 0',
      fontSize: '1rem',
      fontWeight: 'normal' as const,
    },
    '& p': {
      fontFamily: theme.fonts.heading,
      fontSize: '1.75rem',
      lineHeight: 1.4,
      margin: 0,
    },
    '@media (min-width:767px)': {
      maxWidth: '550px',
      '& h1': {
        fontSize: '1.2rem',
      },
      '& p': {
        fontSize: '2.75rem',
      },
    },
  }),
};

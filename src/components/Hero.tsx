/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Theme } from '../base/theme';

export const Hero: React.FC = () => {
  return (
    <div css={styles.hero}>
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
      backgroundColor: theme.colors.primary,
      height: '50%',
      marginTop: '52px',
      padding: '12px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '@media (min-width:767px)': {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100%',
        marginTop: 0,
        marginLeft: '72px',
        padding: '32px 62px',
      },
    } as const),
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

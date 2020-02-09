/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Theme } from '../base/theme';

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Burger: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <button
      type="button"
      aria-label="Toggle navigation"
      css={(theme: Theme) => ({
        ...styles.button(theme),
        ...(isMenuOpen ? styles.close : styles.burger),
      })}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <span css={styles.line} />
      <span css={styles.line} />
      <span css={styles.line} />
    </button>
  );
};

const styles = {
  button: (theme: Theme) =>
    ({
      background: 'transparent',
      border: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '32px',
      height: '32px',
      outline: 'none',
      cursor: 'pointer',
      '&:focus': {
        outline: `1px solid ${theme.colors.primary}`,
      },
      '@media (min-width:767px)': {
        marginBottom: 'auto',
        marginTop: '32px',
      },
    } as const),
  burger: {
    '& span:first-child': {
      width: '16px',
    },
    '& span:nth-child(2)': {
      width: '32px',
      marginTop: '8px',
      marginBottom: '8px',
    },
    '& span:nth-child(3)': {
      width: '16px',
    },
  },
  close: {
    '& span:first-child': {
      width: '32px',
      transform: 'rotate(45deg)',
    },
    '& span:nth-child(2)': {
      width: '32px',
      opacity: 0,
    },
    '& span:nth-child(3)': {
      width: '32px',
      transform: 'rotate(-45deg)',
    },
  },
  line: (theme: Theme) => ({
    display: 'block',
    height: '2px',
    background: theme.colors.primary,
    transformOrigin: '13px',
    transition: 'all 0.3s linear',
  }),
};

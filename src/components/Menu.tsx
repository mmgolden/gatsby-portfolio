/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Link } from 'gatsby';
import { Theme } from '../base/theme';
import { Social } from './Social';

interface Props {
  isMenuOpen: boolean;
}

export const Menu: React.FC<Props> = ({ isMenuOpen }) => {
  return (
    <div css={isMenuOpen ? styles.menuOpen : styles.menuClosed}>
      <ul css={styles.menu}>
        <li css={styles.menuItem}>
          <Link to="/" css={styles.menuLink}>
            Home
          </Link>
        </li>
        <li css={styles.menuItem}>
          <Link to="/about" css={styles.menuLink}>
            About
          </Link>
        </li>
        <li css={styles.menuItem}>
          <Link to="/" css={styles.menuLink}>
            Portfolio
          </Link>
        </li>
        <li css={styles.menuItem}>
          <Link to="/" css={styles.menuLink}>
            Contact
          </Link>
        </li>
      </ul>
      <div css={styles.social}>
        <Social />
      </div>
    </div>
  );
};

const styles = {
  menuOpen: (theme: Theme) =>
    ({
      background: theme.colors.white,
      position: 'fixed',
      height: '100vh',
      padding: '2rem 3.875rem',
      transition: 'transform 0.5s ease-in-out',
      top: '52px',
      left: 0,
      right: 0,
      zIndex: 9,
      display: 'flex',
      flexDirection: 'column',
      '& a': {
        opacity: 1,
      },
      '@media (min-width:767px)': {
        top: 0,
        left: '72px',
        width: '360px',
      },
    } as const),
  menuClosed: (theme: Theme) =>
    ({
      background: theme.colors.white,
      position: 'fixed',
      height: '100vh',
      padding: '2rem 3.875rem',
      transition: 'transform 0.5s ease-in-out',
      width: '100%',
      top: 0,
      left: 0,
      transform: 'translateY(-100%)',
      zIndex: 9,
      '& a': {
        opacity: 0,
      },
      '@media (min-width:767px)': {
        top: 0,
        left: '72px',
        width: '200px',
        transform: 'translateX(-100%)',
      },
    } as const),
  logo: {
    display: 'none',
    '@media (min-width:767px)': {
      display: 'block',
      width: '40px',
    },
  },
  menu: {
    listStyle: 'none',
    paddingLeft: 0,
    '@media (min-width:767px)': {
      marginTop: '4.5rem',
    },
  },
  menuItem: {
    marginBottom: '2rem',
  },
  menuLink: (theme: Theme) => ({
    transition: 'opacity 0.2s, color 0.3s',
    cursor: 'pointer',
    fontFamily: theme.fonts.heading,
    fontSize: '2rem',
    color: theme.colors.heading,
    textDecoration: 'none',
    '&:hover, &:focus': {
      color: theme.colors.primary,
    },
  }),
  social: {
    marginTop: 'auto',
    marginBottom: '1rem',
    '@media (min-width:767px)': {
      display: 'none',
      marginTop: 0,
      marginBottom: 0,
    },
  },
};

/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Link } from 'react-scroll';
import { Theme } from '../base/theme';
import Logo from '../assets/logo-dark.svg';

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div css={isMenuOpen ? styles.menuOpen : styles.menuClosed}>
      <Logo css={styles.logo} />
      <ul css={styles.menu}>
        <li css={styles.menuItem}>
          <Link to="/" css={styles.menuLink}>
            Home
          </Link>
        </li>
        <li css={styles.menuItem}>
          <Link to="/" css={styles.menuLink}>
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
    </div>
  );
};

const styles = {
  menuOpen: (theme: Theme) =>
    ({
      background: theme.colors.white,
      position: 'absolute',
      height: '100vh',
      padding: '32px 62px',
      transition: 'transform 0.5s ease-in-out',
      top: '52px',
      left: 0,
      right: 0,
      '@media (min-width:767px)': {
        top: 0,
        left: '72px',
        width: '200px',
      },
    } as const),
  menuClosed: (theme: Theme) =>
    ({
      background: theme.colors.white,
      position: 'absolute',
      height: '100vh',
      padding: '32px 62px',
      transition: 'transform 0.5s ease-in-out',
      width: '100%',
      top: 0,
      left: 0,
      transform: 'translateY(-100%)',
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
  menu: (theme: Theme) => ({
    listStyle: 'none',
    paddingLeft: 0,
    fontFamily: theme.fonts.heading,
    fontSize: '2rem',
    color: theme.colors.heading,
    '@media (min-width:767px)': {
      marginTop: '72px',
    },
  }),
  menuItem: {
    marginBottom: '32px',
  },
  menuLink: (theme: Theme) => ({
    transition: 'color 0.3s',
    cursor: 'pointer',
    '&:hover': {
      color: theme.colors.primary,
    },
  }),
};

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
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Portfolio</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  menuOpen: (theme: Theme) => ({
    background: theme.colors.white,
    position: 'absolute' as const,
    height: '100vh',
    padding: '32px 62px',
    transition: 'transform 0.5s ease-in-out',
    width: '100%',
    top: '52px',
    left: 0,
    '@media (min-width:767px)': {
      top: 0,
      left: '72px',
      width: '200px',
    },
  }),
  menuClosed: (theme: Theme) => ({
    background: theme.colors.white,
    position: 'absolute' as const,
    height: '100vh',
    padding: '32px 62px',
    transition: 'transform 0.5s ease-in-out',
    width: '100%',
    top: 0,
    left: 0,
    transform: 'translateY(-100%)' as const,
    '@media (min-width:767px)': {
      top: 0,
      left: '72px',
      width: '200px',
      transform: 'translateX(-100%)' as const,
    },
  }),
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
    '& li': {
      marginBottom: '32px',
    },
    '& li a:hover': {
      color: theme.colors.primary,
    },
    '@media (min-width:767px)': {
      marginTop: '72px',
    },
  }),
};

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
    <div css={styles.menuContainer}>
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
  menuContainer: (theme: Theme) => ({
    background: theme.colors.white,
    position: 'absolute' as const,
    top: '52px',
    left: 0,
    width: '100%',
    padding: '32px 62px',
    height: '100vh',
    transition: 'transform 0.3s ease-in-out',
    '@media (min-width:767px)': {
      position: 'absolute' as const,
      top: 0,
      left: '72px',
      width: '250px',
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

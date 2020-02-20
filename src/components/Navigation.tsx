/** @jsx jsx */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { jsx } from '@emotion/core';
import { Theme } from '../base/theme';
import Logo from '../assets/logo-dark.svg';
import { Burger } from './Burger';
import { Social } from './Social';
import { Menu } from './Menu';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div css={styles.navbar}>
        <Link to="/" aria-label="Logo">
          <Logo css={styles.logo} />
        </Link>
        <Burger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div css={styles.social}>
          <Social />
        </div>
      </div>
      <Menu isMenuOpen={isMenuOpen} />
    </nav>
  );
};

const styles = {
  navbar: (theme: Theme) =>
    ({
      display: 'flex',
      background: theme.colors.white,
      height: '52px',
      alignItems: 'center',
      zIndex: 999,
      padding: '0 0.75rem',
      justifyContent: 'space-between',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      '@media (min-width:767px)': {
        flexDirection: 'column',
        width: '72px',
        right: 'auto',
        bottom: 0,
        padding: '2rem 0',
        height: '100%',
      },
    } as const),
  logo: {
    width: '32px',
  },
  social: {
    display: 'none',
    '@media (min-width:767px)': {
      display: 'block',
    },
  },
};

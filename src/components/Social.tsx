/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Github from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
import Twitter from '../assets/twitter.svg';
import { Theme } from '../base/theme';

export const Social: React.FC = () => {
  return (
    <ul css={styles.social}>
      <li>
        <a
          href="https://github.com/mmgolden"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <Github css={styles.icon} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/melindamgolden"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <Linkedin css={styles.icon} />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/melindamgolden"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter css={styles.icon} />
        </a>
      </li>
    </ul>
  );
};

const styles = {
  social: {
    display: 'none',
    '@media (min-width:767px)': {
      display: 'block',
      listStyle: 'none',
      paddingLeft: 0,
    },
  },
  icon: (theme: Theme) => ({
    fill: theme.colors.primary,
    width: '24px',
    height: 'auto',
    padding: '4px',
    transition: 'opacity 0.3s',
    '&:hover': {
      opacity: 0.6,
    },
  }),
};

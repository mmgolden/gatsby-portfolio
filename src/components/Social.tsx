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
          css={styles.link}
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
          css={styles.link}
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
          css={styles.link}
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
  link: (theme: Theme) => ({
    outline: 'none',
    '&:focus': {
      outline: `1px solid ${theme.colors.primary}`,
    },
  }),
  icon: (theme: Theme) => ({
    fill: theme.colors.primary,
    width: '24px',
    height: 'auto',
    padding: '4px',
    transition: 'fill 0.3s',
    '&:hover, &:focus': {
      fill: theme.colors.primaryFont,
    },
  }),
};

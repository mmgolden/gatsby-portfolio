/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Theme } from '../base/theme';

interface Props {
  text: string;
  action: () => void;
}

export const LinkButton: React.FC<Props> = ({ text, action }) => {
  return (
    <button type="button" css={styles.button} onClick={action}>
      {`${text} →`}
    </button>
  );
};

const styles = {
  button: (theme: Theme) => ({
    color: theme.colors.primary,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    outline: 'none',
    '&:hover, &:focus': {
      textDecoration: 'underline',
    },
  }),
};

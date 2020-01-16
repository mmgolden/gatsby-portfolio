/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { SEO } from '../components/Seo';
import { Layout } from '../components/Layout';
import { Theme } from '../base/theme';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO />
    <div css={styles.hero}>
      <h1>This is the homepage</h1>
    </div>
  </Layout>
);

const styles = {
  hero: (theme: Theme) => ({
    display: 'flex',
    background: theme.colors.primary,
    height: '50vh',
    marginTop: '52px',
    '& h1': {
      margin: 0,
    },
    '@media (min-width:767px)': {
      height: '100vh',
      marginTop: 0,
      marginLeft: '72px',
    },
  }),
};

export default IndexPage;

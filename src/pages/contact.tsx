/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { SEO } from '../components/Seo';
import { Layout } from '../components/Layout';
import { Theme } from '../base/theme';

const ContactPage: React.FC = () => (
  <Layout>
    <SEO />
    <div css={styles.pageContainer}>
      <h1 css={styles.heading}>
        {`Want to get in touch? I would love to hear from you! Send me an email
          at `}
        <a href="mailto:info@melindagolden.com">info@melindagolden.com</a>
      </h1>
    </div>
  </Layout>
);

const styles = {
  pageContainer: {
    padding: '1.25rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    '@media (min-width:767px)': {
      padding: '6rem 3.875rem 3.875rem 3.875rem',
    },
  } as const,
  heading: (theme: Theme) =>
    ({
      margin: 0,
      color: theme.colors.heading,
      fontWeight: 400,
      textAlign: 'center',
      lineHeight: 1.5,
      fontSize: '2rem',
      '& a': {
        color: theme.colors.primary,
        textDecoration: 'none',
      },
      '@media (min-width:992px)': {
        maxWidth: 600,
      },
    } as const),
};

export default ContactPage;

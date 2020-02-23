/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { navigate } from 'gatsby';
import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';
import gatsbyPortfolio from '../images/gatsby-portfolio.png';
import { Theme } from '../base/theme';
import { LinkButton } from '../components/LinkButton';

const PortfolioPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <div css={styles.pageContainer}>
        <div css={styles.portfolioItem}>
          <div css={styles.imageContainer}>
            <img
              src={gatsbyPortfolio}
              alt="Gatsby portfolio"
              css={styles.image}
            />
          </div>
          <div css={styles.contentContainer}>
            <div css={styles.description}>
              <h2 css={styles.descriptionTitle}>Gatsby Portfolio</h2>
              <p css={styles.text}>
                I built my portfolio website with Gatsby. The purpose of this
                website is to showcase the projects I have created. I chose
                Gatsby because I was interested in learning about it and I liked
                that I could use React.
              </p>
            </div>
            <div css={styles.technologyContainer}>
              <h3 css={styles.technologyTitle}>Technology</h3>
              <ul css={styles.technologyList}>
                <li>Gatsby</li>
                <li>Emotion</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div css={styles.buttonContainer}>
              <LinkButton
                text="View on Github"
                action={() =>
                  window.open(
                    'https://github.com/mmgolden/gatsby-portfolio',
                    '_blank'
                  )
                }
              />
              <LinkButton text="View live" action={() => navigate('/')} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const styles = {
  pageContainer: {
    padding: '1.25rem',
    '@media (min-width:767px)': {
      padding: '6rem 3.875rem 3.875rem 3.875rem',
    },
  } as const,
  portfolioItem: {
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width:992px)': {
      flexDirection: 'row',
    },
  } as const,
  contentContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    marginBottom: '1.5rem',
    '@media (min-width:992px)': {
      paddingRight: '3rem',
      marginBottom: 0,
    },
  },
  image: {
    width: '100%',
    borderRadius: 2,
  },
  description: {
    marginBottom: '1.5rem',
  },
  descriptionTitle: (theme: Theme) => ({
    color: theme.colors.heading,
    fontWeight: 400,
    margin: '0 0 1.5rem 0',
    '&:after': {
      content: `''`,
      display: 'block',
      width: 100,
      height: 2,
      background: theme.colors.primary,
      marginTop: '0.75rem',
    },
  }),
  text: (theme: Theme) => ({
    color: theme.colors.primaryFont,
    fontSize: '1rem',
    lineHeight: 1.8,
    margin: 0,
  }),
  technologyContainer: {
    marginBottom: '2rem',
  },
  technologyTitle: (theme: Theme) => ({
    color: theme.colors.heading,
    fontWeight: 400,
    fontFamily: theme.fonts.primary,
    margin: '0 0 1rem 0',
    fontSize: '1rem',
  }),
  technologyList: (theme: Theme) => ({
    listStyle: 'none',
    paddingLeft: 0,
    '& li': {
      display: 'inline-block',
      marginRight: '1.5rem',
      color: theme.colors.primaryFont,
    },
  }),
  buttonContainer: {
    '& button': {
      marginRight: '2rem',
      '&:last-of-type': {
        marginRight: 0,
      },
    },
  },
};

export default PortfolioPage;

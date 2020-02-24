/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';
import { Theme } from '../base/theme';
import { LinkButton } from '../components/LinkButton';
import { extractNodes } from '../base/utils/extractNodes';
import { ChildImageSharp } from '../typings/image';

interface Portfolio {
  id: string;
  title: string;
  description: string;
  image: ChildImageSharp;
  technology: string[];
  github: string;
  live: string;
}

const PortfolioPage: React.FC = () => {
  const { allPortfolioJson } = useStaticQuery(
    graphql`
      query {
        allPortfolioJson {
          edges {
            node {
              id
              title
              description
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              technology
              github
              live
            }
          }
        }
      }
    `
  );

  const portfolioItems = extractNodes<Portfolio>(allPortfolioJson.edges);

  return (
    <Layout>
      <SEO title="Portfolio" />
      <div css={styles.pageContainer}>
        {portfolioItems.map((item: Portfolio) => (
          <div css={styles.portfolioItem} key={item.id}>
            <div css={styles.imageContainer}>
              <Img
                fluid={item.image.childImageSharp.fluid}
                alt={item.title}
                style={styles.image}
              />
            </div>
            <div css={styles.contentContainer}>
              <div css={styles.description}>
                <h2 css={styles.descriptionTitle}>{item.title}</h2>
                <p css={styles.text}>{item.description}</p>
              </div>
              <div css={styles.technologyContainer}>
                <h3 css={styles.technologyTitle}>Technology</h3>
                <ul css={styles.technologyList}>
                  {item.technology.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div css={styles.buttonContainer}>
                <LinkButton
                  text="View on Github"
                  action={() => window.open(`${item.github}`, '_blank')}
                />
                <LinkButton
                  text="View live"
                  action={() => window.open(`${item.live}`, '_blank')}
                />
              </div>
            </div>
          </div>
        ))}
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
    marginBottom: '4rem',
    '@media (min-width:992px)': {
      flexDirection: 'row',
      marginBottom: '6rem',
    },
    '&:last-of-type': {
      marginBottom: 0,
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

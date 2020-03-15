/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';
import { Theme } from '../base/theme';
import Img from 'gatsby-image';
import { LinkButton } from '../components/LinkButton';
import { extractNodes } from '../base/utils/extractNodes';
import { useStaticQuery, graphql } from 'gatsby';
import { ChildImageSharp } from '../typings/image';

interface About {
  image: ChildImageSharp;
  description: string[];
}

interface Job {
  id: string;
  title: string;
  company: string;
  timeline: string;
  description: string;
}

const AboutPage: React.FC = () => {
  const { allAboutJson, allWorkExperienceJson } = useStaticQuery(
    graphql`
      query {
        allAboutJson {
          edges {
            node {
              image {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              description
            }
          }
        }
        allWorkExperienceJson {
          edges {
            node {
              id
              title
              company
              timeline
              description
            }
          }
        }
      }
    `
  );

  const about: About[] = extractNodes<About>(allAboutJson.edges);
  const workExperience = extractNodes<Job>(allWorkExperienceJson.edges);

  return (
    <Layout>
      <SEO title="About" />
      <div css={styles.pageContainer}>
        <div css={styles.container}>
          <div css={styles.firstColumn}>
            {about[0].description.map((text, index) => {
              if (index === 0) {
                return (
                  <h1 css={styles.intro} key={index}>
                    {text}
                  </h1>
                );
              }

              return (
                <p css={styles.text} key={index}>
                  {text}
                </p>
              );
            })}
          </div>
          <div css={styles.image}>
            <Img
              fluid={about[0].image.childImageSharp.fluid}
              alt="Melinda Golden"
              style={styles.image}
            />
          </div>
        </div>
        <div css={styles.container}>
          <div css={styles.firstColumn}>
            <h2 css={styles.heading}>Work Experience</h2>
            {workExperience.map((job: Job) => (
              <div css={styles.job} key={job.id}>
                <h3 css={styles.jobTitle}>{job.title}</h3>
                <div css={styles.companyContainer}>
                  <p css={styles.company}>{job.company}</p>
                  <p css={styles.company}>{job.timeline}</p>
                </div>
                <p css={styles.text}>{job.description}</p>
              </div>
            ))}
          </div>
          <div css={styles.skills}>
            <h2 css={styles.heading}>Skills</h2>
            <div css={styles.flexContainer}>
              <ul css={styles.list}>
                <li>React</li>
                <li>React Native</li>
                <li>Gatsby</li>
                <li>Apollo</li>
                <li>Cypress</li>
                <li>Jest</li>
              </ul>
              <ul css={styles.list}>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>CSS/SCSS</li>
                <li>HTML</li>
                <li>Git</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <LinkButton
              text="Download resume"
              action={() =>
                window.open(
                  'https://melindagolden.com/MelindaGolden.pdf',
                  '_blank'
                )
              }
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const styles = {
  flexContainer: {
    display: 'flex',
  },
  pageContainer: {
    padding: '1.25rem',
    '@media (min-width:767px)': {
      padding: '6rem 3.875rem 3.875rem 3.875rem',
    },
  } as const,
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '4rem',
    '@media (min-width:992px)': {
      marginBottom: '6rem',
      flexDirection: 'row',
    },
  } as const,
  firstColumn: {
    marginBottom: '2rem',
    '@media (min-width:992px)': {
      flex: 1,
      padding: '0 3rem 0 0',
    },
    '@media (min-width:1200px)': {
      marginBottom: 0,
      flex: 2,
    },
  },
  intro: (theme: Theme) => ({
    color: theme.colors.heading,
    fontSize: '1.5rem',
    margin: '0 0 1rem 0',
    lineHeight: 1.5,
    fontWeight: 400,
  }),
  text: (theme: Theme) => ({
    color: theme.colors.primaryFont,
    fontSize: '1rem',
    lineHeight: 1.8,
    margin: '0 0 1rem 0',
  }),
  image: {
    flex: 1,
    '& img': {
      width: '100%',
      borderRadius: 2,
    },
  },
  heading: (theme: Theme) => ({
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
  list: (theme: Theme) => ({
    listStyle: 'none',
    paddingLeft: 0,
    color: theme.colors.primaryFont,
    marginBottom: '3rem',
    marginRight: '3rem',
    '& li': {
      marginBottom: '0.75rem',
      '&:last-of-type': {
        marginBottom: 0,
      },
    },
    '&:last-of-type': {
      marginRight: 0,
    },
  }),
  skills: {
    flex: 1,
  },
  job: {
    marginBottom: '2rem',
  },
  jobTitle: (theme: Theme) => ({
    color: theme.colors.heading,
    fontFamily: theme.fonts.primary,
    fontWeight: 400,
    margin: '0 0 1rem 0',
    fontSize: '1rem',
  }),
  companyContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  company: (theme: Theme) => ({
    color: theme.colors.primaryFont,
    margin: '0 0 1rem 0',
    fontSize: '0.875rem',
    opacity: 0.7,
  }),
};

export default AboutPage;

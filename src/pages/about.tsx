/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';
import { Theme } from '../base/theme';
import headshot from '../images/headshot.jpg';
import { LinkButton } from '../components/LinkButton';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div css={styles.pageContainer}>
        <div css={styles.container}>
          <div css={styles.firstColumn}>
            <h1 css={styles.intro}>
              I'm Melinda. For the last year, I have been building software with
              React, Apollo and GraphQL. Recently I have adopted TypeScript.
              I’ve had the opportunity to design and develop my own features. On
              the side, I have taught myself how to build cross-platform mobile
              apps with React Native.
            </h1>
            <p css={styles.text}>
              What I enjoy about development is bringing together design with
              code. For me, there isn’t a better feeling than creating something
              from nothing. I get excited about coding a beautiful UI and I can
              honestly say that I love CSS. That’s why I specialize in front-end
              development.
            </p>
            <p css={styles.text}>
              Before I got into software, I worked for a web design company for
              three years building websites with HTML, CSS, and JavaScript or
              with WordPress. While working full time, I was growing my skills
              as a developer. Previously I was a marketing manager for a group
              of surgeons. After graduating from art school, I ran my own
              photography business.
            </p>
            <p css={styles.text}>
              While I spend much of my free time learning, I also regularly
              attend local tech meetups. I have volunteered to give
              presentations about JavaScript and share my knowledge with other
              developers. Along with other women leaders, I helped re-launch the
              women in tech meetup in Asheville. Besides coding, I enjoy
              traveling, hiking, and photography.
            </p>
          </div>
          <div css={styles.image}>
            <img src={headshot} alt="Melinda Golden" />
          </div>
        </div>
        <div css={styles.container}>
          <div css={styles.firstColumn}>
            <h2 css={styles.heading}>Work Experience</h2>
            <div css={styles.job}>
              <h3 css={styles.jobTitle}>Software Engineer</h3>
              <div css={styles.companyContainer}>
                <p css={styles.company}>
                  Level Software, Advanced Data & Network Solutions
                </p>
                <p css={styles.company}>2019 - Present</p>
              </div>
              <p css={styles.text}>
                Advanced Data & Network Solutions is a MSP that founded a
                startup, Level Software, which focuses on software for IT
                professionals. As a developer, I built front end applications
                using React, Apollo, GraphQL, and TypeScript. In order to
                increase confidence in our code, I implemented integration tests
                using React Testing Library with Jest and end-to-end tests with
                Cypress. I used Git for version control and completed code
                reviews. To collaborate effectively with the team, I
                communicated through Slack.
              </p>
            </div>
            <div css={styles.job}>
              <h3 css={styles.jobTitle}>Web Developer - Remote</h3>
              <div css={styles.companyContainer}>
                <p css={styles.company}>Rubix</p>
                <p css={styles.company}>2016 - 2019</p>
              </div>
              <p css={styles.text}>
                I built approximately 300 responsive, static websites using
                HTML, CSS, and Bootstrap templates. Some of those websites were
                created with WordPress by customizing themes. On average each
                month, I responded to over 400 support tickets in our CMS and
                updated websites for our clients. I edited logos and images with
                Photoshop and Illustrator. The company sent me all over the
                country to take pictures and videos of events for our clients.
                We used Asana to keep track of projects.
              </p>
            </div>
            <div css={styles.job}>
              <h3 css={styles.jobTitle}>Marketing Manager</h3>
              <div css={styles.companyContainer}>
                <p css={styles.company}>Georgia Oral & Facial Surgery</p>
                <p css={styles.company}>2014 - 2016</p>
              </div>
              <p css={styles.text}>
                The websites for the doctors were out of date so I designed new
                WordPress websites by customizing themes with CSS. Website
                traffic was increased by writing blog posts, SEO, and posting to
                social media. I created and managed their Facebook ads.
                MailChimp was used to create email campaigns. I designed
                promotional flyers, postcards, brochures, and banners with
                Photoshop, Illustrator, and InDesign.
              </p>
            </div>
            <div css={styles.job}>
              <h3 css={styles.jobTitle}>Owner/Photographer</h3>
              <div css={styles.companyContainer}>
                <p css={styles.company}>Golden Photography, LLC</p>
                <p css={styles.company}>2012 - 2016</p>
              </div>
              <p css={styles.text}>
                I generated leads through our website that was built by
                customizing a WordPress theme with CSS. I photographed weddings,
                engagements, headshots, and products. Images were edited and
                re-touched with Lightroom and Photoshop.
              </p>
            </div>
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
            <LinkButton text="Download resume" action={() => {}} />
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

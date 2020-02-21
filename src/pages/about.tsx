/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';
import { Theme } from '../base/theme';
import headshot from '../images/headshot.jpg';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <SEO />
      <div css={styles.container}>
        <div css={styles.content}>
          <h1 css={styles.heading}>About</h1>
          <p css={styles.text}>
            For the last year, I have been building software with React, Apollo
            and GraphQL. Recently I have adopted TypeScript. I’ve had the
            opportunity to design and develop my own features. On the side, I
            have taught myself how to build cross-platform mobile apps with
            React Native.
          </p>
          <p css={styles.text}>
            What I enjoy about development is bringing together design with
            code. For me, there isn’t a better feeling than creating something
            from nothing. I get excited about coding a beautiful UI and I can
            honestly say that I love CSS. That’s why I specialize in front-end
            development.
          </p>
          <p css={styles.text}>
            Before I got into software, I worked for a web design company for
            three years building websites with HTML, CSS, and JavaScript or with
            WordPress. While working full time, I was growing my skills as a
            developer. Previously I was a marketing manager for a group of
            surgeons. After graduating from art school, I ran my own photography
            business.
          </p>
          <p css={styles.text}>
            While I spend much of my free time learning, I also regularly attend
            local tech meetups. I have volunteered to give presentations about
            JavaScript and share my knowledge with other developers. Along with
            other women leaders, I helped re-launch the women in tech meetup in
            Asheville. Besides coding, I enjoy traveling, hiking, and
            photography.
          </p>
        </div>
        <div css={styles.image}>
          <img src={headshot} alt="Melinda Golden" />
        </div>
      </div>
    </Layout>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '1.25rem',
    '@media (min-width:767px)': {
      padding: '2rem 3.875rem',
    },
  },
  content: {
    '@media (min-width:767px)': {
      flex: 1,
    },
  },
  heading: (theme: Theme) => ({
    color: theme.colors.heading,
    fontWeight: 400,
    margin: '0 0 1.5rem 0',
    fontSize: '2rem',
    '&:after': {
      content: `''`,
      display: 'block',
      width: 148,
      height: 2,
      background: theme.colors.primary,
      marginTop: '0.75rem',
    },
  }),
  text: (theme: Theme) => ({
    color: theme.colors.primaryFont,
    fontSize: '1rem',
    lineHeight: 1.8,
    margin: '0 0 1rem 0',
  }),
  image: {
    flex: 1,
    padding: '2rem 0 0 3rem',
    '& img': {
      width: '100%',
    },
  },
};

export default AboutPage;

import React from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <SEO />
      <h1>About</h1>
    </Layout>
  );
};

export default AboutPage;

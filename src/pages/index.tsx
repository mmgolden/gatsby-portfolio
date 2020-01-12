import React from 'react';
import { SEO } from '../components/Seo';
import { Layout } from '../components/Layout';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO />
    <h1>This is the homepage</h1>
  </Layout>
);

export default IndexPage;

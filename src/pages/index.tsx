/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { SEO } from '../components/Seo';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO />
    <Hero />
  </Layout>
);

export default IndexPage;

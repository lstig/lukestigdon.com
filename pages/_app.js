// Custom App to load global css
import React from 'react';
import App from 'next/app';
import Layout from '../components/layout';
import '@patternfly/react-core/dist/styles/base.css';

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
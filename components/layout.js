import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import '../assets/style.scss';

const Layout = (props) => (
  <Grid fluid>
    <Row>
      <Head>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sergiu Tomsa | tsergium.ro</title>
        <meta name="description" content="Tomsa Sergiu, Senior Software Engineer" />
        <meta name="theme-color" content="#317EFB"/>
        <meta name="p:domain_verify" content="7250a8b658b7c7a835cd418249e3a3fd"/>
        <link rel="manifest" href="/static/manifest.json" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{__html: `        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-11778944-2', 'auto');
          ga('send', 'pageview');`}} />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </Row>
  </Grid>
);

export default Layout;

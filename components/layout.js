import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import '../assets/style.scss';


const Layout = (props) => (
  <Grid fluid>
    <Head>
      <title>Sergiu Tomsa | tsergium.ro</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
      <script dangerouslySetInnerHTML={{__html: `        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-11778944-2', 'auto');
        ga('send', 'pageview');`}} />
    </Head>
    <Row>
      <Header />
      {props.children}
      <Footer />
    </Row>
  </Grid>
);

export default Layout;

import React, { Component } from 'react';
import Layout from '../components/layout';
import About from '../components/about';
import Technologies from '../components/technologies';
import Portfolio from "../components/portfolio";
import Hero from "../components/hero";

class App extends Component {
  render() {
    return (
      <Layout>
        <Hero/>
        <About/>
        <Technologies/>
        <Portfolio/>
      </Layout>
    );
  };
}

export default App;

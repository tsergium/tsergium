import React, { Component } from 'react';
import Layout from '../components/layout';
import About from '../components/about';
import Technologies from '../components/technologies';

class App extends Component {
  render() {
    return (
      <Layout>
        <div className="container_fluid bg-skew bg-skew-light home-banner banner-set mt-140">
          <div className="container content">
            <div className="row bg_main">
              <div className="col-sm-12" />
            </div>
          </div>
        </div>

        <About/>
        <Technologies/>

      </Layout>
    );
  };
}

export default App;

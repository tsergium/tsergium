import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/src/sass/aos.scss';
import Layout from '../components/layout';

class App extends Component {
  componentDidMount() {
    AOS.init({
      delay: 300,
      duration: 1200,
    });
  }

  render() {
    return (
      <Layout>
        <div className="index_container">
          <div className="text">
            <h1 data-aos="slide-down">Web Solutions and Mobile Applications</h1>
            <p data-aos="slide-up">
              Succesul adevarat este momentul in care oamenii inceteaza<br />
              sa te caute pe Facebook si incep sa te caute pe Google.
            </p>
          </div>
        </div>
      </Layout>
    );
  };
}

export default App;

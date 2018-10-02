import React, { Component } from 'react';
import Layout from '../components/layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <div className="index_container">
          <div className="text">
            <h1>Web Solutions and Mobile Applications</h1>
            <p>
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

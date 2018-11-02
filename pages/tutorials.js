import React, { Component } from 'react';
import 'isomorphic-fetch';
import renderHTML from 'react-render-html';
import Layout from '../components/layout';

class Tutorials extends Component {
  static async getInitialProps () {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmMwYWQzNDA5MWI2MTYxZDVhOTYyNWMiLCJpYXQiOjE1Mzk5NTAwMDMsImV4cCI6MTU0MjU0MjAwM30.azJYptrKp0Hx31cCZ4xduPSDHIi4C5XF05PRmrtkblM";
    const res = await fetch(
      'http://localhost:1337/tutorials',
      {
        method: 'get',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    );
    const data = await res.json();
    return { jsonData: data };
  }

  constructor(props) {
    super(props);
    const { jsonData } = props;

    this.tutorials = jsonData;
  }

  renderTutorials() {
    if (!this.tutorials) {
      return false;
    }

    return this.tutorials.map((tutorial, index) => {
      return (
        <div key={index}>
          <h5>{tutorial.title}</h5>
          {renderHTML(tutorial.content)}
        </div>
      );
    });
  }

  render() {
    return (
      <Layout>
        <div>Tutorials</div>
        {this.renderTutorials()}
      </Layout>
    );
  }
}

export default Tutorials;

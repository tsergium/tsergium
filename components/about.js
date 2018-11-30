import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/src/sass/aos.scss';

class About extends Component {
  componentDidMount() {
    AOS.init({
      delay: 300,
      duration: 1200,
    });
  }

  render() {
    return (
      <Grid>
        <Row className={`mt80`}>
          <Col sm={12} className={`mt40`}>
            <h3 className="text-center">ABOUT ME</h3>
          </Col>
        </Row>
        <Row className={`mt40`}>
          <Col sm={12} className="text">
            <p>
              I am a Senior Software Engineer with more than 9 years of experience with knowledge in both Frontend and Backend development but also Project Management.
            </p>
            <p>
              Colleagues know me as highly motivated and passionate about my job, always willing to listen, help and improve myself and others, and with a “Nothing is impossible. The impossible just takes a little longer.” attitude. Also, I knew I wanted to become a programmer in the fifth grade and never changed my mind since then.
            </p>
            <p>
              I have a Bachelor's degree in Computer Science from North University of Baia Mare.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default About;

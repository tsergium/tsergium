import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends Component {
  render() {
    const year = (new Date()).getFullYear();

    return (
      <Grid className="grey_bg footer" fluid>
        <Row className="grey_bg_content">
          <Grid>
            <Row>
              <Col sm={12}>
                <p><span className="strong">Copyright © {year}</span> Tomsa Sergiu</p>
              </Col>
            </Row>
          </Grid>
        </Row>
      </Grid>
    );
  }
}

export default Footer;

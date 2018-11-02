import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import Link from "next/link";

class About extends Component {
  render() {
    return (
      <Layout>
        <Grid className="grey_bg" fluid>
          <Row className="grey_bg_content">
            <Grid>
              <Row>
                <p>
                  I am a Web Developer with 5+ years of experience with knowledge in both Frontend and Backend
                  development but also Project Management. During my career I have worked on more than 60 web based
                  projects from presentation websites, to eCommerce, political party administration platforms and
                  wholesale trading networks, portals and employment websites.
                  <br /><br />
                  Until recently I worked as a Senior Web Developer and I led a 10 people Scrum Team specialised in
                  creating web solutions for the public sector for a company ranked #42 in the prestigious Deloitte
                  Technology Fast 50 CE 2014 programme.
                  <br /><br />
                  Colleagues know me as highly motivated and passionate about my job, always willing to listen, help
                  and improve myself and others, and with a “Nothing is impossible. The impossible just takes a
                  little longer” attitude. Also, I knew I wanted to become a programmer in the fifth grade and never
                  changed my mind since then.
                  <br /><br />
                  I have a Bachelor's degree in Computer Science from North University of Baia Mare.
                  <br /><br />
                  I am currently working for Shopwings, a Rocket Internet venture in Berlin, Germany.
                  <br /><br />
                  Technologies involved:
                  <strong>
                    HTML, CSS, PHP, MySQL, ZF1, ZF2, Laravel, SVN, Github,
                    jQuery, Bootstrap v3, Ubuntu Server, Apache, Scrum, VirtualBox, Zoho Projects, MySQL
                    Workbench, PHP Documentor, Composer, Balsamiq Mockups, Photoshop, Wordpress, Magento,
                    Prestashop.
                  </strong>
                </p>
                <br /><br />
                <Link prefetch href="/contact">
                  <a href="/contact" className="submit1">Send Me an Email</a>
                </Link>{' '}
              </Row>
            </Grid>
          </Row>
        </Grid>
      </Layout>
    );
  }
}

export default About;

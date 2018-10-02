import React, { Component } from 'react';
import Layout from '../components/layout';

class About extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="secund_header"/>
          <div className="midle_container">
            <div className="right_col">
            </div>
            <div className="left_col">
              <div className="modul_descriere">
                <div className="header_modul1">Sergiu Marius Tomșa</div>
                <div className="text_modul1">
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
                  <form action="/application/index/contact" method="get">
                    <input name="" type="submit" value="Send Me an Email" className="submit1" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="clear"/>
        </div>
      </Layout>
    );
  }
}

export default About;

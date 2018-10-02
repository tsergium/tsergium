import React, { Component } from 'react';
import Layout from '../components/layout';

class Contact extends Component {
  render() {
    return (
      <Layout>
        <div className="contact_container grei_bg">
          <div className="midle_container">
            <div className="secund_header" />
            <div className="left_col">
              <div className="text1">
                <h1>Web Solutions and Mobile Applications</h1>

                <p>Contact me using the methods below.</p>
              </div>
              <ul>
                <li>Email</li>
                <li className="bold pb20">contact@tsergium.ro</li>
                <li>Phone</li>
                <li className="bold pb20">+40 0745 688 027</li>
                <li>Or using the contact form on your right.</li>
                <li></li>
              </ul>

            </div>
            <form className="right_col pb75" method="post" action="">
              <ul>
                <li>
                  <input
                    name="name"
                    type="text"
                    value=""
                    placeholder="Name"
                    className="f1"
                    required=""
                  />
                </li>
                <li>
                  <input
                    name="email"
                    type="email"
                    value=""
                    placeholder="Email"
                    className="f1"
                    required=""
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    cols=""
                    rows=""
                    value=""
                    placeholder="Message"
                    className="txt"
                    required=""
                  />
                </li>
                <li>
                  <input
                    name="submit"
                    type="submit"
                    value="Send"
                    className="submit"
                    required=""
                  />
                </li>
              </ul>
            </form>
          </div>
          <div className="clear" />
        </div>
      </Layout>
    );
  }
}

export default Contact;

import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const year = (new Date()).getFullYear();

    return (
      <div className="container-fluid bg-skew bg-skew-light footer">
        <div className="container content">
          <div className="row contact">
            <div className="col-sm-8">
              <h4>Contact</h4>
              <form method={`post`}>
                <div className="form-group">
                  <span id="labelInputPassword1" className="hide">Name</span>
                  <input type="text" aria-labelledby="labelInputPassword1" className="form-control" id="inputPassword" placeholder="Name" />
                </div>
                <div className="form-group">
                  <span id="labelInputEmail1" className="hide">Email</span>
                  <input type="email" aria-labelledby="labelInputEmail1" className="form-control" id="inputEmail" placeholder="Email" />
                </div>
                <div className="form-group">
                  <span id="labelInputMessage" className="hide">Message</span>
                  <textarea aria-labelledby="labelInputMessage" className="form-control" rows="3" id="inputMessage" placeholder="Message" />
                </div>
                <button type="submit" className="bt-contact">Submit</button>
              </form>
            </div>
            <div className="col-sm-4">
              <h4>Connect with me</h4>
              <ul className="mt30">
                <li>
                  <a href="mailto:tsergium@gmail.com">
                    <i className="fas fa-envelope" /> Email Tomșa Sergiu
                  </a>
                </li>
                <li>
                  <a href="https://github.com/tsergium" target="_blank" rel="noopener"><i className="fab fa-github-square" /> Github Tomșa Sergiu</a>
                </li>
                <li className="mt10">
                  <a href="https://www.linkedin.com/in/tsergium/" target="_blank" rel="noopener"><i className="fab fa-linkedin" /> Linkedin Tomșa Sergiu</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/tsergium" target="_blank" rel="noopener"><i className="fab fa-facebook" /> Facebook Tomșa Sergiu</a>
                </li>
              </ul>
              <div className="copyright">
                <p className="mt20"><span className="strong">Copyright © {year}</span> Tomșa Sergiu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

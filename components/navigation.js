import React, { Component } from 'react';
import Link from 'next/link';
const name = 'Tomșa - Sergiu';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.handleCollapsed = this.handleCollapsed.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);

    this.state = {
      collapsed: 'collapsed',
      in: '',
      dropDownOpen: '',
    }
  }

  handleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed ? 'collapsed' : '',
      in: !this.state.in ? 'in' : '',
    });
  }

  handleDropdown() {
    this.setState({
      dropDownOpen: !this.state.dropDownOpen ? 'open' : '',
    });
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className={`navbar-toggle ${this.state.collapsed}`}
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
              onClick={this.handleCollapsed}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <p className="logo">
              <Link prefetch href='/'>
                <a href="/">{name}</a>
              </Link>
            </p>
          </div>
          <div
            className={`collapse navbar-collapse ${this.state.in}`}
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link prefetch href='/about'>
                  <a href="/about">About me</a>
                </Link>
              </li>
              <li>
                <Link prefetch href='/portfolio'>
                  <a href="/portfolio">Portfolio</a>
                </Link>
              </li>
              <li className={`dropdown ${this.state.dropDownOpen}`}>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   onClick={this.handleDropdown}
                   >Tutorials <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="tutorial.php">PHP CRUD Tutorial for Beginners</a></li>
                </ul>
              </li>
              <li>
                <Link prefetch href='/contact'>
                  <a href="/contact">CONTACT</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;

import React, { Component } from 'react';
import Link from 'next/link';
const name = 'Tomșa - Sergiu';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
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
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link prefetch href='/about'>
                  <a href="/about">About me</a>
                </Link>
              </li>
              <li>
                <Link prefetch href='/porfolio'>
                  <a href="/porfolio">Portfolio</a>
                </Link>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">Tutorials <span className="caret"></span></a>
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

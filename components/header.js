import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Link from 'next/link';
import '../assets/styles.scss';

class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="header">
        <Navbar.Header>
          <Navbar.Brand>
            <Link prefetch href="/">
              <a className="logo" href="/">
                <img src="/static/images/logo.jpg" />
              </a>
            </Link>{' '}
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="menu">
            <Link prefetch href="/about">
              <NavItem className="link" eventKey={1} href="/about">
                About me
              </NavItem>
            </Link>
            <Link prefetch href="/portfolio">
              <NavItem className="link" eventKey={2} href="/portfolio">
                Portfolio
              </NavItem>
            </Link>
            <Link prefetch href="/tutorials">
              <NavItem className="link" eventKey={3} href="/tutorials">
                Tutorials
              </NavItem>
            </Link>
            <Link prefetch href="/contact">
              <NavItem className="link" eventKey={4} href="/contact">
                Contact
              </NavItem>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

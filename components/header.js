import React from 'react';
import Link from "next/link";
import '../assets/styles.scss';

const Logo = "https://tsergium.ro/theme/tsergium/img/logo.jpg";

const Header = () => (
  <div className="header">
    <div className="center_header navbar">
      <Link prefetch href="/">
        <a className="logo" href="/">
          <img src={Logo} />
        </a>
      </Link>{' '}
      <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </a>
      <div className="menu nav-collapse collapse">
        <ul>
          <li><a href="/portfolio" className="link">Portfolio</a></li>
          <li>
            <Link prefetch href="/about">
              <a href="/about" className="link">About me</a>
            </Link>{' '}
          </li>
          <li>
            <Link prefetch href="/contact">
              <a href="/contact" className="link">Contact</a>
            </Link>{' '}
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;

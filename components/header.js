import React from 'react';
import Link from "next/link";
import Head from 'next/head';
import '../assets/styles.scss';

const Header = () => (
  <div className="header">
    <Head>
      <title>Sergiu Tomsa | tsergium.ro</title>
      <link href="https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre:300,400,500|Roboto:300,400,700&amp;subset=latin-ext" rel="stylesheet" />
    </Head>
    <div className="center_header navbar">
      <Link prefetch href="/">
        <a className="logo" href="/">
          <img src="/static/images/logo.jpg" />
        </a>
      </Link>{' '}
      <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </a>
      <div className="menu nav-collapse collapse">
        <ul>
          <li data-aos="fade-in">
            <Link prefetch href="/about">
              <a href="/about" className="link">About me</a>
            </Link>{' '}
          </li>
          <li data-aos="fade-in">
            <Link prefetch href="/portfolio">
              <a href="/portfolio" className="link">Portfolio</a>
            </Link>{' '}
          </li>
          <li data-aos="fade-in">
            <Link prefetch href="/tutorials">
              <a href="/tutorials" className="link">Tutorials</a>
            </Link>{' '}
          </li>
          <li data-aos="fade-in">
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

import React from 'react';
import Link from "next/link";
import Head from 'next/head';
import '../assets/styles.scss';

const Logo = "https://tsergium.ro/theme/tsergium/img/logo.jpg";

const Header = () => (
  <div className="header">
    <Head>
      <title>Sergiu Tomsa | tsergium.ro</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
        integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
      />
    </Head>
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

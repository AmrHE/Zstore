import React from 'react';
import Link from 'next/link';
import Nav from './Nav';

const Header = () => (
  <header>
    <div className="bar">
      <Link href="/">ZStore</Link>
    </div>
    <div className="sub-bar">
      <p>Search Bar</p>
    </div>
    <Nav />
  </header>
);

export default Header;

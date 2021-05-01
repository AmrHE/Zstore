import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <Link href="products">Products</Link>
    <Link href="/sell">Sell</Link>
    <Link href="/orders">Orders</Link>
    <Link href="/account">Account</Link>
  </nav>
);

export default Nav;

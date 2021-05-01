import React from 'react';
import Header from './Header';

const Page = ({ children }) => (
  <>
    <Header>
      <h1>I'm The Page Component</h1>
      {children}
    </Header>
  </>
);

export default Page;

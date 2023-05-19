import React from 'react';
import Header from './Header';
import Money from './Money';
import Products from './Products';
import Receipt from './Receipt';

function Content() {
  return (
    <div>
      <Header/>
      <Money/>
      <Products/>
      <Receipt />
    </div>
  )
}

export default Content

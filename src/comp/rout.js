import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './home';
import Shop from './shop';
import Cart from './cart';

function Rout({ filteredProducts }) {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='cart' element={<Cart />} />

      <Route path='shop' element={<Shop filteredProducts={filteredProducts} />} />
    </Routes>
  );
}

export default Rout;

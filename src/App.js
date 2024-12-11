import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './comp/nav';
import Rout from './comp/rout';
import Footer from './comp/footer';
import Homeproduct from './comp/home_product';

function App() {
  const [filteredProducts, setFilteredProducts] = useState(Homeproduct);
  const [searchTerm, setSearchTerm] = useState('');

  // دالة البحث
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());

    const filtered = Homeproduct.filter((product) =>
      product.Name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <BrowserRouter>
      <Nav />
      <Rout filteredProducts={filteredProducts} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

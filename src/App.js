import React from 'react';
import Navigationbar from './Component/Navigationbar';
import Home from './Component/Home';
import Products from './Component/Products';
import Product from './Component/Product';
import About from './Component/About';
import Contact from './Component/Contact';
import Cart from './Component/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigationbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import MobilesWrapper from './MobilesWrapper';
import { CartProvider } from './context/CartContext';
import CartPage from './CartPage'; // ✅ new import
import DressWrapper from './DressWrapper';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobiles" element={<MobilesWrapper />} />
          <Route path="/cart" element={<CartPage />} /> {/* ✅ new route */}
          <Route path="/dress" element={<DressWrapper />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

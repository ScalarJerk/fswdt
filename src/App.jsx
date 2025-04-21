import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Home/Cart/Cart';
import OrderSummary from './pages/Home/OrderSummary'; // NEW

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-summary" element={<OrderSummary />} /> {/* NEW */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

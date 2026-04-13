import React from 'react'
import Navar from './components/Navar';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';

function App() {
  return (
    <div>

      <Navar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />

      </Routes>

      <Footer />

    </div>
  )
}

export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import "./App.css";
import Home from "./Home.js";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart.js"
import Navbar from './components/Navbar'
import Search from './components/Search'

function App() {
  const [cartItems, setCartItems] = useState([])
  console.log("These are cart items", cartItems)
  return (
    <CookiesProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems}/>}/>
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;

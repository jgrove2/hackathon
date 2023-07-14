import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import "./App.css";
import Home from "./Home.js";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart.js"
import Navbar from './components/Navbar'

function App() {
  const [cartItems, setCartItems] = useState([])
  console.log("These are cart items", cartItems)
  return (
    <CookiesProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems}/>}/>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;

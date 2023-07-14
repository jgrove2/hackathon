import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home.js";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart.js"
import NavBar from "./NavBar.js"

function App() {
  const [cartItems, setCartItems] = useState([])
  console.log("These are cart items", cartItems)
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
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
<<<<<<< HEAD
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems}/>}/>
      </Routes>
    </BrowserRouter>
=======
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems}/>}/>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
>>>>>>> main
  );
}

export default App;

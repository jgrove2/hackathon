import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import "./App.css";
import Home from "./Home.js";

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;

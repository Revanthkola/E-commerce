import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";
import Cart from "./pages/Cart";

function App() {
    return (
        <Router>
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default App;

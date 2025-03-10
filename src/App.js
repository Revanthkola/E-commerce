import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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

                {/* ✅ Redirect all unknown routes to Home */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;

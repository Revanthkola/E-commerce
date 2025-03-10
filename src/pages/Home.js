import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <Container className="text-center mt-5">
            <div className="p-5 mb-4 bg-light rounded-3">
                <h1>Welcome to Our E-Commerce Store 🛍️</h1>
                <p>Find the best products at unbeatable prices!</p>
                <Button variant="primary" onClick={() => navigate("/products")}>
                    Shop Now
                </Button>
            </div>
        </Container>
    );
}

export default Home;

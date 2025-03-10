import React, { useContext } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const products = [
    { id: 1, name: "Laptop", price: 71990, image: "/images/laptop.jpg" },
    { id: 2, name: "Phone", price: 99389, image: "/images/phone.jpg" },
    { id: 3, name: "Headphone", price: 1299, image: "/images/headphones.jpg" },
];

function ProductList() {
    const { addToCart } = useContext(CartContext);

    return (
        <Container className="mt-4">
            <Row>
                {products.map((product) => (
                    <Col md={4} key={product.id} className="mb-4">
                        <Card className="h-100 shadow">
                            <Card.Img variant="top" src={product.image} style={{ height: "200px", objectFit: "contain" }} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text className="flex-grow-1">Price: Rs.{product.price}</Card.Text>
                                <Button variant="primary" onClick={() => addToCart(product)}>
                                    Add to Cart 🛒
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductList;

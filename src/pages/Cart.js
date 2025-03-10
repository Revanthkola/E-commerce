import React, { useContext } from "react";
import { Container, Button, ListGroup } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleBuyNow = () => {
        alert("Thank you for your purchase!");
        navigate("/"); // Redirect to home after purchase
    };

    return (
        <Container className="mt-5">
            <h2>Your Shopping Cart 🛒</h2>
            {cart.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <>
                    <ListGroup>
                        {cart.map((item) => (
                            <ListGroup.Item key={item.id} className="d-flex justify-content-between">
                                <div>
                                    <strong>{item.name}</strong> - Rs.{item.price}
                                </div>
                                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <div className="text-center mt-4">
                        <Button variant="success" onClick={handleBuyNow}>
                            Buy Now ✅
                        </Button>
                    </div>
                </>
            )}
        </Container>
    );
}

export default Cart;

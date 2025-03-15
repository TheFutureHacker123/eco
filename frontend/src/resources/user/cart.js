import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Table, Row, Col, Container } from 'react-bootstrap';

function Cart() {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 25, quantity: 1 },
    { id: 2, name: 'Item 2', price: 40, quantity: 2 },
    { id: 3, name: 'Item 3', price: 15, quantity: 3 },
  ]);

  // Function to handle item quantity change
  const handleQuantityChange = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
    );
  };

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1>Cart</h1>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => handleQuantityChange(item.id, 'increase')}
                  disabled={item.quantity >= 10}
                >
                  +
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleQuantityChange(item.id, 'decrease')}
                  disabled={item.quantity <= 1}
                  className="ml-2"
                >
                  -
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Row>
        <Col>
          <h4>Total Price: ${calculateTotal()}</h4>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Button variant="primary" onClick={() => alert('Proceeding to checkout')}>
            Checkout
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;

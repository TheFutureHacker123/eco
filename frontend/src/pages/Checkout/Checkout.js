import React, { useState } from 'react';
import paymentService from '../../services/payment';

const Checkout = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handlePayment = async (e) => {
    e.preventDefault();
    const response = await paymentService.processPayment(paymentData);
    console.log('Payment Response:', response);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handlePayment}>
        <input
          type="text"
          placeholder="Card Number"
          value={paymentData.cardNumber}
          onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
        />
        <input
          type="text"
          placeholder="Expiry Date"
          value={paymentData.expiryDate}
          onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
        />
        <input
          type="text"
          placeholder="CVV"
          value={paymentData.cvv}
          onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Checkout;
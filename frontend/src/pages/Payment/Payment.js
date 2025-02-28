import React, { useEffect, useState } from 'react';
import paymentService from '../../services/payment';

const Payment = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const data = await paymentService.getPaymentDetails();
      setPayments(data);
    };
    fetchPayments();
  }, []);

  return (
    <div>
      <h1>Payment History</h1>
      <ul>
        {payments.map((payment) => (
          <li key={payment.id}>Payment #{payment.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Payment;
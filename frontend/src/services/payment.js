import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const processPayment = async (paymentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/payments`, paymentData, config);
  return response.data;
};

const getPaymentDetails = async (paymentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/payments/${paymentId}`, config);
  return response.data;
};

const paymentService = {
  processPayment,
  getPaymentDetails,
};

export default paymentService;
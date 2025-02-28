import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const createReview = async (reviewData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/reviews`, reviewData, config);
  return response.data;
};

const getProductReviews = async (productId) => {
  const response = await axios.get(`${API_URL}/reviews/product/${productId}`);
  return response.data;
};

const reviewService = {
  createReview,
  getProductReviews,
};

export default reviewService;
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const getCategories = async () => {
  const response = await axios.get(`${API_URL}/categories`);
  return response.data;
};

const createCategory = async (categoryData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/categories`, categoryData, config);
  return response.data;
};

const categoryService = {
  getCategories,
  createCategory,
};

export default categoryService;
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; // Base API URL from environment variables

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data)); // Store user data in localStorage
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('user'); // Clear user data from localStorage
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
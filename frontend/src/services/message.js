import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const sendMessage = async (messageData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/messages`, messageData, config);
  return response.data;
};

const getMessages = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/messages`, config);
  return response.data;
};

const messageService = {
  sendMessage,
  getMessages,
};

export default messageService;
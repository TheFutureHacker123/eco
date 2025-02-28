import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const getNotifications = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/notifications`, config);
  return response.data;
};

const markAsRead = async (notificationId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${API_URL}/notifications/${notificationId}/read`, {}, config);
  return response.data;
};

const notificationService = {
  getNotifications,
  markAsRead,
};

export default notificationService;
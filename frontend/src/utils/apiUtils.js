import axios from 'axios';

/**
 * Sets the authorization header for Axios requests.
 * @param {string} token - The JWT token.
 */
export const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

/**
 * Handles API errors and returns a user-friendly message.
 * @param {object} error - The error object.
 * @returns {string} - The error message.
 */
export const handleApiError = (error) => {
  if (error.response) {
    return error.response.data.message || 'An error occurred with the server.';
  } else if (error.request) {
    return 'No response received from the server.';
  } else {
    return 'An unexpected error occurred.';
  }
};
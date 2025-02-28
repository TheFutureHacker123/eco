/**
 * Checks if the current user has a specific role.
 * @param {object} user - The user object.
 * @param {string} role - The role to check (e.g., 'admin', 'superadmin').
 * @returns {boolean} - True if the user has the role, false otherwise.
 */
export const hasRole = (user, role) => {
    return user?.roles?.includes(role);
  };
  
  /**
   * Validates a JWT token (basic validation).
   * @param {string} token - The JWT token to validate.
   * @returns {boolean} - True if the token is valid, false otherwise.
   */
  export const validateToken = (token) => {
    if (!token) return false;
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    try {
      const payload = JSON.parse(atob(parts[1]));
      return payload.exp > Date.now() / 1000; // Check if token is expired
    } catch (error) {
      return false;
    }
  };
  
  /**
   * Extracts the user ID from a JWT token.
   * @param {string} token - The JWT token.
   * @returns {string|null} - The user ID or null if the token is invalid.
   */
  export const getUserIdFromToken = (token) => {
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.userId || null;
    } catch (error) {
      return null;
    }
  };
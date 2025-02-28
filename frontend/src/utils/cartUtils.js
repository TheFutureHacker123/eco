/**
 * Calculates the total price of items in the cart.
 * @param {array} cartItems - The list of cart items.
 * @returns {number} - The total price.
 */
export const calculateCartTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  /**
   * Adds or updates an item in the cart.
   * @param {array} cartItems - The current list of cart items.
   * @param {object} newItem - The item to add or update.
   * @returns {array} - The updated list of cart items.
   */
  export const updateCartItems = (cartItems, newItem) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === newItem.id);
    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += newItem.quantity;
      return updatedItems;
    } else {
      return [...cartItems, newItem];
    }
  };
  
  /**
   * Removes an item from the cart.
   * @param {array} cartItems - The current list of cart items.
   * @param {string} itemId - The ID of the item to remove.
   * @returns {array} - The updated list of cart items.
   */
  export const removeCartItem = (cartItems, itemId) => {
    return cartItems.filter((item) => item.id !== itemId);
  };
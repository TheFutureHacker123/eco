/**
 * Formats a number into a currency string.
 * @param {number} amount - The amount to format.
 * @param {string} currency - The currency code (e.g., 'USD', 'EUR').
 * @returns {string} - The formatted currency string.
 */
export const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  };
  
  /**
   * Validates a credit card number using the Luhn algorithm.
   * @param {string} cardNumber - The credit card number to validate.
   * @returns {boolean} - True if the card number is valid, false otherwise.
   */
  export const validateCardNumber = (cardNumber) => {
    const cleanedCardNumber = cardNumber.replace(/\D/g, '');
    let sum = 0;
    for (let i = 0; i < cleanedCardNumber.length; i++) {
      let digit = parseInt(cleanedCardNumber[i], 10);
      if ((cleanedCardNumber.length - i) % 2 === 0) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
    return sum % 10 === 0;
  };
  
  /**
   * Masks a credit card number for display (e.g., '**** **** **** 1234').
   * @param {string} cardNumber - The credit card number to mask.
   * @returns {string} - The masked card number.
   */
  export const maskCardNumber = (cardNumber) => {
    const lastFourDigits = cardNumber.slice(-4);
    return `**** **** **** ${lastFourDigits}`;
  };
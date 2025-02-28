/**
 * Displays a notification message using the browser's notification API.
 * @param {string} title - The title of the notification.
 * @param {string} body - The body of the notification.
 * @param {string} icon - The URL of the icon to display.
 */
export const showNotification = (title, body, icon = '') => {
    if (!('Notification' in window)) {
      console.warn('This browser does not support desktop notifications.');
      return;
    }
  
    if (Notification.permission === 'granted') {
      new Notification(title, { body, icon });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, { body, icon });
        }
      });
    }
  };
  
  /**
   * Formats a timestamp into a human-readable string.
   * @param {string} timestamp - The timestamp to format.
   * @returns {string} - The formatted date string.
   */
  export const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  /**
   * Checks if a notification is recent (within the last 5 minutes).
   * @param {string} timestamp - The timestamp to check.
   * @returns {boolean} - True if the notification is recent, false otherwise.
   */
  export const isRecentNotification = (timestamp) => {
    const notificationTime = new Date(timestamp).getTime();
    const currentTime = new Date().getTime();
    const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds
    return currentTime - notificationTime <= fiveMinutes;
  };
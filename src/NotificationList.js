// src/NotificationList.js
import React from 'react';
import { useNotifications } from './NotificationContext'; // Updated import

const NotificationList = () => {
  const { notifications, removeNotification } = useNotifications();

  return (
    <div>
      <h3>Notifications</h3>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            {notification}
            <button onClick={() => removeNotification(index)}>Dismiss</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
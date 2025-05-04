// src/components/NotificationList.js
import React from 'react';
import { useNotifications } from './NotificationContext';

const NotificationList = () => {
  const { notifications } = useNotifications();

  return (
    <div>
      < h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
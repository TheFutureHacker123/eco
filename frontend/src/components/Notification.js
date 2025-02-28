import React from 'react';

const Notification = ({ notifications }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Notifications</h2>
            {notifications.length === 0 ? (
                <p>No new notifications.</p>
            ) : (
                <div className="space-y-4">
                    {notifications.map((notification) => (
                        <div key={notification.id} className="border p-4 rounded-lg">
                            <p>{notification.message}</p>
                            <p className="text-sm text-gray-500">{notification.created_at}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Notification;
import React from 'react';

const SuperAdminDashboard = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Super Admin Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border p-4 rounded-lg">
                    <h3 className="text-xl font-bold">Total Admins</h3>
                    <p>5</p>
                </div>
                <div className="border p-4 rounded-lg">
                    <h3 className="text-xl font-bold">System Settings</h3>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Manage Settings
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuperAdminDashboard;
import React from 'react';

const AdminDashboard = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border p-4 rounded-lg">
                    <h3 className="text-xl font-bold">Total Users</h3>
                    <p>100</p>
                </div>
                <div className="border p-4 rounded-lg">
                    <h3 className="text-xl font-bold">Total Products</h3>
                    <p>500</p>
                </div>
                <div className="border p-4 rounded-lg">
                    <h3 className="text-xl font-bold">Total Orders</h3>
                    <p>200</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
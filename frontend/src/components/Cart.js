import React from 'react';

const Cart = ({ cartItems }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="border p-4 mb-4">
                            <h3 className="text-xl font-bold">{item.product.name}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.product.price * item.quantity}</p>
                        </div>
                    ))}
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
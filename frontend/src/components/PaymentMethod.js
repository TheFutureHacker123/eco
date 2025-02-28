import React, { useState } from 'react';

const PaymentMethod = ({ onSelectPaymentMethod }) => {
    const [selectedMethod, setSelectedMethod] = useState('');

    const handleSelect = (method) => {
        setSelectedMethod(method);
        onSelectPaymentMethod(method);
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Select Payment Method</h2>
            <div className="space-y-4">
                <button
                    onClick={() => handleSelect('chappa')}
                    className={`w-full p-4 border rounded-lg ${selectedMethod === 'chappa' ? 'bg-blue-600 text-white' : 'bg-white'}`}
                >
                    Chappa
                </button>
                <button
                    onClick={() => handleSelect('credit_card')}
                    className={`w-full p-4 border rounded-lg ${selectedMethod === 'credit_card' ? 'bg-blue-600 text-white' : 'bg-white'}`}
                >
                    Credit Card
                </button>
                <button
                    onClick={() => handleSelect('paypal')}
                    className={`w-full p-4 border rounded-lg ${selectedMethod === 'paypal' ? 'bg-blue-600 text-white' : 'bg-white'}`}
                >
                    PayPal
                </button>
            </div>
        </div>
    );
};

export default PaymentMethod;
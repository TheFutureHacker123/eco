import React, { useState } from 'react';

const Message = ({ messages, onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        onSendMessage(message);
        setMessage('');
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Messages</h2>
            <div className="space-y-4">
                {messages.map((msg) => (
                    <div key={msg.id} className="border p-4 rounded-lg">
                        <p>{msg.message_text}</p>
                        <p className="text-sm text-gray-500">From: {msg.sender.name}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSend} className="mt-4">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="border p-2 rounded-lg w-full"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-700">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Message;
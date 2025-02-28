import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">E-Commerce</Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
                        <li><Link to="/products" className="hover:text-blue-200">Products</Link></li>
                        <li><Link to="/cart" className="hover:text-blue-200">Cart</Link></li>
                        <li><Link to="/profile" className="hover:text-blue-200">Profile</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
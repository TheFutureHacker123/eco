import React, { useEffect, useState } from 'react';
import productService from '../../services/product';
import orderService from '../../services/order';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await productService.getProducts();
      const ordersData = await orderService.getAllOrders();
      setProducts(productsData);
      setOrders(ordersData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>Order #{order.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
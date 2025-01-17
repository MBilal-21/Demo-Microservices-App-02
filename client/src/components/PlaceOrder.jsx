import React, { useEffect, useState } from 'react';

function PlaceOrder({ user }) {
  const [product, setProduct] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderError, setOrderError] = useState('');

  useEffect(() => {
    let timer;
    if (orderSuccess) {
      timer = setTimeout(() => {
        setOrderSuccess(false);
      }, 3000);
    }
    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [orderSuccess]);

  const handleOrder = async () => {
    const order = {
      user_id: user.id,
      product_name: product,
      order_date: Date.now(),
    };

    try {
      const response = await fetch('http://localhost:5003/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        setOrderSuccess(true);
        setOrderError(''); // Clear any previous errors
        setProduct(''); // Clear product input
      } else {
        const errorData = await response.json();
        setOrderError(errorData.error || 'Failed to place order');
      }
    } catch (error) {
      console.error('Failed to place order:', error);
      setOrderError('Failed to place order: Network error');
    }
  };

  return (
    <div>
      <h2>Place Order</h2>
      <p>Welcome, {user.name}!</p>
      <input
        type="text"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        placeholder="Enter product name"
      />
      <button onClick={handleOrder}>Place Order</button>
      {orderSuccess && <p>Order placed successfully!</p>}
      {orderError && <p style={{ color: 'red' }}>{orderError}</p>}
    </div>
  );
}

export default PlaceOrder;

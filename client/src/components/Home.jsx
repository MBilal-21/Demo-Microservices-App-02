import React, { useEffect, useState } from 'react';
 
 
 const Home = () =>{

    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
  
    useEffect(() => {
      // Fetch data from backend services
      const fetchData = async () => {
        try {
        //   const userRes = await fetch('http://localhost:5001/users');
          const productRes = await fetch('http://localhost:5002/products');
        //   const orderRes = await fetch('http://localhost:5003/orders');
  
        //   setUsers(await userRes.json());
          setProducts(await productRes.json());
        //   setOrders(await orderRes.json());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);


    return (
        <>
              <div>
      <h1>Microservices Demo</h1>
   
      {/* <h2>Users</h2>
      <ul>
        {
        users.users && users.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))
        }
      </ul> */}

      <h2>Products</h2>
      <ul>
        {products.products && products.products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      {/* <h2>Orders</h2>
      <ul>
        {orders.orders && console.log(orders.orders)
        //  orders.orders.map(order => (
        //   <li key={order.order_id}>
        //     {order.user.name} ordered {order.product.name}
        //   </li>
        // ))
        }
      </ul> */}
    </div>
        </>
    )
}

export default Home;
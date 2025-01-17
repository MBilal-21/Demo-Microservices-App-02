const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5003;
let orders = [
  {
    order_id: 1,
    user_id: "user1",
    product_name: "product1",
    order_date: "product1",
  },
];


// console.log(process.env.USER_SERVICE_URL);



app.post('/orders', async (req, res) => {
  const { user_id, product_name, order_date } = req.body;

  try {
    // // Fetch users and products from services
    // const userResponse = await axios.get('http://localhost:5001/users');
    // const productResponse = await axios.get('http://localhost:5002/products');
    const userResponse = await axios.get('http://user-service:5001/users');
    const productResponse = await axios.get('http://product-service:5002/products');

    const users = userResponse.data.users;
    const products = productResponse.data.products;

    // Check if user_id exists in users
    const userExists = users.some(user => user.id === user_id);
    if (!userExists) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }

    // Check if product_name exists in products
    const productExists = products.some(product => product.name === product_name);
    if (!productExists) {
      return res.status(400).json({ error: 'Product name not found' });
    }

    // Create new order
    const newOrder = { id: orders.length + 1, user_id, product_name, order_date };
    orders.push(newOrder);

    res.status(201).json({ message: 'Order placed', order: newOrder });
  } catch (error) {
    console.error('Error fetching data from services:', error.message);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
});

// app.post('/orders', (req, res) => {
//   const { user_id, product_name, order_date } = req.body;
//   const newOrder = { id: orders.length + 1, user_id, product_name, order_date };
//   orders.push(newOrder);
//   res.status(201).json({ message: 'Order placed', order: newOrder });
// });

app.get('/orders', (req, res) => {
  res.json({ orders });
});

// app.get('/orders', async (req, res) => {
//   try {
//     // Use service names for Docker-based communication
//     const userResponse = await axios.get('http://localhost:5001/users');
//     const productResponse = await axios.get('http://localhost:5002/products');

//     const users = userResponse.data.users;
//     const products = productResponse.data.products;

//     const orders = [
//       {
//         order_id: 1,
//         user: users[0],
//         product: products[0],
//       },
//     ];

//     res.json({ orders });
//   } catch (error) {
//     console.error('Error details:', error.message);
//     res.status(500).json({ error: 'Error fetching data from services', details: error.message });
//   }
// });

app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));


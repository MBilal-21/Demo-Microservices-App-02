// ===================== Product Service (product-service/index.js) ==================
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path'); 

app.use(cors());
app.use(express.json());
const PORT = 5002;
// app.use(express.static(path.join(__dirname, 'public')));
// Mock product data
let products = [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Phone' }
];


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Function to add a new product
app.post('/products', (req, res) => {
  const { id, name } = req.body;
  console.log(req.body.name);
  
  const newProduct = { id, name };
  products.push(newProduct);
  res.status(201).json({ message: 'Product added', product: newProduct });
});

app.get('/products', (req, res) => {
  res.json({ products });
});

app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
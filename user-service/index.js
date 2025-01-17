// Update User Service (user-service/index.js)
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
// Mock user data
const PORT = 5001;
let users = [
  { id: 1, name: 'Alice',password: '123' },
  { id: 2, name: 'Bob',password: '123' }
];


// Function to register a new user
app.post('/register', (req, res) => {
  const { id,name, password } = req.body;
  const existingUser = users.find(user => user.name === name);
  
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  // const id =  Date.now();
  const newUser = { id, name, password };
  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// Function to login a user
app.post('/login', (req, res) => {
  const { name, password } = req.body;
  console.log(req.body.name);
  
  const user = users.find(user => user.name === name && user.password === password);
  console.log(user);
  
  
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
 return res.status(200).json({ message: `Login successful ${name}`, user:user });
});


// // Function to add a new user
// app.post('/users', (req, res) => {
//   const { id, name } = req.body;
//   const newUser = { id, name };
//   users.push(newUser);
//   res.status(201).json({ message: 'User added', user: newUser });
// });

app.get('/users', (req, res) => {
  res.json({ users });
});

app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
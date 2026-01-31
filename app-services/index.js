const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'sample-microservice' });
});

// Sample endpoint
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js microservice 👋' });
});

app.listen(PORT, () => {
  console.log(`Service running on http://localhost:${PORT}`);
});


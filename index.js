const express = require('express');
const app = express();
const port = 3000;

let leakyArray = [];

app.get('/', (req, res) => {
  // Simulating a memory leak by pushing a large object into the array on every request
  leakyArray.push(new Array(1000000).fill('*').join(''));
  res.send('Hello, world!');
});

app.get('/health-check', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

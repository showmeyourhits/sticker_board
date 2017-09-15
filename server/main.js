// @flow

const express = require('express');

const app = express();
const PORT = process.env.PORT || 9876;

app.get('/', (req, res) => {
  res.send('connected to test app');
});

app.listen(PORT, () => {
  console.log(`${new Date().toUTCString()}: Started application on ${PORT}`);
});

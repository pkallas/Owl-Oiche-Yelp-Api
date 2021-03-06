const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes');

const port = process.env.PORT || 3000;

app.use('/', router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

module.exports = app;

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const secret = 'the-even-more-super-secret-secret';

app.get('/secret', (req, res) => {
  res.json({ secret });
});

const port = process.env.APP_PORT ?? 8080;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

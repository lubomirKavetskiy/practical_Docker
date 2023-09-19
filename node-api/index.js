const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(
    `Example node API listening on port ${port} and NODE_ENV=${process.env.NODE_ENV}!`
  );
});

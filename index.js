const express = require('express');
const _ = require('lodash');

const app = express();

app.get('/', (req, res) => {
  const arr = [1, 2, 3, 4];
  const reversed = _.reverse(arr.slice());
  res.send(`Reversed array: ${reversed}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

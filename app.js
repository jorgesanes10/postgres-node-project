const express = require('express');
const app = express();
const products = require('./routes/products');

const PORT = 3000;

app.use(express.json());
app.use('/products', products);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Server.js

const PORT = 8080;
const express = require('express');
const app = express();
const ProductRouter = require('./router/ProductRouter.js');
const ClientRouter = require('./router/ClientRouter.js');
const CartRouter = require('./router/CartRouter.js');
const clientManagerFs = require('./managers/FileSystem/ProductManagerFs.js');
const productManagerFs = require('./managers/FileSystem/CartManagerFs.js');
const clientManagerFs = require('./managers/FileSystem/clientManagerFs.js');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/static', express.static(__dirname + "Public"));

app.use("api/cliente", ClientRouter);
app.use("api/product", ProductRouter);
app.use("api/cart",CartRouter);





app.listen(PORT, () => {
    console.log('Server esta escuchando en port 8080');
  });
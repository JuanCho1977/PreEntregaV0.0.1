//Server.js

const PORT = 8080
const express = require('express');
const app = express();
const ProductRouter = require('./router/ProductRouter');
const ClientRouter = require('./router/ClientRouter');
const productManagerFs = require('./manager/productManagerFs');
const clientManagerFs = require('./manager/clientManagerFs');

app.use(express.json());
app.use(ClientRouter);
app.use(ProductRouter);


app.get('/cliente', (res,res) =>{ 
    res.send("Servidor OK");
});



app.listen(PORT, () => {
    console.log('Server esta escuchando en port 8080');
  });
//Server.js

const PORT = 8080;
const express =           require('express');
const app =               express();
const ProductRouter =     require('./router/ProductRouter.js');
const ClientRouter =      require('./router/ClientRouter.js');
const CartRouter =        require('./router/CartRouter.js');
const viewsrouter =       require('./router/viewsRouter.js')
const productManagerFs =  require('./managers/FileSystem/ProductManagerFs.js');
const cartManagerFs =     require('./managers/FileSystem/cartManagerFs.js');
const clientManagerFs =   require('./managers/FileSystem/clientManagerFs.js');
const handlebar =         requier('express-handlebar');

app.post('/', uploader.single('miFile'), (req,res)=>{
  res.send('archivo subido')
})
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/static', express.static(__dirname + "Public"));
//configuro Handlebars
app.engine('handlebars', handlebar.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebar');
//importo el de views de handlebars
app.use('/vistas', viewsrouter);

app.use("api/cliente", ClientRouter);
app.use("api/producto", ProductRouter);
app.use("/api/cart", CartRouter);

app.get("/users", (req, res) => {

res.send("esta funcionando");

 });




app.listen(PORT, () => {
    console.log('Server esta escuchando en puerto: ', PORT);
  });
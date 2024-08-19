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
const multer =            require('multer');
const handlebar =         requier('express-handlebar');
const { Server } =        require('socket.io');

const uploader = multer({ dest: 'uploads/' });

app.post('/', uploader.single('miFile'), (req,res) => {

res.send('archivo subido');

});


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/static', express.static(__dirname + 'Public'));
//configuro Handlebar
app.engine('handlebars', handlebar.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
//importo el de views de handlebars
app.use('/vistas', viewsrouter);

app.use('api/cliente', ClientRouter);
app.use('api/producto', ProductRouter);
app.use('/api/cart', CartRouter);

app.get('/users', (req, res) => {

res.send('esta funcionando');

 });




app.listen(PORT, () => {
    console.log('Server esta escuchando en puerto: ', PORT);
  });

const httpServer = app.listen(PORT, () => {
    console.log('escuchando en el puerto: ', PORT)
  });



router.get('/home', async (res,res) => {

  const {getProductos} = new productManagerFs()
    try{

      const product = getProductos()
      res.render('home', {product})

    } catch (error) {
     console.log (error)
    }
  
 })

const io = new Server(httpServer);
const productSocket = (io) => {
  io.on('connection', async socket=> {
    console.log ('Nuevo cliente conectado')
    const {
        getProductos,
        createProduct
  
    } = new productManagerFs()
    const productos = await getProductos() 
    socket.emit('productos', product)

    socket.on('addProduct', async lista => {
        await createProduct(lista)

    })
  });

}

productSocket (io);

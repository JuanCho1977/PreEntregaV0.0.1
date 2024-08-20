//Server.js


const express =           require('express');
const ProductRouter =     require('./router/ProductRouter.js');
const ClientRouter =      require('./router/ClientRouter.js');
const CartRouter =        require('./router/CartRouter.js');
const viewsrouter =       require('./router/viewsRouter.js')
const productManagerFs =  require('./managers/FileSystem/productManagerFs.js');
//const cartManagerFs =     require('./managers/FileSystem/cartManagerFs.js');
//const clientManagerFs =   require('./managers/FileSystem/clientManagerFs.js');
const { uploader }  =     require('./utils/multer.js')
const handlebar =         require('express-handlebars');
const { Server } =        require('socket.io');
const path =              require('path');
const app = express();
const PORT = process.env.PORT ||  8081;

const httpServer = app.listen(PORT, () => {
  console.log('escuchando en el puerto: ', PORT)
});


//const uploader = multer({ dest: 'uploads/' });
//app.post('/', uploader.single('miFile'), (req,res) => {
//res.send('archivo subido');
//});


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/static', express.static(path.joi(__dirname + 'Public')));

//configuro Handlebar
app.engine('handlebars', handlebar.engine());
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'handlebars');

//importo el de views de handlebars
app.use('/vistas', viewsrouter);

app.use('/api/cliente', ClientRouter);
app.use('/api/producto', ProductRouter);
app.use('/api/cart', CartRouter);

app.get('/users', (req, res) => {

res.send('esta funcionando');

 });




//app.listen(PORT, () => {
//    console.log('Server esta escuchando en puerto: ', PORT);
//  });




const io = new Server(httpServer);
const productSocket = (io) => {
  io.on('connection', async socket=> {
    console.log ('Nuevo cliente conectado');
    const {
        getProductos,
        createProduct,
        deleteProducto,
  
    } = new productManagerFs();

    const productos = await getProductos() ;
    socket.emit('productos', productos);
  

    socket.on('agregoProducto', async (lista) => {
        await createProduct(lista);    
    const productosActualizados = await getProductos();
    socket.emit('productos', productosActualizados);
    })

    socket.on('DeleteProduct', async (botonId) => {
      await deleteProducto(botonId);
    
    const productosActualizados = await getProductos();
    socket.emit('productos', productosActualizados);
    });
  
  });

};
let messages = []
io.on('connection', socket => {
    console.log('Nuevo cliente conectado');

    socket.on('message', data => {
        // console.log(data)
        messages.push(data);
        io.emit('messageLogs', messages);
    });

  });
productSocket (io);

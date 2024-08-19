const { Router } =  require ('express');
const router =  Router();
const ProductManagerFs = require('../managers/FileSystem/productManagerFs');
const productManagerFs = new ProductManagerFs();


router.get ( '/vistas', async (req, res ) => {
    try {
        const productos = await productManagerFs.getProducts();  // Obtén los productos aquí
         res.render('realTimeProducts', { 
            Name: 'listado de productos',
            title: 'HOME - ECOMMERS',
            productos  // Pasa los productos a la vista
        });
    } catch (error) {
        res.status(500).send('Error al obtener los productos para la vista');
    }

});


router.use('/',(req,res)=>{
    res.render ('chat', {
        isMenu: true
    })


})

router.get ( '/Home', async (req, res ) => {
    try {
        const productos = await productManagerFs.getProducts();  // tremos los productos
         res.render('home', { 
            Name: 'listado de productos',
            title: 'HOME - ECOMMERS',
            productos 
        });
    } catch (error) {
        res.status(500).send('Error al obtener los productos para la vista');
    }
    const userLogin = {
        full_name: 'Juan Manuel',    // me logueo para ver los porductos
         role: 'Admin'
    }

    res.render('home', {
        user: userLogin,
        isAdmin: userLogin.role === 'admin', //esta parte de logue se podria evitar
        users,
        title: 'HOME',
        isMenu: true
    })


});







module.exports = router;
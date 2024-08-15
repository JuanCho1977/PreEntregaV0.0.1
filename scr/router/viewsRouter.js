const { Router } =  require ('express');
const router =  Router();
const productManagerFs = require('../manager/FileSystem/productManagerFs');
const productManagerFs = new productManagerFs();


router.get ( '/vistas', (req, res ) => {
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




module.exports = router;
//cartRouter.js

//const {Router} = require('express');
//const router = Router();
//const cartManagerFs = require('./manager/FileSystem/cartManagerFs');



//router.get('/', async (req, res) => {
//  try {
//    const products = await cartManagerFs.getcarts();
//    res.json(products);
//  } catch (error) {
//    res.json([]);
//  }
//});
//
//router.get('/:id', async (req, res) => {
 ////   //    const product = await productManagerFs.getProduct((link.unavailable));
    //  try {
//    res.json(product);
//  } catch (error) {
//    res.json({});
//  }
//});

////try {
////      router.post('/', async (req, res) => {////
 ////   const product = await productManagerFs.createProduct(req.body);
 ////   res.json(product);
////  } catch (error) {
////    res.json({});
////  }
////});

//router.put('/', async (req, res) => {
//  try {
//    const product = await productManagerFs.updateProduct((link.unavailable), req.body);
//    res.json(product);
//  } catch (error) {
// //   res.json({});
//  }
//});

//router.delete('/:id', async (req, res) => {
//  try {
//    await productManagerFs.deleteProduct((link.unavailable));
//    res.json({});
 // } catch (error) {
// //   res.json({});
//  }
//});

//module.exports = router
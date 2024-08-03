//productRouter.js

const {Router} = require('express');
const router = Router();
//const productManagerFs = require('./manager/FileSystem/productManagerFs');



router.get('/', async (req, res) => {
  try {
    const products = await productManagerFs.getProducts();
    res.json(products);
  } catch (error) {
    res.json([]);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await productManagerFs.getProduct((link.unavailable));
    res.json(product);
  } catch (error) {
    res.json({});
  }
});

router.post('/', async (req, res) => {
  try {
    const product = await productManagerFs.createProduct(req.body);
    res.json(product);
  } catch (error) {
    res.json({});
  }
});

router.put('/', async (req, res) => {
  try {
    const product = await productManagerFs.updateProduct((link.unavailable), req.body);
    res.json(product);
  } catch (error) {
    res.json({});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await productManagerFs.deleteProduct((link.unavailable));
    res.json({});
  } catch (error) {
    res.json({});
  }
});

module.exports = router
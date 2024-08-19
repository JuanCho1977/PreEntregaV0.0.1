//productRouter.js

const {Router} = require('express');
const router = Router();
const ProductManagerFs = require('../managers/FileSystem/productManagerFs');
const productManagerFs = new ProductManagerFs();


router.get("/", async (req, res) => {

  try {
  
  const products = await productManagerFs.getProducts();
  
  res.json({ status: "success", data: products });
  
  } catch (error) {
  
  res.status(500).json({ status: "error", message: "Internal Server Error" });
  
  }
  
  });

router.get('/:id', async (req, res) => {
  try{
    const id = Number(req.params.id);
    const product = await productManagerFs.getProductById(id);
    if(product) {
      res.json({statuts: "success", dat:products});

    } else {
    
    res.status(404).json({status:"error",message:"Producto not found"});
  }
} catch (error){

  res.status(500).json({ status: "error", message: "Internal Server Error" });

  }
  
});

router.post('/', async (req, res) => {
  try {
    const product = await productManagerFs.createProduct(req.body);
    res.status(201).json({ status: "success", data: product });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = Number(rep.params.id);
    const Udapteproduct = await productManagerFs.updateProduct((link.unavailable), req.body);
    if(Udapteproduct){
      res.json({status:"success", data:Udapteproduct});
    }else {
      res.status(404).json({status:"error", message:"Product not found"});
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    
    const id = Numeber(req.params.id);
    const success = await productManagerFs.deleteProduct(id);
    if(success){

      res.json({ status: "success", message: "Product deleted successfully" });;
    }else {

      res.status(404).json({status:"error", message:"Product not found"});
    }
    
  } catch (error) {
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

module.exports = router;
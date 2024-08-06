//cartRouter.js

const { Router } = require("express");
const router = Router();

const CartManagerFs = require("../managers/FileSystem/cartManagerFs"); 
const cartManagerFs = new CartManagerFs();

router.get("/", async (req, res) => {

try {

const carts = await cartManagerFs.getCarts();

res.json({ status: "success", data: carts });

} catch (error) {

res.status(500).json({ status: "error", message: "Internal Server Error" });

}

});

router.get("/:id", async (req, res) => {

try {

const id = Number(req.params.id);

const cart = await cartManagerFs.getCartById(id);

if (cart) {

res.json({ status: "success", data: cart });

} else {

res.status(404).json({ status: "error", message: "Cart not found" });

}

} catch (error) {

res.status(500).json({ status: "error", message: "Internal Server Error" });

}

});

router.post("/", async (req, res) => {

try {

const cart = await cartManagerFs.createCart(req.body);

res.status(201).json({ status: "success", data: cart });

} catch (error) {

res.status(500).json({ status: "error", message: "Internal Server Error" });

}

});

router.put("/:id", async (req, res) => {

try {

const id = Number(req.params.id);

const updatedCart = await cartManagerFs.updateCart(id, req.body);

if (updatedCart) {

res.json({ status: "success", data: updatedCart });

} else {

res.status(404).json({ status: "error", message: "Cart not found" });

}

} catch (error) {

res.status(500).json({ status: "error", message: "Internal Server Error" });

}

});

router.delete("/:id", async (req, res) => {

try {

const id = Number(req.params.id);

const success = await cartManagerFs.deleteCart(id);

if (success) {

res.json({ status: "success", message: "Cart deleted successfully" });

} else {

res.status(404).json({ status: "error", message: "Cart not found" });

}

} catch (error) {

res.status(500).json({ status: "error", message: "Internal Server Error" });

}

});

module.exports = router;
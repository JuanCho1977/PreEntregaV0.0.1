//CartManagerFs.js

const fs = require('fs');
const path ='./dbproduct/dbproduct.json';

class CartManager {
    constructor() {
        this.cart = [];
    }

    async addProductToCart(productId) {
        try {
            const productPath = path.join(__dirname, 'dbproducts', `${productId}.json`);
            if (fs.existsSync(productPath)) {
                const product = JSON.parse(await fs.promises.readFile(productPath, 'utf-8'));
                this.cart.push(product);
                return product;
            } else {
                throw new Error('Producto no encontrado');
            }
        } catch (error) {
            return { status: "error", message: error.message };
        }
    }

    async getCart() {
        return this.cart;
    }

    async removeProductFromCart(productId) {
        try {
            const index = this.cart.findIndex(product => product.id === productId);
            if (index !== -1) {
                this.cart.splice(index, 1);
                return { status: "success", message: "Product removed from cart" };
            } else {
                throw new Error('Product not in cart');
            }
        } catch (error) {
            return { status: "error", message: error.message };
        }
    }
}

module.exports = CartManager;

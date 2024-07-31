//productManagerFs.js

const fs = require('fs');
const path = './dbproduct/dbproduct.json'

class productManagerFs {
  constructor() {
    
    this.products = {};
  }

  async getProductos() {
    try {
      const productoJson = await fs.promises.readdir(path.join(__dirname, 'dbproducts'));
      return productoJson.map((productojv) => JSON.parse(fs.readFileSync(path.join(__dirname, 'dbproducts', productojv))));
    } catch (error) {
      return [];
    }
  }

  async getProduct(id) {
    try {
      const productoJson = await fs.promises.readFile(path.join(__dirname, 'dbproducts', `${id}.json`));
      return JSON.parse(productoJson);
    } catch (error) {
      return {};
    }
  }

  async createProduct(producto) {
    try {
      const id = Math.floor(Math.random() * 10000);
      await fs.promises.writeFile(path.join(__dirname, 'dbproducts', `${id}.json`), JSON.stringify(producto));
      return { id, ...producto };
    } catch (error) {
      return {};
    }
  }

  async updateClient(id, producto) {
    try {
      await fs.promises.writeFile(path.join(__dirname, 'dbproduct', `${id}.json`), JSON.stringify(producto));
      return producto;
    } catch (error) {
      return {};
    }
  }

  async deleteProducto(id) {
    try {
      await fs.promises.unlink(path.join(__dirname, 'dbproducto', `${id}.json`));
    } catch (error) {
      return {};
    }
  }

}
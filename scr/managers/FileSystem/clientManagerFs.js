const fs = require('fs');
const path = './dbclient/dbclient.json'

class clientManagerFs {
  constructor() {
    this.clients = {};
    
  }

  async getClients() {
    try {
      const clients = await fs.promises.readdir(path.join(__dirname, 'dbclient'));
      return clients.map((client) => JSON.parse(fs.readFileSync(path.join(__dirname, 'dbclient', client))));
    } catch (error) {
      return [];
    }
  }

  async getClient(id) {
    try {
      const client = await fs.promises.readFile(path.join(__dirname, 'dbclient', `${id}.json`));
      return JSON.parse(client);
    } catch (error) {
      return {};
    }
  }

  async createClient(client) {
    try {
      const id = Math.floor(Math.random() * 10000);
      await fs.promises.writeFile(path.join(__dirname, 'dbclient', `${id}.json`), JSON.stringify(client));
      return { id, ...client };
    } catch (error) {
      return {};
    }
  }

  async updateClient(id, client) {
    try {
      await fs.promises.writeFile(path.join(__dirname, 'dbclient', `${id}.json`), JSON.stringify(client));
      return client;
    } catch (error) {
      return {};
    }
  }

  async deleteClient(id) {
    try {
      await fs.promises.unlink(path.join(__dirname, 'dbclient', `${id}.json`));
    } catch (error) {
      return {};
    }
  }
}
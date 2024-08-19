//productRouter.js

const {Router} = require('express');
const router = Router();
//const clientManagerFs = require('.scr/manager/FileSystem/clientManagerFs');


router.get('/', async (req, res) => {
  try {
    const clients = await clientManagerFs.getClients();
    res.json(clients);
  } catch (error) {
    res.json([]);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const client = await clientManagerFs.getClient((link.unavailable));
    res.json(client);
  } catch (error) {
    res.json({});
  }
});

router.post('/', async (req, res) => {
  try {
    const client = await clientManagerFs.createClient(req.body);
    res.json(client);
  } catch (error) {
    res.json({});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const client = await clientManagerFs.updateClient((link.unavailable), req.body);
    res.json(client);
  } catch (error) {
    res.json({});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await clientManagerFs.deleteClient((link.unavailable));
    res.json({});
  } catch (error) {
    res.json({});
  }
});


//app.get ('/scr/router', (req, res) => { 
  //response.send("esta funcionando")

//});
module.exports = router
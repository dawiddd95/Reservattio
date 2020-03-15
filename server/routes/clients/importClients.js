import express from 'express';
import jwtDecode from 'jwt-decode';

import models from '../../db/models';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.post('/api/user/clients/import', checkToken, async (req, res) => { 
   const {importedClients} = req.body;
   const {token} = req.cookies;

   const decodedToken = jwtDecode(token);
   const {id} = decodedToken;

   const clientsArray = importedClients.map(client => {
      client.accountId = id
      return client
   })

   if(importedClients.length < 1) res.json({data: null, error: 'Data not imported. File is empty.'})

   try {
      const imported = await models.Client.bulkCreate(clientsArray)
      res.json({data: imported, error: null})
   } catch(err) {
      res.status(400).send(err)
   }
})

export default router;
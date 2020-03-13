import express from 'express';

import models from '../../db/models';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.get('/api/user/clients/:id', checkToken, async (req, res) => { 
   const {id} = req.params;

   const client = await models.Client.findOne({ where: {id} })
   if(!client) return res.status(404).send('Sorry, resource does not exist')

   res.json({client})
})

export default router;
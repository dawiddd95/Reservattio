import express from 'express';

import models from '../../db/models';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.get('/api/user/services/:id', checkToken, async (req, res) => { 
   const {id} = req.params;

   const service = await models.Service.findOne({ where: {id} })
   if(!service) return res.status(404).send('Sorry, resource does not exist')

   res.json({service})
})

export default router;
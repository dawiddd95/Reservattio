import express from 'express';

import models from '../../db/models';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.post('/api/user/services/delete', checkToken, async (req, res) => { 
   const {id} = req.body;

   try {
      await models.Service.destroy({ where: {id} })
      res.json({success: true, error: null})
   } catch(err) {
      res.status(400).send(err)
   }
})

export default router;
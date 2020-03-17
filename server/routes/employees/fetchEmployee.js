import express from 'express';

import models from '../../db/models';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.get('/api/user/employees/:id', checkToken, async (req, res) => { 
   const {id} = req.params;

   const employee = await models.Employee.findOne({ where: {id} })
   if(!employee) return res.status(404).send('Sorry, resource does not exist')

   res.json({employee})
})

export default router;
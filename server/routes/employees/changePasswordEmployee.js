import express from 'express';
import bcrypt from 'bcrypt';

import models from '../../db/models';
import {passwordValidation} from '../../services/validations/password';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.post('/api/user/employees/:id/change-password', passwordValidation, checkToken, async (req, res) => { 
   const {id} = req.params;
   const {password} = req.body;
   const hashPassword = await bcrypt.hash(password, 10);

   try {
      await models.Employee.update({password: hashPassword}, {where: {id} })
   } catch(err) {
      res.status(400).send(err)
   }
   
   res.json({success: true})
})

export default router;
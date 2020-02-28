import express from 'express';
import {validationResult} from 'express-validator';
import uuid from 'uuid';
import bcrypt from 'bcrypt';

import models from '../../db/models';
import {createAccountValidation} from '../../services/validations/createAccount';

const router = express.Router();

router.post('/api/auth/signup', createAccountValidation , async (req, res) => { 
   const {name, surname, email, password} = req.body;

   const id = uuid.v4();
   const key = uuid.v4();
   const code = uuid.v4();
   const hashPassword = await bcrypt.hash(password, 10);

   const account = await models.Account.findOne({where: {email}})
   if(account) return res.json({success: false, error: 'Email is already in usage', successText: ''})

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array());


   try {
      const accountData = await models.Account.create({ email, password: hashPassword, key, code})
      const {id} = accountData.dataValues

      await models.Employee.create({
         name, 
         surname, 
         accountId: id, 
         phone: '', 
         email, 
         username: email, 
         password: hashPassword, 
         active: true,
         type: 'manager',
         roles: ['all']
      })

      res.json({success: true, error: null, successText: 'Sign up success. You can now Login to your account'})
   } catch(err) {
      res.status(400).send(err)
   }
})

export default router;
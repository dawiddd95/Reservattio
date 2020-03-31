import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import models from '../../db/models';

const router = express.Router();


router.post('/api/auth/login', async (req, res) => {
   const {email, password} = req.body;

   const account = await models.Account.findOne({where: {email} });
   if(!account) return res.json({success: false, error: 'Wrong user or password', token: null});

   const passwordIsValid = await bcrypt.compare(password, account.password);
   if(!passwordIsValid) return res.json({success: false, error: 'Wrong user or password', token: null}); 

   const token = jwt.sign({
      id: account.id,
      name: account.name,
      surname: account.surname,
      email: account.email, 
      roles: ['all']
   }, process.env.TOKEN_SECRET);

   res.cookie('token', token, { httpOnly: true }).json({success: true, error: ''}).status(200);
})


export default router;
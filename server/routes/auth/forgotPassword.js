import express from 'express';
import {validationResult} from 'express-validator';
import uuid from 'uuid';

import models from '../../db/models';
import {forgotPasswordValidation} from '../../services/validations/forgotPassword';

const router = express.Router();

router.post('/api/auth/forgot-password', forgotPasswordValidation, async (req, res) => {
   const {email} = req.body;
   const host = 'http://localhost:5000' ? 'http://localhost:3000' : 	req.get('host');

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array()); 

   const account = await models.Account.findOne({where: {email} });
   if (!account) return res.json({success: false, error: `Sorry, we don't recognize your credentials`, successText: ''})

   const newKey = uuid.v4()
   const link = `${host}/auth/verify?code=${account.code}&key=${newKey}`;

   res.json({success: false, error: `Sorry, service is currently unavailable`, successText: ''})
})

export default router;
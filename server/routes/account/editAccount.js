import express from 'express';
import {validationResult} from 'express-validator';

import models from '../../db/models';
import {editAccountValidation} from '../../services/validations/account';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.post('/api/user/profile/:id/edit', editAccountValidation, checkToken, async (req, res) => { 
   const {id} = req.params;
   const {name, surname, email} = req.body;

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array());

   const accountUpdate = await models.Account.update({name, surname, email}, {where: {id} })
   if(!accountUpdate) return res.status(404).send('Sorry, resource does not exist')

   const account = await models.Account.findOne({ where: {id}})
   if(!account) return res.status(404).send('Sorry, resource does not exist')

   res.json({data: account})
})

export default router;
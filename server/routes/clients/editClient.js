import express from 'express';
import {validationResult} from 'express-validator';

import models from '../../db/models';
import {clientValidation} from '../../services/validations/client';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.post('/api/user/clients/:id/edit', clientValidation, checkToken, async (req, res) => { 
   const {id} = req.params;
   const {name, surname, phone, note} = req.body;

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array());

   const clientUpdate = await models.Client.update({name, surname, phone, note}, {where: {id} })
   if(!clientUpdate) return res.status(404).send('Sorry, resource does not exist')

   const client = await models.Client.findOne({ where: {id}})
   if(!client) return res.status(404).send('Sorry, resource does not exist')

   res.json({data: client})
})

export default router;
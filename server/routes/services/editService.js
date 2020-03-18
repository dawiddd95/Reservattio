import express from 'express';
import {validationResult} from 'express-validator';

import models from '../../db/models';
import {serviceValidation} from '../../services/validations/service';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.post('/api/user/services/:id/edit', serviceValidation, checkToken, async (req, res) => { 
   const {id} = req.params;
   const {name, price, note} = req.body;

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array());

   const serviceUpdate = await models.Service.update({name, price, note}, {where: {id} })
   if(!serviceUpdate) return res.status(404).send('Sorry, resource does not exist')

   const service = await models.Service.findOne({ where: {id}})
   if(!service) return res.status(404).send('Sorry, resource does not exist')

   res.json({data: service})
})

export default router;
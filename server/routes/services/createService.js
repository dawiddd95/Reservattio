import express from 'express';
import {validationResult} from 'express-validator';
import jwtDecode from 'jwt-decode';

import models from '../../db/models';
import {serviceValidation} from '../../services/validations/service';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.post('/api/user/services/new', serviceValidation, checkToken, async (req, res) => { 
   const {token} = req.cookies;
   const {name, price, note} = req.body;

   const decodedToken = jwtDecode(token);
   const {id} = decodedToken;

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array());

   try {
      const service = await models.Service.create({ accountId: id, name, price, note })

      res.json({data: service, error: null})
   } catch(err) {
      res.status(400).send(err)
   }
})

export default router;
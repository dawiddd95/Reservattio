import express from 'express';
import {validationResult} from 'express-validator';
import jwtDecode from 'jwt-decode';

import models from '../../db/models';
import {createClientValidation} from '../../services/validations/createClient';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.post('/api/user/clients/new', createClientValidation, checkToken, async (req, res) => { 
   const {token} = req.cookies;
   const {name, surname, phone, note} = req.body;

   const decodedToken = jwtDecode(token);
   const {id} = decodedToken;

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array());

   try {
      await models.Client.create({ accountId: id, name, surname, phone, note })

      res.json({success: true, error: null})
   } catch(err) {
      res.status(400).send(err)
   }
})

export default router;
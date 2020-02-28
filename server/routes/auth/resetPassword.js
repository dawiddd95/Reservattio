import express from 'express'
import {validationResult} from 'express-validator'
import bcrypt from 'bcrypt'
import uuid from 'uuid'

import models from '../../db/models'
import {forgotPasswordValidation} from '../../services/validations/forgotPassword'

const router = express.Router();

// GET
router.get('/api/auth/reset-password', async (req, res) => {
   const {code, key} = req.headers;
   const isValid = await models.User.findOne({ where: { code, key }})
   
   if(isValid === null) res.json({success: false})
   else res.json({success: true})      
})

// POST
router.post('/api/auth/reset-password', forgotPasswordValidation, async (req, res) => {
   const {password, code} = req.body
   const newKey = uuid.v4()
   const hash = bcrypt.hashSync(password, 10)

   const errors = validationResult(req)
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array());
   
   const isExist = await models.User.findOne({ where: { code }})
   if (isExist === null) res.json({success: false})
   
   try {
      await models.User.update({password: hash, key: newKey}, { where: {code} })
      res.json({success: true})
   } catch(err) {
      res.status(400).send(err)
   }
})

module.exports = router
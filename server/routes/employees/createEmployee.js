import express from 'express';
import {validationResult} from 'express-validator';
import bcrypt from 'bcrypt';
import jwtDecode from 'jwt-decode';

import models from '../../db/models';
import {employeeValidation} from '../../services/validations/employee';
import { noSubselectionAllowedMessage } from 'graphql/validation/rules/ScalarLeafs';

const router = express.Router();

router.post('/api/user/employees/new', employeeValidation , async (req, res) => { 
   const {token} = req.cookies;
   const {name, surname, phone, email, password, roles, note, enable} = req.body;

   const decodedToken = jwtDecode(token);
   const {id} = decodedToken;

   const hashPassword = await bcrypt.hash(password, 10);

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array());

   const employee = await models.Employee.findOne({where: {email}})
   if(employee) return res.json({error: 'Email is already in usage', data: null})


   try {
      const employee = await models.Employee.create({ 
         accountId: id, 
         name, 
         surname, 
         phone, 
         email, 
         password: hashPassword, 
         roles, 
         note, 
         enable 
      })

      res.json({ 
         error: null,
         data: {
            id: employee.dataValues.id, 
            name, 
            surname, 
            phone, 
            email, 
            roles, 
            note, 
            enable, 
            createdAt: employee.dataValues.createdAt, 
            updatedAt: employee.dataValues.updatedAt 
         }
      })
   } catch(err) {
      res.status(400).send(err)
   }
})

export default router;
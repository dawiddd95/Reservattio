import express from 'express';
import {validationResult} from 'express-validator';

import models from '../../db/models';
import {editEmployeeValidation} from '../../services/validations/employee';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.post('/api/user/employees/:id/edit', editEmployeeValidation, checkToken, async (req, res) => { 
   const {id} = req.params;
   const {name, surname, phone, email, roles, note, enable} = req.body;

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array());

   const employeeUpdate = await models.Employee.update({name, surname, phone, email, roles, note, enable}, {where: {id} })
   if(!employeeUpdate) return res.status(404).send('Sorry, resource does not exist')

   const employee = await models.Employee.findOne({where: {id}})
   if(!employee) return res.status(404).send('Sorry, resource does not exist')

   res.json({data: employee})
})

export default router;
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import models from '../../db/models';

const router = express.Router();

router.post('/api/auth/login-employee', async (req, res) => {
   const {email, password} = req.body;

   const employee = await models.Employee.findOne({where: {email} });
   if(!employee) return res.json({success: false, err: 'Wrong user or password', id: ''});

   const passwordIsValid = await bcrypt.compare(password, employee.password);
   if(!passwordIsValid) return res.json({success: false, err: 'Wrong user or password', id: ''});

   const token = jwt.sign({id: employee.id, roles: employee.roles}, process.env.TOKEN_SECRET);

   res.header('token', token).json({success: true, err: '', token});
})


export default router;
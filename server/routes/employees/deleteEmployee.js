import express from 'express';
import Sequelize from 'sequelize';

import models from '../../db/models';
import checkToken from '../../services/checkToken';

const router = express.Router();
const Op = Sequelize.Op;

router.post('/api/user/employees/delete', checkToken, async (req, res) => { 
   const {id} = req.body;

   const reservation = await models.Reservation.findOne({ where: {employeeId: id} })

   if(reservation) res.json({
      success: false, 
      error: 'Employee has reservations assigned to him. Please first delete all reservations assign to this employee.'
   })

   try {
      models.Employee.destroy({where: {
         id: {
            [Op.in]: id
         }
      }})
      res.json({success: true, error: null})
   } catch(err) {
      res.status(400).send(err)
   }
})

export default router;
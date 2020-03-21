import express from 'express';
import Sequelize from 'sequelize';

import models from '../../db/models';
import checkToken from '../../services/checkToken';

const router = express.Router();
const Op = Sequelize.Op;

router.post('/api/user/reservations/search', checkToken, async (req, res) => { 
   const {id, date, room, status, clientId, employeeId, serviceId} = req.body;

   const searchResult = await models.Reservation.findAll({ where: {
      id: id === '' 
         ?  {
               [Op.ne]: null
            } 
         :  id,
      arrival: date === undefined
         ?  {
               [Op.ne]: null
            }
         :  {
               [Op.between]: [ date[0], date[1] ], 
            },
      room: room === ''
         ?  {
               [Op.ne]: null
            }
         :  {
               [Op.iLike]: '%' + room + '%'
            },
      status: status === undefined
         ?  {
               [Op.ne]: null
            }
         :  status,
      clientId: clientId === undefined
         ?  {
               [Op.ne]: null
            } 
         :  clientId,
      employeeId: employeeId === undefined
         ?  {
               [Op.ne]: null
            } 
         :  employeeId,
      serviceId: serviceId === undefined
         ?  {
               [Op.ne]: null
            } 
         :  serviceId,
   }})

   res.json({data: searchResult})
})

export default router;
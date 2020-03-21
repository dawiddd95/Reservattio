import express from 'express';
import {validationResult} from 'express-validator';

import models from '../../db/models';
import {reservationValidation} from '../../services/validations/reservation';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.post('/api/user/reservations/:id/edit', reservationValidation, checkToken, async (req, res) => { 
   const {id} = req.params;
   const {date, room, status, clientId, employeeId, serviceId, note, cancellationNote} = req.body;
   const [arrival, departure] = date;

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array());

   const reservationUpdate = await models.Reservation.update({
      arrival,
      departure, 
      room, 
      status, 
      clientId, 
      employeeId, 
      serviceId, 
      note, 
      cancellationNote
   }, {
      where: {id} 
   })

   if(!reservationUpdate) return res.status(404).send('Sorry, resource does not exist')

   const reservation = await models.Reservation.findOne({where: {id}})
   if(!reservation) return res.status(404).send('Sorry, resource does not exist')

   res.json({data: reservation})
})

export default router;
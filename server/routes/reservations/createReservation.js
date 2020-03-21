import express from 'express';
import {validationResult} from 'express-validator';
import jwtDecode from 'jwt-decode';

import models from '../../db/models';
import {reservationValidation} from '../../services/validations/reservation';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.post('/api/user/reservations/new', reservationValidation, checkToken, async (req, res) => { 
   const {token} = req.cookies;
   const {date, room, status, clientId, employeeId, serviceId, note, cancellationNote} = req.body;
   const [arrival, departure] = date;

   const decodedToken = jwtDecode(token);
   const {id} = decodedToken;

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array());

   try {
      const reservation = await models.Reservation.create({
         accountId: id,
         arrival,
         departure, 
         room,
         status,
         clientId,
         employeeId,
         serviceId,
         note,
         cancellationNote,
      })

      res.json({data: reservation, success: true, error: null})
   } catch(err) {
      res.status(400).send(err)
   }
})

export default router;
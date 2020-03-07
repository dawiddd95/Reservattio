import express from 'express';
import {validationResult} from 'express-validator';
import jwtDecode from 'jwt-decode';

import models from '../../db/models';
import {createReservationValidation} from '../../services/validations/createReservation';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.post('/api/user/reservations/new', checkToken, async (req, res) => { 
   const {token} = req.cookies;
   const {date, startTime, endTime, room, status, clientId, employeeId, serviceId, note, cancellationNote} = req.body;

   const decodedToken = jwtDecode(token);
   const {id} = decodedToken;

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array());

   try {
      await models.Reservation.create({
         accountId: id,
         date, 
         startTime, 
         endTime,
         room,
         status,
         clientId,
         employeeId,
         serviceId,
         note,
         cancellationNote,
      })

      res.json({success: true, error: null, successText: 'Sign up success. You can now Login to your account'})
   } catch(err) {
      res.status(400).send(err)
   }
})

export default router;
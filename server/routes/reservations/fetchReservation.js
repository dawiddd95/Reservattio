import express from 'express';

import models from '../../db/models';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.get('/api/user/reservations/:id', checkToken, async (req, res) => { 
   const {id} = req.params;

   const reservation = await models.Reservation.findOne({ where: {id} })
   if(!reservation) return res.status(404).send('Sorry, resource does not exist')

   res.json({reservation})
})

export default router;
import express from 'express';
import jwtDecode from 'jwt-decode';

import models from '../../db/models';
import checkToken from '../../services/checkToken';

const router = express.Router();


router.get('/api/account/logged-account', checkToken, async (req, res) => {
   const {token} = req.cookies;
   const decodedToken = jwtDecode(token);

   const {id, name, surname, email, roles} = decodedToken;

   const account = await models.Account.findAll({
      include: [
         {model: models.Service},
         {model: models.Employee},
         {model: models.Reservation},
         {model: models.Client}
      ],
      where: {id}
   })
   
   res.json({fetched: account, user: {id, name, surname, email, roles}})
})


export default router;
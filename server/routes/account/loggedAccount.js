import express from 'express';
import jwtDecode from 'jwt-decode';
import Sequelize from 'sequelize';

import models from '../../db/models';
import checkToken from '../../services/checkToken';

const router = express.Router();


router.get('/api/account/logged-account', checkToken, async (req, res) => {
   const {token} = req.cookies;
   const decodedToken = jwtDecode(token);
   const {id} = decodedToken;

   const account = await models.Account.findAll({
      include: [
         {model: models.Manager},
         {model: models.Service},
         {model: models.Employee},
         {model: models.Reservation},
         {model: models.Client}
      ],
      where: {id}
   })
   
   res.json({fetched: account})
})


export default router;
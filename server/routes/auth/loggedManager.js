import express from 'express';
import jwtDecode from 'jwt-decode';

import models from '../../db/models';
import checkToken from '../../services/checkToken';

const router = express.Router();

router.get('/api/user/loggedUser', checkToken, (req, res) => {
   const authorization = req.headers.authorization; 
   const split = authorization.split(' ');
   const token = split[1];
   const decodedToken = jwtDecode(token);
   const id = decodedToken.id;

   models.Account.findOne({where: {id}}, (err, data) => res.json({id: data.id}));
})

export default router;
import express from 'express';
import Sequelize from 'sequelize';

import models from '../../db/models';
import checkToken from '../../services/checkToken';

const router = express.Router();
const Op = Sequelize.Op;

router.post('/api/user/clients/search', checkToken, async (req, res) => { 
   const {id, name, surname, phone} = req.body;

   const searchResult = await models.Client.findAll({ where: {
      id: id === '' 
         ?  {
               [Op.ne]: null
            } 
         :  id,
      name: name === ''
         ?  {
               [Op.ne]: null
            }
         :  {
               [Op.iLike]: '%' + name + '%'
            },
      surname: surname === ''
         ?  {
               [Op.ne]: null
            }
         :  {
               [Op.iLike]: '%' + surname + '%'
            },
      phone: phone === ''
         ?  {
               [Op.ne]: null
            }
         :  {
               [Op.iLike]: '%' + phone + '%'
            },
   }})

   res.json({data: searchResult})
})

export default router;
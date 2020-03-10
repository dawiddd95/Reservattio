import express from 'express';
import Sequelize from 'sequelize';

import models from '../../db/models';
import checkToken from '../../services/checkToken';

const router = express.Router();
const Op = Sequelize.Op;

router.post('/api/user/services/search', checkToken, async (req, res) => { 
   const {id, name, priceFrom, priceTo} = req.body;

   const searchFromPrice = priceFrom === '' ? 0 : priceFrom;
   const searchToPrice = priceTo === '' ? 2147483646 : priceTo;

   const searchResult = await models.Service.findAll({ where: {
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
      price: {
         [Op.between]: [searchFromPrice, searchToPrice] 
      }  
   }})

   res.json({data: searchResult})
})

export default router;
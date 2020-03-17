import express from 'express';
import Sequelize from 'sequelize';

import models from '../../db/models';
import checkToken from '../../services/checkToken';

const router = express.Router();
const Op = Sequelize.Op;

router.post('/api/user/employees/search', checkToken, async (req, res) => { 
   const {id, name, surname, phone, email, enable} = req.body;

   const searchResult = await models.Employee.findAll({ where: {
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
      email: email === ''
         ?  {
               [Op.ne]: null
            }
         :  {
               [Op.iLike]: '%' + email + '%'
            },
      enable: enable === 'all'
         ?  {
               [Op.ne]: null
            }
         :  enable
   }})

   res.json({data: searchResult})
})

export default router;
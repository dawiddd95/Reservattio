import {check} from 'express-validator';

export const serviceValidation = [
   check('name')
      .not().isEmpty()
      .isString()
      .withMessage('Name is required')
      .escape(),
   check('price')
      .not().isEmpty()
      .withMessage('Price is required')
      .isNumeric()
      .escape(),
   check('note')
      .optional()
      .escape(),
]
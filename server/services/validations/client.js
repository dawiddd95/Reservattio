import {check} from 'express-validator';

export const clientValidation = [
   check('name')
      .not().isEmpty()
      .isString()
      .isLength({min: 3})
      .withMessage('Name is required')
      .escape(),
   check('surname')
      .not().isEmpty()
      .isString()
      .isLength({min: 3})
      .withMessage('Surname is required')
      .escape(),
   check('phone')
      .optional()
      .escape(),
   check('note')
      .optional()
      .escape(),
]
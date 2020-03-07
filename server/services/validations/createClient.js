import {check} from 'express-validator';

export const createClientValidation = [
   check('name')
      .not().isEmpty()
      .isString()
      .withMessage('Name is required')
      .escape(),
   check('surname')
      .not().isEmpty()
      .isString()
      .withMessage('Surname is required')
      .escape(),
   check('phone')
      .optional()
      .escape(),
   check('note')
      .optional()
      .escape(),
]
import {check} from 'express-validator';

export const createEmployeeValidation = [
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
   check('email', 'Must be correct email format')
      .not().isEmpty()
      .isEmail().normalizeEmail()
      .escape(),
   check('note')
      .optional()
      .escape(),
   check('password', 'Must contain: minimum 8 characters, one numeric and one special character')
      .not().isEmpty()
      .isLength({min: 8})
      .matches(/^(?=.*[A-Z])/)
      .matches(/^(?=.*[0-9])/)
      .matches(/^(?=.*[!@#\$%\^&])/)
      .escape(),
   check('confirmPassword', 'Must match password')
      .not().isEmpty()
      .escape()
      .custom((value, {req}) => (value === req.body.password)),  
   check('enable')
      .isBoolean()
      .escape(),
]

export const editEmployeeValidation = [
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
   check('email', 'Must be correct email format')
      .not().isEmpty()
      .isEmail().normalizeEmail()
      .escape(),
   check('note')
      .optional()
      .escape(),
   check('enable')
      .isBoolean()
      .escape(),
]
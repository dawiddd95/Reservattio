import {check} from 'express-validator';

export const createAccountValidation = [
   check('email', 'Must be correct email format')
      .not().isEmpty()
      .isEmail().normalizeEmail()
      .escape(),
   check('password', 'Must contain: minimum 8 characters, one numeric and one special character')
      .not().isEmpty()
      .isLength({min: 8})
      .matches(/^(?=.*[A-Z])/)
      .matches(/^(?=.*[0-9])/)
      .matches(/^(?=.*[!@#\$%\^&])/)
      .escape(),
]
import {check} from 'express-validator';

export const passwordValidation = [
   check('password', 'Must contain: minimum 8 characters, one numeric and one special character')
      .not().isEmpty()
      .isLength({min: 8})
      .matches(/^(?=.*[A-Z])/)
      .matches(/^(?=.*[0-9])/)
      .matches(/^(?=.*[!@#\$%\^&])/)
      .escape(),
   check('confirmPassword', 'Must match password')
      .escape()
      .custom((value, {req}) => (value === req.body.password)),   
]
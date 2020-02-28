const {check} = require('express-validator');

export const forgotPasswordValidation = [
   check('email', 'Must be correct email format')
      .not().isEmpty()
      .isEmail().normalizeEmail()
      .escape(),
]
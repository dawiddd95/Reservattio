import {check} from 'express-validator';

export const reservationValidation = [
   check('clientId')
      .not().isEmpty()
      .isNumeric()
      .withMessage('Client is required')
      .escape(),
   check('room')
      .optional()
      .escape(),
   check('status')
      .not().isEmpty()
      .isString()
      .withMessage('Status is required')
      .escape(),
   check('employeeId')
      .not().isEmpty()
      .isNumeric()
      .withMessage('Employee is required')
      .escape(),
   check('serviceId')
      .not().isEmpty()
      .isNumeric()
      .withMessage('Service is required')
      .escape(),
   check('note')
      .optional()
      .escape(),
   check('cancellationNote')
      .optional()
      .escape(),
]
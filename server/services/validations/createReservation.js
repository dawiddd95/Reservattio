import {check} from 'express-validator';

export const createReservationValidation = [
   check('date')
      .not().isEmpty()
      .isArray()
      .withMessage('Date is required')
      .escape(),
   check('clientId')
      .not().isEmpty()
      .isString()
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
      .isString()
      .withMessage('Employee is required')
      .escape(),
   check('serviceId')
      .not().isEmpty()
      .isString()
      .withMessage('Service is required')
      .escape(),
   check('startTime')
      .not().isEmpty()
      .isString()
      .withMessage('Start time is required')
      .escape(),
   check('endTime')
      .not().isEmpty()
      .isString()
      .withMessage('End time is required')
      .escape(),
   check('note')
      .optional()
      .escape(),
   check('cancellationNote')
      .optional()
      .escape(),
]
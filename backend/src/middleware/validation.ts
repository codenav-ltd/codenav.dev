import { body, query, param, ValidationChain } from 'express-validator';

export const contactValidationRules = (): ValidationChain[] => {
  return [
    body('name')
      .trim()
      .notEmpty().withMessage('Name is required')
      .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters')
      .matches(/^[a-zA-Z\s]+$/).withMessage('Name can only contain letters and spaces'),
    
    body('email')
      .trim()
      .notEmpty().withMessage('Email is required')
      .isEmail().withMessage('Please provide a valid email address')
      .normalizeEmail(),
    
    body('subject')
      .trim()
      .notEmpty().withMessage('Subject is required')
      .isLength({ min: 3, max: 200 }).withMessage('Subject must be between 3 and 200 characters'),
    
    body('message')
      .trim()
      .notEmpty().withMessage('Message is required')
      .isLength({ min: 10, max: 2000 }).withMessage('Message must be between 10 and 2000 characters')
  ];
};

export const paginationValidationRules = (): ValidationChain[] => {
  return [
    query('limit')
      .optional()
      .isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100'),
    
    query('offset')
      .optional()
      .isInt({ min: 0 }).withMessage('Offset must be a positive integer')
  ];
};

export const idValidationRules = (): ValidationChain[] => {
  return [
    param('id')
      .isInt({ min: 1 }).withMessage('Invalid contact ID')
  ];
};

export const statusValidationRules = (): ValidationChain[] => {
  return [
    body('status')
      .notEmpty().withMessage('Status is required')
      .isIn(['pending', 'read', 'responded', 'archived']).withMessage('Invalid status value')
  ];
};
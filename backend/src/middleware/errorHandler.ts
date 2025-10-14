import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { ApiResponse } from '../types';

interface CustomError extends Error {
  status?: number;
  code?: string;
  errors?: any[];
}

export const errorHandler: ErrorRequestHandler = (
  err: CustomError,
  _req: Request,
  res: Response<ApiResponse>,
  _next: NextFunction
): void => {
  console.error('Error:', err.stack);

  if (err.name === 'ValidationError') {
    res.status(400).json({
      success: false,
      message: 'Validation Error',
      errors: err.errors
    });
    return;
  }

  if (err.code === 'ER_DUP_ENTRY') {
    res.status(409).json({
      success: false,
      message: 'Duplicate entry detected'
    });
    return;
  }

  if (err.code === 'ECONNREFUSED') {
    res.status(503).json({
      success: false,
      message: 'Database connection failed'
    });
    return;
  }

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { error: err.stack })
  });
};

export const notFoundHandler = (req: Request, res: Response<ApiResponse>): void => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
};
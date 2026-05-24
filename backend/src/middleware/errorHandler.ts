import type { Request, Response, NextFunction } from "express";
import { logger } from "@/utils/logger";

/**
 * Custom application error.
 * Use `throw new AppError("...", 404)` from controllers
 * and this handler will format the response correctly.
 */
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Global error handler.
 * MUST be registered LAST in the Express middleware chain.
 */
export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
    return;
  }

  logger.error("Unhandled error:", err);

  res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};

/**
 * 404 handler for unmatched routes.
 */
export const notFoundHandler = (req: Request, _res: Response, next: NextFunction): void => {
  next(new AppError(`Route ${req.method} ${req.originalUrl} not found`, 404));
};
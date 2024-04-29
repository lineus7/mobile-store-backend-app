import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const errorHandler = (
  error: ErrorRequestHandler,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log(error);
  let statusCode = 500;
  let message = "Internal Server Error";

  res.status(statusCode).json({ error: message });
};

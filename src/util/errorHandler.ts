import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const errorHandler = (
  err: ErrorRequestHandler,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log(err);
  let statusCode = 500;
  let message: string = "Internal Server Error";
  let errors: any = {};

  if (err instanceof Error) {
    if (err instanceof ZodError) {
      message = "BAD REQUEST";
      statusCode = 400;
      err.issues.forEach((el) => {
        const path = el.path[0] as string;
        errors[path] = el.message;
      });
    }

    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        message = "BAD REQUEST";
        statusCode = 400;
        errors.email = "Email must be unique";
      }
    }

    if (err.message === "Missing Input Data!") message = err.message;
  }

  const body: any = { message };
  if (Object.keys(errors).length !== 0) body.errors = errors;
  res.status(statusCode).json(body);
};
